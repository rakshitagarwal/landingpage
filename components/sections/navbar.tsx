"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks, services } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/ui/brand-logo";
import { buttonLinkClass } from "@/components/ui/button";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const featuredServices = services.filter((service) => service.featured);

export function Navbar() {
  const pathname = usePathname();
  const menuId = useId();
  const servicesId = useId();
  const servicesRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sectionActive, setSectionActive] = useState("");
  const reduceMotion = useReducedMotion();
  const homePrefix = pathname === "/" ? "" : "/";
  const active = pathname !== "/" ? pathname : sectionActive;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const ids = ["services", "work", "about", "process", "pricing", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setSectionActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.4, 0.7] }
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

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setOpen(false);
      }
    };
    const onPointer = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  const resolveHref = (href: string) =>
    href.startsWith("#") ? `${homePrefix}${href}` : href;

  const scrollTo = (href: string) => {
    setOpen(false);
    setServicesOpen(false);
    const target = resolveHref(href);
    if (pathname !== "/" && href.startsWith("#")) {
      window.location.href = `/${href}`;
      return;
    }
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    if (target.startsWith("#") || target.startsWith("/#")) {
      history.replaceState(null, "", target.startsWith("/") ? target : href);
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-text-primary transition-all duration-300",
        scrolled || open
          ? "border-b border-border-subtle bg-bg-primary/85 shadow-[0_10px_40px_-28px_rgba(0,0,0,0.7)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        aria-label="Main navigation"
        className="container-shell flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]"
      >
        <Link
          href="/#home"
          className="flex min-h-11 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
          onClick={(event) => {
            if (pathname === "/") {
              event.preventDefault();
              scrollTo("#home");
            }
          }}
        >
          <BrandLogo
            priority
            className="h-8 sm:h-9"
            imgClassName="max-w-[8.5rem] sm:max-w-[10rem]"
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "inline-flex min-h-11 items-center gap-1 rounded-full px-3 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary",
                active === "#services" || servicesOpen
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary"
              )}
              aria-expanded={servicesOpen}
              aria-controls={servicesId}
              onClick={() => setServicesOpen((value) => !value)}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform",
                  servicesOpen && "rotate-180"
                )}
                aria-hidden
              />
            </button>
            <div
              id={servicesId}
              className={cn(
                "absolute left-0 top-full z-20 w-80 pt-2 transition duration-200",
                servicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              )}
            >
              <div className="rounded-2xl border border-border-subtle bg-bg-elevated/95 p-2 shadow-[var(--shadow-card)] backdrop-blur-xl">
                {featuredServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block rounded-xl px-3 py-2.5 transition hover:bg-bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                    onClick={() => setServicesOpen(false)}
                  >
                    <span className="block text-sm font-medium text-text-primary">
                      {service.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-text-secondary">
                      {service.summary}
                    </span>
                  </Link>
                ))}
                <button
                  type="button"
                  className="mt-1 w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium text-accent-primary hover:bg-bg-secondary"
                  onClick={() => scrollTo("#services")}
                >
                  View all services
                </button>
              </div>
            </div>
          </div>

          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.href}
                href={resolveHref(link.href)}
                onClick={(event) => {
                  event.preventDefault();
                  scrollTo(link.href);
                }}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full px-3 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary",
                  active === link.href
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full px-3 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary",
                  pathname === link.href
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className={cn(buttonLinkClass("primary", "sm"), "hidden md:inline-flex")}
          >
            Let&apos;s Talk
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-text-primary lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border-subtle bg-bg-primary/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex max-h-[calc(100vh-4.5rem)] flex-col gap-1 overflow-y-auto px-4 py-4">
              <p className="px-3 pt-1 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                Services
              </p>
              {featuredServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-lg px-3 py-3 text-base text-text-secondary hover:bg-bg-secondary hover:text-text-primary"
                  onClick={() => setOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
              {navLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <a
                    key={link.href}
                    href={resolveHref(link.href)}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="rounded-lg px-3 py-3 text-base font-medium text-text-primary hover:bg-bg-secondary"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-3 py-3 text-base font-medium text-text-primary hover:bg-bg-secondary"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                className={cn(buttonLinkClass("primary"), "mt-2 w-full")}
                onClick={() => setOpen(false)}
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <ScrollProgress />
    </header>
  );
}
