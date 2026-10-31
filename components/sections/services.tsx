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

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Globe;
            const span =
              index < 2
                ? "lg:col-span-3"
                : index === 2
                  ? "lg:col-span-2"
                  : "lg:col-span-2";

            return (
              <Reveal key={service.slug} delay={index * 0.04} className={span}>
                <article className="flex h-full flex-col rounded-[1.25rem] border border-white/10 bg-bg-card p-6 sm:p-7 transition hover:border-accent-primary/30 hover:bg-bg-elevated">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-accent-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-text-secondary">
                    {service.outcome}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-text-secondary"
                      >
                        {tag}
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
      </div>
    </Section>
  );
}
