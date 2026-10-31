import { differentiators } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyChooseUs() {
  return (
    <section className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="More Than Just a Technology Provider."
            description="We partner with businesses to design, build, and refine digital systems that support real growth."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="h-full rounded-[1.5rem] border border-white/10 bg-bg-card p-7 transition duration-300 hover:border-accent-primary/30 hover:bg-bg-elevated">
                <p className="font-mono text-xs text-accent-primary">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-serif text-2xl font-bold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
