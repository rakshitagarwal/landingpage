import { About } from "@/components/sections/about";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Differentiators } from "@/components/sections/differentiators";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { Pricing } from "@/components/sections/pricing";
import { Principles } from "@/components/sections/principles";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { TechStack } from "@/components/sections/tech-stack";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <Differentiators />
        <Services />
        <TechStack />
        <Projects />
        <Process />
        <About />
        <WhyChooseUs />
        {siteConfig.showTestimonials ? <Testimonials /> : <Principles />}
        <Pricing />
        <FAQ />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
