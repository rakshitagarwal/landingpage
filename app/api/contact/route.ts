import { NextResponse } from "next/server";
import { z } from "zod";
import { siteConfig } from "@/lib/site-config";

const contactSchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(8),
  service: z.string().min(1),
  message: z.string().min(10),
  email: z.string().optional().default(""),
  company: z.string().optional().default(""),
  website: z.string().optional().default(""), // honeypot
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid form data." },
        { status: 400 }
      );
    }

    // Bot filled honeypot — pretend success
    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const payload = {
      fullName: parsed.data.fullName,
      phone: parsed.data.phone,
      service: parsed.data.service,
      details: parsed.data.message,
      email: parsed.data.email || "",
      company: parsed.data.company || "",
      budget: "",
    };

    const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    const resendKey = process.env.RESEND_API_KEY;

    let delivered = false;

    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
        redirect: "follow",
      });
      if (res.ok) delivered = true;
    }

    if (resendKey) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
          to: [siteConfig.email],
          subject: `New inquiry from ${payload.fullName}`,
          text: [
            `Name: ${payload.fullName}`,
            `Phone: ${payload.phone}`,
            `Email: ${payload.email || "—"}`,
            `Company: ${payload.company || "—"}`,
            `Service: ${payload.service}`,
            "",
            payload.details,
          ].join("\n"),
        }),
      });
      if (emailRes.ok) delivered = true;
    }

    if (!delivered && !webhook && !resendKey) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "No delivery method configured. Set GOOGLE_SHEETS_WEBHOOK_URL or RESEND_API_KEY.",
        },
        { status: 500 }
      );
    }

    if (!delivered) {
      return NextResponse.json(
        { ok: false, error: "Failed to deliver inquiry." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
