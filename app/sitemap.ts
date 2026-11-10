import type { MetadataRoute } from "next";
import { blogPosts, projects, services, siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const stamp = new Date("2026-11-11");
  return [
    { url: base, lastModified: stamp, changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/about`,
      lastModified: stamp,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/work`,
      lastModified: stamp,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${base}/contact`,
      lastModified: stamp,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: stamp,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/privacy`,
      lastModified: stamp,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/terms`,
      lastModified: stamp,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...services.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified: stamp,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...projects.map((project) => ({
      url: `${base}/work/${project.slug}`,
      lastModified: stamp,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: stamp,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
