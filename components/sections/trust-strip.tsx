"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { trustIndicators } from "@/lib/site-config";

gsap.registerPlugin(ScrollTrigger);

export function TrustStrip() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-trust-item]", {
        opacity: 0,
        y: 24,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      aria-label="Value propositions"
      className="border-y border-white/8 bg-bg-secondary/80"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8 lg:py-14">
        {trustIndicators.map((item) => (
          <div key={item.title} data-trust-item>
            <h3 className="text-sm font-semibold text-text-primary">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
