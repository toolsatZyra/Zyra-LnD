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
  ["01", "Built to earn attention", "Every module begins with the learner's reality. We use relevance, curiosity, visual storytelling and realistic situations to give people a reason to continue watching."],
  ["02", "Designed for learning outcomes", "We structure every module around what the learner should understand, remember or do differently — not around how many slides need to be converted."],
  ["03", "Produced AI-first", "AI lets us create characters, environments, scenarios, animation and multiple visual directions without the cost and complexity of a conventional shoot."],
  ["04", "Localised at scale", "Create multiple language and regional versions from one approved master while maintaining consistent visuals, terminology and brand standards."],
  ["05", "Ready to deploy", "Receive finished videos, captions, transcripts, accessibility support and LMS-ready packages based on your requirements."],
];

/* Qualitative outcomes only — no percentages or statistics until client-verified
   figures clear approval (per the home-page publishing note). */
const OUTCOMES: [string, string][] = [
  ["Higher completion", "Shorter, better-structured and more engaging modules give learners a stronger reason to reach the end."],
  ["Better retention", "Relevant scenarios, visual explanations and active recall help important information become easier to remember."],
  ["Faster rollout", "AI-first production reduces dependence on actors, locations, crews and repeated production schedules."],
  ["Easier updates", "Individual scenes, product details, policy references and language versions can be updated without rebuilding the whole module."],
];

const USE_CASES: [number, string, string, string, string][] = [
  [6, "Employee onboarding & induction", "Transform induction decks, company presentations and policy documents into a structured first-week learning experience.", "Help new employees understand the company, role, systems and expectations faster.", "00:02:14"],
  [7, "Compliance & policy training", "Turn POSH, ethics, code of conduct, data privacy and cybersecurity policies into realistic, scenario-led learning.", "Move beyond passive policy reading towards better awareness and decision-making.", "00:11:38"],
  [8, "Safety, EHS & SOP training", "Visualise procedures, risks, environments and consequences so employees can see how the correct process should be performed.", "Improve procedural clarity for plant, field, logistics and operations teams.", "00:04:52"],
  [17, "Product & systems training", "Explain products, tools, features and workflows through demonstrations, visual storytelling and contextual examples.", "Improve product understanding and reduce repetitive support requirements.", "00:06:07"],
  [20, "Sales & channel enablement", "Build realistic customer conversations, product pitches and objection-handling scenarios for employees, partners and dealers.", "Create more consistent messaging and accelerate representative readiness.", "00:08:41"],
  [14, "Leadership & behavioural learning", "Use workplace situations to teach feedback, communication, collaboration, inclusion, accountability and management skills.", "Make behavioural concepts relevant to the decisions employees face every day.", "00:05:19"],
];

const BEFORE = [
  "Presentations converted into videos",
  "Robotic presenters reading on-screen text",
  "Generic stock footage with no connection to the workplace",
  "Long modules covering too many objectives",
  "One format used for every kind of subject",
  "Production that becomes expensive to update",
  "Completion measured without knowing whether people paid attention",
];

