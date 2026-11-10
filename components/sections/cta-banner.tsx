"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getWhatsAppLink, siteConfig } from "@/lib/site-config";
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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--copper)_14%,transparent),transparent_55%)]"
        aria-hidden
      />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-35" aria-hidden />
      <div className="container-site relative py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
          <div>
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
              Talk directly with the people who will build it.
            </h2>
            <p
              data-final-cta
              className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
            >
              Share the problem, the users and the first release you need. We
              reply within 24 hours with a clear next step — and a fixed quote
              once scope is agreed.
            </p>
            <div data-final-cta className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className={cn(buttonLinkClass("primary", "lg"))}>
                Discuss Your Project
              </Link>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonLinkClass("secondary", "lg"))}
              >
                WhatsApp the studio
              </a>
            </div>
          </div>

          <div
            data-final-cta
            className="rounded-[12px] border border-border-subtle bg-bg-card/70 p-6 backdrop-blur sm:p-7"
          >
            <p className="text-sm font-semibold text-text-primary">
              What happens next
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-text-secondary">
              <li>1. You send a short brief or jump on WhatsApp.</li>
              <li>2. An engineer reviews the problem and asks clarifying questions.</li>
              <li>3. You receive a written scope, timeline and fixed quote.</li>
            </ul>
            <a
              href={`mailto:${email}`}
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-accent-primary transition hover:underline"
            >
              Or email {email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
