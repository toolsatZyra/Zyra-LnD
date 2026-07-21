import Image from "next/image";

/**
 * Client logo strip.
 *
 * Assets come from the main thezyra.in repo, trimmed of transparent padding
 * and re-encoded to webp.
 *
 * Every logo below was visually verified against the source image — the
 * filenames in the main repo are not fully reliable. `country-delight.png`
 * actually contains the Water Management and Plumbing Skill Council mark, so
 * it is deliberately excluded; there is no genuine Country Delight asset.
 */
/**
 * `h` normalises optical weight. Source ratios run 0.66 (Swiggy, portrait) to
 * 4.26 (Sarvodaya, very wide) — sizing everything to one height would leave
 * Swiggy at 20px wide against Sarvodaya at 128px. Squarer marks get more
 * height, wide wordmarks less, so each occupies roughly equal area.
 */
const LOGOS = [
  { src: "/logos/swiggy.webp", alt: "Swiggy", ratio: 0.66, h: 36 },
  { src: "/logos/vama.webp", alt: "VAMA", ratio: 0.82, h: 35 },
  { src: "/logos/meesho.webp", alt: "Meesho", ratio: 0.97, h: 34 },
  { src: "/logos/goodscore.webp", alt: "GoodScore", ratio: 1.06, h: 34 },
  { src: "/logos/wildstone.webp", alt: "Wild Stone", ratio: 1.28, h: 32 },
  { src: "/logos/cars24.webp", alt: "CARS24", ratio: 1.84, h: 30 },
  { src: "/logos/bbc.webp", alt: "BBC London", ratio: 2.14, h: 29 },
  { src: "/logos/mederma.webp", alt: "Mederma", ratio: 2.26, h: 28 },
  { src: "/logos/goat.webp", alt: "GOAT Life", ratio: 2.27, h: 28 },
  { src: "/logos/apna.webp", alt: "apna", ratio: 2.75, h: 26 },
  { src: "/logos/zoho.webp", alt: "Zoho", ratio: 2.8, h: 26 },
  { src: "/logos/awfis.webp", alt: "Awfis", ratio: 3.02, h: 26 },
  { src: "/logos/jito.webp", alt: "JITO", ratio: 3.95, h: 23 },
  { src: "/logos/sarvodaya.webp", alt: "Sarvodaya Healthcare", ratio: 4.26, h: 22 },
];

export default function Marquee() {
  return (
    <div className="mq rv">
      <div className="mq-in">
        {LOGOS.map((l) => (
          <Image
            key={l.src}
            src={l.src}
            alt={l.alt}
            width={Math.round(l.h * l.ratio)}
            height={l.h}
            className="mq-logo"
            style={{ height: l.h }}
          />
        ))}
        {/* Duplicated so the -50% keyframe loops seamlessly. Hidden from
            assistive tech so the client list isn't announced twice. */}
        {LOGOS.map((l) => (
          <Image
            key={`${l.src}-dup`}
            src={l.src}
            alt=""
            aria-hidden="true"
            width={Math.round(l.h * l.ratio)}
            height={l.h}
            className="mq-logo"
            style={{ height: l.h }}
          />
        ))}
      </div>
    </div>
  );
}
