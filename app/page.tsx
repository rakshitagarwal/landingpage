import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Insights } from "@/components/sections/insights";
import { Navbar } from "@/components/sections/navbar";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Solutions } from "@/components/sections/solutions";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustStrip } from "@/components/sections/trust-strip";
import { WhoWeHelp } from "@/components/sections/who-we-help";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <TrustStrip />
        <Services />
        <WhoWeHelp />
        <Process />
        <Solutions />
        <Insights />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
