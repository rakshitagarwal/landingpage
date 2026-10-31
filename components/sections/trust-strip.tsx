import {
  BadgeIndianRupee,
  LifeBuoy,
  MessageCircle,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { valueStrip } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

const icons: Record<string, LucideIcon> = {
  Wallet,
  MessageCircle,
  BadgeIndianRupee,
  LifeBuoy,
};

export function TrustStrip() {
  return (
    <Section
      aria-label="Why businesses choose us"
      tone="muted"
      className="!py-12 sm:!py-14"
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {valueStrip.map((item, index) => {
          const Icon = icons[item.icon] ?? Wallet;
          return (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="flex gap-3 pr-2">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-accent-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
