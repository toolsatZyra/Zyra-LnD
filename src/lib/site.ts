/** Canonical origin. Update once here when the production domain is set —
 *  metadata, sitemap, robots and OG URLs all read from it. */
export const SITE = "https://zyra-ln-d.vercel.app";

/** Booking + contact — every "Book a consultation" / "Talk to us" CTA points here. */
export const BOOKING_URL = "https://calendly.com/marketersatzyra/30min";

export const ROUTES = ["", "/services", "/pricing", "/about", "/contact"] as const;
