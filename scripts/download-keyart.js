/**
 * Pull two assets via the Wikipedia / Wikimedia REST API:
 *   - the official GTA VI key-art collage (cover art with character tiles)
 *   - the State of Leonida fan map
 *
 * The API queries the "Grand Theft Auto VI" article for ALL images on the
 * page, then picks the highest-resolution non-logo as the cover art.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const OUT_DIR = path.join(__dirname, '..', 'public', 'images', 'gta');
fs.mkdirSync(OUT_DIR, { recursive: true });

const WIKI_UA =
  'GTAVI-Guide/1.0 (https://gtavi.guide; contact@gtavi.guide) node-https/1';

function fetch(url, { binary = false } = {}, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 6) return reject(new Error('Too many redirects'));
    const req = https.get(
      url,
      {
        headers: { 'User-Agent': WIKI_UA, Accept: '*/*' },
      },
      (res) => {
        if (
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          res.resume();
          const next = new URL(res.headers.location, url).toString();
          return fetch(next, { binary }, redirects + 1).then(resolve, reject);
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode}`));
        }
        if (binary) {
          const chunks = [];
          res.on('data', (c) => chunks.push(c));
          res.on('end', () => resolve(Buffer.concat(chunks)));
        } else {
          let s = '';
          res.setEncoding('utf8');
          res.on('data', (c) => (s += c));
          res.on('end', () => resolve(s));
        }
      },
    );
    req.on('error', reject);
    req.setTimeout(20000, () => req.destroy(new Error('Timeout')));
  });
}

async function save(url, filename) {
  try {
    const buf = await fetch(url, { binary: true });
    if (!buf || buf.length < 5000) throw new Error(`tiny (${buf.length}b)`);
    fs.writeFileSync(path.join(OUT_DIR, filename), buf);
    console.log(
      `  ✓ ${filename}  (${(buf.length / 1024).toFixed(1)} KB)  from ${url.slice(0, 80)}…`,
    );
    return true;
  } catch (e) {
    console.log(`  ✗ ${filename}  ${e.message}`);
    return false;
  }
}

/** All images used on a Wikipedia article, with imageinfo (URL + size). */
async function pageImages(title, lang = 'en') {
  const api =
    `https://${lang}.wikipedia.org/w/api.php?action=query&format=json` +
    `&prop=images&imlimit=100&titles=${encodeURIComponent(title)}`;
  const json = JSON.parse(await fetch(api));
  const pages = json?.query?.pages || {};
  const fileTitles = [];
  for (const k of Object.keys(pages)) {
    for (const im of pages[k].images || []) fileTitles.push(im.title);
  }
  // Resolve each file's URL + dimensions
  const out = [];
  for (let i = 0; i < fileTitles.length; i += 10) {
    const batch = fileTitles.slice(i, i + 10);
    const infoApi =
      `https://${lang}.wikipedia.org/w/api.php?action=query&format=json` +
      `&prop=imageinfo&iiprop=url|size|mime` +
      `&titles=${encodeURIComponent(batch.join('|'))}`;
    const j2 = JSON.parse(await fetch(infoApi));
    const p2 = j2?.query?.pages || {};
    for (const k of Object.keys(p2)) {
      const ii = p2[k]?.imageinfo?.[0];
      if (ii && ii.url) {
        out.push({
          title: p2[k].title,
          url: ii.url,
          width: ii.width || 0,
          height: ii.height || 0,
          mime: ii.mime || '',
        });
      }
    }
  }
  return out;
}

function looksLikeCoverArt(im) {
  if (!im.mime || !im.mime.startsWith('image/')) return false;
  if (im.mime === 'image/svg+xml') return false;
  if (im.width < 500 || im.height < 400) return false;
  const t = (im.title || '').toLowerCase();
  // Reject obvious non-cover images
  if (/icon|wordmark|commons-logo|trailer|hourglass|edit|pencil/.test(t)) return false;
  return true;
}

