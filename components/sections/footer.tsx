import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { getWhatsAppLink, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const quickLinks = [
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact Us", href: "/contact" },
] as const;

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.23 0z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M22.68 0H1.32A1.32 1.32 0 0 0 0 1.32v21.36A1.32 1.32 0 0 0 1.32 24h11.5v-9.29H9.69v-3.62h3.13V8.41c0-3.1 1.89-4.79 4.66-4.79 1.33 0 2.47.1 2.8.14v3.24h-1.92c-1.5 0-1.8.72-1.8 1.77v2.32h3.6l-.47 3.62h-3.13V24h6.12A1.32 1.32 0 0 0 24 22.68V1.32A1.32 1.32 0 0 0 22.68 0z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.69 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12.05 21.78h-.01a9.75 9.75 0 0 1-4.96-1.36l-.36-.21-3.68.97 1-3.59-.24-.37a9.73 9.73 0 0 1-1.5-5.2 9.78 9.78 0 0 1 9.77-9.76c2.61 0 5.06 1.02 6.9 2.86a9.7 9.7 0 0 1 2.86 6.9 9.78 9.78 0 0 1-9.78 9.76zm8.31-17.99A11.66 11.66 0 0 0 12.04 0C5.45 0 .1 5.35.1 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.18-3.5-8.44z" />
    </svg>
  );
}

const iconBtnClass =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-text-primary transition hover:border-accent-primary/40 hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary";

export function Footer() {
  const year = 2026;
  const contactEmail = siteConfig.contactEmail || siteConfig.email;

  const socialItems = [
    {
      label: "LinkedIn",
      href: siteConfig.social.linkedin,
      Icon: LinkedInIcon,
    },
    {
      label: "Facebook",
      href: siteConfig.social.facebook,
      Icon: FacebookIcon,
    },
    {
      label: "Instagram",
      href: siteConfig.social.instagram,
      Icon: InstagramIcon,
    },
    {
      label: "GitHub",
      href: siteConfig.social.github,
      Icon: GithubIcon,
    },
    {
      label: "WhatsApp",
      href: getWhatsAppLink(),
      Icon: WhatsAppIcon,
      external: true,
    },
  ] as const;

  return (
    <footer className="border-t border-border-subtle bg-bg-primary text-text-primary">
      <div className="container-shell grid gap-12 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1.4fr_1fr] lg:gap-10 xl:gap-16">
        <div className="flex items-start">
          <Link
            href="/#home"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent-primary/35 bg-accent-primary/10 font-serif text-xl font-bold text-accent-primary">
              P
            </span>
            <span className="text-xl font-semibold tracking-tight text-text-primary">
              {siteConfig.name}
            </span>
          </Link>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-accent-primary">Quick Links</h3>
          <ul className="mt-5 space-y-1">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-sm text-text-primary transition hover:text-accent-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold text-accent-primary">
              {siteConfig.address.country}
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-primary">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.city}, {siteConfig.address.state}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-accent-primary">Contact Us</h3>
            <ul className="mt-4 space-y-1">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex min-h-11 items-center gap-3 text-sm text-text-primary transition hover:text-accent-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent-primary" aria-hidden />
                  {contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="inline-flex min-h-11 items-center gap-3 text-sm text-text-primary transition hover:text-accent-primary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent-primary" aria-hidden />
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-accent-primary">Follow Us</h3>
          <ul className="mt-5 flex flex-wrap gap-3">
            {socialItems.map(({ label, href, Icon }) => {
              const hasLink = Boolean(href);
              if (!hasLink) {
                return (
                  <li key={label}>
                    <span
                      aria-label={`${label} (coming soon)`}
                      title={`${label} coming soon`}
                      className={cn(iconBtnClass, "cursor-default opacity-55")}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                  </li>
                );
              }
              return (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={iconBtnClass}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-border-subtle">
        <div className="container-shell flex flex-col gap-3 py-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {siteConfig.termsUrl ? (
              <Link
                href={siteConfig.termsUrl}
                className="inline-flex min-h-11 items-center transition hover:text-text-primary"
              >
                Terms & Conditions
              </Link>
            ) : null}
            {siteConfig.privacyUrl ? (
              <Link
                href={siteConfig.privacyUrl}
                className="inline-flex min-h-11 items-center transition hover:text-text-primary"
              >
                Privacy Policy
              </Link>
            ) : null}
            <Link
              href="/sitemap.xml"
              className="inline-flex min-h-11 items-center transition hover:text-text-primary"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
