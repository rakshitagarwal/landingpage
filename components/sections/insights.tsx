import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/site-config";
import { CoverMedia } from "@/components/ui/cover-media";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const featured = blogPosts.slice(0, 3);

export function Insights() {
  return (
    <SectionWrapper id="insights">
      <div className="section-stack">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Insights"
              title="Practical guides for growing businesses"
              description="Plain-language articles on websites, WhatsApp and software for small businesses in India."
            />
            <Link
              href="/blog"
              className="hidden min-h-11 shrink-0 items-center gap-1.5 text-sm font-semibold text-accent-primary sm:inline-flex"
            >
              All posts
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.04}>
              <Link
                href={`/blog/${post.slug}`}
                className="card-surface card-lift group flex h-full flex-col overflow-hidden"
              >
                <div className="overflow-hidden">
                  <CoverMedia
                    title={post.title}
                    image={post.cover.src ? post.cover : null}
                    icon="website"
                    className="aspect-[16/10] border-b border-border-subtle transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-primary">
                    {post.category}
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-text-secondary">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-text-muted">
                    {post.readTime} read
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link
          href="/blog"
          className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent-primary sm:hidden"
        >
          All posts
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
