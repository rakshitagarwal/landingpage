"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/ui/brand-logo";
import { buttonLinkClass } from "@/components/ui/button";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [sectionActive, setSectionActive] = useState("");
  const reduceMotion = useReducedMotion();
  const homePrefix = pathname === "/" ? "" : "/";
  const active = pathname !== "/" ? pathname : sectionActive;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const ids = navLinks
      .filter((l) => l.href.startsWith("#"))
      .map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setSectionActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.4, 0.7] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const resolveHref = (href: string) =>
    href.startsWith("#") ? `${homePrefix}${href}` : href;

  const scrollTo = (href: string) => {
    setOpen(false);
    const target = resolveHref(href);
    if (target.startsWith("/#") || (pathname !== "/" && href.startsWith("#"))) {
      window.location.href = target.startsWith("/") ? target : `/${href}`;
      return;
    }
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-bg-primary/80 text-text-primary backdrop-blur-xl transition-all duration-300",
        scrolled && "border-b border-border-subtle"
      )}
    >
      <nav
        aria-label="Main navigation"
        className="container-shell flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]"
      >
        <a
          href={resolveHref("#home")}
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#home");
          }}
          className="flex min-h-11 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
        >
          <BrandLogo
            priority
            className="h-9 sm:h-10"
            imgClassName="max-w-[9.5rem] sm:max-w-[11rem]"
          />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className={cn(
                "inline-flex min-h-11 items-center text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary",
                active === link.href
                  ? "text-accent-primary"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/contact"
            className={cn(buttonLinkClass("primary", "sm"), "hidden md:inline-flex")}
          >
            Get in touch
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-text-primary lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border-subtle bg-bg-primary/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="rounded-lg px-3 py-3 text-base font-medium text-text-secondary hover:bg-bg-secondary hover:text-text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                className={cn(buttonLinkClass("primary"), "mt-2 w-full")}
                onClick={() => setOpen(false)}
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <ScrollProgress />
    </header>
  );
}
