import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Send a business enquiry to ${siteConfig.legalName}. Share your name, email, service needs, budget and project description for a fixed quote.`,
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-hidden bg-bg-primary text-text-primary">
        <div className="container-site pt-28 pb-6 sm:pt-32 sm:pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-primary">
            Contact us
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-text-primary sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 max-w-2xl text-base text-text-secondary sm:text-lg">
            Start with the enquiry form. We reply within 24 hours with next
            steps and a clear quote path.
          </p>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
