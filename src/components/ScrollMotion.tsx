"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/* Scroll-linked reveal, scrubbed to scroll position and reversible
   (Webflow IX2 style) rather than a fire-once trigger.

   Safety: .rv elements are hidden by CSS only under html.js, and a timeout
   forces everything visible if this never runs — a JS error must never
   leave the page blank. */

type Target = { el: HTMLElement; dist: number; fade: boolean; i: number };

const ease = (p: number) => 1 - Math.pow(1 - p, 3);
const clamp = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

export default function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      root.classList.add("no-mo");
      return;
    }
    root.classList.add("js");

    const failsafe = setTimeout(() => {
      if (!(window as unknown as { __moReady?: boolean }).__moReady) {
        root.classList.add("no-mo");
      }
    }, 2000);

    const targets: Target[] = [];
    const seen = new Set<Element>();

    document.querySelectorAll<HTMLElement>(".rv").forEach((el) => {
      targets.push({ el, dist: 80, fade: true, i: 0 });
      seen.add(el);
    });
    document
      .querySelectorAll<HTMLElement>(
        ".rv.grid-x > *, .rv .grid-x > *, .rv .tiles > *, .rv .ba > *",
      )
      .forEach((el, i) => {
        if (seen.has(el)) return;
        seen.add(el);
        targets.push({ el, dist: 40, fade: false, i: i % 6 });
      });

    const tick = () => {
      const vh = window.innerHeight || 800;
      const span = vh * 0.4;
      for (const m of targets) {
        const r = m.el.getBoundingClientRect();
        if (r.bottom < -240 || r.top > vh + 320) continue;
        const e = ease(clamp((vh - r.top - m.i * 26) / span));
        if (m.fade) m.el.style.opacity = e.toFixed(3);
        m.el.style.transform = `translate3d(0,${((1 - e) * m.dist).toFixed(2)}px,0)`;
      }
    };

    let queued = false;
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        tick();
        queued = false;
      });
    };

    tick();
    (window as unknown as { __moReady?: boolean }).__moReady = true;
    clearTimeout(failsafe);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const raf = requestAnimationFrame(tick); // after fonts/layout settle

    return () => {
      clearTimeout(failsafe);
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      targets.forEach((m) => {
        m.el.style.opacity = "";
        m.el.style.transform = "";
      });
    };
  }, [pathname]);

  return null;
}
