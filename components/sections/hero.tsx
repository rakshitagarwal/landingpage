"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { heroContent } from "@/lib/site-config";
import { buttonLinkClass } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const metrics = [
  { label: "Scope", value: "Defined" },
  { label: "Build", value: "Active" },
  { label: "Release", value: "Staged" },
] as const;

const pipeline = [
  { name: "Discovery", state: "Done" },
  { name: "Architecture", state: "In review" },
  { name: "Build", state: "Active" },
] as const;

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
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
      gsap.set(animated, { autoAlpha: 0, y: 24 });
      gsap.set("[data-hero-visual]", { autoAlpha: 0, y: 32, scale: 0.98 });

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .to("[data-hero-kicker]", { autoAlpha: 1, y: 0, duration: 0.45 })
        .to("[data-hero-title]", { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.2")
        .to("[data-hero-sub]", { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to("[data-hero-cta]", { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.35")
        .to(
          "[data-hero-trust] li",
          { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.06 },
          "-=0.25"
        )
        .to(
          "[data-hero-visual]",
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.85 },
          "-=0.7"
        );

      gsap.to("[data-hero-float]", {
        y: -8,
        duration: 3.6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.35,
        delay: 1.1,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="home"
      className="surface-ink relative isolate overflow-hidden pt-28 pb-16 text-text-primary sm:pt-32 sm:pb-20 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="hero-orb absolute -left-24 top-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent-primary)_18%,transparent),transparent_68%)] blur-3xl" />
        <div className="hero-orb hero-orb-delayed absolute right-[-6rem] bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--copper)_14%,transparent),transparent_70%)] blur-3xl" />
      </div>

      <div className="container-site grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-20">
        <div className="min-w-0">
          <p
            data-hero-kicker
            data-hero-animate
            className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-primary"
          >
            Software engineering studio · Ahmedabad
          </p>
          <h1
            data-hero-title
            data-hero-animate
            className="font-heading mt-5 max-w-[16ch] text-[2.6rem] font-semibold leading-[1.02] text-text-primary sm:text-6xl lg:text-[4.15rem]"
          >
            {heroContent.headline.startsWith("Engineering digital products that ") ? (
              <>
                Engineering digital products that{" "}
                <span className="text-accent-primary">
                  move businesses forward.
                </span>
              </>
            ) : (
              heroContent.headline
            )}
          </h1>
          <p
            data-hero-sub
            data-hero-animate
            className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
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
              href="#work"
              className={cn(buttonLinkClass("secondary", "lg"), "hero-cta-btn")}
              onClick={(event) => {
                event.preventDefault();
                document
                  .querySelector("#work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {heroContent.secondaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
          <ul
            data-hero-trust
            className="mt-8 grid gap-3 border-t border-border-subtle pt-6 sm:grid-cols-3"
          >
            {heroContent.trustRow.map((item) => (
              <li
                key={item}
                data-hero-animate
                className="flex items-start gap-2.5 text-sm leading-snug text-text-secondary"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ProductStage />
      </div>
    </section>
  );
}

function ProductStage() {
  return (
    <div
      data-hero-visual
      data-hero-animate
      className="relative mx-auto w-full max-w-xl lg:max-w-none"
    >
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--copper)_18%,transparent),transparent_68%)] blur-2xl"
        aria-hidden
      />

      <div
        className="overflow-hidden rounded-[12px] border border-[var(--color-border-dark)] bg-[var(--color-surface-dark)] text-[var(--color-text-light)] shadow-[0_30px_80px_-36px_rgba(0,0,0,0.55)]"
        aria-hidden
      >
        <div className="flex items-center gap-3 border-b border-white/8 px-4 py-3">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </span>
          <span className="text-[11px] tracking-wide text-white/45">
            obekai / delivery
          </span>
        </div>

        <div className="grid min-h-[320px] grid-cols-1 sm:grid-cols-[5.5rem_1fr]">
          <div className="hidden flex-col gap-2 border-r border-white/8 p-3 sm:flex">
            {["Overview", "Work", "Systems", "Release"].map((item, index) => (
              <span
                key={item}
                className={cn(
                  "rounded-lg px-2 py-2 text-[11px]",
                  index === 0
                    ? "bg-white/8 text-white"
                    : "text-white/40"
                )}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="space-y-4 p-4 sm:p-5">
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-white/8 bg-white/[0.03] px-2.5 py-3 sm:px-3"
                >
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/40">
                    {metric.label}
                  </p>
                  <p className="mt-1 font-heading text-lg font-semibold sm:text-xl">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
              <div className="mb-3 flex items-center justify-between text-[11px] text-white/45">
                <span>Release health</span>
                <span className="text-[var(--copper-light)]">Stable</span>
              </div>
              <div className="flex h-16 items-end gap-1.5">
                {[38, 52, 46, 70, 62, 84, 76, 90].map((height, index) => (
                  <span
                    key={index}
                    className="flex-1 rounded-sm bg-gradient-to-t from-[var(--copper-dark)] to-[var(--copper-light)]"
                    style={{ height: `${height}%`, opacity: 0.45 + index * 0.06 }}
                  />
                ))}
              </div>
            </div>

            <ul className="space-y-2">
              {pipeline.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between rounded-lg border border-white/8 px-3 py-2 text-xs"
                >
                  <span className="text-white/80">{item.name}</span>
                  <span className="text-white/40">{item.state}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 sm:hidden">
        {["API", "Queue", "Postgres"].map((label) => (
          <span
            key={label}
            className="rounded-xl border border-border-subtle bg-bg-elevated px-2 py-2 text-center text-[11px] font-medium text-text-secondary"
          >
            {label}
          </span>
        ))}
      </div>

      <div
        data-hero-float
        className="absolute -left-3 top-16 hidden rounded-[12px] border border-[var(--color-border-dark)] bg-[var(--color-surface-elevated)]/95 px-3 py-2 text-xs text-[var(--color-text-light)] shadow-xl backdrop-blur sm:block"
      >
        <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">API</p>
        <p className="mt-0.5 font-medium">Orders · sync</p>
      </div>
      <div
        data-hero-float
        className="absolute -right-2 top-28 hidden rounded-[12px] border border-[var(--color-border-dark)] bg-[var(--color-surface-elevated)]/95 px-3 py-2 text-xs text-[var(--color-text-light)] shadow-xl backdrop-blur sm:block"
      >
        <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">Queue</p>
        <p className="mt-0.5 font-medium">Jobs · healthy</p>
      </div>
      <div
        data-hero-float
        className="absolute bottom-6 left-8 hidden rounded-[12px] border border-[color-mix(in_srgb,var(--copper)_40%,transparent)] bg-[var(--color-surface-elevated)]/95 px-3 py-2 text-xs text-[var(--color-text-light)] shadow-xl backdrop-blur sm:block"
      >
        <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--copper-light)]">Postgres</p>
        <p className="mt-0.5 font-medium">Primary data</p>
      </div>
      <p className="sr-only">
        Illustrated product workspace showing delivery stages, release health and connected services.
      </p>
    </div>
  );
}