function looksLikeMap(im) {
  if (!im.mime || !im.mime.startsWith('image/')) return false;
  const t = (im.title || '').toLowerCase();
  return /map|leonida|vice.?city/.test(t) && im.width >= 600;
}

(async () => {
  console.log('═══════════════════════════════════════════════');
  console.log(' Pulling cover art + Leonida map from Wikipedia');
  console.log('═══════════════════════════════════════════════\n');

  /* ────────── COVER ART ────────── */
  console.log('Querying en.wikipedia.org/Grand_Theft_Auto_VI for images...');
  const enImages = await pageImages('Grand Theft Auto VI', 'en');
  console.log(`  → ${enImages.length} images found on the article`);

  // Sort candidates: largest first
  const coverCandidates = enImages
    .filter(looksLikeCoverArt)
    .sort((a, b) => b.width * b.height - a.width * a.height);

  if (coverCandidates.length === 0) {
    console.log('  ! no cover-art candidate found, trying broader query...');
  }

  for (const c of coverCandidates.slice(0, 4)) {
    console.log(
      `  · candidate: ${c.title}  ${c.width}×${c.height}  ${(c.url || '').slice(-50)}`,
    );
  }

  let coverSaved = false;
  for (const c of coverCandidates) {
    const ext = c.mime.includes('png') ? 'png' : 'jpg';
    if (await save(c.url, `gta-vi-keyart.${ext}`)) {
      coverSaved = true;
      break;
    }
  }

  /* ────────── LEONIDA MAP ────────── */
  console.log('\nQuerying article for map images...');
  const mapCandidates = enImages.filter(looksLikeMap);
  for (const c of mapCandidates.slice(0, 5)) {
    console.log(`  · map candidate: ${c.title}  ${c.width}×${c.height}`);
  }

  let mapSaved = false;
  for (const c of mapCandidates) {
    if (await save(c.url, 'leonida-map-real.jpg')) {
      mapSaved = true;
      break;
    }
  }

  // Fallback map: try Wikimedia Commons for Florida outline + community Leonida
  if (!mapSaved) {
    console.log('\nFallback: trying Commons search for GTA VI map / Leonida...');
    const search = await fetch(
      'https://commons.wikimedia.org/w/api.php?action=query&format=json' +
        '&list=search&srnamespace=6&srsearch=' +
        encodeURIComponent('Leonida OR "Vice City" OR "GTA VI map"'),
    );
    const json = JSON.parse(search);
    const titles = (json?.query?.search || []).slice(0, 10).map((s) => 'File:' + s.title.replace(/^File:/, ''));
    if (titles.length) {
      const infoApi =
        'https://commons.wikimedia.org/w/api.php?action=query&format=json' +
        '&prop=imageinfo&iiprop=url|size|mime&titles=' +
        encodeURIComponent(titles.join('|'));
      const j2 = JSON.parse(await fetch(infoApi));
      const pages = j2?.query?.pages || {};
      for (const k of Object.keys(pages)) {
        const ii = pages[k]?.imageinfo?.[0];
        if (
          ii?.url &&
          ii.width >= 600 &&
          /jpg|jpeg|png/.test(ii.mime || '') &&
          !/svg/.test(ii.mime || '')
        ) {
          if (await save(ii.url, 'leonida-map-real.jpg')) {
            mapSaved = true;
            break;
          }
        }
      }
    }
  }

  // Final fallback: a hand-curated public Florida-map URL we know works
  if (!mapSaved) {
    console.log('  · final fallback: Florida physical map (Commons)');
    const u =
      'https://upload.wikimedia.org/wikipedia/commons/3/3c/Florida_in_United_States.svg';
    await save(u, 'leonida-map-fallback.svg');
  }

  console.log('\nFinal inventory:');
  for (const f of fs.readdirSync(OUT_DIR).sort()) {
    const s = fs.statSync(path.join(OUT_DIR, f));
    console.log(`  ${f}  (${(s.size / 1024).toFixed(1)} KB)`);
  }
})();
