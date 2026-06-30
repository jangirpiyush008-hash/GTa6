/**
 * Download cover art for all 30 games from Wikipedia.
 *
 * Strategy:
 *   1. For each game, hit the Wikipedia API to list all images on the article
 *   2. Resolve each File: title to a direct URL via the imageinfo API
 *   3. Pick the largest non-icon image — that's the infobox cover
 *   4. Save to /public/images/games/<slug>-cover.<ext>
 *
 * Wikipedia hosts these covers at low res (250–500px) under fair-use editorial
 * provisions for reference. We re-use them in the same editorial fan-site
 * context with attribution in the footer.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const OUT_DIR = path.join(__dirname, '..', 'public', 'images', 'games');
fs.mkdirSync(OUT_DIR, { recursive: true });

const UA = 'GTAVI-Guide/1.0 (https://gtavi.guide; contact@gtavi.guide) node-https/1';

/**
 * Map of slug → array of candidate Wikipedia article titles to try in order.
 * The first one that resolves wins.
 */
const articles = {
  // Upcoming
  'gta-vi':           ['Grand Theft Auto VI'],
  'wolverine':        ["Marvel's Wolverine", 'Marvel\'s Wolverine (video game)'],
  'ghost-of-yotei':   ['Ghost of Yōtei', 'Ghost of Yotei'],
  'silksong':         ['Hollow Knight: Silksong'],
  'metroid-prime-4':  ['Metroid Prime 4: Beyond', 'Metroid Prime 4'],
  'fable':            ['Fable (2026 video game)', 'Fable (upcoming video game)', 'Fable (video game series)'],
  'resident-evil-9':  ['Resident Evil Requiem', 'Resident Evil 9'],
  'elder-scrolls-vi': ['The Elder Scrolls VI'],
  'subnautica-2':     ['Subnautica 2'],
  'project-007':      ['Project 007'],
  // Released
  'gta-v':            ['Grand Theft Auto V'],
  'rdr-2':            ['Red Dead Redemption 2'],
  'elden-ring':       ['Elden Ring'],
  'baldurs-gate-3':   ["Baldur's Gate 3"],
  'cyberpunk-2077':   ['Cyberpunk 2077'],
  'hogwarts-legacy':  ['Hogwarts Legacy'],
  'spider-man-2':     ["Marvel's Spider-Man 2 (video game)", "Marvel's Spider-Man 2"],
  're4-remake':       ['Resident Evil 4 (2023 video game)', 'Resident Evil 4 Remake'],
  'diablo-iv':        ['Diablo IV'],
  'helldivers-2':     ['Helldivers 2'],
  'black-myth-wukong':['Black Myth: Wukong'],
  'ff7-rebirth':      ['Final Fantasy VII Rebirth'],
  'cod-bo6':          ['Call of Duty: Black Ops 6'],
  'tlou-2-remaster':  ['The Last of Us Part II Remastered', 'The Last of Us Part II'],
  'alan-wake-2':      ['Alan Wake 2'],
  'mk1':              ['Mortal Kombat 1', 'Mortal Kombat 1 (video game)'],
  'stellar-blade':    ['Stellar Blade'],
  'dragons-dogma-2':  ["Dragon's Dogma 2", "Dragon's Dogma II"],
  'tekken-8':         ['Tekken 8'],
  'ac-shadows':       ["Assassin's Creed Shadows"],
};

