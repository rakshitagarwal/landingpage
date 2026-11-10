import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** Alternate secondary surface for rhythm */
  muted?: boolean;
  bordered?: boolean;
  tone?: "default" | "raised" | "contrast";
  "aria-label"?: string;
};

/**
 * Section shell. Colors come from html[data-color-mode], not per-section themes,
 * except `contrast`, which intentionally inverts so the page is not one surface.
 */
export function SectionWrapper({
  id,
  children,
  className,
  muted = false,
  bordered = true,
  tone,
  "aria-label": ariaLabel,
}: SectionWrapperProps) {
  const surface = tone ?? (muted ? "raised" : "default");

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "section-y scroll-mt-24 text-text-primary",
        surface === "raised" && "bg-bg-secondary",
        surface === "default" && "bg-bg-primary",
        surface === "contrast" && "section-contrast",
        bordered && "border-y border-border-subtle",
        className
      )}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}

export const Section = SectionWrapper;
