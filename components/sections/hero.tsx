"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { getWhatsAppLink, heroContent, heroStats, images } from "@/lib/site-config";
import { buttonLinkClass } from "@/components/ui/button";
import { CoverMedia } from "@/components/ui/cover-media";
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
        y: -8,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.4,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const heroHasImage = Boolean(images.heroDashboard.src);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-border-subtle bg-bg-primary pt-28 pb-16 text-text-primary sm:pt-32 sm:pb-20 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-grid absolute inset-0 opacity-50" />
        <div className="absolute left-[10%] top-[12%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent-primary)_16%,transparent),transparent_68%)] blur-2xl" />
        <div className="absolute bottom-[5%] right-[8%] h-64 w-64 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent-primary)_10%,transparent),transparent_70%)] blur-2xl" />
      </div>

      <div className="container-site grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
        <div className="min-w-0 lg:pr-2">
          <div className="mb-5 flex flex-col gap-3">
            <span className="h-0.5 w-10 rounded-full bg-accent-primary" aria-hidden />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-primary">
              {heroContent.eyebrow}
            </p>
          </div>
          <h1 className="font-serif text-[2.35rem] font-bold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-[3.4rem]">
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
              href="#case-studies"
              className={cn(buttonLinkClass("secondary", "lg"))}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#case-studies")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {heroContent.secondaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-border-subtle pt-6">
            {heroContent.trustRow.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-text-secondary"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" aria-hidden />
                {item}
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
            className="relative aspect-[16/10] overflow-hidden rounded-[1.35rem] border border-border-subtle shadow-[var(--shadow-card)]"
          >
            {heroHasImage ? (
              <>
                <SiteImage
                  image={images.heroDashboard}
                  fill
                  sizes="(max-width: 1024px) 90vw, 560px"
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-primary/50 via-transparent to-transparent" />
              </>
            ) : (
              <CoverMedia
                title="Business software & WhatsApp tools"
                icon="dashboard"
                className="absolute inset-0 h-full w-full"
                priority
              />
            )}
          </div>

          {heroContent.floatingCards.map((card, index) => (
            <div
              key={card.label}
              data-float
              className={cn(
                "absolute z-10 max-w-[11.5rem] rounded-2xl border border-border-subtle bg-bg-elevated/95 px-3.5 py-2.5 text-xs font-medium text-text-primary shadow-[var(--shadow-card)] backdrop-blur",
                index === 0 && "-left-1 top-6 sm:left-0",
                index === 1 && "-right-1 top-[42%] sm:right-2",
                index === 2 && "bottom-4 left-[18%] sm:left-[22%]"
              )}
            >
              {card.label}
            </div>
          ))}
        </div>
      </div>

      <div className="container-site mt-14 sm:mt-16 lg:mt-20">
        <ul className="grid divide-y divide-border-subtle rounded-[1.25rem] border border-border-subtle bg-bg-card/70 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
          {heroStats.map((stat) => (
            <li key={stat.value} className="min-w-0 px-5 py-5 sm:px-6 sm:py-6">
              <p className="font-serif text-xl font-bold text-text-primary sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-text-secondary">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
