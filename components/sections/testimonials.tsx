"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig, testimonials } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteImage } from "@/components/ui/site-image";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hidden while showTestimonials is false.
 * When enabled, sample items show an "Example feedback" badge.
 */
export function Testimonials() {
  if (!siteConfig.showTestimonials) return null;

  const items = testimonials.filter((item) => !item.isSample);
  const display = items.length > 0 ? items : testimonials;
  if (display.length === 0) return null;

  return (
    <SectionWrapper muted>
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say"
            description="Feedback from businesses we have worked with."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {display.map((item, index) => (
            <TestimonialCard key={item.id} item={item} delay={index * 0.06} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

type TestimonialItem = (typeof testimonials)[number];

function TestimonialCard({
  item,
  delay,
}: {
  item: TestimonialItem;
  delay: number;
}) {
  const quoteRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = quoteRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      el.style.opacity = "0.12";
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 0.12,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top 85%",
            end: "top 45%",
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Reveal delay={delay}>
      <blockquote className="card-surface relative flex h-full flex-col overflow-hidden border-l-[3px] border-l-accent-primary p-6">
        <span
          ref={quoteRef}
          aria-hidden
          className="pointer-events-none absolute right-4 top-2 font-serif text-7xl leading-none text-accent-primary opacity-0"
        >
          “
        </span>
        {item.isSample ? (
          <span className="mb-4 inline-flex w-fit rounded-full border border-border-subtle bg-bg-secondary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-text-secondary">
            Example feedback
          </span>
        ) : null}
        <p className="relative font-serif text-lg leading-relaxed text-text-primary">
          “{item.quote}”
        </p>
        <footer className="relative mt-6 flex items-center gap-3">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-border-subtle bg-bg-secondary">
            {item.avatar.src ? (
              <SiteImage
                image={item.avatar}
                fill
                sizes="44px"
                className="object-cover object-top"
              />
            ) : null}
          </div>
          <div>
            <p className="text-sm font-semibold text-text-primary">{item.name}</p>
            <p className="text-xs text-text-secondary">
              {item.role}
              {item.company ? ` · ${item.company}` : null}
            </p>
          </div>
        </footer>
      </blockquote>
    </Reveal>
  );
}
