import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { buttonLinkClass } from "@/components/ui/button";
import { CoverMedia } from "@/components/ui/cover-media";
import { projects, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Software Development Portfolio",
  description:
    "Selected software, web and automation projects engineered by Obekai. Browse problem, solution and technology for each engagement.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Software Development Portfolio | Obekai",
    description:
      "Selected software, web and automation projects engineered by Obekai.",
    url: "/work",
    type: "website",
  },
};

export default function WorkIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Obekai work",
    url: `${siteConfig.url}/work`,
    description:
      "Selected software, web and automation projects engineered by Obekai.",
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="surface-ink border-b border-border-subtle pt-28 pb-14 text-text-primary sm:pt-32 sm:pb-16">
          <div className="container-site">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-primary">
              Work
            </p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Software development portfolio
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
              Selected products we have engineered. Client names and measurable
              results appear only when that client has approved them.
            </p>
          </div>
        </section>

        <section className="surface-paper border-b border-border-subtle section-y text-text-primary">
          <div className="container-site grid gap-6 lg:gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="card-surface card-hover-wash group overflow-hidden lg:grid lg:grid-cols-[1.15fr_0.85fr]"
              >
                <CoverMedia
                  title={project.title}
                  image={project.image}
                  icon={project.mockup}
                  className="aspect-[16/10] border-b border-border-subtle transition duration-700 ease-out group-hover:scale-[1.025] lg:aspect-auto lg:h-full lg:min-h-[20rem] lg:border-b-0 lg:border-r"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="p-6 sm:p-8 lg:flex lg:flex-col lg:justify-center lg:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-primary">
                    {project.businessType}
                  </p>
                  <h2 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
                    <span className="font-medium text-text-primary">Problem. </span>
                    {project.problem}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                    <span className="font-medium text-text-primary">Solution. </span>
                    {project.solution}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <li
                        key={item}
                        className="rounded-[8px] border border-copper/30 px-2.5 py-1 text-xs text-accent-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-primary">
                    View case study
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="surface-ink section-y text-text-primary">
          <div className="container-site flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <h2 className="font-heading text-3xl font-semibold">
                Have a similar problem?
              </h2>
              <p className="mt-3 text-base text-text-secondary">
                Tell us what you are building. We reply within 24 hours with a
                clear next step.
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
