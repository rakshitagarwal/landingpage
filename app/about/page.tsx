import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { buttonLinkClass } from "@/components/ui/button";
import {
  aboutContent,
  founders,
  processSteps,
  siteConfig,
  workingPrinciples,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Obekai",
  description:
    "Obekai is an engineering-led software studio in Ahmedabad, India. Meet the founder, working principles and how we deliver custom software for clients in India and internationally.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Obekai | Software Engineering Studio",
    description:
      "Engineering-led software studio in Ahmedabad. Direct communication with the people building the product.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Obekai",
    url: `${siteConfig.url}/about`,
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
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

        <section className="surface-ink border-b border-border-subtle pt-28 pb-14 text-text-primary sm:pt-32 sm:pb-16">
          <div className="container-site">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-primary">
              About Obekai
            </p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-semibold sm:text-5xl lg:text-6xl">
              An engineering studio built to ship reliable software
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
              {aboutContent.story}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          <div className="container-site">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-primary">
              Founder
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">
              Meet the person behind Obekai
            </h2>
            <p className="mt-3 max-w-2xl text-base text-text-secondary">
              Clients work directly with the person responsible for design and
              engineering.
            </p>
            {founders[0] ? (
              <article className="mt-10 overflow-hidden rounded-[12px] border border-border-subtle bg-bg-card lg:grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative aspect-[5/4] overflow-hidden bg-bg-secondary lg:aspect-auto lg:min-h-[26rem]">
                  {founders[0].image.src ? (
                    <Image
                      src={founders[0].image.src}
                      alt={founders[0].image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover object-top"
                    />
                  ) : null}
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <h3 className="font-heading text-2xl font-semibold sm:text-3xl">
                    {founders[0].name}
                  </h3>
                  <p className="mt-1 text-sm text-accent-primary">
                    {founders[0].role}
                  </p>
                  <p className="mt-3 text-sm font-medium text-text-primary">
                    {founders[0].responsibilities}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-text-secondary">
                    {founders[0].bio}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {founders[0].expertise.map((item) => (
                      <li
                        key={item}
                        className="rounded-[8px] border border-border-subtle px-2.5 py-1 text-xs text-text-secondary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ) : null}
          </div>
        </section>

        <section className="surface-white border-b border-border-subtle section-y text-text-primary">
          <div className="container-site">
            <h2 className="font-heading text-3xl font-semibold">
              How we work
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {aboutContent.principles.map((item) => (
                <div key={item.title}>
                  <h3 className="font-semibold text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="surface-ink-2 border-b border-border-subtle section-y text-text-primary">
          <div className="container-site">
            <h2 className="font-heading text-3xl font-semibold">
              Working principles
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {workingPrinciples.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[8px] border border-border-subtle bg-bg-card p-5"
                >
                  <h3 className="font-semibold text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="surface-paper border-b border-border-subtle section-y text-text-primary">
          <div className="container-site">
            <h2 className="font-heading text-3xl font-semibold">
              Delivery process
            </h2>
            <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <li key={step.step}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-primary">
                    {step.step}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="surface-ink section-y text-text-primary">
          <div className="container-site flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <h2 className="font-heading text-3xl font-semibold">
                Based in {siteConfig.address.city}, working internationally
              </h2>
              <p className="mt-3 text-base text-text-secondary">
                {siteConfig.address.full}. Communication is on WhatsApp, email or
                scheduled calls across time zones.
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
