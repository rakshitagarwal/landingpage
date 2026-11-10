import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { buttonLinkClass } from "@/components/ui/button";
import { services, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const priceDigits = service.priceFrom.replace(/[^\d]/g, "");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.legalName,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
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
            href="/#services"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-text-secondary transition hover:text-text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All services
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-accent-primary">
            Service
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-semibold text-text-primary sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
            {service.summary}
          </p>
          <p className="mt-3 max-w-2xl text-base font-medium text-text-primary">
            {service.outcome}
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="card-surface p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-semibold text-text-primary">
              Who it&apos;s for
            </h2>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                {service.whoFor}
              </p>
            </div>
            <div className="card-surface p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-semibold text-text-primary">
                Timeline and commercial approach
              </h2>
              <p className="mt-3 text-base text-text-secondary">{service.timeline}</p>
              <p className="mt-3 text-base leading-relaxed text-text-primary">
                {service.commercial}
              </p>
            </div>
          </div>

          <div className="card-surface mt-6 p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-semibold text-text-primary">
              What&apos;s included
            </h2>
            <ul className="mt-5 space-y-3">
              {service.includes.map((detail) => (
                <li key={detail} className="flex gap-3 text-base text-text-secondary">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-surface mt-6 p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-semibold text-text-primary">
              Technologies
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.technologies.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border-subtle px-3 py-1.5 text-sm text-text-secondary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-surface mt-6 p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-semibold text-text-primary">
              Common questions
            </h2>
            <div className="mt-5 space-y-5">
              {service.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold text-text-primary">{faq.question}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <a
            href="/contact"
            className={cn(buttonLinkClass("primary", "lg"), "mt-8")}
          >
            Discuss your project
          </a>
        </article>
      </main>
      <Footer />
    </>
  );
}