const AFTER = [
  "Training structured around learner attention",
  "Realistic stories, demonstrations and visual explanations",
  "The right format selected for each learning objective",
  "Focused modules designed to reduce cognitive overload",
  "AI-first production supported by human creative direction",
  "Easier localisation, versioning and updates",
  "Measurement linked to understanding and performance",
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
            <h1 className="dsp d1 d1-hero oneline">
              Corporate training videos <span className="grad">built to hold attention.</span>
            </h1>
            <p className="lede">
              Most training content is technically completed but rarely watched,
              remembered or applied. Probbit combines storytelling, learning design and
              AI-first production to transform onboarding, compliance, safety, sales and
              product training into engaging content built to hold attention and improve
              learning outcomes.
            </p>
            <div className="brow">
              <Link href="/contact" className="btn btn-a">Transform a training module</Link>
              <Link href="/services" className="btn btn-g">Explore our services</Link>
            </div>
          </div>
          <Reel seed={1} label="See what boring training can become" />
        </div>
      </section>

      <Marquee />

      <section className="band">
        <div className="wrap stack g34">
          <div className="head rv">
            <p className="m m-a">Why Probbit</p>
            <h2 className="dsp d2">AI makes production faster. We use it to make training better.</h2>
            <p className="lede">
              AI video tools can generate presenters, voices and visuals. But tools alone
              don&apos;t know what will hold attention, simplify a difficult concept or
              help someone remember the right action. Probbit combines AI production with
              human writing, creative direction, learning structure, editing and quality
              control to deliver content that looks better and works harder.
            </p>
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
            <Link href="/services" className="btn btn-g">See how we work</Link>
          </div>
        </div>
      </section>

      <section className="band alt">
        <div className="wrap stack g34">
          <div className="head rv">
            <p className="m m-a">Outcomes</p>
            <h2 className="dsp d2">Better content creates better learning outcomes.</h2>
            <p className="lede">
              A completed module is not always an effective module. We help teams create
              training designed to improve attention, understanding, knowledge recall and
              real-world application.
            </p>
          </div>
          <div className="grid-x c4 rv">
            {OUTCOMES.map(([title, body]) => (
              <div className="card" key={title}>
                <h3 className="dsp d4">{title}</h3>
                <p className="bxs">{body}</p>
              </div>
            ))}
          </div>
          <p className="m rv">
            Qualitative outcomes shown while client-verified results clear approval.
          </p>
        </div>
      </section>

      <section className="band mesh gridbg">
        <div className="wrap stack g24" style={{ position: "relative", zIndex: 2 }}>
          <div className="head rv">
            <p className="m m-a">Formats</p>
            <h2 className="dsp d2">The right creative format for every learning objective.</h2>
            <p className="lede">
              Not every training module needs to look like a film. It needs the right
              combination of story, demonstration, visual explanation and instruction to
              make the subject easy to understand and difficult to ignore.
            </p>
          </div>
          <FormatTabs />
          <div className="brow rv">
            <Link href="/services" className="btn btn-g">Explore all formats</Link>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap stack g34">
          <div className="head rv">
            <p className="m m-a">Use cases</p>
            <h2 className="dsp d2">Make every kind of training worth watching.</h2>
            <p className="lede">
              From an employee&apos;s first day to mandatory annual compliance, Probbit
              transforms the content organisations need people to understand but often
              struggle to make engaging.
            </p>
          </div>
          <div className="grid-x c3 rv">
            {USE_CASES.map(([seed, title, body, outcome, tc]) => (
              <div className="uc" key={title}>
                <div className="vid uv">
                  <Frame seed={seed} />
                  <span className="tag br_ num">{tc}</span>
                </div>
                <div className="ub">
                  <h3 className="dsp d4">{withAmp(title)}</h3>
                  <p className="bxs">{body}</p>
                  <p className="m">Outcome · {outcome}</p>
                  <Link href="/services" className="tl">Explore →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="brow rv">
            <Link href="/services" className="btn btn-g">Find your training use case</Link>
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
              Why L<Amp />D teams choose Probbit.
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
            <h2 className="dsp d2">
              Your training shouldn&apos;t look like it was created in the &apos;90s.
            </h2>
          </div>
          <div className="ba rv">
            <div className="ba-col">
              <div className="ba-h"><p className="m">Traditional training content</p></div>
              {BEFORE.map((b) => (
                <div className="ba-r" key={b}>
                  <span className="ic ic-x">✕</span>
                  <p className="bs">{b}</p>
                </div>
              ))}
            </div>
            <div className="ba-col good">
              <div className="ba-h"><p className="m m-a">With Probbit</p></div>
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
            <h2 className="dsp d2">Against the other ways this gets made.</h2>
          </div>
          <div className="cmp-w rv">
            <table className="cmp">
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Probbit L<Amp />D</th>
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
            <h2 className="dsp d2">We don&apos;t hand you a folder of MP4s.</h2>
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
            <h2 className="dsp d2">Five stages, and you only appear in two.</h2>
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
            <h2 className="dsp d2">What we&apos;ll tell you to shoot instead.</h2>
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
            <h2 className="dsp d2">Questions we get asked a lot.</h2>
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
        title="Send us one module you're dreading."
        body="The one that's out of date, too boring to finish, or quoted at a number you can't defend. We'll come back with how we'd make it and what it would take."
      />
    </main>
  );
}
