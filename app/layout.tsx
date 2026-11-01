import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import { Analytics } from "@/components/layout/analytics";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const heading = Merriweather({
  variable: "--font-heading-family",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const body = Inter({
  variable: "--font-body-family",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Website Development & Software Studio Ahmedabad | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "website development Ahmedabad",
    "software company Ahmedabad",
    "WhatsApp automation for small business",
    "CRM for small business India",
    "online store developer Gujarat",
    "Pixelnest",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `Website Development & Software Studio Ahmedabad | ${siteConfig.name}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `Website Development & Software Studio Ahmedabad | ${siteConfig.name}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.contactEmail || siteConfig.email,
  telephone: siteConfig.phoneTel,
  image: `${siteConfig.url}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line1,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    addressCountry: siteConfig.address.country,
  },
  areaServed: "IN",
  description: siteConfig.description,
  openingHours: "Mo-Sa 10:00-19:00",
  sameAs: Object.values(siteConfig.social).filter(Boolean),
};

const themeInitScript = `(function(){try{var m=localStorage.getItem('pixelnest-color-mode');document.documentElement.setAttribute('data-color-mode',m==='light'?'light':'dark');}catch(e){document.documentElement.setAttribute('data-color-mode','dark');}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-color-mode="dark"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-bg-primary font-sans text-text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <div className="site-noise" aria-hidden />
        <ThemeProvider>
          <SmoothScroll>
            {children}
            <WhatsAppFloat />
          </SmoothScroll>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
