import { aboutContent } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
        <Reveal>
          <SectionHeading
            title={aboutContent.heading}
            description={aboutContent.introduction}
          />
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-text-secondary sm:text-base">
            Whether you are launching a first product, digitizing operations, or
            scaling an existing digital presence, we help translate business goals
            into reliable software, websites, and growth systems.
          </p>
        </Reveal>

        <div className="space-y-4">
          <Reveal delay={0.05}>
            <div className="rounded-[1.5rem] border border-white/10 bg-bg-card p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-primary">
                Mission
              </p>
              <p className="mt-4 font-serif text-xl leading-relaxed text-text-primary">
                {aboutContent.mission}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[1.5rem] border border-white/10 bg-bg-card p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-primary">
                Vision
              </p>
              <p className="mt-4 font-serif text-xl leading-relaxed text-text-primary">
                {aboutContent.vision}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
