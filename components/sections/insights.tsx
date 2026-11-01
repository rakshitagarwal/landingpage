import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { blogPosts } from "@/lib/site-config";
import { CoverMedia } from "@/components/ui/cover-media";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const featured = blogPosts.slice(0, 3);

export function Insights() {
  return (
    <SectionWrapper id="case-studies">
      <div className="section-stack">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Case studies"
              title="Proof of how we think and ship"
              description="Practical write-ups on websites, WhatsApp and software. Real approaches we use to help businesses grow."
            />
            <Link
              href="/blog"
              className="hidden min-h-11 shrink-0 items-center gap-1.5 text-sm font-semibold text-accent-primary sm:inline-flex"
            >
              All case studies
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.04}>
              <Link
                href={`/blog/${post.slug}`}
                className="card-surface card-hover-wash group relative flex h-full flex-col overflow-hidden"
              >
                <div className="relative z-[1] overflow-hidden">
                  <CoverMedia
                    title={post.title}
                    image={post.cover.src ? post.cover : null}
                    icon="website"
                    className="aspect-[16/10] border-b border-border-subtle"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="relative z-[1] flex flex-1 flex-col p-5 sm:p-6">
                  <div className="card-icon mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-accent-primary">
                    <FileText className="h-4 w-4" aria-hidden />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-primary">
                    {post.category}
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-text-secondary">
                    {post.excerpt}
                  </p>
                  <span className="card-cta mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent-primary">
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link
          href="/blog"
          className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent-primary sm:hidden"
        >
          All case studies
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
