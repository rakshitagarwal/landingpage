import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { buttonLinkClass } from "@/components/ui/button";
import { SiteImage } from "@/components/ui/site-image";
import { getWhatsAppLink, images, projects, siteConfig } from "@/lib/site-config";
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

  const cover = {
    ...images.projectImage,
    alt: `${project.title} cover`,
  };

  const shots = [1, 2, 3, 4].map((n) => ({
    ...images.projectImage,
    alt: `${project.title} screen ${n}`,
  }));

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="container-site section-y pt-28 sm:pt-32">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All work
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-text-secondary">
              {project.label}
            </span>
            <span className="text-sm text-text-muted">{project.businessType}</span>
          </div>

          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold text-text-primary sm:text-5xl">
            {project.title}
          </h1>

          <div className="relative mt-8 aspect-[3/2] overflow-hidden rounded-[1.25rem] border border-white/10 bg-bg-card">
            <SiteImage image={cover} fill sizes="(max-width: 1024px) 100vw, 960px" />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.25rem] border border-white/10 bg-bg-card p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-bold text-text-primary">Problem</h2>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                {project.problem}
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-bg-card p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-bold text-text-primary">Solution</h2>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-bg-card p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-text-primary">
              What this would deliver
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
                  className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-text-secondary"
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

          <div className="mt-10">
            <h2 className="font-serif text-2xl font-bold text-text-primary">
              Screenshots
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {shots.map((shot) => (
                <div
                  key={shot.src}
                  className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-bg-card"
                >
                  <SiteImage image={shot} fill sizes="(max-width: 640px) 100vw, 50vw" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[1.25rem] border border-white/10 bg-bg-card p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-text-primary">
              Want something like this?
            </h2>
            <p className="mt-3 text-base text-text-secondary">
              Tell us about your business on WhatsApp. We&apos;ll suggest a simple next step and a fixed quote.
            </p>
            <a
              href={getWhatsAppLink(
                `Hi Pixelnest, I liked the ${project.title} sample and want something similar`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonLinkClass("primary", "lg"), "mt-6")}
            >
              Chat on WhatsApp
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
