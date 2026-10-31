"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import {
  budgetOptions,
  serviceOptions,
  siteConfig,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Enter a valid business email."),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Select a service."),
  budget: z.string().optional(),
  details: z
    .string()
    .min(20, "Please share a bit more detail (at least 20 characters)."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

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
      phone: "",
      company: "",
      service: "",
      budget: "",
      details: "",
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
        "Thanks — your inquiry was sent. We'll get back to you soon."
      );
    } catch {
      setStatus("error");
      setStatusMessage(
        "Something went wrong while sending your inquiry. Please try again or email us directly."
      );
    }
  };

  const fieldClass =
    "w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-sm text-text-primary outline-none transition placeholder:text-text-secondary/60 focus:border-accent-primary/50 focus:ring-2 focus:ring-accent-primary/25";

  return (
    <section id="contact" className="scroll-mt-24 bg-bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Get Started"
            title="Got a project in mind?"
            description="Tell us about your business goals and challenges. Let's explore how technology can help you grow."
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <Reveal>
            <div className="space-y-6 rounded-2xl border border-white/10 bg-bg-card p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-text-secondary">
                Prefer to reach out directly? Use the placeholders below and
                replace them with your real business details in{" "}
                <code className="rounded bg-white/5 px-1.5 py-0.5 text-accent-secondary">
                  lib/site-config.ts
                </code>
                .
              </p>
              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/20"
                >
                  <Mail className="mt-0.5 h-5 w-5 text-accent-secondary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Email</p>
                    <p className="text-sm text-text-secondary">{siteConfig.email}</p>
                  </div>
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/20"
                >
                  <Phone className="mt-0.5 h-5 w-5 text-accent-secondary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Phone</p>
                    <p className="text-sm text-text-secondary">{siteConfig.phone}</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-accent-secondary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Office</p>
                    <p className="text-sm text-text-secondary">{siteConfig.address}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { label: "LinkedIn", href: siteConfig.social.linkedin },
                  { label: "Instagram", href: siteConfig.social.instagram },
                  { label: "X / Twitter", href: siteConfig.social.twitter },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-text-secondary transition hover:border-accent-secondary/40 hover:text-text-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-2xl border border-white/10 bg-bg-card p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  id="fullName"
                  label="Full Name"
                  required
                  error={errors.fullName?.message}
                >
                  <input
                    id="fullName"
                    autoComplete="name"
                    className={fieldClass}
                    placeholder="Jane Doe"
                    {...register("fullName")}
                  />
                </Field>
                <Field
                  id="email"
                  label="Business Email"
                  required
                  error={errors.email?.message}
                >
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={fieldClass}
                    placeholder="jane@company.com"
                    {...register("email")}
                  />
                </Field>
                <Field id="phone" label="Phone Number" error={errors.phone?.message}>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    className={fieldClass}
                    placeholder="+1 555 000 0000"
                    {...register("phone")}
                  />
                </Field>
                <Field
                  id="company"
                  label="Company Name"
                  error={errors.company?.message}
                >
                  <input
                    id="company"
                    autoComplete="organization"
                    className={fieldClass}
                    placeholder="Acme Inc."
                    {...register("company")}
                  />
                </Field>
                <Field
                  id="service"
                  label="Service Required"
                  required
                  error={errors.service?.message}
                >
                  <select id="service" className={fieldClass} {...register("service")}>
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
                  label="Estimated Budget"
                  error={errors.budget?.message}
                >
                  <select id="budget" className={fieldClass} {...register("budget")}>
                    <option value="">Select a range (optional)</option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-4">
                <Field
                  id="details"
                  label="Project Details"
                  required
                  error={errors.details?.message}
                >
                  <textarea
                    id="details"
                    rows={5}
                    className={cn(fieldClass, "resize-y")}
                    placeholder="Share goals, timeline, and what success looks like for this project."
                    {...register("details")}
                  />
                </Field>
              </div>

              {statusMessage ? (
                <p
                  role="status"
                  className={cn(
                    "mt-4 rounded-xl border px-4 py-3 text-sm",
                    status === "success"
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
                      : "border-rose-400/30 bg-rose-400/10 text-rose-100"
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
                  "Send Project Inquiry"
                )}
              </Button>
            </form>
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
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium text-text-primary">
        {label}
        {required ? <span className="text-accent-secondary"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p className="text-xs text-rose-300" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
