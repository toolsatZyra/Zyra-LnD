import type { Metadata } from "next";
import Link from "next/link";
import PricingTiers from "@/components/PricingTiers";
import CtaBox from "@/components/CtaBox";

export const metadata: Metadata = {
  alternates: { canonical: "/pricing" },
  title: "Pricing",
  description:
    "Priced per module, not per shoot day. See exactly how we scope an engagement and what moves the number, so you can build a budget before you speak to us.",
};

const DRIVERS: [string, string, string][] = [
  ["01", "Run time and module count", "The biggest lever by far. A 3-minute explainer and a 20-minute compliance module differ by an order of magnitude — and per-module rate falls sharply with volume."],
  ["02", "Format", "Screencast is cheapest. Animated explainer and scenario drama cost the most per minute, because both are built frame by frame rather than captured."],
  ["03", "Languages and versions", "Additional languages are a fraction of the original build, since we re-voice and re-render from the same master. Per-plant or per-entity versions cost less again."],
  ["04", "How ready your source material is", "An approved deck plus one SME session is the cheapest possible start. A blank page and six stakeholders is the most expensive. This is the lever teams most often underestimate."],
  ["05", "Review rounds", "Two consolidated rounds are included. Sequential legal-then-brand-then-leadership review is what turns a two-week module into a two-month one."],
];

const ADDONS: [string, string, string][] = [
  ["Additional languages", "Re-voiced and re-rendered from the master build, with on-screen text rebuilt rather than subtitled over.", "Fraction of build cost"],
  ["Library refresh retainer", "We hold the project files and re-cut affected sections when a policy, product or brand changes.", "15–20% of build, annually"],
  ["Accessibility pack", "Audio description track, WCAG 2.1 AA conformance testing and a remediation pass. Included from Programme upward.", "Per module"],
  ["On-site capture", "For the things AI shouldn't do — your CEO on camera, hands-on equipment demos, real plant-floor procedure.", "Per shoot day"],
  ["Rush delivery", "When a regulator, a launch or an incident sets the date rather than you.", "Surcharge"],
];

const BENCHMARKS: [string, string][] = [
  ["Conventional shoot", "A corporate film in India commonly runs ₹30–80 lakh for a full production, and any change means a reshoot."],
  ["Off-the-shelf library", "Per seat, per year, forever — and none of it features your equipment, your policies or your people."],
  ["In-house build", "Headcount plus tooling, and the capability leaves when the person does."],
  ["Maintenance, whoever builds it", "Industry practice is 15–20% of original build cost annually. Budget it or the library goes stale."],
];

const FAQ: [string, string][] = [
  ["Why aren't there prices on this page?", "Because any number we printed would be wrong for most of the people reading it. A 90-second vertical and a 20-minute branching compliance module are different jobs by an order of magnitude. What we've published instead is the scoping logic — the five levers above — so you can build a realistic budget before you talk to anyone, including our competitors."],
  ["How quickly can I get a real number?", "Same week for a single module. For a library, the free curriculum audit takes about a week, and the quote comes with it. You keep the audit either way."],
  ["What's the cheapest way to start?", "One module, built from a deck you've already had approved, in English, with two review rounds. It gives you a real artefact to circulate internally, and it prices the rest of the library accurately."],
  ["Do you charge for the curriculum audit?", "No. We audit what you have, flag what's stale, and tell you what can be re-versioned rather than rebuilt. If that means you need less from us than you thought, we'd rather you found out before signing."],
  ["Is there a minimum engagement?", "No minimum for a pilot. The Programme rate needs roughly ten modules to make sense, and Embedded assumes an ongoing monthly volume."],
  ["What happens if we go over the review rounds?", "We'll tell you before it costs you anything. Extra rounds are billed at an agreed rate, but the more common fix is consolidating your reviewers into one pass, which we'll help set up at the start."],
  ["Can we pay per module rather than a retainer?", "Yes. Pilot and Programme are both project-billed. The retainer only makes sense once you have a library big enough that keeping it current is its own job."],
];

export default function Pricing() {
  return (
    <main>
      <section className="hero">
        <div className="glow" style={{ width: 400, height: 400, background: "var(--acc)", right: -100, top: -160, opacity: 0.14 }} />
        <div className="wrap stack g24" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-copy stack g18 ctr" style={{ textAlign: "center" }}>
            <h1 className="dsp d1 oneline">
              Priced per module, <span className="grad">not per shoot day.</span>
            </h1>
            <p className="lede" style={{ margin: "0 auto" }}>
              That single difference is why library-scale rollout clears the budget line.
              Below is exactly how we scope an engagement and what moves the number — so
              you can build a realistic budget before you ever speak to us.
            </p>
          </div>
        </div>
      </section>

      <section className="band" style={{ paddingTop: "clamp(18px,2.4vw,32px)" }}>
        <div className="wrap stack g34">
          <PricingTiers />
          <p className="m rv ctr">
            Every engagement is quoted, not listed — because a 90-second vertical and a
            20-minute branching module aren&apos;t the same job. Below is what actually
            moves the number.
          </p>
        </div>
      </section>

      <section className="band alt">
        <div className="wrap grid-x c2 rv" style={{ gap: "clamp(20px,3.4vw,52px)", alignItems: "start" }}>
          <div className="stack g14">
            <p className="m m-a">What moves the number</p>
            <h2 className="dsp d2">Five things, and you control four.</h2>
            <p className="lede">
              Most vendors won&apos;t tell you this, which is why quotes arrive as a single
              unexplained figure. These are the levers we&apos;ll walk through on the call.
            </p>
          </div>
          <div>
            {DRIVERS.map(([n, title, body]) => (
              <div className="drv" key={n}>
                <span className="drv-n">{n}</span>
                <div className="stack g6">
                  <h3 className="dsp d4">{title}</h3>
                  <p className="bxs">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap stack g24">
          <div className="head rv">
            <p className="m m-a">Add-ons</p>
            <h2 className="dsp d2">Priced separately, because not everyone needs them.</h2>
          </div>
          <div className="stack g14 rv">
            {ADDONS.map(([title, body, tag]) => (
              <div className="addon" key={title}>
                <div className="stack g6">
                  <h3 className="dsp d4">{title}</h3>
                  <p className="bxs">{body}</p>
                </div>
                <span className="p-save">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band deep">
        <div className="wrap grid-x c2 rv" style={{ gap: "clamp(20px,3.4vw,52px)", alignItems: "center" }}>
          <div className="stack g14">
            <p className="m m-a">The honest comparison</p>
            <h2 className="dsp d2">What you&apos;re comparing us against.</h2>
            <p className="lede">
              Industry figures, not ours — so you can sanity-check any quote you receive,
              including ours.
            </p>
          </div>
          <div className="spec">
            {BENCHMARKS.map(([k, v]) => (
              <div className="spec-r" key={k}>
                <p className="m">{k}</p>
                <p className="bxs">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap faq rv">
          <div className="stack g18">
            <p className="m m-a">Pricing FAQ</p>
            <h2 className="dsp d2">Before you ask us to quote.</h2>
            <div className="brow">
              <Link href="/contact" className="btn btn-a">Book a consultation</Link>
            </div>
          </div>
          <div>
            {FAQ.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary>{q}</summary>
                <p className="a">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBox
        title={<>Tell us the module count.<br />We&apos;ll tell you the number.</>}
        body="Bring a rough list of what your curriculum needs to cover. You'll leave the call with a real figure and a free audit of what you already have."
      />
    </main>
  );
}
