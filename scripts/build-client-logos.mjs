/**
 * Build the client logo strip assets.
 *
 * The source files in the main thezyra.in repo are WHITE marks on a SOLID
 * BLACK rectangle — not transparent cutouts. Dropped straight onto this
 * site's bone background they read as black boxes, which is why they clashed
 * with the theme.
 *
 * This converts each one properly:
 *   1. luminance becomes alpha, so the black field falls away and the white
 *      mark (with its antialiasing) is preserved as a clean cutout;
 *   2. the mark is then painted in the theme's ink, so the strip sits in the
 *      palette rather than fighting it;
 *   3. trimmed to the mark and re-encoded to webp.
 *
 *   node scripts/build-client-logos.mjs
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const SRC = "/Users/riyamalik/Documents/GitHub/ZyraUpdated/public/logos";
const OUT = "public/logos";
const INK = [27, 18, 53]; // --fg

// Verified against the source images, not the filenames.
const LOGOS = [
  "swiggy", "vama", "meesho", "goodscore", "wildstone", "cars24",
  "bbc", "mederma", "goat", "apna", "zoho", "awfis", "jito", "sarvodaya",
];

mkdirSync(OUT, { recursive: true });

for (const name of LOGOS) {
  const { data, info } = await sharp(`${SRC}/${name}.png`)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    data[i] = INK[0];
    data[i + 1] = INK[1];
    data[i + 2] = INK[2];
    // white mark -> opaque ink, black field -> transparent
    data[i + 3] = Math.round(luminance * data[i + 3]);
  }

  const out = `${OUT}/${name}.webp`;
  const meta = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim({ threshold: 6 })
    .resize({ height: 160, fit: "inside" })
    .webp({ quality: 92 })
    .toFile(out);

  console.log(
    `${name.padEnd(12)} ${meta.width}x${meta.height}  ratio ${(meta.width / meta.height).toFixed(2)}`,
  );
}
