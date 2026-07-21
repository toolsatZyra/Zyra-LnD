import type { Metadata } from "next";
import Link from "next/link";
import Reel from "@/components/Reel";
import CtaBox from "@/components/CtaBox";
import Amp, { withAmp } from "@/components/Amp";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Us",
  description:
    "Zyra L&D is the training arm of Zyra, an AI-native content studio in Gurgaon producing brand films, commercials and micro drama at broadcast standard.",
};

const STORY: [string, string, string][] = [
  ["2023", "The bet", "“We saw the entire world of production changing in real time. The only question was whether you were going to watch it happen, or build what comes next.”"],
  ["2024", "Going deep", "Months inside every tool, every model, every workflow. Pro bono work taken on to build at real scale and real speed. Several instructive failures."],
  ["2025", "At delivery scale", "Brand films, micro drama, performance creative and always-on social shipped for Adani, NDTV, Swiggy, Meesho and others. Over 5,000 AI creatives delivered."],
  ["2026", "Zyra L&D", "Marketing clients kept asking whether we could make their induction and compliance content too. It turned out to be the most under-served video budget in the building."],
];

const DIFF: [string, string, string][] = [
  ["01", "A studio, not a consultancy", "The large L&D vendors lead with strategy and list video as one modality among many, often subcontracted. Production is the whole job here."],
  ["02", "Deployable, not exportable", "SCORM, captions, WCAG conformance and language versions are in the build. Our job shouldn't end where your LMS admin's begins."],
  ["03", "We keep the files", "The point of file-based production is that a module is never finished — it's current, or it's out of date and cheap to fix."],
];

const VALUES: [string, string][] = [
  ["Say what it can't do", "Being early to the limits is worth more than being loud about the capabilities. Our published list exists for that reason."],
  ["Human-directed, always", "The brief, script and story are human decisions. AI accelerates execution. Every frame is reviewed before it ships."],
  ["Finish the job", "A deliverable that needs three weeks of someone else's work before it can be used isn't a deliverable."],
  ["Stay in our lane", "We make video. We don't sell learning strategy or assessment design, and we'll say when you need someone who does."],
];

const LIMITS: [string, string][] = [
  ["Not this", "Your CEO's actual face. Culture and values messages carry because a real, named person said them. Film it."],
  ["Not this", "Hands-on equipment demos. Where the exact machine, panel and torque matter, you need a camera on the floor."],
  ["Not yet", "Close-up lip-sync in Indian languages. Improving fast, still not broadcast-clean in most dialects."],
  ["Not us", "Branching-scenario design. We produce the video. The instructional design behind a deep branching sim isn't our craft."],
];

const TRUST: [string, string][] = [
  ["Client types", "In-house L&D and HR functions, GCCs, compliance teams, and the agencies that serve them."],
  ["Industries", "Infrastructure, media, food delivery, e-commerce, mobility, consumer subscription, manufacturing."],
  ["Standards", "Broadcast and OTT delivery specs. WCAG 2.1 AA. SCORM 1.2 through cmi5. Human review on every asset."],
  ["Partnership", "Technology partner to ByteDance, producing on the latest Seedance and Seedream models."],
];

