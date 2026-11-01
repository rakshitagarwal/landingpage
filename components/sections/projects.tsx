import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site-config";
import { CoverMedia } from "@/components/ui/cover-media";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Projects() {
  return (
    <SectionWrapper id="projects" muted>
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work that shows how we build"
            description="Real product surfaces across CRM, commerce and automation. The same delivery style we bring to client work."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <article className="card-surface card-hover-wash group flex h-full flex-col overflow-hidden">
                <div className="relative z-[1] overflow-hidden">
                  <CoverMedia
                    title={project.title}
                    image={project.image}
                    icon={project.mockup}
                    className="aspect-[16/10] border-b border-border-subtle transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="relative z-[1] flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-primary">
                    {project.label}
                  </p>
                  <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                    {project.solution}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-accent-primary/20 bg-accent-primary/5 px-2.5 py-1 text-xs font-medium text-accent-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/work/${project.slug}`}
                    className="card-cta mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent-primary"
                  >
                    View project
                    <ArrowUpRight className="h-4 w-4" />
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
