import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { buttonLinkClass } from "@/components/ui/button";
import { CoverMedia } from "@/components/ui/cover-media";
import { getWhatsAppLink, projects, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Work" };
  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.solution,
  };
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const coverImage = project.image.src
    ? { ...project.image, alt: project.image.alt || `${project.title} cover` }
    : null;

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-bg-primary text-text-primary">
        <article className="container-site section-y pt-28 sm:pt-32">
          <Link
            href="/#work"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All work
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-border-subtle bg-bg-soft px-2.5 py-1 text-xs text-text-secondary">
              {project.label}
            </span>
            <span className="text-sm text-text-muted">{project.businessType}</span>
          </div>

          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold text-text-primary sm:text-5xl">
            {project.title}
          </h1>

          <CoverMedia
            title={project.title}
            image={coverImage}
            icon={project.mockup}
            className="card-surface mt-8 aspect-[3/2]"
            sizes="(max-width: 1024px) 100vw, 960px"
            priority
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="card-surface p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-bold text-text-primary">Problem</h2>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                {project.problem}
              </p>
            </div>
            <div className="card-surface p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-bold text-text-primary">
                What we built
              </h2>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="card-surface mt-6 p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-text-primary">
              Outcome
            </h2>
            <ul className="mt-4 space-y-2">
              {project.delivers.map((item) => (
                <li key={item} className="flex gap-2 text-base text-text-secondary">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-semibold text-text-primary">Features</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-full border border-border-subtle px-3 py-1.5 text-sm text-text-secondary"
                >
                  {feature}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-semibold text-text-primary">Tech</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-accent-primary/20 bg-accent-primary/5 px-3 py-1.5 text-sm text-accent-primary"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-surface mt-10 p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-text-primary">
              Want something like this?
            </h2>
            <p className="mt-3 text-base text-text-secondary">
              Tell us about your business on WhatsApp. We&apos;ll suggest a simple next step and a fixed quote.
            </p>
            <a
              href={getWhatsAppLink(
                `Hi Obekai, I liked the ${project.title} sample and want something similar`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonLinkClass("primary", "lg"), "mt-6")}
            >
              Get in touch
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
