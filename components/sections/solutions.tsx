import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { images, projects } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteImage } from "@/components/ui/site-image";

export function Solutions() {
  return (
    <Section id="work" tone="default">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Work"
            title="Sample projects that show how we think"
            description="These are sample projects for illustration. They show the kinds of problems we solve — not live client case studies."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.04}>
              <article className="flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-bg-card">
                <div className="relative aspect-[16/10] border-b border-white/10 bg-bg-secondary">
                  <SiteImage
                    image={{
                      ...images.projectImage,
                      alt: `${project.title} preview`,
                    }}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <span className="inline-flex w-fit rounded-full border border-white/15 px-2.5 py-1 text-xs text-text-secondary">
                    {project.label}
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-bold text-text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    <span className="font-semibold text-text-primary">Problem: </span>
                    {project.problem}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    <span className="font-semibold text-text-primary">Solution: </span>
                    {project.solution}
                  </p>
                  <div className="mt-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                      What this would deliver
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {project.delivers.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/work/${project.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-primary"
                  >
                    View sample
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
