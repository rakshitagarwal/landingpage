"use client";

import { useState } from "react";
import {
  BadgeCheck,
  Bot,
  Cloud,
  Database,
  Globe,
  Megaphone,
  Palette,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const iconMap: Record<string, LucideIcon> = {
  Database,
  Cloud,
  Globe,
  Megaphone,
  BadgeCheck,
  Bot,
  Palette,
};

type Service = (typeof services)[number];

export function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section id="services" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Everything You Need to Grow Digitally."
            description="From building your digital foundation to scaling your business, we provide end-to-end technology and digital growth solutions."
          />
        </Reveal>

        <div className="mt-14 divide-y divide-white/8 border-y border-white/8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Database;
            return (
              <Reveal key={service.id} delay={index * 0.03}>
                <article className="group grid gap-4 py-7 transition duration-300 hover:bg-white/[0.02] sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8 sm:px-2">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-accent-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-text-primary sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
                      {service.shortDescription}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {service.highlights.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-text-secondary"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActive(service)}
                    className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-accent-primary transition group-hover:gap-2 sm:self-center"
                  >
                    Learn More
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.title ?? ""}
      >
        {active ? (
          <div>
            <p className="text-sm leading-relaxed text-text-secondary">
              {active.shortDescription}
            </p>
            <ul className="mt-5 space-y-2.5">
              {active.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-2 text-sm text-text-primary"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" />
                  {detail}
                </li>
              ))}
            </ul>
            <Button
              className="mt-6"
              onClick={() => {
                setActive(null);
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Discuss This Service
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
