import Link from "next/link";
import { navLinks, services, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = 2026;
  const socialEntries = Object.entries(siteConfig.social).filter(
    ([, url]) => Boolean(url)
  );

  return (
    <footer className="border-t border-white/10 bg-bg-primary">
      <div className="container-shell grid gap-10 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent-primary/40 bg-accent-primary/10 font-serif text-sm font-bold text-accent-primary">
              P
            </span>
            <span className="text-lg font-semibold text-text-primary">
              {siteConfig.name}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
            {siteConfig.tagline}
          </p>
          {siteConfig.registrationLine ? (
            <p className="mt-3 text-xs text-text-muted">
              {siteConfig.registrationLine}
            </p>
          ) : null}
          {socialEntries.length > 0 ? (
            <div className="mt-5 flex flex-wrap gap-3">
              {socialEntries.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 px-3 py-1.5 text-xs capitalize text-text-secondary transition hover:border-accent-primary/40 hover:text-text-primary"
                >
                  {label}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
            Quick links
          </h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                  className="text-sm text-text-secondary transition hover:text-text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
            Services
          </h3>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-text-secondary transition hover:text-text-primary"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-text-secondary">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition hover:text-text-primary"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="transition hover:text-text-primary"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="max-w-xs leading-relaxed">{siteConfig.address.full}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-3 py-6 text-sm text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Ahmedabad, India
          </p>
          <div className="flex gap-4">
            <Link href="/blog" className="hover:text-text-primary">
              Blog
            </Link>
            <Link href="/privacy" className="hover:text-text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
