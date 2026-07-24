import { ImageResponse } from "next/og";

export const alt =
  "Probbit Learning & Development — corporate training video built to hold attention";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Rendered at build time. Uses system fonts rather than fetching the webfonts,
   so the build has no network dependency — the layout carries the brand here,
   not the typeface. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFFCF7",
          backgroundImage:
            "radial-gradient(900px 500px at 88% -10%, #F1E9FF 0%, #FFFCF7 60%)",
          padding: "72px 80px",
        }}
      >
        {/* brand line */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              fontSize: 30,
              fontWeight: 800,
              color: "#6C4DF6",
              letterSpacing: "-0.02em",
            }}
          >
            probbit
          </div>
          <div style={{ width: 1, height: 24, background: "rgba(27,18,53,.22)" }} />
          <div style={{ fontSize: 22, color: "#5E5578" }}>
            Learning &amp; Development
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "#1B1235",
            }}
          >
            <div>Corporate training videos</div>
            <div style={{ color: "#6C4DF6" }}>built to hold attention.</div>
          </div>
          <div
            style={{
              fontSize: 27,
              color: "#5E5578",
              lineHeight: 1.4,
              maxWidth: 880,
            }}
          >
            Storytelling, learning design and AI-first production — training
            video built to earn attention and improve outcomes.
          </div>
        </div>

        {/* footer rule */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(27,18,53,.14)",
            paddingTop: 24,
            fontSize: 20,
            color: "#8B839F",
          }}
        >
          <div>Onboarding · Compliance · Safety · Product</div>
          <div>Delivering worldwide</div>
        </div>
      </div>
    ),
    size,
  );
}
