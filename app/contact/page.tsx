import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `About ${siteConfig.legalName} and how to get in touch. Tell us about your website, software or WhatsApp automation project.`,
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-hidden bg-bg-primary text-text-primary">
        <div className="container-site pt-28 pb-10 sm:pt-32 sm:pb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-primary">
            Contact us
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-text-primary sm:text-5xl">
            About us and how to reach the team
          </h1>
          <p className="mt-4 max-w-2xl text-base text-text-secondary sm:text-lg">
            Learn who we are, then share your requirements. We reply within 24 hours on WhatsApp or email.
          </p>
        </div>
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
