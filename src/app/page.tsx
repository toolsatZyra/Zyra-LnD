import type { Metadata } from "next";
import Link from "next/link";
import Reel from "@/components/Reel";
import Frame from "@/components/Frame";
import Marquee from "@/components/Marquee";
import FormatTabs from "@/components/FormatTabs";
import StoryCarousel from "@/components/StoryCarousel";
import CtaBox from "@/components/CtaBox";
import Amp, { withAmp } from "@/components/Amp";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const WHY: [string, string, string][] = [
  ["01", "Broadcast-grade craft", "Scripted, scored, graded and finished to delivery spec — cinematography and sound design, not slides with a voiceover laid over them."],
  ["02", "Production in days", "Films in five to seven days, short-form in about one. No crew, location or presenter availability gating your rollout."],
  ["03", "Localised at scale", "Native lip-sync and re-rendered on-screen text per language, generated from one master build — not subtitles pasted over English."],
  ["04", "Updated mid-rollout", "We retain every project file. A regulatory change becomes a scene-level re-cut, not a fresh production cycle."],
  ["05", "LMS-ready on delivery", "SCORM-packaged, captioned and WCAG 2.1 AA conformant, tested in your environment. Not a folder of raw exports."],
];

const METRICS: [number, string, string, string, string][] = [
  [2, "4.2×", "faster from brief to a delivered induction film", "Onboarding", "00:02:14"],
  [3, "9", "languages produced from a single master build", "Localisation", "00:11:38"],
  [4, "1 day", "to re-cut the module when the policy changed", "Compliance", "00:04:52"],
  [5, "40+", "modules delivered inside a single quarter", "Library build", "00:06:07"],
];

const USE_CASES: [number, string, string, string][] = [
  [6, "Onboarding & induction", "A hero welcome film plus the short-module series behind it. The most-rewatched content you own, and usually the most neglected.", "00:02:14"],
  [7, "Compliance & policy", "POSH, code of conduct, privacy, cyber. Scenario-led rather than narrated slides, with records that stand up to audit.", "00:11:38"],
  [8, "Safety, EHS & SOP", "Procedure video built around your equipment and your floor. The one category where a generic library is worse than nothing.", "00:04:52"],
];

const BEFORE = [
  "Quarter-long production cycles, most of it crew and location scheduling",
  "Every policy revision triggers a full reshoot, from call sheet onward",
  "Single-language masters, or a separate production per market",
  "Raw exports handed over — packaging, tracking and rollout left to you",
  "Priced per shoot day, so library-scale never clears the budget line",
  "Captions and audio description quoted as line-item extras",
  "Completion rates nobody wants to put in front of the board",
];

const AFTER = [
  "Broadcast-grade modules in days — five to seven for a film, about one for short-form",
  "Re-cut the affected scene; the rest of the module holds untouched",
  "Every language re-voiced and re-rendered from a single master build",
  "SCORM-packaged and LMS-tested, tracking learner progress from day one",
  "Priced per module, so an entire curriculum clears the same budget line",
  "Captions, transcripts and WCAG 2.1 AA built in, not bolted on",
  "Learner engagement that survives a look from your CFO",
];

const COMPARE: string[][] = [
  ["Turnaround", "5–7 days a film", "8–12 weeks", "Instant, but generic", "Variable"],
  ["Your equipment & floor", "Yes", "Yes", "No", "Sometimes"],
  ["Update when policy changes", "Re-cut in days", "Full reshoot", "Wait for the vendor", "Depends who's left"],
  ["Languages", "Re-voiced per language", "Priced per market", "Whatever ships", "Rarely"],
  ["SCORM / xAPI packaging", "Included", "Usually not offered", "Included", "Your problem"],
  ["WCAG 2.1 AA + audio description", "Included", "Quoted as an extra", "Varies", "Rarely"],
  ["Cost at library scale", "Per module", "Per shoot day", "Per seat, forever", "Headcount"],
];

const SPEC: [string, string][] = [
  ["Packaging", "SCORM 1.2 as standard; SCORM 2004, xAPI or cmi5 on request. Manifest validated and completion tracking tested in your LMS before handover."],
  ["Captions", "Burned-in and sidecar SRT/VTT, with a timestamped transcript for search, reference and compliance records."],
  ["Accessibility", "WCAG 2.1 AA conformant, including the audio-description track most vendors omit and most buyers don't know Level AA requires."],
  ["Localisation", "Native lip-sync per language with on-screen typography rebuilt, generated from the master build rather than subtitled over the original."],
  ["Deliverables", "16:9 master for the LMS, 9:16 cut-down for mobile and Teams, plus a bandwidth-optimised encode for low-connectivity sites."],
  ["Version control", "Every project file retained. A regulatory change becomes a scene-level re-cut, not a fresh production cycle."],
];

