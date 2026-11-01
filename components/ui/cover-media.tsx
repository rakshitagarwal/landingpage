import {
  Bot,
  Calendar,
  Globe,
  LayoutDashboard,
  MessageSquare,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SiteImage } from "@/components/ui/site-image";
import type { SiteImage as SiteImageType } from "@/lib/site-config";

const iconMap: Record<string, LucideIcon> = {
  booking: Calendar,
  chat: MessageSquare,
  dashboard: LayoutDashboard,
  store: ShoppingBag,
  website: Globe,
  automation: Bot,
  default: LayoutDashboard,
};

type CoverMediaProps = {
  title: string;
  image?: SiteImageType | { src: string; alt: string; width: number; height: number } | null;
  icon?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** Real image when `image.src` is set; otherwise a clean gradient placeholder. */
export function CoverMedia({
  title,
  image,
  icon = "default",
  className,
  sizes = "100vw",
  priority,
}: CoverMediaProps) {
  const hasImage = Boolean(image?.src);
  const Icon = iconMap[icon] ?? iconMap.default;

  if (hasImage && image) {
    return (
      <div className={cn("relative overflow-hidden bg-bg-secondary", className)}>
        <SiteImage
          image={image}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-primary/35 via-transparent to-transparent"
          aria-hidden
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex overflow-hidden bg-gradient-to-br from-[#0f766e] via-[#134e4a] to-[#0b0f14]",
        className
      )}
      role="img"
      aria-label={title}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(45,212,191,0.35), transparent 45%), radial-gradient(circle at 80% 70%, rgba(15,118,110,0.45), transparent 40%)",
        }}
      />
      <div className="relative z-[1] flex h-full w-full flex-col justify-end gap-3 p-5 sm:p-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <p className="line-clamp-2 font-serif text-base font-bold leading-snug text-white sm:text-lg">
          {title}
        </p>
      </div>
    </div>
  );
}
