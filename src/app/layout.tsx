import type { Metadata } from "next";
import { Archivo, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollMotion from "@/components/ScrollMotion";
import { SITE } from "@/lib/site";
import "./globals.css";

/* Display — Archivo carries a width axis, so we get a true condensed cut
   rather than falling back to Arial Narrow. */
/* Variable — no fixed `weight`, so the wdth axis stays available. */
const display = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-display",
  display: "swap",
});

const body = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Probbit L&D — Corporate training video built to hold attention",
    template: "%s · Probbit L&D",
  },
  description:
    "Probbit combines storytelling, learning design and AI-first production to turn onboarding, compliance, safety, sales and product training into video built to hold attention and improve learning outcomes.",
  openGraph: {
    type: "website",
    siteName: "Probbit L&D",
    url: SITE,
    title: "Corporate training videos built to hold attention.",
    description:
      "Storytelling, learning design and AI-first production — training video built to earn attention and improve outcomes.",
  },
  robots: { index: true, follow: true },
  /* No canonical here — child routes inherit root metadata, so a canonical
     set at this level would point every page at "/" and mark the rest as
     duplicates. Each route declares its own. */
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <ScrollMotion />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
