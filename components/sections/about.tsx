import { aboutContent, founders, siteConfig } from "@/lib/site-config";
import { SiteImage } from "@/components/ui/site-image";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <SectionWrapper id="about" tone="raised" aria-label="About Obekai">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="An engineering studio in Ahmedabad, working beyond it."
            description={aboutContent.story}
          />
        </Reveal>
        <p className="max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
          {siteConfig.whereWeWork} Hours: {siteConfig.hours}
        </p>
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {aboutContent.principles.map((item) => (
              <article key={item.title} className="card-surface p-5">
                <h3 className="font-heading text-base font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {founders.map((founder) => (
              <article key={founder.name} className="card-surface p-5">
                {founder.image.src ? (
                  <SiteImage
                    image={founder.image}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                ) : (
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-border-subtle text-sm font-semibold text-text-secondary">
                    {founder.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                )}
                <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">
                  {founder.name}
                </h3>
                <p className="text-sm text-accent-primary">{founder.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {founder.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