const STEPS: [string, string, string][] = [
  ["01", "Scope", "We audit the curriculum you have — what's stale, what's missing, what can be re-versioned instead of rebuilt."],
  ["02", "Script", "Your SME gives us one session per module. We write, you approve. That's the whole demand on your team."],
  ["03", "Produce", "Storyboard, generation, grade, voice, sound. Every frame reviewed by a director before it reaches you."],
  ["04", "Review", "One consolidated round of timestamped notes. Legal and brand review in the same pass, not sequentially."],
  ["05", "Deliver", "Packaged, captioned, versioned, tested in your LMS — then held on retainer for updates."],
];

const WORK: [number, string, string][] = [
  [16, "Onboarding", "00:02:14"], [17, "POSH", "00:11:38"],
  [18, "Plant safety", "00:04:52"], [19, "Product", "00:06:07"],
  [20, "Cyber", "00:08:41"], [21, "Enablement", "00:05:19"],
  [22, "Field SOP", "00:03:26"], [23, "Induction", "00:09:02"],
];

const LIMITS: [string, string][] = [
  ["Your CEO's actual face", "Culture and values messages carry because a real, named person said them. Film it."],
  ["Hands-on equipment demos", "Where the exact machine, panel and torque matter, you need a camera on the floor."],
  ["Close-up lip-sync in Indian languages", "Improving fast, still not broadcast-clean in most dialects. We shift to voiceover-over-action."],
  ["Branching-scenario design", "We produce the video. The instructional design behind a deep branching sim isn't our craft, and we'll say so."],
];

const FAQ: [string, string][] = [
  ["Will our people be able to tell it's AI?", "Not if the finish is done properly — grade, sound design and voice are where AI-native work either becomes a film or stays a demo, and that pass is where most of our time goes. Where a format genuinely needs a real human on camera, we'll tell you before you commission it."],
  ["Does it work with our LMS?", "Yes. We package SCORM 1.2 by default because every LMS supports it, and SCORM 2004, xAPI or cmi5 on request. We test the package in your environment before handover rather than after."],
  ["How many languages can you deliver?", "As many as your workforce needs. Because production is file-based, additional languages are re-voiced and re-rendered from the same build — including on-screen text, not just subtitles pasted over the original."],
  ["What happens when a policy changes?", "We hold the project files. Changing a regulation citation, a screenshot or a step means re-cutting that section, usually same-week. This is the single biggest cost difference against a conventional shoot, where any change means a reshoot."],
  ["Do you do instructional design too?", "We write scripts and structure modules. We don't do deep learning architecture, assessment validity or branching design — we partner for that, or work alongside your existing ID team. Being clear about that line is why our estimates hold."],
  ["Can you work from our existing decks?", "Usually yes, and it's the cheapest way to start. An approved deck plus one SME session is normally enough for a first module, and it means legal has already seen the substance."],
  ["What does it cost?", "It depends on module count, language count and how much can be re-versioned rather than built new. We scope it on the call, and the curriculum audit that informs the quote is free and yours to keep either way."],
];

