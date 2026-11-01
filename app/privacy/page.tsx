import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles personal data under applicable Indian law.`,
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
        <p className="mt-3 text-sm text-text-muted">Last updated: 31 October 2026</p>
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-text-secondary">
          <p>
            {siteConfig.name} (“we”, “us”) respects your privacy. This policy
            explains what personal data we collect when you use our website or
            contact us, and how we use it. We aim to follow the principles of
            India’s Digital Personal Data Protection Act, 2023 (DPDP Act) and
            other applicable law.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary">
            Who we are
          </h2>
          <p>
            {siteConfig.name} is a web and software studio based at{" "}
            {siteConfig.address.full}. Contact:{" "}
            <a href={`mailto:${siteConfig.contactEmail || siteConfig.email}`} className="text-accent-primary">
              {siteConfig.contactEmail || siteConfig.email}
            </a>{" "}
            or {siteConfig.phone}.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary">
            What we collect
          </h2>
          <p>
            When you fill our contact form or message us on WhatsApp, email or
            phone, we may receive your name, phone number, email address,
            company name, budget range and project details. Our website may also
            collect basic technical data such as browser type and pages visited
            if analytics is enabled.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary">
            Why we use it
          </h2>
          <p>
            We use this information to reply to enquiries, prepare quotes,
            deliver services you request, and improve our website. We do not
            sell your personal data.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary">
            Storage and sharing
          </h2>
          <p>
            Messages may be stored in email, WhatsApp, or a private lead
            spreadsheet. We may use trusted processors (for example email or
            form delivery tools) only to run our business. We keep data only as
            long as needed for those purposes or as required by law.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary">
            Your choices
          </h2>
          <p>
            You may ask us to correct or delete enquiry data we hold, or
            withdraw consent for future marketing messages, by emailing{" "}
            <a href={`mailto:${siteConfig.contactEmail || siteConfig.email}`} className="text-accent-primary">
              {siteConfig.contactEmail || siteConfig.email}
            </a>
            . Some records may be retained where we must keep them for contracts,
            accounts or legal reasons.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary">
            Security
          </h2>
          <p>
            We take reasonable steps to protect personal data. No method of
            transmission or storage is completely secure.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary">
            Changes
          </h2>
          <p>
            We may update this policy from time to time. The latest version will
            always be on this page.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
