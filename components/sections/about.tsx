import { aboutContent, founders, images, siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteImage } from "@/components/ui/site-image";

export function About() {
  return (
    <Section id="about" tone="muted">
      <div className="flex flex-col gap-12">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title={`Meet the people behind ${siteConfig.name}`}
              description={aboutContent.story}
            />
          </Reveal>
          <p className="mt-4 text-sm text-text-secondary sm:text-base">
            <span className="font-semibold text-text-primary">Where we work: </span>
            {siteConfig.whereWeWork}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {aboutContent.principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="h-full rounded-[1.1rem] border border-white/10 bg-bg-card p-5 sm:p-6">
                  <h3 className="font-semibold text-text-primary">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary sm:text-base">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {founders.map((founder, index) => {
            const photo = images[founder.photoKey];
            return (
              <Reveal key={founder.name} delay={index * 0.06}>
                <article className="flex h-full flex-col gap-5 rounded-[1.25rem] border border-white/10 bg-bg-card p-6 sm:p-7">
                  <div className="relative h-36 w-36 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:h-40 sm:w-40">
                    <SiteImage
                      image={photo}
                      fill
                      sizes="160px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl font-bold text-text-primary sm:text-2xl">
                      {founder.name}
                    </h3>
                    <p className="mt-1 text-sm text-accent-primary">{founder.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                      {founder.bio}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