function fetchUrl(url, { binary = false } = {}, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 6) return reject(new Error('Too many redirects'));
    const req = https.get(
      url,
      { headers: { 'User-Agent': UA, Accept: '*/*' } },
      (res) => {
        if (
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          res.resume();
          const next = new URL(res.headers.location, url).toString();
          return fetchUrl(next, { binary }, redirects + 1).then(resolve, reject);
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

async function pageImages(title) {
  const api =
    'https://en.wikipedia.org/w/api.php?action=query&format=json' +
    `&prop=images&imlimit=50&titles=${encodeURIComponent(title)}`;
  const json = JSON.parse(await fetchUrl(api));
  const pages = json?.query?.pages || {};
  const titles = [];
  for (const k of Object.keys(pages)) {
    if (pages[k].missing !== undefined) continue;
    for (const im of pages[k].images || []) titles.push(im.title);
  }
  return titles;
}

async function imageInfo(fileTitles) {
  if (!fileTitles.length) return [];
  const out = [];
  for (let i = 0; i < fileTitles.length; i += 10) {
    const batch = fileTitles.slice(i, i + 10);
    const api =
      'https://en.wikipedia.org/w/api.php?action=query&format=json' +
      '&prop=imageinfo&iiprop=url|size|mime' +
      `&titles=${encodeURIComponent(batch.join('|'))}`;
    try {
      const json = JSON.parse(await fetchUrl(api));
      const pages = json?.query?.pages || {};
      for (const k of Object.keys(pages)) {
        const ii = pages[k]?.imageinfo?.[0];
        if (ii?.url) {
          out.push({
            title: pages[k].title,
            url: ii.url,
            width: ii.width || 0,
            height: ii.height || 0,
            mime: ii.mime || '',
          });
        }
      }
    } catch (e) {
      // partial failure - keep going
    }
  }
  return out;
}

function looksLikeCover(im) {
  if (!im.mime?.startsWith('image/')) return false;
  if (im.mime === 'image/svg+xml') return false;
  if (im.width < 200 || im.height < 200) return false;
  const t = (im.title || '').toLowerCase();
  // Reject obvious non-cover images
  if (/icon|wordmark|commons-logo|hourglass|edit|pencil|flag|symbol_category|protection|wpvg/.test(t)) return false;
  if (/screenshot/.test(t)) return false; // we want the cover, not a screenshot
  return true;
}

async function save(url, filename) {
  try {
    const buf = await fetchUrl(url, { binary: true });
    if (!buf || buf.length < 3000) throw new Error(`tiny ${buf.length}b`);
    fs.writeFileSync(path.join(OUT_DIR, filename), buf);
    return { ok: true, size: buf.length };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

async function getCoverForGame(slug, candidateTitles) {
  for (const title of candidateTitles) {
    try {
      const files = await pageImages(title);
      if (!files.length) continue;
      const infos = await imageInfo(files);
      const covers = infos.filter(looksLikeCover).sort(
        (a, b) => b.width * b.height - a.width * a.height,
      );
      if (covers.length === 0) continue;
      const best = covers[0];
      const ext = best.mime.includes('png') ? 'png'
                : best.mime.includes('webp') ? 'webp'
                : 'jpg';
      const r = await save(best.url, `${slug}-cover.${ext}`);
      if (r.ok) {
        return {
          ok: true,
          file: `${slug}-cover.${ext}`,
          size: r.size,
          width: best.width,
          height: best.height,
          source: best.title,
        };
      }
    } catch (e) {
      // try next candidate
    }
  }
  return { ok: false, error: 'no candidate matched' };
}

(async () => {
  console.log('═══════════════════════════════════════════════');
  console.log(' Downloading covers for 30 games (Wikipedia)');
  console.log('═══════════════════════════════════════════════\n');

  const results = {};
  let ok = 0, fail = 0;

  for (const [slug, titles] of Object.entries(articles)) {
    process.stdout.write(`  ${slug.padEnd(22)} `);
    const r = await getCoverForGame(slug, titles);
    if (r.ok) {
      console.log(
        `✓ ${r.file}  ${r.width}×${r.height}  ${(r.size / 1024).toFixed(0)} KB`,
      );
      ok++;
    } else {
      console.log(`✗ ${r.error}`);
      fail++;
    }
    results[slug] = r;
  }

  console.log(`\nDone · ${ok} covers · ${fail} missing`);
  // Save a manifest the data layer can consume
  fs.writeFileSync(
    path.join(OUT_DIR, '_manifest.json'),
    JSON.stringify(results, null, 2),
  );
  console.log(`Manifest → public/images/games/_manifest.json`);
})();
