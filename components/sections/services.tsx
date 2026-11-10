import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site-config";
import { CoverMedia } from "@/components/ui/cover-media";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

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
          {primary.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.05}>
              <article className="card-surface card-hover-wash group flex h-full flex-col overflow-hidden">
                <Link
                  href={`/services/${service.slug}`}
                  className="relative z-[1] block overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                  aria-label={`Explore ${service.title}`}
                >
                  <CoverMedia
                    title={service.title}
                    image={service.previewImage}
                    className="aspect-[16/10] border-b border-border-subtle transition duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index < 2}
                  />
                  <span className="pointer-events-none absolute left-4 top-4 rounded-[8px] border border-white/15 bg-[#101923]/75 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F4F7FA] backdrop-blur">
                    0{index + 1}
                  </span>
                </Link>
                <div className="relative z-[1] flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-heading text-2xl font-semibold text-text-primary">
                    <Link
                      href={`/services/${service.slug}`}
                      className="transition hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                    >
                      {service.title}
                    </Link>
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
                        className="rounded-[8px] border border-border-subtle px-2.5 py-1 text-xs text-text-muted"
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
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
