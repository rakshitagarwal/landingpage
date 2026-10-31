"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import {
  budgetOptions,
  getWhatsAppLink,
  serviceOptions,
  siteConfig,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button, buttonLinkClass } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your name."),
  phone: z.string().min(8, "Enter a valid phone / WhatsApp number."),
  service: z.string().min(1, "Select a service."),
  message: z.string().min(10, "Tell us a bit more (at least 10 characters)."),
  email: z.union([z.literal(""), z.string().email("Enter a valid email.")]).optional(),
  budget: z.string().optional(),
  website: z.string().optional(),
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
      phone: "",
      service: "",
      message: "",
      email: "",
      budget: "",
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
      setStatusMessage("Thanks — we got your message. We'll reply soon.");
    } catch {
      setStatus("error");
      setStatusMessage(
        "Could not send the form. Please try WhatsApp or call us instead."
      );
    }
  };

  const fieldClass =
    "w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-base text-text-primary outline-none transition placeholder:text-text-muted focus:border-accent-primary/50 focus:ring-2 focus:ring-accent-primary/25";

  return (
    <Section id="contact" tone="muted">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Tell us what you need"
            description={`${siteConfig.replyNote} Hours: ${siteConfig.hours}.`}
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <Reveal>
            <div className="space-y-4 rounded-[1.25rem] border border-white/10 bg-bg-card p-6 sm:p-8">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonLinkClass("primary", "lg"), "w-full")}
              >
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className={cn(buttonLinkClass("secondary", "lg"), "w-full")}
              >
                Call us · {siteConfig.phone}
              </a>

              <div className="space-y-3 pt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:border-white/20"
                >
                  <Mail className="mt-0.5 h-5 w-5 text-accent-primary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Email</p>
                    <p className="text-sm text-text-secondary">{siteConfig.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 rounded-xl border border-white/10 p-4">
                  <Phone className="mt-0.5 h-5 w-5 text-accent-primary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Phone / WhatsApp</p>
                    <p className="text-sm text-text-secondary">{siteConfig.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-white/10 p-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-accent-primary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Studio</p>
                    <p className="text-sm text-text-secondary">
                      {siteConfig.address.full}
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-white/10">
                <iframe
                  title="Pixelnest location on Google Maps"
                  src={siteConfig.mapsEmbedUrl}
                  className="h-48 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="relative rounded-[1.25rem] border border-white/10 bg-bg-card p-6 sm:p-8"
            >
              <div className="absolute -left-[9999px] opacity-0" aria-hidden>
                <label htmlFor="website">Website</label>
                <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
              </div>

              <div className="grid gap-4">
                <Field id="fullName" label="Name" required error={errors.fullName?.message}>
                  <input id="fullName" className={fieldClass} placeholder="Your name" {...register("fullName")} />
                </Field>
                <Field id="phone" label="Phone / WhatsApp" required error={errors.phone?.message}>
                  <input id="phone" type="tel" className={fieldClass} placeholder="+91 ..." {...register("phone")} />
                </Field>
                <Field id="service" label="Service" required error={errors.service?.message}>
                  <select id="service" className={fieldClass} {...register("service")}>
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="email" label="Email" error={errors.email?.message}>
                  <input
                    id="email"
                    type="email"
                    className={fieldClass}
                    placeholder="you@business.com"
                    {...register("email")}
                  />
                </Field>
                <Field id="budget" label="Budget range" error={errors.budget?.message}>
                  <select id="budget" className={fieldClass} {...register("budget")}>
                    <option value="">Select a range</option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="message" label="Message" required error={errors.message?.message}>
                  <textarea
                    id="message"
                    rows={4}
                    className={cn(fieldClass, "resize-y")}
                    placeholder="What do you need help with?"
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
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
                      : "border-rose-400/30 bg-rose-400/10 text-rose-100"
                  )}
                >
                  {statusMessage}
                </p>
              ) : null}

              <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Send message"
                )}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
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
        {required ? <span className="text-accent-primary"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p className="text-sm text-rose-300" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
