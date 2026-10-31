import { whoWeHelp } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhoWeHelp() {
  return (
    <Section id="who-we-help" tone="muted">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Who we help"
            title="Built for small businesses across India"
            description="Typical problems we help with — no client claims, just the situations we see often."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whoWeHelp.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="h-full rounded-[1.25rem] border border-white/10 bg-bg-card p-6 sm:p-7">
                <h3 className="text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
                  {item.problem}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
