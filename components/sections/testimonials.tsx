"use client";

import { siteConfig, testimonials } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * Hidden while showTestimonials is false.
 * When enabled, only non-sample items show unless every item is sample
 * and you intentionally flip the flag for staging.
 */
export function Testimonials() {
  if (!siteConfig.showTestimonials) return null;

  const items = testimonials.filter((item) => !item.isSample);
  if (items.length === 0) return null;

  return (
    <Section tone="muted">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say"
            description="Real feedback from businesses we have worked with."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <blockquote
              key={item.id}
              className="rounded-[1.25rem] border border-white/10 bg-bg-card p-6"
            >
              <p className="font-serif text-lg leading-relaxed text-text-primary">
                “{item.quote}”
              </p>
              <footer className="mt-4 text-sm text-text-secondary">
                {item.name}
                {item.company ? ` · ${item.company}` : null}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </Section>
  );
}
