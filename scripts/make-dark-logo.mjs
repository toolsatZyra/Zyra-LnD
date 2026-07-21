/**
 * Generate a light-ground variant of the Zyra wordmark.
 *
 * The brand asset (public/zyra-logo.png, cropped from the main site's
 * zyra-logo.webp) is a WHITE wordmark with a TEAL accent, built for the dark
 * thezyra.in ground. It is invisible on this site's bone background.
 *
 * `filter: invert(1)` is the obvious fix and it is WRONG — it flips the teal
 * accent rgb(104,181,162) to maroon and breaks the brand colour.
 *
 * Instead: recolour only the near-neutral (white) pixels to ink, carrying the
 * original luminance into alpha so antialiased edges stay smooth, and leave
 * every saturated pixel untouched.
 *
 *   node scripts/make-dark-logo.mjs
 */
import sharp from "sharp";

const SRC = "public/zyra-logo.png";
const OUT = "public/zyra-logo-dark.png";
const INK = [27, 18, 53]; // --fg / --bg3
const SAT_THRESHOLD = 28; // below this a pixel counts as neutral, not brand colour

const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

let recoloured = 0;
let preserved = 0;

for (let i = 0; i < data.length; i += 4) {
  const a = data[i + 3];
  if (a < 8) continue;

  const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
  const sat = Math.max(r, g, b) - Math.min(r, g, b);

  if (sat < SAT_THRESHOLD) {
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    data[i] = INK[0];
    data[i + 1] = INK[1];
    data[i + 2] = INK[2];
    data[i + 3] = Math.round(a * luminance);
    recoloured++;
  } else {
    preserved++;
  }
}

await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png({ compressionLevel: 9 })
  .toFile(OUT);

console.log(`${OUT} — ${info.width}x${info.height}`);
console.log(`  recoloured white → ink : ${recoloured.toLocaleString()}`);
console.log(`  preserved brand accent : ${preserved.toLocaleString()}`);
