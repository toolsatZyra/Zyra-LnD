/**
 * Build the Probbit wordmark assets for the site.
 *
 *   public/probbit-logo.png        violet wordmark on transparent (light ground)
 *   public/probbit-logo-white.png  white wordmark on violet   (dark ground / spare)
 *
 * Both master exports carry a solid ground and heavy padding. For each we trim
 * the ground border, then key the ground to transparent by distance-from-ground
 * while KEEPING the original pixel colour — so the mark's real hue and its
 * antialiased edges (and the smile in the o) are preserved exactly. Because the
 * light source was drawn on a near-white ground, its edges land cleanly on the
 * site's bone nav/footer.
 *
 *   node scripts/make-probbit-logo.mjs <light-ground.png> [white-on-violet.png]
 */
import sharp from "sharp";

const LIGHT_SRC = process.argv[2];
const DARK_SRC = process.argv[3];
if (!LIGHT_SRC) {
  console.error("Usage: node scripts/make-probbit-logo.mjs <light-ground.png> [white-on-violet.png]");
  process.exit(1);
}

async function keyOut(src, out) {
  // Sample the ground from the top-left corner.
  const probe = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const g = [probe.data[0], probe.data[1], probe.data[2]];

  // Trim the uniform ground border, then work on the tight crop.
  const { data, info } = await sharp(src)
    .trim({ background: { r: g[0], g: g[1], b: g[2] }, threshold: 16 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // alpha = how far the pixel sits from the ground colour, ramped.
  const lo = 34;  // ground jitter → transparent
  const hi = 190; // clearly the mark → opaque
  let kept = 0;
  for (let i = 0; i < data.length; i += 4) {
    const d = Math.hypot(data[i] - g[0], data[i + 1] - g[1], data[i + 2] - g[2]);
    let t = (d - lo) / (hi - lo);
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    data[i + 3] = Math.round(data[i + 3] * t);
    if (t > 0) kept++;
  }
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`${out} — ${info.width}x${info.height}, ground rgb(${g}) keyed (${kept.toLocaleString()} px kept)`);
}

await keyOut(LIGHT_SRC, "public/probbit-logo.png");
if (DARK_SRC) await keyOut(DARK_SRC, "public/probbit-logo-white.png");
