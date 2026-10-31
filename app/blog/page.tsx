import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { SiteImage } from "@/components/ui/site-image";
import { blogPosts, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides on websites, WhatsApp automation and software for small businesses in India.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="container-site section-y pt-28 sm:pt-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-primary">
            Blog
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-text-primary sm:text-5xl">
            Guides for growing businesses
          </h1>
          <p className="mt-4 max-w-2xl text-base text-text-secondary sm:text-lg">
            Plain-language articles from the {siteConfig.name} team in Ahmedabad.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-[1.25rem] border border-white/10 bg-bg-card transition hover:border-accent-primary/30"
              >
                <div className="relative aspect-[1200/630] bg-bg-secondary">
                  <SiteImage
                    image={post.cover}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
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
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
