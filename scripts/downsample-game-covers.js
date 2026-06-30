/**
 * Resize every cover in public/images/games/ to a max long edge of 1200px.
 * - JPEG output for non-PNG, quality 80 (mozjpeg)
 * - PNG kept as PNG (preserves transparency) at compression level 9
 * - Skips files smaller than the target and the _manifest.json
 *
 * Runs after download-game-assets.js. Idempotent.
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const DIR = path.join(__dirname, '..', 'public', 'images', 'games');
const MAX_DIM = 1200;
const JPEG_Q = 80;

(async () => {
  const files = fs
    .readdirSync(DIR)
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));

  console.log('═══════════════════════════════════════════════');
  console.log(` Downsampling ${files.length} game covers`);
  console.log('═══════════════════════════════════════════════');
  console.log(` Max long edge: ${MAX_DIM}px · JPEG q${JPEG_Q}\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const f of files) {
    const p = path.join(DIR, f);
    const before = fs.statSync(p).size;
    totalBefore += before;

    try {
      const img = sharp(p, { failOn: 'none' });
      const meta = await img.metadata();
      const w = meta.width ?? 0;
      const h = meta.height ?? 0;
      const longEdge = Math.max(w, h);

      if (longEdge <= MAX_DIM && before < 300_000) {
        console.log(`  · ${f}  ${w}×${h}  ${(before / 1024).toFixed(0)} KB  skipped (small enough)`);
        totalAfter += before;
        continue;
      }

      const resized = sharp(p, { failOn: 'none' }).resize({
        width:  w >= h ? Math.min(w, MAX_DIM) : undefined,
        height: h >  w ? Math.min(h, MAX_DIM) : undefined,
        withoutEnlargement: true,
      });

      // Re-encode in place. Preserve PNG only when the source is PNG with
      // potential transparency; otherwise convert to JPEG for size.
      const isPng = /\.png$/i.test(f);
      const buf = isPng
        ? await resized.png({ compressionLevel: 9, palette: true }).toBuffer()
        : await resized.jpeg({ quality: JPEG_Q, mozjpeg: true }).toBuffer();

      fs.writeFileSync(p, buf);
      const after = fs.statSync(p).size;
      totalAfter += after;
      const newMeta = await sharp(p).metadata();

      const saved = (((before - after) / before) * 100).toFixed(0);
      console.log(
        `  ✓ ${f.padEnd(34)} ${w}×${h} → ${newMeta.width}×${newMeta.height}  ${(before / 1024).toFixed(0)} → ${(after / 1024).toFixed(0)} KB  (-${saved}%)`,
      );
    } catch (e) {
      console.log(`  ✗ ${f}  ${e.message}`);
      totalAfter += before;
    }
  }

  console.log(`\n═══════════════════════════════════════════════`);
  console.log(
    ` Total: ${(totalBefore / 1024 / 1024).toFixed(1)} MB → ${(totalAfter / 1024 / 1024).toFixed(1)} MB  (saved ${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%)`,
  );
  console.log(`═══════════════════════════════════════════════\n`);
})();
