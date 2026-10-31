"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { SiteImage } from "@/lib/site-config";

type SiteImageProps = {
  image: SiteImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
};

export function SiteImage({
  image,
  className,
  priority,
  sizes,
  fill,
}: SiteImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-bg-elevated to-bg-secondary text-sm text-text-muted",
          className
        )}
        role="img"
        aria-label={image.alt}
      >
        <span className="px-4 text-center">{image.alt}</span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", className)}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
