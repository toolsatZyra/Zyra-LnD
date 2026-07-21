/**
 * A single ampersand glyph, used everywhere.
 *
 * The site runs three typefaces — Archivo (display), Bricolage Grotesque
 * (body) and JetBrains Mono (labels) — and each draws "&" differently. Left
 * alone, the same word reads with three different ampersands depending on
 * where it sits.
 *
 * This pins every ampersand to the body face so the shape is constant, with
 * optical sizing so it still sits correctly inside heavy condensed display
 * type.
 *
 *   Why L<Amp />D teams choose Zyra.
 */
import { Fragment } from "react";

export default function Amp() {
  return <span className="amp">&amp;</span>;
}

/**
 * Same treatment for copy that arrives as a plain string — page content lives
 * in typed arrays, so those ampersands can't be wrapped by hand.
 *
 *   <h3 className="dsp d4">{withAmp(title)}</h3>
 */
export function withAmp(text: string) {
  if (!text.includes("&")) return text;
  return text.split("&").map((part, i) =>
    i === 0 ? (
      part
    ) : (
      <Fragment key={i}>
        <Amp />
        {part}
      </Fragment>
    ),
  );
}
