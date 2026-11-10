import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site-config";
import { CoverMedia } from "@/components/ui/cover-media";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Projects() {
  return (
    <SectionWrapper id="work" tone="ink" aria-label="Selected work">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Products we have engineered."
            description="Client names, logos and business metrics are published only with approval. These pages describe the problem and what was built — client engagements, not fictional case studies."
          />
        </Reveal>

        <div className="grid gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06} y={40} scale={0.985}>
              <article className="card-surface card-hover-wash group overflow-hidden lg:grid lg:grid-cols-[1.2fr_0.8fr]">
                <Link
                  href={`/work/${project.slug}`}
                  className="relative z-[1] block overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                  aria-label={`View case study: ${project.title}`}
                >
                  <CoverMedia
                    title={project.title}
                    image={project.image}
                    icon={project.mockup}
                    className="aspect-[16/10] border-b border-border-subtle transition duration-700 ease-out group-hover:scale-[1.025] lg:aspect-auto lg:h-full lg:min-h-[22rem] lg:border-b-0 lg:border-r"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    priority={index === 0}
                  />
                </Link>
                <div className="relative z-[1] flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-primary">
                    {project.businessType}
                  </p>
                  <h3 className="font-heading mt-3 text-2xl font-semibold text-text-primary sm:text-3xl lg:text-[2rem]">
                    <Link
                      href={`/work/${project.slug}`}
                      className="transition hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-text-secondary sm:text-base">
                    <span className="font-medium text-text-primary">Problem. </span>
                    {project.problem}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                    <span className="font-medium text-text-primary">Solution. </span>
                    {project.solution}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <li
                        key={item}
                        className="rounded-[8px] border border-copper/30 px-2.5 py-1 text-xs text-accent-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/work/${project.slug}`}
                    className="card-cta mt-8 inline-flex min-h-11 w-fit items-center gap-1.5 text-sm font-semibold text-accent-primary"
                  >
                    View case study
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
