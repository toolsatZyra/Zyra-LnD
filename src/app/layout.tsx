import type { Metadata } from "next";
import { Archivo, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollMotion from "@/components/ScrollMotion";
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

const SITE = "https://lnd.thezyra.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Zyra L&D — Corporate training video, produced AI-native",
    template: "%s · Zyra L&D",
  },
  description:
    "We produce broadcast-grade training video across the learning lifecycle — onboarding, compliance, safety and product enablement. Built AI-native in days, localised into every language your workforce speaks, delivered LMS-ready.",
  openGraph: {
    type: "website",
    siteName: "Zyra L&D",
    url: SITE,
    title: "Corporate training, made like cinema.",
    description:
      "Broadcast-grade training video in days, not quarters. SCORM-packaged, captioned and LMS-tested on delivery.",
  },
  robots: { index: true, follow: true },
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
