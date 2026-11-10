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
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101923]/25 via-transparent to-transparent opacity-80"
          aria-hidden
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex overflow-hidden bg-gradient-to-br from-[#152330] via-[#101923] to-[#0c131b]",
        className
      )}
      role="img"
      aria-label={title}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 20%, color-mix(in srgb, var(--copper) 22%, transparent), transparent 48%), radial-gradient(circle at 82% 72%, color-mix(in srgb, var(--copper) 12%, transparent), transparent 42%)",
        }}
      />
      <div className="relative z-[1] flex h-full w-full flex-col justify-end gap-3 p-5 sm:p-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-white/15 bg-white/8 text-[#E9B18C]">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <p className="line-clamp-2 font-heading text-base font-semibold leading-snug text-[#F4F7FA] sm:text-lg">
          {title}
        </p>
      </div>
    </div>
  );
}
