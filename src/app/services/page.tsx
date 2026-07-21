import type { Metadata } from "next";
import Link from "next/link";
import Reel from "@/components/Reel";
import Frame from "@/components/Frame";
import CtaBox from "@/components/CtaBox";
import Amp, { withAmp } from "@/components/Amp";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Services",
  description:
    "Onboarding, compliance, safety, product training, enablement, microlearning, animation, localisation, LMS packaging and library refresh — every engagement delivered LMS-ready.",
};

type Service = {
  n: string;
  seed: number;
  tc: string;
  title: string;
  body: string;
  ideal: string;
  outcome: string;
};

const SERVICES: Service[] = [
  {
    n: "01", seed: 31, tc: "00:02:14",
    title: "Onboarding & induction films",
    body: "A hero welcome film plus the short-module series behind it — policies, systems, org structure, first-week orientation. Usually the most-watched content an organisation owns, and usually the most neglected.",
    ideal: "HR and People teams hiring at pace, or anyone whose induction is still a deck and a PDF.",
    outcome: "New hires productive sooner, and a consistent first week regardless of which manager they land under.",
  },
  {
    n: "02", seed: 32, tc: "00:11:38",
    title: "Compliance & policy modules",
    body: "POSH, code of conduct, anti-bribery, data privacy, cyber awareness. Scenario-led rather than narrated slides, with knowledge checks and completion records that stand up to audit.",
    ideal: "Legal, Risk and Compliance functions carrying a mandatory annual completion target.",
    outcome: "Completion rates that reflect actual attention, and an audit trail that holds.",
  },
  {
    n: "03", seed: 33, tc: "00:04:52",
    title: "Safety, EHS & SOP video",
    body: "Task-specific procedure video built around your equipment, your floor and your actual sequence of operations. The one category where a generic library is worse than nothing.",
    ideal: "Manufacturing, energy, logistics and field-services operations with real physical risk.",
    outcome: "Procedures taught the way they're performed, and training that survives an inspection.",
  },
  {
    n: "04", seed: 34, tc: "00:06:07",
    title: "Product & systems training",
    body: "Feature explainers, software walkthroughs and screencasts for internal staff, channel partners or dealers. Built to be updated, because products change faster than curricula do.",
    ideal: "Product marketing, sales ops and channel teams supporting a shifting product line.",
    outcome: "Fewer support escalations, and training that stays accurate past the next release.",
  },
  {
    n: "05", seed: 35, tc: "00:05:19",
    title: "Sales & channel enablement",
    body: "Pitch training, objection handling and dramatised customer conversations — the right way and the wrong way, filmed as a pair so the contrast does the teaching.",
    ideal: "Revenue enablement teams onboarding reps or rolling out new positioning.",
    outcome: "Faster ramp for new reps and a consistent pitch across a distributed floor.",
  },
  {
    n: "06", seed: 36, tc: "00:03:26",
    title: "Microlearning series",
    body: "Two-to-seven minute single-objective modules, cut vertical for mobile and Teams. Produced as a series off one content spine so unit economics hold at library scale.",
    ideal: "Deskless, field and shop-floor workforces who will never sit through a 30-minute module.",
    outcome: "Completion rates that hold, and training that reaches people without a desk.",
  },
  {
    n: "07", seed: 37, tc: "00:02:48",
    title: "Animated explainers & motion graphics",
    body: "For processes, data flows, org changes and anything with no filmable subject. 2D motion, character animation, and 3D where machinery or an invisible process needs to be seen.",
    ideal: "Abstract or systems-level content — compliance frameworks, workflows, restructures.",
    outcome: "Complex material understood in one pass instead of three readings of a policy document.",
  },
  {
    n: "08", seed: 38, tc: "00:07:11",
    title: "Localisation & versioning",
    body: "Native lip-sync per language with on-screen typography rebuilt rather than subtitled over. Regional versions for different plants, entities or regulatory regimes from one master.",
    ideal: "Multi-state Indian operations and global organisations with a distributed workforce.",
    outcome: "Everyone trained in the language they think in, without a separate shoot per market.",
  },
  {
    n: "09", seed: 39, tc: "00:01:52",
    title: "LMS packaging & accessibility",
    body: "SCORM 1.2, SCORM 2004, xAPI or cmi5; captions and transcripts; WCAG 2.1 AA including the audio-description track most vendors quietly skip. Tested in your LMS before handover.",
    ideal: "Anyone who has received a folder of MP4s from a vendor and had to finish the job themselves.",
    outcome: "Trackable, auditable, accessible training — deployable the day it lands.",
  },
  {
    n: "10", seed: 40, tc: "00:09:02",
    title: "Library refresh retainer",
    body: "We hold your project files and re-cut affected sections when a policy, product, system or brand changes. Priced annually against build cost rather than as a fresh project each time.",
    ideal: "Organisations with a module library already going stale, whoever originally built it.",
    outcome: "A curriculum that stays current, at a fraction of what re-commissioning it would cost.",
  },
];

export default function Services() {
  return (
    <main>
      <section className="hero">
        <div className="glow" style={{ width: 400, height: 400, background: "var(--acc)", right: -100, top: -150, opacity: 0.15 }} />
        <div className="wrap stack g24" style={{ position: "relative", zIndex: 2 }}>
          <div className="stack g18" style={{ maxWidth: "60ch" }}>
            <span className="eye" style={{ alignSelf: "flex-start" }}>Services</span>
            <h1 className="dsp d1">
              What we make
              <br />
              <span className="grad">for L<Amp />D teams.</span>
            </h1>
          </div>
          <Reel seed={30} label="Selected work — now playing" showShot={false} />
          <div className="stack g18" style={{ maxWidth: "60ch" }}>
            <p className="lede">
              Every engagement ships LMS-ready — SCORM-packaged, captioned,
              WCAG-conformant and version-controlled. Scope is set on the call, and the
              curriculum audit that informs it costs nothing.
            </p>
            <div className="brow">
              <Link href="/contact" className="btn btn-a">Book a consultation</Link>
              <Link href="/about" className="btn btn-g">Who we are</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          {SERVICES.map((s) => (
            <div className="svc rv" key={s.n}>
              <p className="ni">{s.n}</p>
              <div className="stack g10">
                <h2 className="dsp d3">{withAmp(s.title)}</h2>
                <p className="bs" style={{ maxWidth: "58ch" }}>{s.body}</p>
                <div className="svc-m">
                  <div>
                    <p className="m">Ideal for</p>
                    <p className="bxs">{s.ideal}</p>
                  </div>
                  <div>
                    <p className="m">Business outcome</p>
                    <p className="bxs">{s.outcome}</p>
                  </div>
                </div>
              </div>
              <div className="vid svc-v">
                <Frame seed={s.seed} />
                <span className="tag br_ num">{s.tc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBox
        title={<>Not sure which of these<br />you actually need?</>}
        body="Most teams aren't. We'll audit the curriculum you have, tell you what can be re-versioned instead of rebuilt, and you keep the findings either way."
      />
    </main>
  );
}
