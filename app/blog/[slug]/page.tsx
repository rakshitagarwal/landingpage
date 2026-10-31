import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { buttonLinkClass } from "@/components/ui/button";
import { SiteImage } from "@/components/ui/site-image";
import { blogPosts, getWhatsAppLink, siteConfig } from "@/lib/site-config";
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
    image: `${siteConfig.url}${post.cover.src}`,
  };

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <article className="container-site section-y pt-28 sm:pt-32">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Blog
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-accent-primary">
            {post.category}
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold text-text-primary sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/15 bg-bg-secondary">
              <SiteImage
                image={post.authorAvatar}
                fill
                sizes="40px"
                className="object-cover object-top"
              />
            </div>
            <p className="text-sm text-text-secondary">
              {post.author} · {post.date} · {post.readTime}
            </p>
          </div>

          <div className="relative mt-8 aspect-[1200/630] overflow-hidden rounded-[1.25rem] border border-white/10 bg-bg-card">
            <SiteImage image={post.cover} fill sizes="(max-width: 1024px) 100vw, 960px" priority />
          </div>

          <div className="prose-measure mx-auto mt-10 space-y-5">
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
                  className="text-base leading-relaxed text-text-secondary sm:text-lg"
                >
                  {block.text}
                </p>
              )
            )}
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-[1.25rem] border border-white/10 bg-bg-card p-6 text-center sm:p-8">
            <p className="text-base text-text-secondary">
              Have a project in mind? Talk to {siteConfig.name} on WhatsApp.
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonLinkClass("primary", "lg"), "mt-5")}
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-14">
            <h2 className="font-serif text-2xl font-bold text-text-primary">
              Related posts
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="rounded-[1.1rem] border border-white/10 bg-bg-card p-5 transition hover:border-accent-primary/30"
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
