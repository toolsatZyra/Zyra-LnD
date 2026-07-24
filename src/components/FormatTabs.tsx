"use client";

import Link from "next/link";
import { useState } from "react";
import Frame from "./Frame";
import { withAmp } from "./Amp";

const FORMATS = [
  {
    id: "scen",
    tab: "Cinematic scenarios",
    title: "Cinematic scenarios",
    body: "Character-led workplace situations that show decisions, consequences and the right behaviour in context.",
    best: "Best for · Compliance, leadership, sales, ethics and behavioural training",
    seed: 14,
  },
  {
    id: "anim",
    tab: "Animated explainers",
    title: "Animated explainers",
    body: "Motion graphics and animation that turn complex processes, frameworks and abstract information into clear visual stories.",
    best: "Best for · Policies, workflows, systems, data and process training",
    seed: 12,
  },
  {
    id: "prod",
    tab: "Product walkthroughs",
    title: "Product walkthroughs",
    body: "Clear demonstrations combining screen recordings, visual highlights, narration and contextual explanations.",
    best: "Best for · Software, product, systems and customer education",
    seed: 13,
  },
  {
    id: "drama",
    tab: "Micro-drama series",
    title: "Micro-drama series",
    body: "Short, episodic stories that turn workplace challenges into content learners want to continue watching.",
    best: "Best for · Sales, compliance, culture, leadership and employee engagement",
    seed: 11,
  },
  {
    id: "micro",
    tab: "Microlearning",
    title: "Microlearning",
    body: "Focused, mobile-friendly episodes built around one clear learning objective at a time.",
    best: "Best for · Deskless teams, distributed workforces and continuous learning",
    seed: 15,
  },
];

export default function FormatTabs() {
  const [active, setActive] = useState(FORMATS[0].id);
  const cur = FORMATS.find((f) => f.id === active) ?? FORMATS[0];

  return (
    <div className="rv">
      <div className="tabs" role="tablist" aria-label="Video formats">
        {FORMATS.map((f) => (
          <button
            key={f.id}
            role="tab"
            className="tab"
            aria-selected={active === f.id}
            aria-controls={`pane-${f.id}`}
            onClick={() => setActive(f.id)}
          >
            {f.tab}
          </button>
        ))}
      </div>

      <div className="tab-body" role="tabpanel" id={`pane-${cur.id}`}>
        <div className="stack g14">
          <h3 className="dsp d3">{withAmp(cur.title)}</h3>
          <p className="bs">{cur.body}</p>
          <p className="m">{cur.best}</p>
          <Link href="/services" className="tl">
            See the service →
          </Link>
        </div>
        <div className="vid bars" style={{ aspectRatio: "16/9" }}>
          <Frame seed={cur.seed} />
          <span className="tag tl_ live">Playing</span>
        </div>
      </div>
    </div>
  );
}
