import type { MetadataRoute } from "next";
import { SITE, ROUTES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((path) => ({
    url: `${SITE}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" ? 0.6 : 0.8,
  }));
}
