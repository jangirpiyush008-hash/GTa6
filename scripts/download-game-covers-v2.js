/**
 * Better cover-art puller — uses Wikipedia's `pageimages` API, which returns
 * each article's PRIMARY image (the one used as the page preview). For
 * game articles that's almost always the infobox cover art.
 *
 * Fixes the v1 bug where "largest image on article" pulled billboard
 * photos / screenshots instead of the cover.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const OUT_DIR = path.join(__dirname, '..', 'public', 'images', 'games');
fs.mkdirSync(OUT_DIR, { recursive: true });

const UA = 'GTAVI-Guide/1.0 (https://gtavi.guide; contact@gtavi.guide)';

const articles = {
  // upcoming
  'gta-vi':           ['Grand Theft Auto VI'],
  'wolverine':        ["Marvel's Wolverine"],
  'ghost-of-yotei':   ['Ghost of Yōtei', 'Ghost of Yotei'],
  'silksong':         ['Hollow Knight: Silksong'],
  'metroid-prime-4':  ['Metroid Prime 4: Beyond', 'Metroid Prime 4'],
  'fable':            ['Fable (2026 video game)', 'Fable (upcoming video game)'],
  'resident-evil-9':  ['Resident Evil Requiem', 'Resident Evil 9'],
  'elder-scrolls-vi': ['The Elder Scrolls VI'],
  'subnautica-2':     ['Subnautica 2'],
  'project-007':      ['Project 007'],
  // released
  'gta-v':            ['Grand Theft Auto V'],
  'rdr-2':            ['Red Dead Redemption 2'],
  'elden-ring':       ['Elden Ring'],
  'baldurs-gate-3':   ["Baldur's Gate 3"],
  'cyberpunk-2077':   ['Cyberpunk 2077'],
  'hogwarts-legacy':  ['Hogwarts Legacy'],
  'spider-man-2':     ["Marvel's Spider-Man 2 (video game)", "Marvel's Spider-Man 2"],
  're4-remake':       ['Resident Evil 4 (2023 video game)'],
  'diablo-iv':        ['Diablo IV'],
  'helldivers-2':     ['Helldivers 2'],
  'black-myth-wukong':['Black Myth: Wukong'],
  'ff7-rebirth':      ['Final Fantasy VII Rebirth'],
  'cod-bo6':          ['Call of Duty: Black Ops 6'],
  'tlou-2-remaster':  ['The Last of Us Part II Remastered', 'The Last of Us Part II'],
  'alan-wake-2':      ['Alan Wake 2'],
  'mk1':              ['Mortal Kombat 1'],
  'stellar-blade':    ['Stellar Blade'],
  'dragons-dogma-2':  ["Dragon's Dogma 2"],
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
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
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

/**
 * Get a page's primary image URL via the `pageimages` prop.
 * `piprop=original` returns the full-resolution URL.
 */
async function getPageImage(title) {
  const api =
    'https://en.wikipedia.org/w/api.php?action=query&format=json' +
    '&prop=pageimages&piprop=original|name&pilicense=any' +
    `&titles=${encodeURIComponent(title)}`;
  try {
    const json = JSON.parse(await fetchUrl(api));
    const pages = json?.query?.pages || {};
    for (const k of Object.keys(pages)) {
      const p = pages[k];
      if (p.missing !== undefined) continue;
      const orig = p.original;
      if (orig?.source) {
        return { url: orig.source, width: orig.width, height: orig.height, name: p.pageimage };
      }
    }
  } catch (e) {
    // pass
  }
  return null;
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

(async () => {
  console.log('═══════════════════════════════════════════════');
  console.log(' Re-downloading covers via pageimages API');
  console.log('═══════════════════════════════════════════════\n');

  const results = {};
  let ok = 0, fail = 0;

  for (const [slug, titles] of Object.entries(articles)) {
    process.stdout.write(`  ${slug.padEnd(22)} `);
    let saved = null;
    for (const title of titles) {
      const im = await getPageImage(title);
      if (!im) continue;
      // Skip svg + clearly-wrong files
      const u = im.url.toLowerCase();
      if (u.endsWith('.svg')) continue;
      const ext = u.endsWith('.png')  ? 'png'
                : u.endsWith('.webp') ? 'webp'
                : 'jpg';
      // delete any previous (wrong) cover first
      for (const e of ['jpg', 'png', 'webp']) {
        const p = path.join(OUT_DIR, `${slug}-cover.${e}`);
        if (fs.existsSync(p)) fs.unlinkSync(p);
      }
      const r = await save(im.url, `${slug}-cover.${ext}`);
      if (r.ok) {
        saved = {
          ok: true,
          file: `${slug}-cover.${ext}`,
          size: r.size,
          width: im.width,
          height: im.height,
          source: im.name,
        };
        break;
      }
    }
    if (saved) {
      console.log(`✓ ${saved.file}  ${saved.width}×${saved.height}  ${(saved.size / 1024).toFixed(0)} KB  · ${saved.source}`);
      ok++;
    } else {
      console.log(`✗ no pageimage`);
      fail++;
    }
    results[slug] = saved ?? { ok: false };
  }

  console.log(`\nDone · ${ok} covers · ${fail} missing`);
  fs.writeFileSync(
    path.join(OUT_DIR, '_manifest.json'),
    JSON.stringify(results, null, 2),
  );
})();
