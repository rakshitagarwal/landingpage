import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { buttonLinkClass } from "@/components/ui/button";
import { getWhatsAppLink, services, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
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
    },
    areaServed: "IN",
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
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-text-secondary transition hover:text-text-primary"
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

          <ul className="mt-8 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-text-secondary"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-10 max-w-2xl rounded-[1.25rem] border border-white/10 bg-bg-card p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-text-primary">
              What this usually includes
            </h2>
            <ul className="mt-5 space-y-3">
              {service.details.map((detail) => (
                <li
                  key={detail}
                  className="flex gap-3 text-base text-text-secondary"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" />
                  {detail}
                </li>
              ))}
            </ul>
            <a
              href={getWhatsAppLink(
                `Hi Pixelnest, I'd like to discuss ${service.title}`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonLinkClass("primary", "lg"), "mt-8")}
            >
              Chat on WhatsApp about this
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
