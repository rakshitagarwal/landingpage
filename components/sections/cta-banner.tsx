import Link from "next/link";
import { buttonLinkClass } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaBanner() {
  return (
    <section
      id="discuss"
      aria-label="Discuss your requirements"
      className="border-y border-border-subtle bg-bg-primary"
    >
      <div className="container-site flex flex-col items-center gap-6 py-14 text-center sm:py-16 md:flex-row md:justify-between md:text-left">
        <p className="max-w-xl font-serif text-2xl font-bold leading-snug text-text-primary sm:text-3xl">
          Tell us what you need. We will map the right next step.
        </p>
        <Link
          href="/contact"
          className={cn(buttonLinkClass("primary", "lg"), "shrink-0")}
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
