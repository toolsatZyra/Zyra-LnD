"use client";

import Link from "next/link";
import { useState } from "react";
import Frame from "./Frame";

const FORMATS = [
  {
    id: "live",
    tab: "Live-action style",
    title: "Live-action style",
    body: "Photoreal presenters and dramatised workplace scenes carrying the signature of a real shoot — location, lens choice, practical lighting and a full grade — produced without booking any of it.",
    best: "Best for · Induction · Culture · Leadership messages",
    seed: 11,
  },
  {
    id: "anim",
    tab: "Animated explainer",
    title: "Animated explainer",
    body: "2D motion graphics, character animation and 3D for anything with no filmable subject — a process, a data flow, a restructure, the inside of a running machine.",
    best: "Best for · Policy frameworks · Systems · Org change",
    seed: 12,
  },
  {
    id: "scr",
    tab: "Screencast",
    title: "Screencast & software walkthrough",
    body: "Recorded system flows with clean callouts, cut to the exact steps a role performs — re-recorded cheaply when the interface changes, which it will.",
    best: "Best for · ERP and HRIS rollouts · Tooling · Go-live",
    seed: 13,
  },
  {
    id: "scen",
    tab: "Scenario drama",
    title: "Scenario drama",
    body: "The difficult conversation, filmed twice — handled well and handled badly — so the contrast teaches instead of the narration. The format compliance content most needs and least often gets.",
    best: "Best for · POSH · Code of conduct · Manager capability",
    seed: 14,
  },
  {
    id: "micro",
    tab: "Microlearning",
    title: "Microlearning",
    body: "Two-to-seven minute single-objective modules, cut vertical for mobile and Teams, produced as a series off one content spine so unit economics hold at library scale.",
    best: "Best for · Deskless teams · Refreshers · Field workforces",
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
          <h3 className="dsp d3">{cur.title}</h3>
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
