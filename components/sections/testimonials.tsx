import { Quote } from "lucide-react";
import { siteConfig, testimonials } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteImage } from "@/components/ui/site-image";

export function Testimonials() {
  if (!siteConfig.showTestimonials) return null;

  const items = testimonials.filter((item) => !item.isSample);
  const display = (items.length > 0 ? items : testimonials).slice(0, 3);
  if (display.length === 0) return null;

  return (
    <SectionWrapper id="testimonials" muted>
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by teams that need reliable delivery"
            description="Hear how clients describe our process, communication and results after launch."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {display.map((item, index) => {
            const initials = item.name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2);

            return (
              <Reveal key={item.id} delay={index * 0.05}>
                <blockquote className="card-surface card-hover-wash relative flex h-full flex-col border-l-[3px] border-l-accent-primary p-6 sm:p-7">
                  <div className="card-icon relative z-[1] mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-accent-primary">
                    <Quote className="h-4 w-4" aria-hidden />
                  </div>
                  <p className="relative z-[1] font-serif text-lg leading-relaxed text-text-primary">
                    “{item.quote}”
                  </p>
                  <footer className="relative z-[1] mt-6 flex items-center gap-3">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-border-subtle bg-bg-secondary">
                      {item.avatar.src ? (
                        <SiteImage
                          image={item.avatar}
                          fill
                          sizes="44px"
                          className="object-cover object-top"
                        />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center text-xs font-semibold text-accent-primary">
                          {initials}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-primary">
                        {item.name}
                      </p>
                      <p className="text-xs text-text-secondary">
                        {item.role}
                        {item.company ? ` · ${item.company}` : null}
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
