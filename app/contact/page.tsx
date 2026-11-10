import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Start a software project with ${siteConfig.legalName} in Ahmedabad. Share your work email, the service you need, a budget range and a short description. Quotes are available in INR or USD.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Obekai",
    description: `Hire ${siteConfig.legalName} for custom software, web, SaaS and AI automation. Quotes in INR or USD.`,
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        <section className="surface-ink border-b border-border-subtle pt-28 pb-12 text-text-primary sm:pt-32 sm:pb-16">
          <div className="container-site">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-primary">
              Contact us
            </p>
            <h1 className="mt-3 max-w-[18ch] font-heading text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Discuss your project
            </h1>
            <p className="mt-5 max-w-2xl text-base text-text-secondary sm:text-lg">
              Tell us what you are building. We reply within 24 hours with a
              clear next step, and can quote in INR or USD.
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
