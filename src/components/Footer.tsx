import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap stack g24">
        <div className="foot-g">
          <div className="stack g10">
            <span className="logo">
              <Image
                src="/probbit-logo.png"
                alt="Probbit"
                width={900}
                height={241}
                className="logo-mark"
              />
              <span className="logo-div" aria-hidden="true" />
              <span className="logo-sub">Learning &amp; Development</span>
            </span>
            <p className="bxs" style={{ maxWidth: "34ch" }}>
              Corporate training video, produced AI-native and delivered
              LMS-ready.
            </p>
          </div>

          <div>
            <h5>Pages</h5>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About Us</Link>
          </div>

          <div>
            <h5>Formats</h5>
            <Link href="/services">Onboarding</Link>
            <Link href="/services">Compliance</Link>
            <Link href="/services">Safety &amp; SOP</Link>
            <Link href="/services">Microlearning</Link>
          </div>

          <div>
            <h5>Delivery</h5>
            <Link href="/services">SCORM &amp; xAPI</Link>
            <Link href="/services">Captions</Link>
            <Link href="/services">Localisation</Link>
            <Link href="/pricing">Refresh retainer</Link>
          </div>
        </div>

        <p
          className="m"
          style={{ borderTop: "1px solid var(--line)", paddingTop: 18 }}
        >
          Moving frames are generated placeholders standing in for real
          delivered work · © {new Date().getFullYear()} Probbit
        </p>
      </div>
    </footer>
  );
}
