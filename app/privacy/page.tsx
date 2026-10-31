import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles information you share with us.`,
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="container-site section-y flex-1 pt-28 sm:pt-32">
        <p className="text-sm text-text-secondary">
          <Link href="/" className="hover:text-text-primary">
            Home
          </Link>{" "}
          / Privacy Policy
        </p>
        <h1 className="mt-6 font-serif text-4xl font-bold text-text-primary">
          Privacy Policy
        </h1>
        <div className="prose-invert mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-text-secondary">
          <p>
            {siteConfig.name} (“we”) respects your privacy. This page explains
            what we collect when you contact us and how we use it.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary">
            Information we collect
          </h2>
          <p>
            When you fill our contact form or message us, we may receive your
            name, phone number, email, company name and project details.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary">
            How we use it
          </h2>
          <p>
            We use this information only to reply to your inquiry and deliver
            services you request. We do not sell your data.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary">
            Storage
          </h2>
          <p>
            Messages may be stored in our email inbox, WhatsApp and/or a private
            spreadsheet used for lead tracking.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary">
            Contact
          </h2>
          <p>
            Questions about privacy:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-accent-primary"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
