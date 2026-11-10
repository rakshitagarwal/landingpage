"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Clock3,
  FileText,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import {
  budgetOptions,
  currencyOptions,
  getWhatsAppLink,
  serviceOptions,
  siteConfig,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button, buttonLinkClass } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid work email."),
  company: z.string().optional(),
  service: z.string().min(1, "Select a service."),
  budget: z.string().min(1, "Select an approximate budget."),
  currency: z.string().min(1, "Choose a quote currency."),
  message: z
    .string()
    .min(20, "Add a short project description (at least 20 characters)."),
  website: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const tips = [
  {
    icon: FileText,
    title: "What to include",
    body: "Share what you sell, who the users are, must-have features, and any deadline. Rough notes are fine.",
  },
  {
    icon: Clock3,
    title: "What happens next",
    body: siteConfig.replyNote,
  },
  {
    icon: ShieldCheck,
    title: "Fixed quote before we start",
    body: "We confirm scope, timeline and price in writing. No surprise invoices after you approve the plan.",
  },
] as const;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const contactEmail = siteConfig.contactEmail || siteConfig.email;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      currency: "No preference",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Submit failed");
      }

      reset();
      setStatus("success");
      setStatusMessage(
        "Thanks, we received your enquiry. We will reply within 24 hours."
      );
    } catch {
      setStatus("error");
      setStatusMessage(
        "Could not send the form right now. Email us or message on WhatsApp instead."
      );
    }
  };

  const fieldClass =
    "w-full rounded-[8px] border border-border-subtle bg-transparent px-3.5 py-3 text-base text-text-primary outline-none transition placeholder:text-text-muted focus:border-copper focus:ring-2 focus:ring-copper/20";

  return (
    <section
      id="contact"
      className="surface-paper scroll-mt-24 border-y border-border-subtle text-text-primary"
    >
      <div className="container-site section-y">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.75fr)] lg:gap-16 xl:gap-24">
          <Reveal>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="min-w-0"
            >
              <div className="sr-only" aria-hidden>
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("website")}
                />
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-primary">
                Business enquiry
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-text-primary sm:text-4xl">
                Tell us what you want to build
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-text-secondary">
                A short brief is enough for a first reply. Quotes can be
                prepared in INR or USD. Budget ranges below are in USD.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <Field
                  id="fullName"
                  label="Name"
                  required
                  error={errors.fullName?.message}
                >
                  <input
                    id="fullName"
                    autoComplete="name"
                    className={fieldClass}
                    placeholder="Your full name"
                    {...register("fullName")}
                  />
                </Field>

                <Field
                  id="email"
                  label="Work email"
                  required
                  error={errors.email?.message}
                >
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={fieldClass}
                    placeholder="you@company.com"
                    {...register("email")}
                  />
                </Field>

                <Field
                  id="company"
                  label="Company name"
                  error={errors.company?.message}
                >
                  <input
                    id="company"
                    autoComplete="organization"
                    className={fieldClass}
                    placeholder="Optional"
                    {...register("company")}
                  />
                </Field>

                <Field
                  id="service"
                  label="Service required"
                  required
                  error={errors.service?.message}
                >
                  <select
                    id="service"
                    className={fieldClass}
                    {...register("service")}
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  id="budget"
                  label="Project budget (USD)"
                  required
                  error={errors.budget?.message}
                >
                  <select
                    id="budget"
                    className={fieldClass}
                    {...register("budget")}
                  >
                    <option value="">Select a range</option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  id="currency"
                  label="Quote currency"
                  required
                  error={errors.currency?.message}
                >
                  <select
                    id="currency"
                    className={fieldClass}
                    {...register("currency")}
                  >
                    {currencyOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  id="message"
                  label="Project description"
                  required
                  error={errors.message?.message}
                  className="sm:col-span-2"
                >
                  <textarea
                    id="message"
                    rows={6}
                    className={cn(fieldClass, "resize-y")}
                    placeholder="Describe the product, goals, users and anything that must be included in v1."
                    {...register("message")}
                  />
                </Field>
              </div>

              {statusMessage ? (
                <p
                  role="status"
                  className={cn(
                    "mt-5 border-l-2 px-4 py-3 text-sm",
                    status === "success"
                      ? "border-emerald-500 text-text-primary"
                      : "border-rose-500 text-text-primary"
                  )}
                >
                  {statusMessage}
                </p>
              ) : null}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Send enquiry"
                  )}
                </Button>
                <p className="text-sm text-text-muted">
                  We reply within 24 hours on WhatsApp or email.
                </p>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.06}>
            <aside className="lg:border-l lg:border-border-subtle lg:pl-12 xl:pl-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-primary">
                Direct contact
              </p>
              <h3 className="mt-3 font-heading text-2xl font-semibold text-text-primary">
                Prefer to reach out another way?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Same enquiry details help either way: name, service, budget and
                a short project note.
              </p>

              <ul className="mt-8 space-y-5">
                <li>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 text-text-primary transition hover:text-accent-primary"
                  >
                    <MessageCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent-primary"
                      aria-hidden
                    />
                    <span>
                      <span className="block text-sm font-medium">WhatsApp</span>
                      <span className="mt-0.5 block text-sm text-text-secondary group-hover:text-accent-primary/80">
                        {siteConfig.phone}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="group flex items-start gap-3 text-text-primary transition hover:text-accent-primary"
                  >
                    <Mail
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent-primary"
                      aria-hidden
                    />
                    <span>
                      <span className="block text-sm font-medium">Email</span>
                      <span className="mt-0.5 block text-sm text-text-secondary group-hover:text-accent-primary/80">
                        {contactEmail}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phoneTel}`}
                    className="group flex items-start gap-3 text-text-primary transition hover:text-accent-primary"
                  >
                    <Phone
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent-primary"
                      aria-hidden
                    />
                    <span>
                      <span className="block text-sm font-medium">Phone</span>
                      <span className="mt-0.5 block text-sm text-text-secondary group-hover:text-accent-primary/80">
                        {siteConfig.phone}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent-primary"
                    aria-hidden
                  />
                  <span>
                    <span className="block text-sm font-medium text-text-primary">
                      Studio
                    </span>
                    <span className="mt-0.5 block text-sm text-text-secondary">
                      {siteConfig.address.full}
                    </span>
                  </span>
                </li>
              </ul>

              <div className="mt-10 space-y-6 border-t border-border-subtle pt-8">
                {tips.map((tip) => (
                  <div key={tip.title}>
                    <div className="flex items-center gap-2">
                      <tip.icon
                        className="h-4 w-4 text-accent-primary"
                        aria-hidden
                      />
                      <h4 className="text-sm font-semibold text-text-primary">
                        {tip.title}
                      </h4>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {tip.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonLinkClass("secondary", "sm"), "justify-center")}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  WhatsApp
                </a>
                <a
                  href={`mailto:${contactEmail}`}
                  className={cn(buttonLinkClass("secondary", "sm"), "justify-center")}
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  Email us
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label htmlFor={id} className="text-sm font-medium text-text-primary">
        {label}
        {required ? <span className="text-accent-primary"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p className="text-sm text-rose-500" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
