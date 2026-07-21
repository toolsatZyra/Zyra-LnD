import ContactForm from "./ContactForm";

export default function CtaBox({
  title,
  body,
  showForm = true,
  children,
}: {
  title: React.ReactNode;
  body: string;
  showForm?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section className="band">
      <div className="wrap">
        <div className="cta-box rv">
          <div
            className="glow"
            style={{
              width: 300,
              height: 300,
              background: "var(--acc)",
              right: -70,
              top: -110,
              opacity: 0.2,
            }}
          />
          <div
            className="grid-x c2"
            style={{
              gap: "clamp(20px,3.4vw,52px)",
              alignItems: "center",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div className="stack g14">
              <h2 className="dsp d2">{title}</h2>
              <p className="lede">{body}</p>
            </div>
            <div className="stack g14">
              {showForm ? <ContactForm /> : children}
              <p className="m">Delivering to teams worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
