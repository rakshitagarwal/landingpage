import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site-config";
import { CoverMedia } from "@/components/ui/cover-media";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const featured = projects.slice(0, 3);

export function Solutions() {
  return (
    <SectionWrapper id="work" muted>
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Projects that show how we deliver"
            description="Sample builds framed as problem, solution and outcome. The same approach we use for clinics, shops and restaurants."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <article className="card-surface card-lift group flex h-full flex-col overflow-hidden">
                <div className="relative overflow-hidden">
                  <CoverMedia
                    title={project.title}
                    image={project.image.src ? project.image : null}
                    icon={project.mockup}
                    className="aspect-[16/10] border-b border-border-subtle transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex rounded-full border border-border-subtle bg-bg-secondary px-2.5 py-1 text-xs font-medium text-text-secondary">
                      {project.businessType}
                    </span>
                    <span className="inline-flex rounded-full border border-border-subtle px-2.5 py-1 text-xs font-medium text-text-muted">
                      {project.label}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-bold leading-snug text-text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {project.problem}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    <span className="font-semibold text-text-primary">Outcome: </span>
                    {project.delivers[0]}
                  </p>
                  <Link
                    href={`/work/${project.slug}`}
                    className="mt-auto inline-flex min-h-11 items-center gap-1.5 pt-5 text-sm font-semibold text-accent-primary transition group-hover:gap-2"
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
