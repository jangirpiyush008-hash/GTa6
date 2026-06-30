/**
 * Bulk-export every IG card to PNG at exact pixel dimensions.
 *
 *   1. Start the Next dev server in another terminal:
 *        npm run dev   (default port 3000)
 *      or on a custom port:
 *        npx next dev -p 3737
 *
 *   2. Run this script (auto-detects port via env or arg):
 *        npm run export-ig
 *        PORT=3737 npm run export-ig
 *        node scripts/export-ig.js --port=3737 --only=release-date-hard-locked
 *
 *   Outputs: public/exports/ig/<id>.png
 */

const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(PROJECT_ROOT, 'public', 'exports', 'ig');
fs.mkdirSync(OUT_DIR, { recursive: true });

function parseArgs() {
  const out = { port: process.env.PORT || '3000', only: null };
  for (const a of process.argv.slice(2)) {
    const m = a.match(/^--([^=]+)=(.*)$/);
    if (m) out[m[1]] = m[2];
  }
  return out;
}

async function loadCards() {
  // The card data lives in TS — load via a tiny re-export shim.
  // We compile on the fly via tsx-less hack: parse the source.
  const src = fs.readFileSync(path.join(PROJECT_ROOT, 'lib', 'ig-cards.ts'), 'utf8');

  // Pull ids + sizes directly from the source.
  // Matches: `id: 'foo',` and `size: 'square' | 'portrait'`
  const cards = [];
  const re = /\{\s*id:\s*['"`]([^'"`]+)['"`][^}]*?type:\s*['"`]([^'"`]+)['"`][^}]*?size:\s*['"`]([^'"`]+)['"`]/g;
  // Also pick up template-string ids inside carousels: `${c1id}-1`
  const templateRe = /\{\s*id:\s*`\$\{[^}]+\}-(\d+)`,\s*carouselId:\s*([a-zA-Z0-9_]+)[^}]*?type:\s*['"`]([^'"`]+)['"`][^}]*?size:\s*['"`]([^'"`]+)['"`]/g;
  const constRe = /const\s+(c\did)\s*=\s*['"`]([^'"`]+)['"`]/g;

  let m;
  while ((m = re.exec(src)) !== null) {
    cards.push({ id: m[1], type: m[2], size: m[3] });
  }

  // Resolve const cNid → 'literal-id' so we can rebuild template ids
  const consts = {};
  while ((m = constRe.exec(src)) !== null) {
    consts[m[1]] = m[2];
  }
  while ((m = templateRe.exec(src)) !== null) {
    const cid = consts[m[2]];
    if (!cid) continue;
    cards.push({ id: `${cid}-${m[1]}`, type: m[3], size: m[4] });
  }

  // Dedupe by id
  const seen = new Set();
  return cards.filter((c) => (seen.has(c.id) ? false : (seen.add(c.id), true)));
}

(async () => {
  const args = parseArgs();
  const baseUrl = `http://localhost:${args.port}`;

  let puppeteer;
  try {
    puppeteer = require('puppeteer');
  } catch (e) {
    console.error('\n✗ puppeteer is not installed.');
    console.error('   Install with:  npm install --save-dev puppeteer\n');
    process.exit(1);
  }

  const allCards = await loadCards();
  const cards = args.only
    ? allCards.filter((c) => c.id === args.only)
    : allCards;

  if (!cards.length) {
    console.error(`No cards matched. (--only=${args.only})`);
    process.exit(1);
  }

  console.log(`═══════════════════════════════════════════════`);
  console.log(` IG card exporter`);
  console.log(`═══════════════════════════════════════════════`);
  console.log(` Base URL: ${baseUrl}`);
  console.log(` Cards:    ${cards.length}`);
  console.log(` Output:   ${OUT_DIR}\n`);

  // Quick connectivity check
  try {
    const probe = await fetch(`${baseUrl}/studio`);
    if (!probe.ok) throw new Error(`HTTP ${probe.status}`);
  } catch (e) {
    console.error(`✗ Could not reach ${baseUrl} — start "npm run dev" first.`);
    console.error(`  (${e.message})\n`);
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: null,
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  });

  let ok = 0;
  let fail = 0;

  for (const card of cards) {
    const w = 1080;
    const h = card.size === 'portrait' ? 1350 : 1080;
    const url = `${baseUrl}/studio/${card.id}?bare=1`;
    const out = path.join(OUT_DIR, `${card.id}.png`);

    const page = await browser.newPage();
    try {
      await page.setViewport({
        width: w,
        height: h,
        deviceScaleFactor: 1,
      });
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      // Wait for web fonts to load fully
      await page.evaluate(() => document.fonts.ready);
      // Tiny settle buffer for any final layout shift
      await new Promise((r) => setTimeout(r, 250));

      await page.screenshot({
        path: out,
        omitBackground: false,
        clip: { x: 0, y: 0, width: w, height: h },
      });
      const size = fs.statSync(out).size;
      console.log(`  ✓ ${card.id.padEnd(40)} (${w}×${h}, ${(size / 1024).toFixed(0)} KB)`);
      ok++;
    } catch (e) {
      console.log(`  ✗ ${card.id.padEnd(40)} ${e.message}`);
      fail++;
    } finally {
      await page.close();
    }
  }

  await browser.close();

  console.log(`\n═══════════════════════════════════════════════`);
  console.log(` Done · ${ok} exported · ${fail} failed`);
  console.log(`═══════════════════════════════════════════════\n`);
})();
