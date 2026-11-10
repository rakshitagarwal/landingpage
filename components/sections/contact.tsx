"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Clock3,
  FileText,
  Loader2,
  Mail,
  MessageCircle,
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
import { SectionWrapper } from "@/components/ui/section";

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
    title: "What to include in the description",
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
    "w-full rounded-xl border border-border-subtle bg-bg-secondary px-3.5 py-2.5 text-base text-text-primary outline-none transition placeholder:text-text-muted focus:border-accent-primary/50 focus:ring-2 focus:ring-accent-primary/25";

  return (
    <SectionWrapper id="contact">
      <div className="section-stack">
        <Reveal>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="card-surface relative mx-auto max-w-3xl p-6 sm:p-8 lg:p-10"
          >
            <div className="absolute -left-[9999px] opacity-0" aria-hidden>
              <label htmlFor="website">Website</label>
              <input
                id="website"
                tabIndex={-1}
                autoComplete="off"
                {...register("website")}
              />
            </div>

            <div className="mb-8">
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
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
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
                  rows={5}
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
                  "mt-4 rounded-xl border px-4 py-3 text-sm",
                  status === "success"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-text-primary"
                    : "border-rose-500/30 bg-rose-500/10 text-text-primary"
                )}
              >
                {statusMessage}
              </p>
            ) : null}

            <Button
              type="submit"
              size="lg"
              className="mt-6 w-full sm:w-auto"
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
          </form>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mx-auto max-w-3xl">
            <h3 className="font-heading text-2xl font-semibold text-text-primary">
              Helpful details while you fill the form
            </h3>
            <p className="mt-2 text-base text-text-secondary">
              Use these prompts if you are unsure what to write. Incomplete
              briefs are fine; we will clarify on the first call.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {tips.map((tip) => (
                <div key={tip.title} className="card-surface p-5">
                  <tip.icon
                    className="h-5 w-5 text-accent-primary"
                    aria-hidden
                  />
                  <h4 className="mt-3 font-semibold text-text-primary">
                    {tip.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                    {tip.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-secondary/60 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent-primary"
                  aria-hidden
                />
                <div>
                  <p className="font-medium text-text-primary">
                    Prefer WhatsApp or email?
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    Same enquiry details help either way: name, service, budget
                    and a short project note.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonLinkClass("secondary", "sm"))}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  WhatsApp
                </a>
                <a
                  href={`mailto:${contactEmail}`}
                  className={cn(buttonLinkClass("secondary", "sm"))}
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  {contactEmail}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
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
