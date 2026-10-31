import { navLinks, services, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg-primary">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <a
            href="#home"
            className="text-xl font-semibold text-text-primary"
          >
            {siteConfig.name}
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
            A digital solutions partner for custom software, SaaS products,
            websites, marketing, and business automation.
          </p>
          <div className="mt-5 flex gap-3">
            <SocialLink href={siteConfig.social.linkedin} label="LinkedIn">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href={siteConfig.social.instagram} label="Instagram">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href={siteConfig.social.twitter} label="X / Twitter">
              <XIcon />
            </SocialLink>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-text-secondary transition hover:text-text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
            Services
          </h3>
          <ul className="mt-4 space-y-2">
            {services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <a
                  href="#services"
                  className="text-sm text-text-secondary transition hover:text-text-primary"
                >
                  {service.title}
                </a>
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
                href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                className="transition hover:text-text-primary"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="max-w-xs leading-relaxed">{siteConfig.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-text-secondary sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs">
            Customize company details in <span className="text-text-primary">lib/site-config.ts</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-text-secondary transition hover:border-accent-secondary/40 hover:text-text-primary"
    >
      {children}
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.25h4.56V24H.22V8.25zM8.34 8.25h4.37v2.14h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7V24h-4.56v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.16V24H8.34V8.25z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.59l-5.16-6.74L5.2 22H1.94l8.03-9.17L1.5 2h6.75l4.66 6.18L18.244 2zm-1.16 18h1.82L7.02 3.9H5.07L17.084 20z" />
    </svg>
  );
}
