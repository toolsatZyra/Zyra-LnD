<div align="center">

# Zyra L&D

### Corporate training, made like cinema.

Marketing site for **Zyra L&D** — the training-video arm of [Zyra](https://thezyra.in),
an AI-native content studio in Gurgaon.

[![Next.js](https://img.shields.io/badge/Next.js-16.2-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2-087EA4?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## What this is

Most L&D vendors bury video three clicks deep under "strategy" and "managed services."
This site does the opposite — it leads with production, and the commercial argument sits
in the delivery spec: modules arrive **SCORM-packaged, captioned and LMS-tested**, not as
a folder of raw exports.

Five routes, all statically prerendered:

| Route       | Purpose                                                                  |
| ----------- | ------------------------------------------------------------------------ |
| `/`         | Positioning, formats, use cases, before/after, comparison, delivery, FAQ  |
| `/services` | Ten offerings, each with ideal use case and business outcome              |
| `/pricing`  | Four tiers — publishes **scoping logic**, not rupee figures               |
| `/about`    | Mission, story, values, leadership, published limitations                 |
| `/contact`  | Consultation booking                                                      |

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build        # production build
npm start            # serve the build
npm run lint         # eslint
```

Requires Node 20+. Built and verified on Node 25.

> **Note:** this repo runs Next.js 16, which carries breaking changes from earlier
> versions. See [`AGENTS.md`](./AGENTS.md) — check `node_modules/next/dist/docs/` before
> reaching for a pattern you remember from Next 14/15.

---

## Architecture

Eleven components in `src/components/`. Three carry the load, and each solves a
non-obvious problem worth knowing about before you touch them.

### `Frame.tsx` — placeholder footage renderer

A canvas painting a continuously-animating cinematic frame: drifting key light,
depth-scaled figure silhouettes, dust motes, vignette and moving film grain. Seeded, so
every instance is deterministic and visually distinct.

It exists because a video studio's site cannot sit still while waiting for client footage
to clear approval. Runs at 15fps, paints only what's on screen via `IntersectionObserver`,
and goes fully static under `prefers-reduced-motion`.

> **Replace with `<video>` elements once real delivered work is cleared.** This is the
> single highest-value change available to the site.

### `ScrollMotion.tsx` — scroll-linked reveal

Transform and opacity scrubbed continuously against scroll position and **reversible**,
rather than a fire-once `IntersectionObserver` trigger. Blocks rise 80px and fade; grid
children rise 40px with a per-item stagger, each keyed to its own bounding rect.

**The failure mode is what matters here.** Scroll-linked opacity means a JS error would
leave every section at `opacity: 0` — a blank white page. So the hiding rule is scoped to
`html.js`, and a 2-second failsafe forces everything visible if the engine never reports
ready. It fails to *visible*, never to blank.

### `StoryCarousel.tsx` — testimonial carousel

Cards are centred by explicit `scrollTo` on the nearest-card index. A plain
`scrollBy({ behavior: "smooth" })` **stalls against `scroll-snap-type: mandatory`** — the
snap re-anchors every frame — so the track uses `proximity` and computes targets directly.

---

## Design system

Tokens live at the top of `src/app/globals.css`. No Tailwind config extension needed;
components consume CSS custom properties directly.

### Studio Light

| Token    | Value     | Role                                   |
| -------- | --------- | -------------------------------------- |
| `--bg`   | `#FFFCF7` | Warm bone page ground                  |
| `--bg2`  | `#F7F2FF` | Tinted alternating band                |
| `--bg3`  | `#1B1235` | Violet-ink — dark bands and logo chip  |
| `--fg`   | `#1B1235` | Body text                              |
| `--acc`  | `#6C4DF6` | Primary accent, CTAs                   |
| `--acc2` | `#FF5C49` | Coral — gradient partner, eyebrow dots |

Two dark bands (delivery spec, published limitations) break the rhythm on an otherwise
light page. The `.deep` class carries its own contrast rules.

### Typography

Self-hosted via `next/font` — no external CDN, no layout shift.

| Face                    | Role                     | Notes                                                     |
| ----------------------- | ------------------------ | --------------------------------------------------------- |
| **Archivo**             | Display (`.dsp`)         | Variable, `wdth` axis at **84%** for a true condensed cut  |
| **Bricolage Grotesque** | Body                     | 400 / 500 / 600 / 700                                      |
| **JetBrains Mono**      | Labels, timecodes (`.m`) | Uppercase, `0.15em` tracking                               |

> `next/font` rejects `axes` combined with a fixed `weight` array. Archivo must load fully
> variable for `font-stretch` to work — this is a build-breaking error, not a warning.

### Brand mark

`public/zyra-logo.png` is cropped from the main site's `zyra-logo.webp`, which is **83%
transparent padding** (content is 1406×665 inside a 2616×2152 canvas).

The asset is a **white wordmark with a teal accent** `rgb(104, 181, 162)`, built for the
dark main site. It sits on a dark chip rather than being inverted — inverting looks
correct at a glance but flips the teal to maroon and breaks the brand colour.

---

## Pre-launch checklist

Deliberate placeholders. Each is marked in the UI and in code comments.

- [ ] **Replace `Frame` with real footage.** Generated frames stand in for delivered work.
- [ ] **Swap in approved testimonial quotes.** `StoryCarousel.tsx` uses role + sector
      attribution only — no invented names against real client companies.
- [ ] **Confirm the outcome metrics.** The 4.2× / 9 languages / 1 day / 40+ figures on the
      home page are illustrative and labelled as such.
- [ ] **Verify SCORM / xAPI / WCAG 2.1 AA capability.** These claims appear in the hero,
      delivery spec, comparison table and FAQ. They are the strongest differentiator on
      the site — and the first thing an enterprise buyer will test.
- [ ] **Reconcile the creative count.** This site says 5,000+; the main site's history card
      says 7,000+.
- [ ] **Wire `ContactForm` to a real endpoint.** Currently a client-side acknowledgement.
- [ ] **Set the production domain** in `src/app/layout.tsx` (`SITE`), currently
      `https://lnd.thezyra.in`.

---

## Conventions

- **Server components by default.** `"use client"` only where interaction demands it —
  `Nav`, `Frame`, `Reel`, `FormatTabs`, `StoryCarousel`, `PricingTiers`, `ContactForm`,
  `ScrollMotion`.
- **Content lives in typed arrays** at the top of each page file, not inline in JSX. Copy
  edits shouldn't require touching markup.
- **`.rv` opts an element into scroll motion.** Nothing else is required.
- **No fabricated trust signals.** No security certifications, analyst placements or
  review-site ratings the studio hasn't earned.

---

## Deployment

Fully static — deploys anywhere that serves a Next.js build.

```bash
npm run build
```

Recommended: Vercel (zero config). For a subdomain of the main site, point
`lnd.thezyra.in` at the deployment and update `SITE` in `src/app/layout.tsx` so metadata
and Open Graph URLs resolve correctly.

---

<div align="center">
<sub>Built for <a href="https://thezyra.in">Zyra</a> · Gurgaon, India</sub>
</div>
