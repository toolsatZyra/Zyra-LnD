"use client";

import Link from "next/link";
import { useState } from "react";

const TIERS = [
  {
    name: "Pilot",
    for: "One module, start to finish",
    price: "One module",
    unit: { one: "fixed quote", annual: "within an annual scope" },
    note: "Scoped in a day. Most teams start here.",
    cta: "Get a quote",
    featured: false,
    features: [
      "One finished module, any format",
      "Script from your deck plus one SME session",
      "Two review rounds",
      "English, 16:9 and 9:16",
      "Captions and transcript",
    ],
    off: ["Additional languages", "Refresh retainer"],
  },
  {
    name: "Programme",
    for: "A curriculum, built as a set",
    price: "Per module",
    unit: { one: "volume rate", annual: "committed annual volume" },
    note: "Rate drops as module count rises. Ten is the usual floor.",
    cta: "Book a consultation",
    featured: true,
    features: [
      "Everything in Pilot",
      "Free curriculum audit before scoping",
      "Shared visual system across modules",
      "Up to three languages included",
      "SCORM, xAPI or cmi5 packaging",
      "WCAG 2.1 AA with audio description",
      "Tested in your LMS before handover",
    ],
    off: [],
  },
  {
    name: "Embedded",
    for: "A standing production line",
    price: "Monthly",
    unit: { one: "retainer", annual: "retainer" },
    note: "An agreed module throughput each month, plus refresh.",
    cta: "Talk to us",
    featured: false,
    features: [
      "Everything in Programme",
      "Agreed monthly module volume",
      "Library refresh included",
      "Named producer and director",
      "Priority turnaround on policy changes",
      "Quarterly library health review",
      "Unlimited languages",
    ],
    off: [],
  },
  {
    name: "Enterprise",
    for: "Multi-entity or regulated",
    price: "Custom",
    unit: { one: "let's talk", annual: "let's talk" },
    note: "For group structures, works councils and audit regimes.",
    cta: "Talk to us",
    featured: false,
    features: [
      "Everything in Embedded",
      "Per-entity and per-plant versioning",
      "Regulatory review workflow",
      "Master service agreement",
      "Security and DPA review",
      "On-site shooting where AI can't serve",
      "Dedicated delivery manager",
    ],
    off: [],
  },
];

export default function PricingTiers() {
  const [mode, setMode] = useState<"one" | "annual">("one");

  return (
    <>
      <div className="brow" style={{ justifyContent: "center", alignItems: "center" }}>
        <div className="p-toggle" role="group" aria-label="Engagement type">
          <button aria-pressed={mode === "one"} onClick={() => setMode("one")}>
            One-off project
          </button>
          <button aria-pressed={mode === "annual"} onClick={() => setMode("annual")}>
            Annual library
          </button>
        </div>
        {mode === "annual" && <span className="p-save">Lower per-module rate</span>}
      </div>

      <div className="p-grid rv">
        {TIERS.map((t) => (
          <div className={`p-card${t.featured ? " feat" : ""}`} key={t.name}>
            {t.featured && <span className="p-badge">Most common</span>}
            <div className="stack g6">
              <p className="p-name">{t.name}</p>
              <p className="p-for">{t.for}</p>
            </div>
            <div className="stack g6">
              <p className="p-price">
                {t.price}
                <span className="p-unit">{t.unit[mode]}</span>
              </p>
              <p className="p-note">{t.note}</p>
            </div>
            <Link
              href="/contact"
              className={`btn ${t.featured ? "btn-a" : "btn-g"}`}
              style={{ justifyContent: "center" }}
            >
              {t.cta}
            </Link>
            <div className="p-div" />
            <ul className="p-list">
              {t.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
              {t.off.map((f) => (
                <li className="off" key={f}>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
