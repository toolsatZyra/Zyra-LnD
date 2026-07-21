"use client";

import { useRef } from "react";
import Frame from "./Frame";

/* NOTE: quotes below are illustrative placeholders using role + sector
   attribution. Do not attach invented names to real client companies —
   swap in approved quotes before this goes live. */
const STORIES = [
  {
    seed: 61,
    pill: "Employee training",
    tone: "emp",
    logo: "Logistics\nclient",
    quote: "The induction film landed in a week. The last one took a quarter.",
    who: "Head of Learning & Development",
    where: "4,000-person logistics operation",
  },
  {
    seed: 62,
    pill: "Compliance training",
    tone: "cmp",
    logo: "Financial\nservices",
    quote: "People finished it. That had never happened with POSH before.",
    who: "Chief Compliance Officer",
    where: "NBFC, 11 states",
    play: true,
  },
  {
    seed: 63,
    pill: "Safety & SOP",
    tone: "tec",
    logo: "Manufacturing\nclient",
    quote:
      "Shot on our floor, with our machines. The generic library never came close.",
    who: "EHS Lead",
    where: "Three plants, Gujarat",
  },
  {
    seed: 64,
    pill: "Localisation",
    tone: "loc",
    logo: "Consumer\nbrand",
    quote: "Nine languages from one build. We'd budgeted for three.",
    who: "People Operations Director",
    where: "D2C, pan-India workforce",
  },
  {
    seed: 65,
    pill: "Product training",
    tone: "emp",
    logo: "Mobility\nclient",
    quote: "When the product changed, the module changed. Same week.",
    who: "Head of Enablement",
    where: "Marketplace, 900 partners",
  },
];

export default function StoryCarousel() {
  const track = useRef<HTMLDivElement>(null);

  /* Centre a card explicitly — scrollBy stalls against scroll-snap. */
  const step = (dir: number) => {
    const tr = track.current;
    if (!tr) return;
    const cards = Array.from(tr.children) as HTMLElement[];
    if (!cards.length) return;
    const mid = tr.scrollLeft + tr.clientWidth / 2;
    let cur = 0;
    let best = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid);
      if (d < best) {
        best = d;
        cur = i;
      }
    });
    const t = cards[Math.max(0, Math.min(cards.length - 1, cur + dir))];
    tr.scrollTo({
      left: Math.max(0, t.offsetLeft - (tr.clientWidth - t.offsetWidth) / 2),
      behavior: "smooth",
    });
  };

  return (
    <div className="stories rv">
      <button className="st-nav prev" aria-label="Previous story" onClick={() => step(-1)}>
        ←
      </button>
      <button className="st-nav next" aria-label="Next story" onClick={() => step(1)}>
        →
      </button>
      <div className="st-track" ref={track}>
        {STORIES.map((s) => (
          <div className="st-card" key={s.seed}>
            <Frame seed={s.seed} />
            <div className="st-top">
              <span className={`st-pill ${s.tone}`}>{s.pill}</span>
              <span className="st-logo" style={{ whiteSpace: "pre-line" }}>
                {s.logo}
              </span>
            </div>
            {s.play && <button className="st-play">▶ Play story</button>}
            <div className="st-bot">
              <p className="st-q">&ldquo;{s.quote}&rdquo;</p>
              <p className="st-n">{s.who}</p>
              <p className="st-r">{s.where}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
