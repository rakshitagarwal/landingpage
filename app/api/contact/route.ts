import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().default(""),
  company: z.string().optional().default(""),
  service: z.string().min(1),
  budget: z.string().optional().default(""),
  details: z.string().min(20),
});

export async function POST(request: Request) {
  try {
    const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhook) {
      return NextResponse.json(
        { ok: false, error: "Contact webhook is not configured." },
        { status: 500 }
      );
    }

    const json = await request.json();
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid form data." },
        { status: 400 }
      );
    }

    const payload = {
      fullName: parsed.data.fullName,
      email: parsed.data.email,
      phone: parsed.data.phone ?? "",
      company: parsed.data.company ?? "",
      service: parsed.data.service,
      budget: parsed.data.budget ?? "",
      details: parsed.data.details,
    };

    // Apps Script accepts JSON via text/plain reliably; let fetch follow redirects.
    // Manual re-POST to the googleusercontent echo URL can return 405.
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const responseText = await res.text();

    if (!res.ok) {
      const message =
        res.status === 401 || res.status === 403
          ? "Google Sheet webhook is blocked (403). Redeploy the Apps Script web app with access set to Anyone."
          : "Failed to save inquiry to Google Sheets.";

      return NextResponse.json(
        { ok: false, error: message, status: res.status },
        { status: 502 }
      );
    }

    // Guard against false positives if a redirect somehow hit doGet instead of doPost.
    if (
      responseText.includes("webhook is live") &&
      !responseText.includes('"ok"')
    ) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Google Apps Script received GET instead of POST. Redeploy the web app and confirm doPost is published.",
        },
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
