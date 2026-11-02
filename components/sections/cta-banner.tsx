"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { buttonLinkClass } from "@/components/ui/button";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function CtaBanner() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-cta-copy]", {
        opacity: 0,
        x: -28,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
      gsap.from("[data-cta-button]", {
        opacity: 0,
        x: 28,
        scale: 0.96,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
      gsap.to("[data-cta-glow]", {
        opacity: 0.9,
        scale: 1.08,
        duration: 3.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="discuss"
      aria-label="Discuss your requirements"
      className="relative overflow-hidden border-y border-border-subtle bg-bg-primary"
    >
      <div
        data-cta-glow
        className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent-primary)_22%,transparent),transparent_70%)] opacity-50 blur-2xl"
        aria-hidden
      />
      <div className="container-site relative flex flex-col items-center gap-6 py-14 text-center sm:py-16 md:flex-row md:justify-between md:text-left">
        <p
          data-cta-copy
          className="max-w-xl font-serif text-2xl font-bold leading-snug text-text-primary sm:text-3xl"
        >
          Tell us what you need. We will map the right next step.
        </p>
        <Link
          data-cta-button
          href="/contact"
          className={cn(buttonLinkClass("primary", "lg"), "shrink-0")}
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
