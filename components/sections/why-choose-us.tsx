import { whyPixelnest } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyChooseUs() {
  return (
    <Section tone="default">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Why Pixelnest"
            title="A small team you can actually reach"
            description="Clear promises you can hold us to — editable in our site config if they change."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {whyPixelnest.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="h-full rounded-[1.25rem] border border-white/10 bg-bg-card p-7">
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
    </Section>
  );
}
