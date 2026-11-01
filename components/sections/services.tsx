import Link from "next/link";
import {
  Bot,
  Database,
  Globe,
  LifeBuoy,
  Megaphone,
  Palette,
  Plug,
  Rocket,
  Smartphone,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Database,
  Bot,
  Megaphone,
  Palette,
  Smartphone,
  Plug,
  Rocket,
  LifeBuoy,
};

export function Services() {
  return (
    <SectionWrapper id="services">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Everything you need to launch and grow online"
            description="Nine capabilities across product, design and growth. Scoped clearly, priced up front, and explained in plain language."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <Reveal key={service.slug} delay={index * 0.03}>
                <article className="card-surface card-hover-wash group relative flex h-full flex-col p-6 sm:p-7">
                  <div className="card-icon relative z-[1] mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-accent-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="relative z-[1] font-serif text-xl font-bold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="relative z-[1] mt-3 flex-1 text-base leading-relaxed text-text-secondary">
                    {service.outcome}
                  </p>
                  <ul className="relative z-[1] mt-4 space-y-2">
                    {service.includes.slice(0, 3).map((item) => (
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
                    className="card-cta relative z-[1] mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent-primary"
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
    </SectionWrapper>
  );
}
