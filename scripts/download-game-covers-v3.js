/**
 * v3 cover puller: switches to Steam's library art CDN.
 *
 * For games on Steam, `https://cdn.akamai.steamstatic.com/steam/apps/<appid>/library_600x900.jpg`
 * returns the official portrait box art at high quality. This is the same
 * asset Steam shows in its library — far more reliable than Wikipedia's
 * pageimages API (which sometimes returns awards-ceremony photos).
 *
 * Falls back to Wikipedia pageimages for PS5-exclusive titles, Switch
 * exclusives, and pre-Steam upcoming games.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const OUT_DIR = path.join(__dirname, '..', 'public', 'images', 'games');
fs.mkdirSync(OUT_DIR, { recursive: true });

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36';

/**
 * Steam app IDs for games confirmed available on Steam.
 * Source: each game's public Steam store page URL.
 */
const STEAM = {
  'gta-v':            271590,
  'rdr-2':            1174180,
  'elden-ring':       1245620,
  'baldurs-gate-3':   1086940,
  'cyberpunk-2077':   1091500,
  'hogwarts-legacy':  990080,
  're4-remake':       2050650,
  'diablo-iv':        2344520,
  'helldivers-2':     553850,
  'black-myth-wukong':2358720,
  'ff7-rebirth':      2909400,
  'cod-bo6':          2933620,
  'tlou-2-remaster':  2531310,
  'alan-wake-2':      2069200,
  'mk1':              1971870,
  'dragons-dogma-2':  2054970,
  'tekken-8':         1778820,
  'ac-shadows':       3159330,
  'silksong':         1030300,
  'subnautica-2':     1408530,
  'spider-man-2':     2231910,
  'stellar-blade':    3489700,
};

/**
 * Wikipedia article titles for games not on Steam (or as fallback).
 */
const WIKI = {
  'gta-vi':           ['Grand Theft Auto VI'],
  'wolverine':        ["Marvel's Wolverine"],
  'ghost-of-yotei':   ['Ghost of Yōtei', 'Ghost of Yotei'],
  'metroid-prime-4':  ['Metroid Prime 4: Beyond'],
  'fable':            ['Fable (2026 video game)', 'Fable (upcoming video game)'],
  'resident-evil-9':  ['Resident Evil Requiem', 'Resident Evil 9'],
  'elder-scrolls-vi': ['The Elder Scrolls VI'],
  'project-007':      ['Project 007'],
  'spider-man-2':     ["Marvel's Spider-Man 2 (video game)"],
  'stellar-blade':    ['Stellar Blade'],
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

async function downloadSteamCover(slug, appid) {
  // Try portrait covers first (best aspect for our cards), then fall back to landscape.
  const patterns = [
    `https://cdn.akamai.steamstatic.com/steam/apps/${appid}/library_600x900.jpg`,
    `https://cdn.akamai.steamstatic.com/steam/apps/${appid}/library_600x900_2x.jpg`,
    `https://cdn.akamai.steamstatic.com/steam/apps/${appid}/portrait.png`,
    `https://cdn.akamai.steamstatic.com/steam/apps/${appid}/capsule_616x353.jpg`,
    `https://cdn.akamai.steamstatic.com/steam/apps/${appid}/header.jpg`,
  ];
  for (const url of patterns) {
    try {
      const buf = await fetchUrl(url, { binary: true });
      if (!buf || buf.length < 5000) continue;
      for (const ext of ['jpg', 'png', 'webp']) {
        const p = path.join(OUT_DIR, `${slug}-cover.${ext}`);
        if (fs.existsSync(p)) fs.unlinkSync(p);
      }
      const out = path.join(OUT_DIR, `${slug}-cover.jpg`);
      fs.writeFileSync(out, buf);
      return { ok: true, file: `${slug}-cover.jpg`, size: buf.length, source: `steam:${appid}` };
    } catch (e) {
      // try next pattern
    }
  }
  return { ok: false, error: 'all Steam URLs failed' };
}

async function pageimagesUrl(title) {
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
      if (p.original?.source) {
        return { url: p.original.source, width: p.original.width, name: p.pageimage };
      }
    }
  } catch (e) {}
  return null;
}

async function downloadWikiCover(slug, titles) {
  for (const t of titles) {
    const im = await pageimagesUrl(t);
    if (!im) continue;
    const u = im.url.toLowerCase();
    if (u.endsWith('.svg')) continue;
    const ext = u.endsWith('.png') ? 'png' : u.endsWith('.webp') ? 'webp' : 'jpg';
    try {
      const buf = await fetchUrl(im.url, { binary: true });
      if (!buf || buf.length < 3000) continue;
      for (const e of ['jpg', 'png', 'webp']) {
        const p = path.join(OUT_DIR, `${slug}-cover.${e}`);
        if (fs.existsSync(p)) fs.unlinkSync(p);
      }
      const out = path.join(OUT_DIR, `${slug}-cover.${ext}`);
      fs.writeFileSync(out, buf);
      return { ok: true, file: `${slug}-cover.${ext}`, size: buf.length, source: `wiki:${im.name}` };
    } catch {}
  }
  return { ok: false, error: 'no pageimage' };
}

const allSlugs = [...new Set([...Object.keys(STEAM), ...Object.keys(WIKI)])];

(async () => {
  console.log('═══════════════════════════════════════════════');
  console.log(' v3 cover puller — Steam library + Wiki fallback');
  console.log('═══════════════════════════════════════════════\n');

  const results = {};
  let ok = 0, fail = 0;

  for (const slug of allSlugs) {
    process.stdout.write(`  ${slug.padEnd(22)} `);
    let r;
    if (STEAM[slug]) {
      r = await downloadSteamCover(slug, STEAM[slug]);
      // If Steam returns 404/empty, fall through to Wiki
      if (!r.ok && WIKI[slug]) {
        r = await downloadWikiCover(slug, WIKI[slug]);
      }
    } else if (WIKI[slug]) {
      r = await downloadWikiCover(slug, WIKI[slug]);
    } else {
      r = { ok: false, error: 'no source mapped' };
    }
    if (r.ok) {
      console.log(`✓ ${r.file}  ${(r.size / 1024).toFixed(0)} KB  · ${r.source}`);
      ok++;
    } else {
      console.log(`✗ ${r.error}`);
      fail++;
    }
    results[slug] = r;
  }

  console.log(`\nDone · ${ok} covers · ${fail} missing`);
  fs.writeFileSync(
    path.join(OUT_DIR, '_manifest.json'),
    JSON.stringify(results, null, 2),
  );
})();
