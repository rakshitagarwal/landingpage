import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site-config";
import { CoverMedia } from "@/components/ui/cover-media";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <SectionWrapper id="work" tone="ink" aria-label="Selected work">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Products we have engineered."
            description="Client names, logos and business metrics are published only with approval. These pages describe the problem and what was built. They are client engagements, not fictional case studies."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 0.06}
              className={cn(index === 0 && "lg:col-span-2")}
            >
              <article
                className={cn(
                  "card-surface card-hover-wash group overflow-hidden",
                  index === 0 && "lg:grid lg:grid-cols-[1.15fr_0.85fr]"
                )}
              >
                <div className="relative z-[1] overflow-hidden">
                  <CoverMedia
                    title={project.title}
                    image={project.image}
                    icon={project.mockup}
                    className={cn(
                      "aspect-[16/10] border-border-subtle transition duration-700 ease-out group-hover:scale-[1.03]",
                      index === 0 ? "h-full lg:aspect-auto lg:min-h-[22rem]" : ""
                    )}
                    sizes={
                      index === 0
                        ? "(max-width: 1024px) 100vw, 60vw"
                        : "(max-width: 1024px) 100vw, 40vw"
                    }
                    priority={index === 0}
                  />
                </div>
                <div className="relative z-[1] flex flex-col p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-primary">
                    {project.businessType}
                  </p>
                  <h3 className="font-heading mt-3 text-2xl font-semibold text-text-primary sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
                    <span className="font-medium text-text-primary">Problem. </span>
                    {project.problem}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                    <span className="font-medium text-text-primary">Built. </span>
                    {project.solution}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
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
                    className="card-cta mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent-primary"
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
