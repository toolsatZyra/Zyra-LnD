"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav className="nav">
      <div className="nav-in">
        <Link href="/" className="logo" aria-label="Zyra Learning &amp; Development — home">
          <Image
            src="/zyra-logo-dark.png"
            alt="Zyra"
            width={1520}
            height={760}
            priority
            className="logo-mark"
          />
          <span className="logo-div" aria-hidden="true" />
          <span className="logo-sub">Learning &amp; Development</span>
        </Link>

        <div className="nl">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "on" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Link href="/contact" className="btn btn-a">
            Book a consultation
          </Link>
          <button
            className="burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`drawer${open ? " open" : ""}`}>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
