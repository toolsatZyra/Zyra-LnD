"use client";

import { useEffect, useRef } from "react";

/* Placeholder footage renderer.
   Draws a continuously-animating cinematic frame — drifting key light,
   depth-scaled figures, dust, vignette and moving grain — standing in for
   real delivered work until client footage clears approval.
   Replace <Frame> with a <video> element once real cuts are available. */

type Props = {
  seed?: number;
  /** reel = wide framing + periodic hard cuts between setups */
  kind?: "reel" | "tile";
  className?: string;
  onShotChange?: (index: number) => void;
};

const PALETTES: number[][][] = [
  [[24, 20, 17], [76, 58, 40], [186, 140, 86]],
  [[16, 22, 26], [40, 64, 74], [122, 158, 166]],
  [[28, 18, 16], [86, 40, 30], [196, 96, 60]],
  [[20, 24, 18], [54, 70, 48], [132, 156, 102]],
  [[22, 20, 26], [58, 50, 72], [140, 124, 168]],
  [[26, 21, 16], [92, 62, 32], [214, 148, 62]],
  [[15, 20, 24], [38, 56, 68], [104, 138, 158]],
  [[26, 22, 22], [74, 58, 56], [176, 138, 130]],
  [[18, 18, 20], [52, 52, 58], [148, 146, 150]],
  [[24, 18, 22], [80, 44, 60], [196, 110, 138]],
];

const rnd = (s: number) => {
  const x = Math.sin(s * 127.1) * 43758.5453;
  return x - Math.floor(x);
};

export default function Frame({
  seed = 1,
  kind = "tile",
  className,
  onShotChange,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const shotCb = useRef(onShotChange);
  shotCb.current = onShotChange;

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let t = Math.random() * 400;
    let shot = 0;
    let visible = false;
    let raf = 0;
    let acc = 0;
    let last: number | null = null;

    const size = () => {
      const r = cv.getBoundingClientRect();
      if (!r.width || !r.height) return false;
      const dp = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.max(1, Math.round(r.width * dp));
      const h = Math.max(1, Math.round(r.height * dp));
      if (cv.width !== w || cv.height !== h) {
        cv.width = w;
        cv.height = h;
      }
      return true;
    };

    const draw = () => {
      const w = cv.width;
      const h = cv.height;
      if (!w || !h) return;
      const s = seed + shot * 17;
      const p = PALETTES[s % PALETTES.length];

      const g = ctx.createLinearGradient(0, 0, w * 0.92, h);
      g.addColorStop(0, `rgb(${p[0].join(",")})`);
      g.addColorStop(0.55, `rgb(${p[1].join(",")})`);
      g.addColorStop(1, `rgb(${p[2].join(",")})`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // drifting key light
      const cx = w * (0.3 + 0.26 * Math.sin(t * 0.011 + s));
      const cy = h * (0.26 + 0.2 * Math.cos(t * 0.008 + s));
      const rg = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.66);
      rg.addColorStop(0, "rgba(255,240,214,.30)");
      rg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = rg;
      ctx.fillRect(0, 0, w, h);

      // floor falloff — gives the frame depth
      const fg = ctx.createLinearGradient(0, h * 0.56, 0, h);
      fg.addColorStop(0, "rgba(0,0,0,0)");
      fg.addColorStop(1, "rgba(0,0,0,.36)");
      ctx.fillStyle = fg;
      ctx.fillRect(0, h * 0.56, w, h * 0.44);

      // figures — scaled to frame width so wide reels read as a room
      const wide = w / h > 2;
      const n = wide ? 2 + Math.floor(rnd(s + 2) * 3) : 1 + Math.floor(rnd(s + 2) * 2);
      const base = wide ? 0.03 : 0.056;
      for (let i = 0; i < n; i++) {
        const dep = 0.62 + rnd(s + i * 11) * 0.5;
        const bob = Math.sin(t * 0.03 + i * 1.7) * h * 0.01 * dep;
        const sway = Math.sin(t * 0.017 + i * 0.9) * w * 0.008;
        const fx = w * (0.14 + rnd(s + i * 7) * 0.72) + sway;
        const fy = h * (0.73 + rnd(s + i * 3) * 0.08) + bob;
        const fw = w * (base + rnd(s + i) * base * 0.55) * dep;
        ctx.fillStyle = `rgba(0,0,0,${(0.2 + 0.16 * dep).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(fx, fy - fw * 1.62, fw * 0.58, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(fx - fw, h);
        ctx.lineTo(fx - fw * 0.7, fy - fw * 0.76);
        ctx.quadraticCurveTo(fx, fy - fw * 1.46, fx + fw * 0.7, fy - fw * 0.76);
        ctx.lineTo(fx + fw, h);
        ctx.closePath();
        ctx.fill();
      }

      // dust motes
      ctx.fillStyle = "rgba(255,246,224,.15)";
      for (let d = 0; d < 10; d++) {
        const dx = ((rnd(s + d * 3.3) * w) + t * (0.25 + rnd(s + d) * 0.5)) % w;
        const dy = h * (0.2 + rnd(s + d * 1.9) * 0.6) + Math.sin(t * 0.02 + d) * h * 0.03;
        ctx.fillRect(dx, dy, Math.max(1, w * 0.0022), Math.max(1, w * 0.0022));
      }

      const vg = ctx.createRadialGradient(
        w / 2, h / 2, Math.min(w, h) * 0.22,
        w / 2, h / 2, Math.max(w, h) * 0.74,
      );
      vg.addColorStop(0, "rgba(0,0,0,0)");
      vg.addColorStop(1, "rgba(0,0,0,.44)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = "rgba(255,255,255,.038)";
      const gn = Math.round((w * h) / 2400);
      for (let j = 0; j < gn; j++) {
        ctx.fillRect(rnd(s + j * 1.7 + t) * w, rnd(s + j * 2.3 + t * 1.3) * h, 1, 1);
      }
    };

    size();
    draw();

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (visible = e.isIntersecting)),
      { rootMargin: "140px 0px" },
    );
    io.observe(cv);

    const loop = (ts: number) => {
      if (last === null) last = ts;
      acc += (ts - last) / 1000;
      last = ts;
      if (acc >= 1 / 15) {
        acc = 0;
        if (visible) {
          t += 1;
          if (kind === "reel" && t % 75 === 0) {
            shot++;
            shotCb.current?.(shot);
          }
          draw();
        }
      }
      raf = requestAnimationFrame(loop);
    };
    if (!reduce) raf = requestAnimationFrame(loop);

    let rt: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        size();
        draw();
      }, 150);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      clearTimeout(rt);
    };
  }, [seed, kind]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
