import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms for using the ${siteConfig.name} website.`,
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
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-text-secondary">
          <p>
            By using {siteConfig.name}&apos;s website you agree to these simple
            terms.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary">
            Website content
          </h2>
          <p>
            Information on this site is for general guidance. Project scope,
            timelines and prices are confirmed in writing before work starts.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary">
            Project work
          </h2>
          <p>
            Deliverables, ownership and payment terms for each project are set
            out in the quote or agreement shared with you.
          </p>
          <h2 className="font-serif text-2xl font-bold text-text-primary">
            Contact
          </h2>
          <p>
            Questions:{" "}
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
