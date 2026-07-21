"use client";

import { useEffect, useRef, useState } from "react";
import Frame from "./Frame";
import Amp from "./Amp";

const SHOTS = [
  "Onboarding · Logistics client",
  "Compliance · POSH module",
  "Safety · Plant floor SOP",
  "Product · Systems walkthrough",
  "Enablement · Channel partners",
];

const pad = (v: number) => (v < 10 ? `0${v}` : `${v}`);
const timecode = (sec: number) =>
  `${pad(Math.floor(sec / 3600))}:${pad(Math.floor(sec / 60) % 60)}:${pad(
    Math.floor(sec) % 60,
  )}:${pad(Math.floor((sec % 1) * 25))}`;

export default function Reel({
  seed = 1,
  label = "Showreel — now playing",
  corner,
  showShot = true,
}: {
  seed?: number;
  label?: string;
  corner?: React.ReactNode;
  showShot?: boolean;
}) {
  const cornerContent = corner ?? (
    <>
      Zyra L<Amp />D · 2026
    </>
  );
  const [shot, setShot] = useState(0);
  const tcRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const loop = () => {
      if (tcRef.current) {
        tcRef.current.textContent = timecode((performance.now() / 1000) % 3600);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="vid reel bars rv">
      <Frame seed={seed} kind="reel" onShotChange={setShot} />
      <span className="tag tl_ live">{label}</span>
      <span className="tag tr_ num" ref={tcRef}>
        00:00:00:00
      </span>
      {showShot && (
        <span className="tag bl_">{SHOTS[shot % SHOTS.length]}</span>
      )}
      <span className="tag br_">{cornerContent}</span>
    </div>
  );
}
