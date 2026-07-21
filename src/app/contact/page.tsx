import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reel from "@/components/Reel";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Book a consultation",
  description:
    "Send us one module you're dreading. We'll come back with how we'd make it, what it would take, and a free audit of the curriculum you already have.",
};

const COVER = [
  "What your curriculum covers today, and where it has gone stale",
  "Which formats suit which modules — and which we'd tell you to shoot instead",
  "How many languages and versions you actually need",
  "A real number, and what would move it",
];

export default function Contact() {
  return (
    <main>
      <section className="hero">
        <div className="glow" style={{ width: 400, height: 400, background: "var(--acc)", right: -100, top: -150, opacity: 0.15 }} />
        <div className="wrap grid-x c2" style={{ position: "relative", zIndex: 2, gap: "clamp(24px,4vw,60px)", alignItems: "start" }}>
          <div className="stack g18">
            <span className="eye" style={{ alignSelf: "flex-start" }}>Book a consultation</span>
            <h1 className="dsp d1 oneline">
              Send us one module <span className="grad">you&apos;re dreading.</span>
            </h1>
            <p className="lede">
              The one that&apos;s out of date, too boring to finish, or quoted at a number
              you can&apos;t defend. We&apos;ll come back with how we&apos;d make it and
              what it would take.
            </p>
            <ContactForm />
            <p className="m">Gurgaon, India · delivering to teams worldwide</p>
          </div>

          <div className="stack g18">
            <div className="card">
              <p className="m m-a">What we&apos;ll cover</p>
              <ul className="p-list" style={{ marginTop: 4 }}>
                {COVER.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="p-note" style={{ marginTop: 4 }}>
                About 30 minutes. The curriculum audit that follows is free and yours to
                keep whether or not you engage us.
              </p>
            </div>
            <Reel seed={70} label="Showreel — now playing" showShot={false} />
          </div>
        </div>
      </section>
    </main>
  );
}
