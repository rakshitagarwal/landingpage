import Link from "next/link";
import {
  AppWindow,
  ArrowUpRight,
  Code2,
  Megaphone,
  Palette,
  Store,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  AppWindow,
  Workflow,
  Store,
  Palette,
  Megaphone,
};

const marks = [
  "bg-[linear-gradient(135deg,color-mix(in_srgb,var(--copper)_16%,transparent),transparent_55%)]",
  "bg-[radial-gradient(circle_at_80%_0%,color-mix(in_srgb,var(--copper)_18%,transparent),transparent_46%)]",
  "bg-[linear-gradient(180deg,transparent,color-mix(in_srgb,var(--copper)_12%,transparent))]",
  "bg-[radial-gradient(circle_at_0%_100%,color-mix(in_srgb,var(--copper)_16%,transparent),transparent_50%)]",
];

export function Services() {
  const primary = services.filter((service) => service.featured);

  return (
    <SectionWrapper id="services" tone="white">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Four ways we engineer products."
            description="Each engagement starts from the business problem. Design and search support are available with a build, not as a substitute for the engineering."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {primary.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <Reveal key={service.slug} delay={index * 0.05}>
                <article className="card-surface card-hover-wash group flex h-full flex-col overflow-hidden">
                  <div
                    className={`relative z-[1] flex h-28 items-end justify-between border-b border-border-subtle px-6 pb-4 ${marks[index % marks.length]}`}
                  >
                    <span className="font-heading text-3xl font-semibold text-text-primary/80">
                      0{index + 1}
                    </span>
                    <span className="card-icon inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle bg-bg-card text-accent-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <div className="relative z-[1] flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="font-heading text-2xl font-semibold text-text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                      {service.summary}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {service.includes.slice(0, 4).map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-border-subtle px-2.5 py-1 text-xs text-text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="card-cta mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent-primary"
                    >
                      Explore Service
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
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
