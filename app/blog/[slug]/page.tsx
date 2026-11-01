import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { buttonLinkClass } from "@/components/ui/button";
import { CoverMedia } from "@/components/ui/cover-media";
import { SiteImage } from "@/components/ui/site-image";
import { blogPosts, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return { title: "Blog" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const cover = post.cover.src ? post.cover : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    description: post.excerpt,
    ...(cover ? { image: `${siteConfig.url}${cover.src}` } : {}),
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-bg-primary text-text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <article className="container-site section-y pt-28 sm:pt-32">
          <Link
            href="/blog"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Case studies
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-accent-primary">
            {post.category}
          </p>
          <h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold text-text-primary sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3">
            {post.authorAvatar.src ? (
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border-subtle bg-bg-soft">
                <SiteImage
                  image={post.authorAvatar}
                  fill
                  sizes="40px"
                  className="object-cover object-top"
                />
              </div>
            ) : (
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-bg-soft text-xs font-semibold text-accent-primary"
                aria-hidden
              >
                {post.author
                  .split(" ")
                  .map((p) => p[0])
                  .join("")
                  .slice(0, 2)}
              </div>
            )}
            <p className="text-sm text-text-secondary">
              {post.author} · {post.date} · {post.readTime}
            </p>
          </div>

          <CoverMedia
            title={post.title}
            image={cover}
            icon="website"
            className="card-surface mt-8 aspect-[3/2]"
            sizes="(max-width: 1024px) 100vw, 1120px"
            priority
          />

          <div className="mt-10 space-y-5">
            {post.content.map((block, index) =>
              block.type === "h2" ? (
                <h2
                  key={`${block.text}-${index}`}
                  className="font-serif text-2xl font-bold text-text-primary"
                >
                  {block.text}
                </h2>
              ) : (
                <p
                  key={`${block.text}-${index}`}
                  className="max-w-none text-base leading-relaxed text-text-secondary sm:text-lg"
                >
                  {block.text}
                </p>
              )
            )}
          </div>

          <div className="card-surface mt-10 p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-text-primary">
              Want something like this?
            </h2>
            <p className="mt-3 text-base text-text-secondary">
              Share your requirements on the enquiry form. We&apos;ll suggest a
              simple next step and a fixed quote.
            </p>
            <a
              href="/contact"
              className={cn(buttonLinkClass("primary", "lg"), "mt-6")}
            >
              Get in touch
            </a>
          </div>

          <div className="mt-14">
            <h2 className="font-serif text-2xl font-bold text-text-primary">
              Related case studies
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="card-surface card-lift p-5"
                >
                  <p className="text-xs uppercase tracking-wide text-accent-primary">
                    {item.category}
                  </p>
                  <p className="mt-2 font-semibold text-text-primary">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
