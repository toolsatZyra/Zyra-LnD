"use client";

import { useState } from "react";

/* No backend wired yet — submitting shows an acknowledgement rather than
   silently doing nothing. Point `action` at your CRM/webhook before launch. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  if (sent) {
    return (
      <p className="bs" style={{ color: "var(--acc)" }}>
        Thanks — we&apos;ll be in touch at {email}.
      </p>
    );
  }

  return (
    <form
      className="cf"
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setSent(true);
      }}
    >
      <label htmlFor="cf-email" className="sr-only">
        Work email
      </label>
      <input
        id="cf-email"
        type="email"
        required
        placeholder="Work email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn btn-a" type="submit">
        Book a consultation
      </button>
    </form>
  );
}
