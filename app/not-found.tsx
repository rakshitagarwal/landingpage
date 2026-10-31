import Link from "next/link";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { buttonLinkClass } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="container-site flex flex-1 flex-col items-start justify-center py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-primary">
          404
        </p>
        <h1 className="mt-4 font-serif text-4xl font-bold text-text-primary sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-base text-text-secondary">
          That link doesn&apos;t exist. Head home or message {siteConfig.name}{" "}
          on WhatsApp.
        </p>
        <Link href="/" className={cn(buttonLinkClass("primary", "lg"), "mt-8")}>
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
