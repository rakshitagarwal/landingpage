import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { buttonLinkClass } from "@/components/ui/button";
import { CoverMedia } from "@/components/ui/cover-media";
import { projects, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Work" };
  const url = `/work/${project.slug}`;
  return {
    title: project.title,
    description: project.solution,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} | Obekai`,
      description: project.solution,
      url,
      type: "article",
      images: project.image.src
        ? [
            {
              url: project.image.src,
              width: project.image.width,
              height: project.image.height,
              alt: project.image.alt,
            },
          ]
        : undefined,
    },
  };
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const coverImage = project.image.src
    ? { ...project.image, alt: project.image.alt || `${project.title} cover` }
    : null;

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.solution,
    url: `${siteConfig.url}/work/${project.slug}`,
    image: project.image.src ? `${siteConfig.url}${project.image.src}` : undefined,
    creator: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="surface-ink border-b border-border-subtle pt-28 pb-12 text-text-primary sm:pt-32 sm:pb-16">
          <div className="container-site">
            <Link
              href="/work"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-text-secondary transition hover:text-accent-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              All projects
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-[8px] border border-border-subtle px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent-primary">
                {project.businessType}
              </span>
              <span className="text-sm text-text-muted">{project.label}</span>
            </div>

            <h1 className="mt-4 max-w-4xl font-heading text-4xl font-semibold sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              {project.solution}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-muted">
              Client name and measurable results are not shown here. They are
              published only when that client has approved them.
            </p>
          </div>
        </section>

        <section className="surface-paper border-b border-border-subtle">
          <div className="container-site py-8 sm:py-12">
            <CoverMedia
              title={project.title}
              image={coverImage}
              icon={project.mockup}
              className="aspect-[16/10] overflow-hidden rounded-[12px] border border-border-subtle shadow-[var(--shadow-card)] sm:aspect-[2/1]"
              sizes="(max-width: 1024px) 100vw, 1100px"
              priority
            />
          </div>
        </section>

        <section className="surface-white border-b border-border-subtle section-y text-text-primary">
          <div className="container-site grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-semibold">Problem</h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                {project.problem}
              </p>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-semibold">Solution</h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        <section className="surface-paper border-b border-border-subtle section-y text-text-primary">
          <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div>
              <h2 className="font-heading text-3xl font-semibold">
                Product features
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-[8px] border border-border-subtle bg-bg-card px-4 py-3 text-sm text-text-secondary"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <h3 className="mt-10 font-heading text-2xl font-semibold">
                What was delivered
              </h3>
              <ul className="mt-4 space-y-3">
                {project.delivers.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-semibold">
                Architecture and technology
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                The stack below was chosen for the workflows in this product.
                After final payment, the source code and related access transfer
                to you.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-[8px] border border-copper/30 px-3 py-1.5 text-sm text-accent-primary"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-8 overflow-hidden rounded-[12px] border border-border-subtle">
                <CoverMedia
                  title={`${project.title} detail`}
                  image={coverImage}
                  icon={project.mockup}
                  className="aspect-[4/3]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="surface-ink border-b border-border-subtle section-y text-text-primary">
            <div className="container-site">
              <div className="flex items-end justify-between gap-4">
                <h2 className="font-heading text-3xl font-semibold">
                  More selected work
                </h2>
                <Link
                  href="/work"
                  className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent-primary"
                >
                  All work
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/work/${item.slug}`}
                    className="card-surface card-hover-wash group overflow-hidden"
                  >
                    <CoverMedia
                      title={item.title}
                      image={item.image}
                      icon={item.mockup}
                      className="aspect-[16/10] border-b border-border-subtle transition duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-primary">
                        {item.businessType}
                      </p>
                      <h3 className="mt-2 font-heading text-xl font-semibold">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="surface-ink-2 section-y text-text-primary">
          <div className="container-site flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
                Want something like this engineered for your business?
              </h2>
              <p className="mt-4 text-base text-text-secondary">
                Tell us the problem and the first release you need. You will talk
                with the engineering team, not a separate sales desk.
              </p>
            </div>
            <Link href="/contact" className={cn(buttonLinkClass("primary", "lg"))}>
              Discuss Your Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
