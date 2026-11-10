import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { buttonLinkClass } from "@/components/ui/button";
import { CoverMedia } from "@/components/ui/cover-media";
import {
  getServiceBySlug,
  processSteps,
  projects,
  services,
  siteConfig,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service" };

  const url = `/services/${service.slug}`;
  return {
    title: service.metaTitle.replace(` | ${siteConfig.name}`, ""),
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      type: "website",
      siteName: siteConfig.legalName,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${service.pageHeading} — ${siteConfig.legalName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedProjects = service.relatedProjectSlugs
    .map((projectSlug) => projects.find((project) => project.slug === projectSlug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  const relatedServices = services
    .filter((item) => item.featured && item.slug !== service.slug)
    .slice(0, 4);

  const priceDigits = service.priceFrom.replace(/[^\d]/g, "");
  const pageUrl = `${siteConfig.url}/services/${service.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.pageHeading,
      description: service.metaDescription,
      url: pageUrl,
      provider: {
        "@type": "ProfessionalService",
        name: siteConfig.legalName,
        url: siteConfig.url,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        telephone: siteConfig.phoneTel,
      },
      areaServed: "Worldwide",
      ...(priceDigits
        ? {
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: priceDigits,
            },
          }
        : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${siteConfig.url}/#services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.pageHeading,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

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
            <nav aria-label="Breadcrumb" className="text-sm text-text-muted">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-accent-primary">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/#services" className="hover:text-accent-primary">
                    Services
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-text-secondary">{service.title}</li>
              </ol>
            </nav>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-accent-primary">
              Service
            </p>
            <h1 className="mt-3 max-w-4xl font-heading text-4xl font-semibold sm:text-5xl lg:text-6xl">
              {service.pageHeading}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
              {service.intro}
            </p>
            <p className="mt-4 max-w-2xl text-base font-medium text-text-primary">
              {service.outcome}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className={cn(buttonLinkClass("primary", "lg"))}>
                Discuss Your Project
              </Link>
              <Link href="/work" className={cn(buttonLinkClass("secondary", "lg"))}>
                View our work
              </Link>
            </div>
          </div>
        </section>

        <section className="surface-paper border-b border-border-subtle section-y text-text-primary">
          <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-heading text-3xl font-semibold">
                Business problems we solve
              </h2>
              <p className="mt-3 text-base text-text-secondary">
                {service.whoFor}
              </p>
              <ul className="mt-6 space-y-3">
                {service.problems.map((problem) => (
                  <li key={problem} className="flex gap-3 text-base text-text-secondary">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent-primary" aria-hidden />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-semibold">
                Types of software we build
              </h2>
              <p className="mt-3 text-base text-text-secondary">
                Engagements stay focused on the first release that matters, then
                expand from there.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.softwareTypes.map((item) => (
                  <li
                    key={item}
                    className="rounded-[8px] border border-border-subtle bg-bg-card px-4 py-3 text-sm text-text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="surface-white border-b border-border-subtle section-y text-text-primary">
          <div className="container-site">
            <h2 className="font-heading text-3xl font-semibold">
              Technology stack
            </h2>
            <p className="mt-3 max-w-2xl text-base text-text-secondary">
              Tools are chosen for maintainability and the problem at hand — not
              for a trend list.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {service.technologies.map((item) => (
                <li
                  key={item}
                  className="rounded-[8px] border border-copper/30 px-3 py-1.5 text-sm text-accent-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.includes.map((detail) => (
                <div
                  key={detail}
                  className="rounded-[8px] border border-border-subtle px-4 py-4"
                >
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-text-muted">
              {service.commercial} Typical timeline: {service.timeline}.
            </p>
          </div>
        </section>

        <section className="surface-ink-2 border-b border-border-subtle section-y text-text-primary">
          <div className="container-site">
            <h2 className="font-heading text-3xl font-semibold">
              Engineering process
            </h2>
            <p className="mt-3 max-w-2xl text-base text-text-secondary">
              {service.processFocus}
            </p>
            <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <li key={step.step}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-primary">
                    {step.step}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
            <Link
              href="/#process"
              className="mt-8 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent-primary"
            >
              See the full delivery process
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </section>

        {relatedProjects.length > 0 ? (
          <section className="surface-ink border-b border-border-subtle section-y text-text-primary">
            <div className="container-site">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="font-heading text-3xl font-semibold">
                    Relevant project examples
                  </h2>
                  <p className="mt-3 max-w-2xl text-base text-text-secondary">
                    Selected work related to this service. Client names and metrics
                    are published only when approved.
                  </p>
                </div>
                <Link
                  href="/work"
                  className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent-primary"
                >
                  All work
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {relatedProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/work/${project.slug}`}
                    className="card-surface card-hover-wash group overflow-hidden"
                  >
                    <CoverMedia
                      title={project.title}
                      image={project.image}
                      icon={project.mockup}
                      className="aspect-[16/10] border-b border-border-subtle"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-primary">
                        {project.businessType}
                      </p>
                      <h3 className="mt-2 font-heading text-2xl font-semibold">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                        {project.solution}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-primary">
                        View project
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="surface-paper border-b border-border-subtle section-y text-text-primary">
          <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <div>
              <h2 className="font-heading text-3xl font-semibold">
                Why businesses choose Obekai
              </h2>
              <ul className="mt-6 space-y-4">
                {service.whyChoose.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-text-secondary">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-semibold">
                Related services
              </h2>
              <ul className="mt-6 space-y-3">
                {relatedServices.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/services/${item.slug}`}
                      className="group flex items-center justify-between rounded-[8px] border border-border-subtle px-4 py-3 transition hover:border-copper"
                    >
                      <span className="text-sm font-medium text-text-primary group-hover:text-accent-primary">
                        {item.pageHeading}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-accent-primary" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="surface-white border-b border-border-subtle section-y text-text-primary">
          <div className="container-site max-w-3xl">
            <h2 className="font-heading text-3xl font-semibold">FAQs</h2>
            <div className="mt-8 space-y-6">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="border-b border-border-subtle pb-6">
                  <h3 className="font-semibold text-text-primary">{faq.question}</h3>
                  <p className="mt-2 text-base leading-relaxed text-text-secondary">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="surface-ink border-b border-border-subtle section-y text-text-primary">
          <div className="container-site flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-primary">
                Next step
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">
                Discuss your {service.title.toLowerCase()} project
              </h2>
              <p className="mt-4 text-base text-text-secondary">
                Tell us what you are building. We reply within 24 hours with a
                clear next step, and can quote in INR or USD.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className={cn(buttonLinkClass("primary", "lg"))}>
                Discuss Your Project
              </Link>
              <Link href="/about" className={cn(buttonLinkClass("secondary", "lg"))}>
                About Obekai
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
