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
    title: `${service.title} | ${siteConfig.name}`,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      address: siteConfig.address.full,
      telephone: siteConfig.phoneTel,
    },
    areaServed: "IN",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: service.priceFrom.replace(/[^\d]/g, ""),
    },
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
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold text-text-primary sm:text-5xl">
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
              <h2 className="font-serif text-2xl font-bold text-text-primary">
                Who it&apos;s for
              </h2>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                {service.whoFor}
              </p>
            </div>
            <div className="card-surface p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-bold text-text-primary">
                Timeline & starting price
              </h2>
              <p className="mt-3 text-base text-text-secondary">{service.timeline}</p>
              <p className="mt-2 text-xl font-semibold text-accent-primary">
                From {service.priceFrom}
              </p>
            </div>
          </div>

          <div className="card-surface mt-6 p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-text-primary">
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
            <h2 className="font-serif text-2xl font-bold text-text-primary">
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
            Get in touch
          </a>
        </article>
      </main>
      <Footer />
    </>
  );
}
