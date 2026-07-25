import type { Metadata } from "next";
import Link from "next/link";
import CtaBox from "@/components/CtaBox";
import { withAmp } from "@/components/Amp";
import { BOOKING_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Services",
  description:
    "Onboarding, compliance, safety, product, sales enablement, microlearning, animation, localisation, LMS packaging and library refresh — training content built to be watched, remembered and applied.",
};

type Service = {
  n: string;
  title: string;
  body: string;
  ideal: string;
  outcome: string;
};

const SERVICES: Service[] = [
  {
    n: "01",
    title: "Employee onboarding & induction videos",
    body: "Turn company presentations, policy documents, systems training and first-week information into a clear, engaging onboarding journey.",
    ideal: "HR, People and L&D teams hiring across roles, locations or business units.",
    outcome: "More consistent onboarding and faster employee readiness.",
  },
  {
    n: "02",
    title: "Compliance & policy training videos",
    body: "Transform mandatory subjects into realistic scenarios where employees see the decision, risk and correct response in context.",
    ideal: "Compliance, Legal, Risk, HR and Information Security teams.",
    outcome: "Better policy awareness, learner attention and audit-ready completion.",
  },
  {
    n: "03",
    title: "Safety, EHS & SOP videos",
    body: "Show the environment, procedure, risk and correct sequence rather than expecting employees to understand everything from text.",
    ideal: "Manufacturing, logistics, infrastructure, energy and field operations.",
    outcome: "Clearer process understanding and more consistent procedure training.",
  },
  {
    n: "04",
    title: "Product & systems training",
    body: "Create visual product explainers, software walkthroughs, feature demonstrations and internal systems training.",
    ideal: "Product, Customer Success, Operations, Sales and Channel teams.",
    outcome: "Faster product understanding and fewer repetitive support requirements.",
  },
  {
    n: "05",
    title: "Sales & channel enablement",
    body: "Build scenario-led training around pitches, customer conversations, objection handling, negotiation and product positioning.",
    ideal: "Sales enablement, revenue operations and channel teams.",
    outcome: "Faster representative ramp-up and more consistent customer communication.",
  },
  {
    n: "06",
    title: "Microlearning video series",
    body: "Break complex programmes into focused, mobile-friendly episodes built around one learning objective at a time.",
    ideal: "Distributed, deskless, frontline and field workforces.",
    outcome: "Easier consumption and more continuous learning.",
  },
  {
    n: "07",
    title: "Animated explainers & motion graphics",
    body: "Use animation to explain systems, workflows, frameworks, machinery and subjects that cannot be communicated clearly through conventional footage.",
    ideal: "Process, product, policy and technical training.",
    outcome: "Complex information made easier to understand.",
  },
  {
    n: "08",
    title: "Multilingual localisation & versioning",
    body: "Create voice, caption, on-screen-text and regional versions from one approved production master.",
    ideal: "Multi-state Indian businesses, GCCs and global enterprises.",
    outcome: "Consistent training across markets without separate productions.",
  },
  {
    n: "09",
    title: "LMS packaging & accessibility",
    body: "Receive deployment-ready content with agreed tracking, captions, transcripts and accessibility support.",
    ideal: "Teams that need finished learning assets rather than raw video files.",
    outcome: "Faster deployment and fewer handovers between vendors.",
  },
  {
    n: "10",
    title: "Training-library refresh",
    body: "Update individual scenes, processes, screenshots, policies, branding and language versions without recommissioning the complete production.",
    ideal: "Organisations with large training libraries that become outdated quickly.",
    outcome: "A learning library that stays current at a manageable cost.",
  },
];

export default function Services() {
  return (
    <main>
      <section className="hero">
        <div className="glow" style={{ width: 400, height: 400, background: "var(--acc)", right: -100, top: -150, opacity: 0.15 }} />
        <div className="wrap stack g24" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-copy stack g18 ctr">
            <h1 className="dsp d1">
              Training content built to be <span className="grad">watched, remembered and applied.</span>
            </h1>
            <p className="lede" style={{ maxWidth: "72ch", marginLeft: "auto", marginRight: "auto" }}>
              Probbit transforms presentations, policies, processes and subject-matter
              expertise into engaging learning experiences. Every project combines learning
              structure, storytelling, AI-first production and human creative direction.
            </p>
            <div className="brow" style={{ justifyContent: "center" }}>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-a">Transform a module</a>
              <Link href="/about" className="btn btn-g">See who we help</Link>
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
                <p className="bs" style={{ maxWidth: "64ch" }}>{s.body}</p>
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
            </div>
          ))}
        </div>
      </section>

      <CtaBox
        title={<>Not sure which format<br />your training needs?</>}
        body="Send us your existing curriculum or one priority module. We'll identify what can be shortened, updated, repurposed or rebuilt — and recommend the best production format."
      />
    </main>
  );
}
