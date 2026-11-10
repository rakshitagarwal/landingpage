import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { CoverMedia } from "@/components/ui/cover-media";
import { blogPosts, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Four Obekai product case studies: an electronics storefront, a sales command center, an AI workflow console and a CRM dashboard.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Case Studies | Obekai",
    description:
      "Product case studies from Obekai engineering work across commerce, sales, AI workflows and CRM.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-bg-primary text-text-primary">
        <div className="container-site section-y pt-28 sm:pt-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-primary">
            Case studies
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-text-primary sm:text-5xl">
            Case studies from our projects
          </h1>
          <p className="mt-4 max-w-2xl text-base text-text-secondary sm:text-lg">
            Four product studies from {siteConfig.name}. The screens here are
            separate from the project cards on the homepage. Figures on the
            interfaces are part of the screen, not published client results.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-surface card-lift group flex flex-col overflow-hidden"
              >
                <CoverMedia
                  title={post.title}
                  image={post.cover.src ? post.cover : null}
                  icon="website"
                  className="aspect-[1200/630] border-b border-border-subtle"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wide text-accent-primary">
                    {post.category}
                  </p>
                  <h2 className="mt-2 font-serif text-xl font-bold text-text-primary">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-text-muted">
                    {post.author} · {post.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
