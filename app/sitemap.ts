import type { MetadataRoute } from "next";
import { services, siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  return [
    { url: base, lastModified: new Date("2026-10-31"), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/privacy`, lastModified: new Date("2026-10-31"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date("2026-10-31"), changeFrequency: "yearly", priority: 0.3 },
    ...services.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified: new Date("2026-10-31"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
