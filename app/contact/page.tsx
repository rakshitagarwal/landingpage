import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Start a software project with ${siteConfig.legalName} in Ahmedabad. Share your work email, the service you need, a budget range and a short description. Quotes are available in INR or USD.`,
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
          <h1 className="mt-3 font-heading text-4xl font-semibold text-text-primary sm:text-5xl">
            Discuss your project
          </h1>
          <p className="mt-4 max-w-2xl text-base text-text-secondary sm:text-lg">
            Tell us what you are building. We reply within 24 hours with a
            clear next step, and can quote in INR or USD.
          </p>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
