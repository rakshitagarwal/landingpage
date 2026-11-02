"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { heroContent, heroStats, images } from "@/lib/site-config";
import { buttonLinkClass } from "@/components/ui/button";
import { CoverMedia } from "@/components/ui/cover-media";
import { SiteImage } from "@/components/ui/site-image";
import { cn } from "@/lib/utils";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const mockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const mock = mockRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const animated = root.querySelectorAll<HTMLElement>("[data-hero-animate]");

    if (reduceMotion) {
      animated.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.visibility = "visible";
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(animated, { autoAlpha: 0, y: 28 });
      gsap.set("[data-hero-accent]", { autoAlpha: 1, y: 0, scaleX: 0 });
      gsap.set("[data-hero-visual]", { autoAlpha: 0, y: 40, scale: 0.97 });
      gsap.set("[data-float]", { autoAlpha: 0, y: 14 });

      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          animated.forEach((el) => {
            gsap.set(el, { clearProps: "transform" });
          });
        },
      });

      intro
        .to("[data-hero-accent]", {
          scaleX: 1,
          transformOrigin: "left center",
          duration: 0.5,
        })
        .to(
          "[data-hero-title]",
          { autoAlpha: 1, y: 0, duration: 0.75 },
          "-=0.2"
        )
        .to(
          "[data-hero-sub]",
          { autoAlpha: 1, y: 0, duration: 0.65 },
          "-=0.45"
        )
        .to(
          "[data-hero-cta]",
          { autoAlpha: 1, y: 0, duration: 0.6 },
          "-=0.35"
        )
        .to(
          "[data-hero-trust] li",
          { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.06 },
          "-=0.3"
        )
        .to(
          "[data-hero-visual]",
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.85 },
          "-=0.75"
        )
        .to(
          "[data-float]",
          { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.4"
        )
        .to(
          "[data-hero-stat]",
          { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 },
          "-=0.25"
        );

      if (mock) {
        gsap.to("[data-float]", {
          y: -10,
          duration: 3.2,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          stagger: 0.45,
          delay: 1.4,
        });

        gsap.to("[data-hero-visual-frame]", {
          y: -6,
          duration: 4.5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: 1.2,
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  const heroHasImage = Boolean(images.heroDashboard.src);

  return (
    <section
      ref={rootRef}
      id="home"
      className="relative isolate overflow-hidden border-b border-border-subtle bg-bg-primary pt-28 pb-16 text-text-primary sm:pt-32 sm:pb-20 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-grid absolute inset-0 opacity-50" />
        <div className="hero-orb absolute left-[10%] top-[12%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent-primary)_16%,transparent),transparent_68%)] blur-2xl" />
        <div className="hero-orb hero-orb-delayed absolute bottom-[5%] right-[8%] h-64 w-64 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent-primary)_10%,transparent),transparent_70%)] blur-2xl" />
      </div>

      <div className="container-site grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
        <div className="min-w-0 lg:pr-2">
          <span
            data-hero-accent
            data-hero-animate
            className="mb-5 block h-0.5 w-10 origin-left rounded-full bg-accent-primary"
            aria-hidden
          />
          <h1
            data-hero-title
            data-hero-animate
            className="font-serif text-[2.35rem] font-bold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-[3.4rem]"
          >
            {heroContent.headline}
          </h1>
          <p
            data-hero-sub
            data-hero-animate
            className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            {heroContent.subtext}
          </p>
          <div
            data-hero-cta
            data-hero-animate
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="/contact"
              className={cn(buttonLinkClass("primary", "lg"), "hero-cta-btn")}
            >
              {heroContent.primaryCta}
            </a>
            <a
              href="#projects"
              className={cn(buttonLinkClass("secondary", "lg"), "hero-cta-btn")}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {heroContent.secondaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <ul
            data-hero-trust
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-border-subtle pt-6"
          >
            {heroContent.trustRow.map((item) => (
              <li
                key={item}
                data-hero-animate
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
          data-hero-visual
          data-hero-animate
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div
            data-hero-visual-frame
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
            <li
              key={stat.value}
              data-hero-stat
              data-hero-animate
              className="min-w-0 px-5 py-5 sm:px-6 sm:py-6"
            >
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
