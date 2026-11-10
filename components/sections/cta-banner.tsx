"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/lib/site-config";
import { buttonLinkClass } from "@/components/ui/button";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function CtaBanner() {
  const ref = useRef<HTMLElement>(null);
  const email = siteConfig.contactEmail || siteConfig.email;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-final-cta]", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: el,
          start: "top 86%",
          toggleActions: "play none none none",
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="discuss"
      aria-label="Discuss your project"
      className="surface-ink relative overflow-hidden border-y border-border-subtle"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--copper)_18%,transparent),transparent_55%)]"
        aria-hidden
      />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="container-site relative py-20 sm:py-28">
        <p
          data-final-cta
          className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-primary"
        >
          Start a project
        </p>
        <h2
          data-final-cta
          className="font-heading mt-4 max-w-[16ch] text-4xl font-semibold leading-[1.05] sm:text-6xl"
        >
          Have an idea? Let&apos;s engineer it into reality.
        </h2>
        <p
          data-final-cta
          className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          Tell us what you&apos;re building. We&apos;ll help you identify the
          right technical approach and the next steps.
        </p>
        <div data-final-cta className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className={cn(buttonLinkClass("primary", "lg"))}>
            Discuss Your Project
          </Link>
          <a
            href={`mailto:${email}`}
            className={cn(buttonLinkClass("secondary", "lg"))}
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
