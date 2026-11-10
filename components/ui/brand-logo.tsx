import Image from "next/image";
import { images, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  /** Navy surfaces always use the dark-UI wordmark. */
  tone?: "theme" | "on-dark";
};

/**
 * Theme-aware wordmark: logo-dark on dark UI, logo-light on light UI.
 * Switches via html[data-color-mode] so it stays in sync with the FOUC script.
 */
export function BrandLogo({
  className,
  imgClassName,
  priority = false,
  tone = "theme",
}: BrandLogoProps) {
  return (
    <span className={cn("relative inline-flex items-center", className)}>
      <Image
        src={images.logoDark.src}
        alt=""
        width={images.logoDark.width}
        height={images.logoDark.height}
        aria-hidden
        priority={priority}
        className={cn(
          tone === "theme" && "[[data-color-mode=light]_&]:hidden",
          "h-full w-auto object-contain object-left",
          imgClassName
        )}
      />
      <Image
        src={images.logoLight.src}
        alt=""
        width={images.logoLight.width}
        height={images.logoLight.height}
        aria-hidden
        priority={priority}
        className={cn(
          tone === "on-dark" && "hidden",
          tone === "theme" && "[[data-color-mode=dark]_&]:hidden",
          "h-full w-auto object-contain object-left",
          imgClassName
        )}
      />
      <span className="sr-only">{siteConfig.legalName}</span>
    </span>
  );
}
