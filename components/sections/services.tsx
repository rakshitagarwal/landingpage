import Link from "next/link";
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
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Database,
  Bot,
  Megaphone,
  Palette,
};

export function Services() {
  const core = services.filter((s) => s.featured);
  const also = services.filter((s) => !s.featured);

  return (
    <Section id="services" tone="default">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="What we build for small businesses"
            description="Practical digital work — websites, software and automation — explained without jargon."
          />
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-3">
          {core.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <Reveal key={service.slug} delay={index * 0.04}>
                <article className="flex h-full flex-col rounded-[1.25rem] border border-white/10 bg-bg-card p-6 sm:p-7 transition hover:border-accent-primary/30 hover:bg-bg-elevated">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-accent-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-text-primary sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-text-secondary">
                    {service.outcome}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.includes.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-primary transition hover:gap-2"
                  >
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-text-secondary">
            Also offered
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {also.map((service, index) => {
              const Icon = iconMap[service.icon] ?? Globe;
              return (
                <Reveal key={service.slug} delay={index * 0.04}>
                  <article className="flex h-full gap-4 rounded-[1.25rem] border border-white/10 bg-bg-card p-5 sm:p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-accent-primary">
                      <Icon className="h-4 w-4" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-serif text-lg font-bold text-text-primary">
                        {service.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                        {service.outcome}
                      </p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-primary"
                      >
                        Learn more
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
