import { whyObekai } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyChooseUs() {
  return (
    <SectionWrapper id="why">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Why Obekai"
            title="Experienced team. Clear products."
            description="A mid-sized company with over 6 years building for clients. Practical engineering, clear process, and software that fits how your business runs."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {whyObekai.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="card-surface card-lift h-full p-7">
                <p className="font-mono text-xs text-accent-primary">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-bold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