export default function About() {
  return (
    <main>
      <section className="hero">
        <div className="glow" style={{ width: 400, height: 400, background: "var(--acc2)", left: -120, top: -150, opacity: 0.14 }} />
        <div className="wrap stack g24" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-copy stack g18">
            <span className="eye" style={{ alignSelf: "flex-start" }}>About us</span>
            <h1 className="dsp d1 oneline">
              A production studio, <span className="grad">pointed at L<Amp />D.</span>
            </h1>
            <p className="lede">
              Zyra is an AI-native content studio in Gurgaon. We make brand films,
              commercials and micro drama for clients who pay for delivery, on deadline, at
              broadcast standard. Zyra L&amp;D is that same floor, aimed at the part of the
              business with the biggest video appetite and the smallest budget.
            </p>
          </div>
          <Reel seed={50} label="Studio reel — now playing" corner="Gurgaon · Est. 2023" showShot={false} />
        </div>
      </section>

      <section className="band alt">
        <div className="wrap grid-x c2 rv" style={{ gap: "clamp(20px,3.4vw,52px)", alignItems: "start" }}>
          <div className="stack g14">
            <p className="m m-a">Mission</p>
            <h2 className="dsp d2">Training video should cost<br />what a slide deck costs.</h2>
          </div>
          <p className="lede">
            Not in quality — in friction. The reason internal training looks worse than
            external marketing has never been that L&amp;D teams don&apos;t care.
            It&apos;s that a shoot costs too much to justify for a twelve-minute module
            about expense policy, so the module gets made in PowerPoint and nobody watches
            it. We exist to remove that trade-off.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap stack g24">
          <div className="head rv">
            <p className="m m-a">Story</p>
            <h2 className="dsp d2">How we got here.</h2>
          </div>
          <div className="rv">
            {STORY.map(([yr, title, body]) => (
              <div key={yr} style={{ display: "grid", gridTemplateColumns: "78px 1fr", gap: 18, padding: "16px 0", borderTop: "1px solid var(--line)" }}>
                <p className="m m-a" style={{ fontSize: 12 }}>{yr}</p>
                <div className="stack g6">
                  <h3 className="dsp d4">{withAmp(title)}</h3>
                  <p className="bxs">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band mesh gridbg">
        <div className="wrap stack g34" style={{ position: "relative", zIndex: 2 }}>
          <div className="head rv">
            <p className="m m-a">What makes us different</p>
            <h2 className="dsp d2">Everyone else in this<br />category buries video.</h2>
          </div>
          <div className="grid-x c3 rv">
            {DIFF.map(([n, title, body]) => (
              <div className="card" key={n}>
                <div className="ico">{n}</div>
                <h3 className="dsp d4">{title}</h3>
                <p className="bxs">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band alt">
        <div className="wrap stack g34">
          <div className="head rv">
            <p className="m m-a">Values</p>
            <h2 className="dsp d2">Four things we<br />argue about internally.</h2>
          </div>
          <div className="grid-x c4 rv">
            {VALUES.map(([title, body]) => (
              <div className="card" key={title}>
                <h3 className="dsp d4">{title}</h3>
                <p className="bxs">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band deep">
        <div className="wrap grid-x c2 rv" style={{ gap: "clamp(20px,3.4vw,52px)", alignItems: "start" }}>
          <div className="stack g14">
            <p className="m m-a">Updated quarterly · July 2026</p>
            <h2 className="dsp d2">What we&apos;ll tell you<br />to shoot instead.</h2>
            <p className="lede">
              Four things AI production still doesn&apos;t do well. We&apos;d rather lose
              the module than deliver one of these badly.
            </p>
          </div>
          <div className="spec">
            {LIMITS.map(([k, v], i) => (
              <div className="spec-r" key={i}>
                <p className="m">{k}</p>
                <p className="bxs">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap stack g34">
          <div className="head rv">
            <p className="m m-a">Trust indicators</p>
            <h2 className="dsp d2">Who we work with, and<br />what we hold ourselves to.</h2>
          </div>
          <div className="grid-x c4 rv">
            {TRUST.map(([k, v]) => (
              <div className="stack g10" key={k} style={{ borderTop: "1px solid var(--line)", paddingTop: 12 }}>
                <p className="m">{k}</p>
                <p className="bxs">{v}</p>
              </div>
            ))}
          </div>
          <p className="bxs rv" style={{ maxWidth: "62ch", borderTop: "1px solid var(--line)", paddingTop: 14 }}>
            We don&apos;t display security certifications, analyst placements or
            review-site ratings we haven&apos;t earned. When we hold them, they&apos;ll be
            here.
          </p>
          <div className="brow rv">
            <Link href="/services" className="btn btn-g">See the services</Link>
          </div>
        </div>
      </section>

      <CtaBox
        title={<>Come and see how<br />it&apos;s actually made.</>}
        body="Send us a module you're dreading — the stale one, the boring one, or the one quoted at a number you can't defend. We'll show you how we'd make it."
      />
    </main>
  );
}