const EXPLORE = [
  "Onboarding video", "POSH training", "Code of conduct", "Cyber awareness",
  "Plant safety & SOP", "Product training", "Sales enablement", "Channel & dealer training",
  "Microlearning series", "Animated explainers", "Software walkthroughs", "Localisation",
  "SCORM packaging", "Captions & transcripts", "Audio description", "Library refresh",
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="glow" style={{ width: 420, height: 420, background: "var(--acc)", right: -90, top: -140, opacity: 0.16 }} />
        <div className="glow" style={{ width: 330, height: 330, background: "var(--acc2)", left: -110, bottom: -150, opacity: 0.13 }} />
        <div className="wrap stack g24" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-copy stack g18">
            <h1 className="dsp d1 oneline">
              Corporate training, <span className="grad">made like cinema.</span>
            </h1>
            <p className="lede">
              We produce broadcast-grade training video across the entire learning
              lifecycle — onboarding, compliance, safety and product enablement. Built
              AI-native in days rather than quarters, localised into every language your
              workforce speaks, and delivered SCORM-packaged, captioned and LMS-tested on
              day one.
            </p>
            <div className="brow">
              <Link href="/contact" className="btn btn-a">Book a consultation</Link>
              <Link href="/services" className="btn btn-g">Explore services</Link>
            </div>
          </div>
          <Reel seed={1} />
        </div>
      </section>

      <Marquee />

      <section className="band">
        <div className="wrap stack g34">
          <div className="head rv">
            <p className="m m-a">Why Zyra</p>
            <h2 className="dsp d2">A studio built for every stage<br />of the learning lifecycle.</h2>
          </div>
          <div className="grid-x c5 rv">
            {WHY.map(([n, title, body]) => (
              <div className="card" key={n}>
                <div className="ico">{n}</div>
                <h3 className="dsp d4">{title}</h3>
                <p className="bxs">{body}</p>
              </div>
            ))}
          </div>
          <div className="brow rv">
            <Link href="/services" className="btn btn-g">See it in action</Link>
          </div>
        </div>
      </section>

      <section className="band alt">
        <div className="wrap stack g34">
          <div className="head rv">
            <p className="m m-a">Outcomes</p>
            <h2 className="dsp d2">Real learning impact,<br />across every programme.</h2>
          </div>
          <div className="grid-x c4 rv">
            {METRICS.map(([seed, big, body, label, tc]) => (
              <div className="met" key={label}>
                <div className="vid mv">
                  <Frame seed={seed} />
                  <span className="tag br_ num">{tc}</span>
                </div>
                <div className="mb">
                  <span className="met-n num">{big}</span>
                  <p className="bxs">{body}</p>
                  <p className="m">{label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="m rv">
            Figures illustrate typical engagements. Client-attributed case studies
            published as they clear approval.
          </p>
        </div>
      </section>

      <section className="band mesh gridbg">
        <div className="wrap stack g24" style={{ position: "relative", zIndex: 2 }}>
          <div className="head rv">
            <p className="m m-a">Formats</p>
            <h2 className="dsp d2">Every format your<br />curriculum needs.</h2>
          </div>
          <FormatTabs />
        </div>
      </section>

      <section className="band">
        <div className="wrap stack g34">
          <div className="head rv">
            <p className="m m-a">Use cases</p>
            <h2 className="dsp d2">Built for every<br />training programme you run.</h2>
            <p className="lede">
              From day-one induction and mandatory compliance to plant-floor procedure and
              product enablement — we produce the modules that carry the most weight and
              attract the least budget.
            </p>
          </div>
          <div className="grid-x c3 rv">
            {USE_CASES.map(([seed, title, body, tc]) => (
              <div className="uc" key={title}>
                <div className="vid uv">
                  <Frame seed={seed} />
                  <span className="tag br_ num">{tc}</span>
                </div>
                <div className="ub">
                  <h3 className="dsp d4">{withAmp(title)}</h3>
                  <p className="bxs">{body}</p>
                  <Link href="/services" className="tl">Explore →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band alt">
        <div className="wrap stack g34">
          <div className="head ctr rv">
            <span className="eye" style={{ borderColor: "color-mix(in srgb, var(--acc) 32%, transparent)", color: "var(--acc)" }}>
              Trusted by teams at Swiggy, Meesho <Amp /> CARS24
            </span>
            <h2 className="dsp d2">
              Why L<Amp />D teams<br />choose Zyra.
            </h2>
          </div>
          <StoryCarousel />
          <p className="m rv ctr">
            Quotes are illustrative placeholders · named client stories published as they
            clear approval
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap stack g34">
          <div className="head rv ctr">
            <p className="m m-a">The difference</p>
            <h2 className="dsp d2 oneline">
              From quarter-long cycles to mid-flight updates.
            </h2>
          </div>
          <div className="ba rv">
            <div className="ba-col">
              <div className="ba-h"><p className="m">Traditional production</p></div>
              {BEFORE.map((b) => (
                <div className="ba-r" key={b}>
                  <span className="ic ic-x">✕</span>
                  <p className="bs">{b}</p>
                </div>
              ))}
            </div>
            <div className="ba-col good">
              <div className="ba-h"><p className="m m-a">With Zyra L<Amp />D</p></div>
              {AFTER.map((a) => (
                <div className="ba-r" key={a}>
                  <span className="ic ic-c">✓</span>
                  <p className="bs">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="band alt">
        <div className="wrap stack g24">
          <div className="head rv">
            <p className="m m-a">How we compare</p>
            <h2 className="dsp d2">Against the other ways<br />this gets made.</h2>
          </div>
          <div className="cmp-w rv">
            <table className="cmp">
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Zyra L<Amp />D</th>
                  <th>Production agency</th>
                  <th>Off-the-shelf library</th>
                  <th>In-house / freelance</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([label, ...cells]) => (
                  <tr key={label}>
                    <td className="m">{withAmp(label)}</td>
                    {cells.map((c, i) => (
                      <td key={i} className={i === 0 ? "own" : undefined}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap stack g24">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 18, flexWrap: "wrap" }} className="rv">
            <div className="head">
              <p className="m m-a">Selected work</p>
              <h2 className="dsp d2">Recent modules.</h2>
            </div>
            <p className="m">Hover any frame to preview · click for the full cut</p>
          </div>
          <div className="grid-x c4 rv">
            {WORK.map(([seed, label, tc]) => (
              <button className="vid cell" key={seed} aria-label={`Play ${label} module`}>
                <Frame seed={seed} />
                <span className="tag tr_">{label}</span>
                <span className="tag bl_ num">{tc}</span>
                <span className="pl">▶ Play</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="band deep">
        <div className="wrap grid-x c2 rv" style={{ gap: "clamp(20px,3.4vw,52px)", alignItems: "start" }}>
          <div className="stack g18">
            <p className="m m-a">Delivery</p>
            <h2 className="dsp d2">We don&apos;t hand you<br />a folder of MP4s.</h2>
            <p className="lede">
              Most production vendors stop at the export and leave deployment, tracking and
              conformance to your LMS admin. Every line here ships inside the build — never
              quoted as a line-item extra.
            </p>
            <div className="brow">
              <Link href="/contact" className="btn btn-a">Book a consultation</Link>
            </div>
          </div>
          <div className="spec">
            {SPEC.map(([k, v]) => (
              <div className="spec-r" key={k}>
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
            <p className="m m-a">How it works</p>
            <h2 className="dsp d2">Five stages, and you<br />only appear in two.</h2>
          </div>
          <div className="grid-x c5 rv">
            {STEPS.map(([n, title, body]) => (
              <div className="step" key={n}>
                <span className="step-n">STEP {n}</span>
                <h4 className="dsp d4">{title}</h4>
                <p className="bxs">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band-s">
        <div className="wrap rv">
          <div className="tiles">
            <div className="tile tile-w">
              <span className="tile-n grad num">5–7 days</span>
              <p className="bxs">Typical turnaround for a finished film, against the three months a conventional shoot needs to schedule, film and post.</p>
            </div>
            <div className="tile"><span className="tile-n num">5,000+</span><p className="m">Creatives delivered</p></div>
            <div className="tile"><span className="tile-n num">50+</span><p className="m">Films produced</p></div>
            <div className="tile"><span className="tile-n num">~1 day</span><p className="m">Per short module</p></div>
            <div className="tile"><span className="tile-n num">WCAG</span><p className="m">2.1 AA on delivery</p></div>
            <div className="tile tile-w">
              <span className="tile-n grad num">15–20%</span>
              <p className="bxs">Annual refresh retainer against build cost — the industry standard for maintenance, and why your library stops going stale.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band alt">
        <div className="wrap grid-x c2 rv" style={{ gap: "clamp(20px,3.4vw,52px)", alignItems: "start" }}>
          <div className="stack g14">
            <p className="m m-a">Updated quarterly · July 2026</p>
            <h2 className="dsp d2">What we&apos;ll tell you<br />to shoot instead.</h2>
            <p className="lede">
              Four things AI production still doesn&apos;t do well. We&apos;d rather lose
              the module than deliver one of these badly.
            </p>
          </div>
          <div style={{ borderTop: "1px solid var(--line)" }}>
            {LIMITS.map(([title, body]) => (
              <div key={title} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 13, padding: "13px 0", borderBottom: "1px solid var(--line)", alignItems: "baseline" }}>
                <span style={{ color: "var(--acc)", fontSize: 11 }}>✕</span>
                <div className="stack g6">
                  <h4 className="dsp d4">{title}</h4>
                  <p className="bxs">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap faq rv">
          <div className="stack g18">
            <p className="m m-a">FAQ</p>
            <h2 className="dsp d2">Questions we get<br />asked a lot.</h2>
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

      <section className="band-s alt">
        <div className="wrap stack g18 rv">
          <p className="m">Explore more</p>
          <div className="lg">
            {EXPLORE.map((e) => (
              <Link href="/services" key={e}>{e}</Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBox
        title={<>Send us one module<br />you&apos;re dreading.</>}
        body="The one that's out of date, too boring to finish, or quoted at a number you can't defend. We'll come back with how we'd make it and what it would take."
      />
    </main>
  );
}
