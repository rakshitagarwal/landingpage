"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const devices = [
  {
    title: "CRM Pipeline",
    subtitle: "Sales & leads",
    accent: "from-[#2ef2ff]/30 to-transparent",
    rotate: "-18deg",
    x: "-28%",
    y: "18%",
    depth: 0.35,
  },
  {
    title: "SaaS Admin",
    subtitle: "Multi-tenant ops",
    accent: "from-[#7dffb3]/25 to-transparent",
    rotate: "-8deg",
    x: "-8%",
    y: "8%",
    depth: 0.55,
  },
  {
    title: "Analytics",
    subtitle: "Growth dashboards",
    accent: "from-[#8ab4ff]/30 to-transparent",
    rotate: "4deg",
    x: "14%",
    y: "4%",
    depth: 0.75,
  },
  {
    title: "Automation",
    subtitle: "AI workflows",
    accent: "from-[#ffb86c]/25 to-transparent",
    rotate: "16deg",
    x: "34%",
    y: "16%",
    depth: 0.45,
  },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const devicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const devicesEl = devicesRef.current;
    if (!section || !devicesEl) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (!reduceMotion) {
        intro
          .from("[data-hero-eyebrow]", { opacity: 0, y: 20, duration: 0.7 })
          .from("[data-hero-title]", { opacity: 0, y: 36, duration: 0.9 }, "-=0.45")
          .from("[data-hero-copy]", { opacity: 0, y: 24, duration: 0.7 }, "-=0.55")
          .from("[data-hero-cta]", { opacity: 0, y: 18, duration: 0.6 }, "-=0.4")
          .from(
            "[data-device]",
            {
              opacity: 0,
              y: 80,
              rotateX: 18,
              stagger: 0.08,
              duration: 1.1,
            },
            "-=0.7"
          );

        gsap.to("[data-device]", {
          y: (i) => -40 - i * 18,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(devicesEl, {
          y: 120,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative isolate min-h-[100svh] overflow-hidden pt-28 pb-8 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[42%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(46,242,255,0.14),transparent_62%)] blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg-primary to-transparent" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <p
          data-hero-eyebrow
          className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent-primary"
        >
          {siteConfig.tagline}
        </p>
        <h1
          data-hero-title
          className="font-serif text-[2.35rem] font-bold leading-[1.12] tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
        >
          Building Digital Solutions That Move Your Business Forward.
        </h1>
        <p
          data-hero-copy
          className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          From custom software and SaaS platforms to websites and digital
          marketing, we help businesses transform ideas into powerful digital
          experiences.
        </p>
        <div
          data-hero-cta
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button size="lg" onClick={() => scrollTo("#contact")}>
            Start Your Project
            <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => scrollTo("#services")}
          >
            Explore Our Services
          </Button>
        </div>
      </div>

      <div
        ref={devicesRef}
        className="relative mx-auto mt-16 h-[340px] w-full max-w-5xl perspective-[1400px] sm:mt-20 sm:h-[420px]"
        aria-hidden
      >
        {devices.map((device) => (
          <div
            key={device.title}
            data-device
            className="absolute left-1/2 top-6 w-[150px] sm:w-[190px]"
            style={{
              transform: `translateX(calc(-50% + ${device.x})) translateY(${device.y}) rotate(${device.rotate})`,
              zIndex: Math.round(device.depth * 10),
            }}
          >
            <div className="overflow-hidden rounded-[1.6rem] border border-white/12 bg-[#0a0a0a] p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
              <div
                className={`relative aspect-[9/16] overflow-hidden rounded-[1.2rem] bg-gradient-to-b ${device.accent} from-10%`}
              >
                <div className="absolute inset-x-0 top-0 h-8 bg-black/40" />
                <div className="absolute inset-x-3 top-10 space-y-2">
                  <div className="h-2 w-16 rounded bg-white/25" />
                  <div className="h-2 w-24 rounded bg-white/15" />
                  <div className="mt-4 space-y-2">
                    <div className="h-16 rounded-xl border border-white/10 bg-white/8" />
                    <div className="h-10 rounded-xl border border-white/10 bg-white/6" />
                    <div className="h-10 rounded-xl border border-white/10 bg-white/6" />
                  </div>
                </div>
                <div className="absolute inset-x-3 bottom-4">
                  <p className="text-[11px] font-semibold text-white">
                    {device.title}
                  </p>
                  <p className="text-[10px] text-white/60">{device.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
