"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Bot,
  Database,
  Globe,
  Megaphone,
  Palette,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Database,
  Bot,
  Megaphone,
  Palette,
};

export function Services() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setCanHover(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return (
    <SectionWrapper id="services">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Everything you need to launch and grow online"
            description="Five focused capabilities across product, design and growth. Hover or tap a service to see what is included."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Globe;
            const expanded = activeSlug === service.slug;

            return (
              <Reveal key={service.slug} delay={index * 0.06} y={40}>
                <article
                  className={cn(
                    "service-card card-surface group relative h-[21rem] overflow-hidden p-6 sm:h-[22.5rem] sm:p-7",
                    expanded && "is-expanded"
                  )}
                  onMouseEnter={() => {
                    if (canHover) setActiveSlug(service.slug);
                  }}
                  onMouseLeave={() => {
                    if (canHover) setActiveSlug(null);
                  }}
                  onFocusCapture={() => setActiveSlug(service.slug)}
                  onBlurCapture={(event) => {
                    if (
                      !event.currentTarget.contains(event.relatedTarget as Node)
                    ) {
                      setActiveSlug(null);
                    }
                  }}
                  onClick={() => {
                    if (canHover) return;
                    setActiveSlug((current) =>
                      current === service.slug ? null : service.slug
                    );
                  }}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_srgb,var(--accent-primary)_18%,transparent),transparent_62%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-[.is-expanded]:opacity-100" />

                  {/* Rest state: icon + title, always occupies full card */}
                  <div
                    className={cn(
                      "absolute inset-0 z-[1] flex flex-col items-center justify-center px-6 text-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-7",
                      expanded
                        ? "pointer-events-none -translate-y-3 scale-[0.96] opacity-0"
                        : "translate-y-0 scale-100 opacity-100"
                    )}
                    aria-hidden={expanded}
                  >
                    <div className="card-icon mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-border-subtle text-accent-primary transition-transform duration-500">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="font-serif text-xl font-bold leading-snug text-text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
                      {canHover ? "Hover to explore" : "Tap to explore"}
                    </p>
                  </div>

                  {/* Expanded state: details fade in over same fixed box */}
                  <div
                    className={cn(
                      "absolute inset-0 z-[2] flex flex-col px-6 py-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-7 sm:py-7",
                      expanded
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-4 opacity-0"
                    )}
                    aria-hidden={!expanded}
                  >
                    <div className="card-icon mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-subtle text-accent-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="shrink-0 font-serif text-lg font-bold leading-snug text-text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {service.outcome}
                    </p>
                    <ul className="mt-3 min-h-0 flex-1 space-y-1.5 overflow-hidden">
                      {service.includes.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-xs leading-snug text-text-secondary sm:text-sm"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="card-cta mt-3 inline-flex min-h-11 shrink-0 items-center gap-1.5 text-sm font-semibold text-accent-primary"
                      tabIndex={expanded ? 0 : -1}
                      onClick={(event) => event.stopPropagation()}
                    >
                      Learn more
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
