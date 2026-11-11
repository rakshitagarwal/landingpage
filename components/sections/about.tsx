import Link from "next/link";
import { aboutContent, founders, siteConfig } from "@/lib/site-config";
import { SiteImage } from "@/components/ui/site-image";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.23 0z" />
    </svg>
  );
}

export function About() {
  return (
    <SectionWrapper id="about" tone="white" aria-label="About Obekai">
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

        <div className="grid gap-4 sm:grid-cols-3">
          {aboutContent.principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="card-surface h-full p-5 sm:p-6">
                <h3 className="font-heading text-base font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="border-t border-border-subtle pt-12 sm:pt-16">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-primary">
                Founder
              </p>
              <h2 className="font-heading mt-3 text-3xl font-semibold text-text-primary sm:text-4xl">
                Meet the person behind Obekai
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                You talk with the person designing and engineering the product —
                not a separate account layer.
              </p>
            </div>
          </Reveal>

          {founders[0] ? (
            <Reveal delay={0.06}>
              <article className="card-surface card-hover-wash group mt-10 overflow-hidden lg:grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative aspect-[4/5] overflow-hidden bg-bg-secondary sm:aspect-[5/4] lg:aspect-auto lg:min-h-[26rem]">
                  {founders[0].image.src ? (
                    <SiteImage
                      image={founders[0].image}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  ) : null}
                </div>
                <div className="relative z-[1] flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-2xl font-semibold text-text-primary sm:text-3xl">
                        {founders[0].name}
                      </h3>
                      <p className="mt-1 text-sm text-accent-primary">
                        {founders[0].role}
                      </p>
                    </div>
                    {founders[0].linkedin ? (
                      <a
                        href={founders[0].linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${founders[0].name} on LinkedIn`}
                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-border-subtle text-text-primary transition hover:border-copper hover:text-accent-primary"
                      >
                        <LinkedInIcon className="h-4 w-4" />
                      </a>
                    ) : (
                      <span
                        aria-label={`${founders[0].name} LinkedIn coming soon`}
                        title="LinkedIn profile coming soon"
                        className="inline-flex h-11 w-11 shrink-0 cursor-not-allowed items-center justify-center rounded-[8px] border border-border-subtle text-text-muted opacity-50"
                      >
                        <LinkedInIcon className="h-4 w-4" />
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm font-medium text-text-primary">
                    {founders[0].responsibilities}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                    {founders[0].bio}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {founders[0].expertise.map((item) => (
                      <li
                        key={item}
                        className="rounded-[8px] border border-border-subtle px-2.5 py-1 text-xs text-text-secondary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-sm text-text-secondary">
                    Prefer a longer intro?{" "}
                    <Link
                      href="/about"
                      className={cn(
                        "font-semibold text-accent-primary underline-offset-4 hover:underline"
                      )}
                    >
                      Read more about the studio
                    </Link>
                    .
                  </p>
                </div>
              </article>
            </Reveal>
          ) : null}
        </div>
      </div>
    </SectionWrapper>
  );
}
