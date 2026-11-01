import { CtaBanner } from "@/components/sections/cta-banner";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Insights } from "@/components/sections/insights";
import { Navbar } from "@/components/sections/navbar";
import { Pricing } from "@/components/sections/pricing";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <Services />
        <CtaBanner />
        <Insights />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
