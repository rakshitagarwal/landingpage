import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** Alternate secondary surface for rhythm */
  muted?: boolean;
  bordered?: boolean;
  tone?: "default" | "raised" | "contrast" | "ink" | "ink-2" | "paper" | "white";
  "aria-label"?: string;
};

/**
 * Section shell. `ink`, `ink-2`, `paper`, and `white` pin a section to the
 * brand surfaces. Other tones follow the active color mode.
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
        surface === "contrast" && "surface-paper",
        surface === "ink" && "surface-ink",
        surface === "ink-2" && "surface-ink-2",
        surface === "paper" && "surface-paper",
        surface === "white" && "surface-white",
        bordered && "border-y border-border-subtle",
        className
      )}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}

export const Section = SectionWrapper;
