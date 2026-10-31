import { siteConfig } from "@/lib/site-config";

/** Hidden until real reviews exist (siteConfig.showTestimonials). */
export function Testimonials() {
  if (!siteConfig.showTestimonials) return null;
  return null;
}
