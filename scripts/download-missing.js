/**
 * Fill in the gaps left by download-images.js:
 *  - missing screenshot-4
 *  - GTA VI logo (Wikipedia, no thumb)
 *  - Leonida map (Wikipedia Commons)
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const OUT_DIR = path.join(__dirname, '..', 'public', 'images', 'gta');

const WIKI_UA =
  'GTAVI-Guide/1.0 (https://gtavi.guide; contact@gtavi.guide) node-https/1';

function fetchUrl(url, { binary = false, ua = WIKI_UA, accept = '*/*' } = {}, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 6) return reject(new Error('Too many redirects'));
    const req = https.get(
      url,
      {
        headers: {
          'User-Agent': ua,
          Accept: accept,
          'Accept-Language': 'en-US,en;q=0.9',
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
          return fetchUrl(next, { binary, ua, accept }, redirects + 1).then(resolve, reject);
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        if (binary) {
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

async function save(url, filename, opts = {}) {
  try {
    const buf = await fetchUrl(url, { binary: true, accept: 'image/*', ...opts });
    if (!buf || buf.length < 4000) throw new Error(`Too small (${buf.length})`);
    fs.writeFileSync(path.join(OUT_DIR, filename), buf);
    console.log(`  ✓ ${filename}  (${(buf.length / 1024).toFixed(1)} KB)  from ${url.slice(0, 70)}…`);
    return true;
  } catch (e) {
    console.log(`  ✗ ${filename}  ${e.message}`);
    return false;
  }
}

async function wikiFileUrl(fileName) {
  // Resolve a Wikimedia File:Foo.jpg to a direct media URL via the API
  const api =
    'https://en.wikipedia.org/w/api.php?action=query&format=json' +
    `&titles=${encodeURIComponent('File:' + fileName)}&prop=imageinfo&iiprop=url`;
  try {
    const json = JSON.parse(await fetchUrl(api, { accept: 'application/json' }));
    const pages = json?.query?.pages || {};
    for (const k of Object.keys(pages)) {
      const ii = pages[k]?.imageinfo?.[0]?.url;
      if (ii) return ii;
    }
  } catch (e) {
    console.log(`  ! wiki api failed for ${fileName}: ${e.message}`);
  }
  return null;
}

async function commonsFileUrl(fileName) {
  const api =
    'https://commons.wikimedia.org/w/api.php?action=query&format=json' +
    `&titles=${encodeURIComponent('File:' + fileName)}&prop=imageinfo&iiprop=url`;
  try {
    const json = JSON.parse(await fetchUrl(api, { accept: 'application/json' }));
    const pages = json?.query?.pages || {};
    for (const k of Object.keys(pages)) {
      const ii = pages[k]?.imageinfo?.[0]?.url;
      if (ii) return ii;
    }
  } catch (e) {
    console.log(`  ! commons api failed for ${fileName}: ${e.message}`);
  }
  return null;
}

(async () => {
  console.log('Filling missing assets...\n');

  // Missing screenshot — use a Miami sunset fallback
  if (!fs.existsSync(path.join(OUT_DIR, 'screenshot-4.jpg'))) {
    const tries = [
      'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=1600&q=80', // miami palms
      'https://images.unsplash.com/photo-1582578598774-a377d4b32223?w=1600&q=80',
      'https://images.unsplash.com/photo-1583531352515-8884af319dc2?w=1600&q=80',
    ];
    for (const u of tries) {
      if (await save(u, 'screenshot-4.jpg', { ua: 'Mozilla/5.0' })) break;
    }
  } else {
    console.log('  · screenshot-4.jpg already present');
  }

  // GTA VI logo via Wikipedia file resolver
  console.log('\nGTA VI logo:');
  const logoCandidates = [
    'Grand_Theft_Auto_VI.png',
    'Grand_Theft_Auto_VI_logo.png',
    'GTA_VI_Logo.png',
  ];
  let logoSaved = false;
  for (const name of logoCandidates) {
    const u = await wikiFileUrl(name);
    if (u && (await save(u, 'gta-vi-logo.png'))) {
      logoSaved = true;
      break;
    }
  }
  if (!logoSaved) {
    // Try Commons
    for (const name of logoCandidates) {
      const u = await commonsFileUrl(name);
      if (u && (await save(u, 'gta-vi-logo.png'))) {
        logoSaved = true;
        break;
      }
    }
  }

  // Leonida map via Wikipedia Commons
  console.log('\nLeonida map:');
  const mapCandidates = [
    'Map_of_Leonida.png',
    'GTA_VI_Map.png',
    'Leonida_(GTA_VI)_map.jpg',
    'Map_of_Florida_with_county_lines.svg',
  ];
  let mapSaved = false;
  for (const name of mapCandidates) {
    const u = (await commonsFileUrl(name)) || (await wikiFileUrl(name));
    if (u && (await save(u, 'leonida-map.jpg'))) {
      mapSaved = true;
      break;
    }
  }
  if (!mapSaved) {
    // Free Florida map as a stand-in for "State of Leonida"
    const fallbacks = [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Map_of_Florida_highlighting_Miami-Dade_County.svg/1024px-Map_of_Florida_highlighting_Miami-Dade_County.svg.png',
      'https://images.unsplash.com/photo-1524813686514-a57563d77965?w=1600&q=80', // florida map vibe
    ];
    for (const u of fallbacks) {
      if (await save(u, 'leonida-map.jpg', { ua: 'Mozilla/5.0' })) break;
    }
  }

  console.log('\nFinal inventory:');
  const files = fs.readdirSync(OUT_DIR).sort();
  for (const f of files) {
    const s = fs.statSync(path.join(OUT_DIR, f));
    console.log(`  ${f}  (${(s.size / 1024).toFixed(1)} KB)`);
  }
})();
