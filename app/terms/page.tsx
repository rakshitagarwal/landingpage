import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms for using the ${siteConfig.name} website and engaging our services.`,
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="container-site section-y flex-1 pt-28 sm:pt-32">
        <p className="text-sm text-text-secondary">
          <Link href="/" className="hover:text-text-primary">
            Home
          </Link>{" "}
          / Terms
        </p>
        <h1 className="mt-6 font-serif text-4xl font-bold text-text-primary">
          Terms of use
        </h1>
        <p className="mt-3 text-sm text-text-muted">Last updated: 31 October 2026</p>
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-text-secondary">
          <p>
            By using {siteConfig.name}&apos;s website or requesting a quote, you
            agree to these terms. Project work is governed by the written quote
            or agreement shared with you.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary">
            Website information
          </h2>
          <p>
            Content on this site is general guidance. Prices shown are starting
            points. Scope, timelines and final prices are confirmed in writing
            before work starts. Sample projects are illustrations, not claims
            about specific clients.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary">
            Services and payment
          </h2>
          <p>
            Unless otherwise agreed, payment is typically 40% advance, 40% at
            design or demo approval, and 20% on delivery. Prices exclude 18% GST
            unless stated. Invoices are provided. Source code and account access
            for client work are handed over after final payment.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary">
            Client responsibilities
          </h2>
          <p>
            You agree to provide timely approvals, accurate business information,
            and content you have rights to use. Delays in feedback may extend
            timelines.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary">
            Limitation
          </h2>
          <p>
            To the extent allowed by Indian law, {siteConfig.name} is not liable
            for indirect or consequential losses arising from use of this website
            or from third-party services (hosting, payment gateways, WhatsApp
            providers, ads platforms).
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary">
            Governing law
          </h2>
          <p>
            These terms are governed by the laws of India. Courts in Ahmedabad,
            Gujarat shall have jurisdiction, subject to applicable law.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary">
            Contact
          </h2>
          <p>
            Questions:{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-accent-primary">
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
