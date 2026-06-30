/**
 * Downloads GTA VI images into public/images/gta/
 * Tries official Rockstar CDN paths first, then falls back to scraping
 * the screenshots page for any JPGs we can find.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const OUT_DIR = path.join(__dirname, '..', 'public', 'images', 'gta');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36';

function fetchUrl(url, options = {}, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 5) return reject(new Error('Too many redirects'));
    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(
      url,
      {
        headers: {
          'User-Agent': UA,
          Accept: options.accept || '*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          Referer: 'https://www.rockstargames.com/VI/',
          ...options.headers,
        },
      },
      (res) => {
        if (
          res.statusCode &&
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          const next = new URL(res.headers.location, url).toString();
          res.resume();
          return fetchUrl(next, options, redirects + 1).then(resolve, reject);
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(
            new Error(`Request failed ${res.statusCode} for ${url}`),
          );
        }
        if (options.binary) {
          const chunks = [];
          res.on('data', (c) => chunks.push(c));
          res.on('end', () => resolve(Buffer.concat(chunks)));
        } else {
          let body = '';
          res.setEncoding('utf8');
          res.on('data', (c) => (body += c));
          res.on('end', () => resolve(body));
        }
      },
    );
    req.on('error', reject);
    req.setTimeout(20000, () => req.destroy(new Error('Timeout')));
  });
}

async function saveImage(url, filename) {
  try {
    const buf = await fetchUrl(url, { binary: true, accept: 'image/*' });
    if (!buf || buf.length < 5000) {
      throw new Error(`Suspiciously small (${buf.length} bytes)`);
    }
    fs.writeFileSync(path.join(OUT_DIR, filename), buf);
    console.log(`  ✓ ${filename}  (${(buf.length / 1024).toFixed(1)} KB)`);
    return true;
  } catch (e) {
    console.log(`  ✗ ${filename}  ${e.message}`);
    return false;
  }
}

async function tryDirectScreenshots() {
  console.log('\n[1/3] Trying official Rockstar screenshot URLs...');
  const candidatePatterns = [
    (n) => `https://www.rockstargames.com/VI/img/pages/screenshots/${n}.jpg`,
    (n) => `https://www.rockstargames.com/VI/img/pages/screenshots/screenshot-${n}.jpg`,
    (n) => `https://www.rockstargames.com/VI/img/pages/screenshots/${n}.webp`,
    (n) => `https://www.rockstargames.com/VI/img/pages/screenshots/screen_${n}.jpg`,
  ];

  const downloaded = [];
  for (let i = 1; i <= 6; i++) {
    const n = String(i).padStart(3, '0');
    let ok = false;
    for (const pat of candidatePatterns) {
      const url = pat(n);
      if (await saveImage(url, `screenshot-${i}.jpg`)) {
        downloaded.push(`screenshot-${i}.jpg`);
        ok = true;
        break;
      }
    }
    if (!ok) {
      console.log(`  → no direct URL for screenshot ${i}`);
    }
  }
  return downloaded;
}

async function tryScrapeScreenshotsPage() {
  console.log('\n[2/3] Scraping rockstargames.com/VI/media/screenshots ...');
  const pages = [
    'https://www.rockstargames.com/VI/media/screenshots',
    'https://www.rockstargames.com/VI/media',
    'https://www.rockstargames.com/VI/',
  ];

  const seen = new Set();
  for (const pageUrl of pages) {
    try {
      const html = await fetchUrl(pageUrl, { accept: 'text/html' });
      const matches = html.matchAll(
        /https?:\/\/[^"'\s)]+?\.(?:jpg|jpeg|png|webp)/gi,
      );
      for (const m of matches) {
        const u = m[0];
        if (
          u.includes('screen') ||
          u.includes('VI/img/pages') ||
          u.includes('media-assets') ||
          u.includes('cloudfront') ||
          u.includes('rockstargames.com')
        ) {
          seen.add(u);
        }
      }
    } catch (e) {
      console.log(`  ! could not scrape ${pageUrl}: ${e.message}`);
    }
  }

  const candidates = [...seen].filter(
    (u) => !u.includes('logo') && !u.includes('icon'),
  );
  console.log(`  → found ${candidates.length} image candidates`);

  const downloaded = [];
  let n = 1;
  for (const u of candidates) {
    if (downloaded.length >= 6) break;
    const fname = `screenshot-${n}.jpg`;
    const fullPath = path.join(OUT_DIR, fname);
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).size > 5000) {
      n++;
      continue;
    }
    if (await saveImage(u, fname)) {
      downloaded.push(fname);
      n++;
    }
  }
  return downloaded;
}

async function tryFallbackUnsplash() {
  console.log('\n[3/3] Falling back to Unsplash Miami/Vice-City vibes...');
  const fallbacks = [
    'https://images.unsplash.com/photo-1593448872878-3793576dfd02?w=1600&q=80',
    'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1600&q=80',
    'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&q=80',
    'https://images.unsplash.com/photo-1535482400-9c149f47e7e0?w=1600&q=80',
    'https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=1600&q=80',
    'https://images.unsplash.com/photo-1554366347-897a5113f6ab?w=1600&q=80',
  ];
  const downloaded = [];
  for (let i = 0; i < fallbacks.length; i++) {
    const fname = `screenshot-${i + 1}.jpg`;
    const fullPath = path.join(OUT_DIR, fname);
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).size > 5000) continue;
    if (await saveImage(fallbacks[i], fname)) {
      downloaded.push(fname);
    }
  }
  return downloaded;
}

async function tryLogo() {
  console.log('\nDownloading GTA VI logo...');
  const urls = [
    'https://www.rockstargames.com/VI/img/global/logo.png',
    'https://www.rockstargames.com/VI/img/global/logo.svg',
    'https://www.rockstargames.com/VI/img/logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Grand_Theft_Auto_VI.png/640px-Grand_Theft_Auto_VI.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Grand_Theft_Auto_VI.png/640px-Grand_Theft_Auto_VI.png',
  ];
  for (const u of urls) {
    const ext = u.endsWith('.svg') ? 'svg' : 'png';
    if (await saveImage(u, `gta-vi-logo.${ext}`)) return true;
  }
  return false;
}

async function tryMap() {
  console.log('\nDownloading Leonida community map...');
  const pageUrls = [
    'https://www.gtabase.com/gta-6/map/',
    'https://gta.fandom.com/wiki/State_of_Leonida',
  ];
  const candidates = new Set();
  for (const pageUrl of pageUrls) {
    try {
      const html = await fetchUrl(pageUrl, { accept: 'text/html' });
      const matches = html.matchAll(
        /https?:\/\/[^"'\s)]+?\.(?:jpg|jpeg|png|webp)/gi,
      );
      for (const m of matches) {
        const u = m[0];
        if (
          /map|leonida|vice/i.test(u) &&
          !/icon|logo|avatar|favicon|thumbnail/i.test(u)
        ) {
          candidates.add(u);
        }
      }
    } catch (e) {
      console.log(`  ! ${pageUrl}: ${e.message}`);
    }
  }
  console.log(`  → ${candidates.size} map candidates`);
  for (const u of candidates) {
    if (await saveImage(u, 'leonida-map.jpg')) return true;
  }
  return false;
}

(async () => {
  console.log('═══════════════════════════════════════════════');
  console.log(' GTA VI image downloader');
  console.log('═══════════════════════════════════════════════');
  console.log(`Saving to: ${OUT_DIR}`);

  let shots = await tryDirectScreenshots();
  if (shots.length < 6) {
    const more = await tryScrapeScreenshotsPage();
    shots = [...new Set([...shots, ...more])];
  }
  if (shots.length < 6) {
    const more = await tryFallbackUnsplash();
    shots = [...new Set([...shots, ...more])];
  }

  await tryLogo();
  await tryMap();

  console.log('\n═══════════════════════════════════════════════');
  console.log(' Final inventory:');
  console.log('═══════════════════════════════════════════════');
  const files = fs.readdirSync(OUT_DIR);
  for (const f of files) {
    const s = fs.statSync(path.join(OUT_DIR, f));
    console.log(`  ${f}  (${(s.size / 1024).toFixed(1)} KB)`);
  }
  if (files.length === 0) {
    console.log('  (no images downloaded — check network)');
    process.exit(1);
  }
})();
