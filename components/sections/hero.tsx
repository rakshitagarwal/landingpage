"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { getWhatsAppLink, heroContent, images } from "@/lib/site-config";
import { buttonLinkClass } from "@/components/ui/button";
import { SiteImage } from "@/components/ui/site-image";
import { cn } from "@/lib/utils";

export function Hero() {
  const mockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mockRef.current;
    if (!el) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.to("[data-float]", {
        y: -10,
        duration: 2.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.35,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-white/[0.08] pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[15%] top-[20%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(46,242,255,0.14),transparent_65%)] blur-2xl" />
      </div>

      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0 lg:pr-4">
          <div className="mb-5 flex flex-col gap-3">
            <span className="h-0.5 w-10 rounded-full bg-accent-primary" aria-hidden />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-primary">
              {heroContent.eyebrow}
            </p>
          </div>
          <h1 className="font-serif text-[2.15rem] font-bold leading-[1.15] tracking-tight text-text-primary sm:text-5xl lg:text-[3.25rem]">
            {heroContent.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {heroContent.subtext}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonLinkClass("primary", "lg"))}
            >
              {heroContent.primaryCta}
            </a>
            <a
              href="#work"
              className={cn(buttonLinkClass("secondary", "lg"))}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {heroContent.secondaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <ul className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-0 sm:gap-y-2">
            {heroContent.trustRow.map((item, index) => (
              <li
                key={item}
                className="flex items-center text-sm text-text-secondary"
              >
                {index > 0 ? (
                  <span className="mx-3 hidden text-white/20 sm:inline" aria-hidden>
                    ·
                  </span>
                ) : null}
                <span className="flex items-center gap-2 sm:gap-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-primary sm:hidden" />
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          ref={mockRef}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div
            data-float
            className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/10 bg-bg-card shadow-[var(--shadow-card)]"
          >
            <SiteImage
              image={images.heroDashboard}
              fill
              sizes="(max-width: 1024px) 90vw, 560px"
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-primary/50 to-transparent" />
          </div>

          {heroContent.floatingCards.map((card, index) => (
            <div
              key={card.label}
              data-float
              className={cn(
                "absolute z-10 max-w-[11.5rem] rounded-2xl border border-white/10 bg-bg-elevated/95 px-3 py-2.5 text-xs font-medium text-text-primary shadow-[var(--shadow-card)] backdrop-blur",
                index === 0 && "-left-1 top-6 sm:left-0",
                index === 1 && "-right-1 top-[42%] sm:right-2",
                index === 2 && "bottom-4 left-[18%] sm:left-[22%]"
              )}
            >
              {card.label}
            </div>
          ))}
          <p className="mt-3 text-center text-xs text-text-muted">
            {heroContent.floatingCardsNote}
          </p>
        </div>
      </div>
    </section>
  );
}
