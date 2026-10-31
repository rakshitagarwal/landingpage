import { aboutContent, founders, siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <Section id="about" tone="muted">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title={`Meet the people behind ${siteConfig.name}`}
              description={aboutContent.story}
            />
          </Reveal>
          <div className="mt-8 space-y-4">
            {aboutContent.principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="rounded-[1.1rem] border border-white/10 bg-bg-card p-5 sm:p-6">
                  <h3 className="font-semibold text-text-primary">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary sm:text-base">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {founders.map((founder, index) => (
            <Reveal key={founder.name} delay={index * 0.06}>
              <article className="h-full rounded-[1.25rem] border border-white/10 bg-bg-card p-6 sm:p-7">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/5 text-sm text-text-muted">
                  Photo
                </div>
                <h3 className="font-serif text-xl font-bold text-text-primary">
                  {founder.name}
                </h3>
                <p className="mt-1 text-sm text-accent-primary">{founder.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {founder.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
