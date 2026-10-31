"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { blogPosts, images, projects } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteImage } from "@/components/ui/site-image";

gsap.registerPlugin(ScrollTrigger);

const featuredProjects = projects.slice(0, 3);
const featuredPosts = blogPosts.slice(0, 3);

export function CaseStudies() {
  return (
    <Section id="case-studies" tone="muted">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Case studies"
            title="Work that shows the process"
            description="Sample builds framed as problem → solution → outcome. Temporary project photos until final shots are ready."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <CaseStudyCard
                slug={project.slug}
                label={project.label}
                title={project.title}
                problem={project.problem}
                solution={project.solution}
                outcome={project.delivers[0]}
              />
            </Reveal>
          ))}
        </div>

        <div className="pt-2">
          <Reveal>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-secondary">
                  Insights
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-text-primary sm:text-3xl">
                  Guides from the studio
                </h3>
              </div>
              <Link
                href="/blog"
                className="hidden items-center gap-1.5 text-sm font-semibold text-accent-primary sm:inline-flex"
              >
                All posts
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {featuredPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.04}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-bg-card transition hover:border-accent-primary/30"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-bg-secondary">
                    <SiteImage
                      image={post.cover}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs uppercase tracking-wide text-accent-primary">
                      {post.category}
                    </p>
                    <h4 className="mt-2 font-serif text-lg font-bold leading-snug text-text-primary">
                      {post.title}
                    </h4>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-secondary">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2.5">
                      <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white/15 bg-bg-secondary">
                        <SiteImage
                          image={post.authorAvatar}
                          fill
                          sizes="32px"
                          className="object-cover object-top"
                        />
                      </div>
                      <p className="text-xs text-text-muted">
                        {post.author} · {post.readTime}
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Link
            href="/blog"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-primary sm:hidden"
          >
            All posts
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

function CaseStudyCard({
  slug,
  label,
  title,
  problem,
  solution,
  outcome,
}: {
  slug: string;
  label: string;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
}) {
  const mediaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = mediaRef.current;
    const image = imageRef.current;
    if (!media || !image) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        image,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: media,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, media);

    return () => ctx.revert();
  }, []);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-bg-card">
      <div
        ref={mediaRef}
        className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-bg-secondary"
      >
        <div ref={imageRef} className="absolute inset-[-12%]">
          <SiteImage
            image={{
              ...images.projectImage,
              alt: `${title} case study preview`,
            }}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex w-fit rounded-full border border-white/15 px-2.5 py-1 text-xs text-text-secondary">
          {label}
        </span>
        <h3 className="mt-4 font-serif text-xl font-bold text-text-primary">
          {title}
        </h3>
        <dl className="mt-4 space-y-3 text-sm leading-relaxed text-text-secondary">
          <div>
            <dt className="font-semibold text-accent-secondary">Problem</dt>
            <dd className="mt-1">{problem}</dd>
          </div>
          <div>
            <dt className="font-semibold text-accent-primary">What we built</dt>
            <dd className="mt-1">{solution}</dd>
          </div>
          <div>
            <dt className="font-semibold text-text-primary">Outcome</dt>
            <dd className="mt-1">{outcome}</dd>
          </div>
        </dl>
        <Link
          href={`/work/${slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-primary"
        >
          Read case study
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
