import Image from "next/image";
import { images, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

/**
 * Theme-aware wordmark: logo-dark on dark UI, logo-light on light UI.
 * Switches via html[data-color-mode] so it stays in sync with the FOUC script.
 */
export function BrandLogo({
  className,
  imgClassName,
  priority = false,
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
          "h-full w-auto object-contain object-left [[data-color-mode=light]_&]:hidden",
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
          "h-full w-auto object-contain object-left [[data-color-mode=dark]_&]:hidden",
          imgClassName
        )}
      />
      <span className="sr-only">{siteConfig.legalName}</span>
    </span>
  );
}
