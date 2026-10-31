"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { getWhatsAppLink, heroContent } from "@/lib/site-config";
import { buttonLinkClass } from "@/components/ui/button";
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
        <div className="min-w-0 pr-0 lg:pr-4">
          <div className="mb-5 flex flex-col gap-3">
            <span
              className="h-0.5 w-10 rounded-full bg-accent-primary"
              aria-hidden
            />
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
          <ul className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
            {heroContent.trustRow.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-text-secondary"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div ref={mockRef} className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
          <div
            data-float
            className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-bg-card p-4 shadow-[var(--shadow-card)]"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              </div>
              <span className="text-xs text-text-secondary">yourbusiness.in</span>
            </div>
            <div className="rounded-xl border border-white/10 bg-bg-secondary p-4">
              <div className="h-3 w-28 rounded bg-accent-primary/30" />
              <div className="mt-3 h-3 w-3/4 rounded bg-white/15" />
              <div className="mt-2 h-3 w-1/2 rounded bg-white/10" />
              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="h-16 rounded-lg bg-white/8" />
                <div className="h-16 rounded-lg bg-white/8" />
                <div className="h-16 rounded-lg bg-accent-primary/15" />
              </div>
            </div>
          </div>

          <div
            data-float
            className="absolute -right-2 top-8 w-[58%] rounded-2xl border border-white/10 bg-bg-elevated p-3 shadow-[var(--shadow-card)] sm:right-0"
          >
            <p className="text-xs font-semibold text-text-primary">Today</p>
            <div className="mt-2 space-y-1.5">
              <div className="h-2 rounded bg-white/15" />
              <div className="h-8 rounded-lg bg-gradient-to-r from-accent-primary/25 to-transparent" />
              <div className="h-2 w-2/3 rounded bg-white/10" />
            </div>
          </div>

          <div
            data-float
            className="absolute -left-1 bottom-4 max-w-[70%] rounded-2xl rounded-bl-md border border-white/10 bg-[#075E54] px-3 py-2 text-sm text-white shadow-[var(--shadow-card)] sm:left-2"
          >
            Hi! Thanks for messaging. How can we help today?
          </div>
        </div>
      </div>
    </section>
  );
}
