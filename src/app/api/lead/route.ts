import { NextResponse } from "next/server";

/**
 * Lead submission handler.
 *
 * This is deliberately abstracted so it can later forward to a CRM (e.g. Dolphin
 * CRM), a WhatsApp automation, an email service or a webhook — without changing
 * the form component. For now it validates, optionally forwards to a webhook if
 * LEAD_WEBHOOK_URL is set, and always logs server-side.
 *
 * The Meta "Lead" pixel event is fired on the CLIENT only after this returns
 * success (see LeadForm).
 */

export interface LeadPayload {
  projectSlug?: string;
  projectName?: string;
  fullName: string;
  phone: string;
  purpose?: string;
  budget?: string;
  timeline?: string;
  consent: boolean;
  utms?: Record<string, string>;
  pageUrl?: string;
}

function isValid(body: Partial<LeadPayload>): body is LeadPayload {
  if (!body || typeof body !== "object") return false;
  if (typeof body.fullName !== "string" || body.fullName.trim().length < 2) {
    return false;
  }
  // Accept 10–15 digits after stripping non-digits (Indian mobile is 10).
  const digits = (body.phone ?? "").replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) return false;
  if (body.consent !== true) return false;
  return true;
}

export async function POST(request: Request) {
  let body: Partial<LeadPayload>;
  try {
    body = (await request.json()) as Partial<LeadPayload>;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (!isValid(body)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid name, phone and consent." },
      { status: 422 },
    );
  }

  const lead: LeadPayload = {
    projectSlug: body.projectSlug,
    projectName: body.projectName,
    fullName: body.fullName.trim(),
    phone: body.phone.trim(),
    purpose: body.purpose,
    budget: body.budget,
    timeline: body.timeline,
    consent: body.consent,
    utms: body.utms ?? {},
    pageUrl: body.pageUrl,
  };

  // Server-side log (visible in hosting logs). Replace with CRM integration.
  console.info("[D&K lead]", JSON.stringify(lead));

  // Optional: forward to a webhook / CRM if configured.
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      // Don't fail the user's submission if the downstream is down; log it.
      console.error("[D&K lead] webhook forward failed", err);
    }
  }

  return NextResponse.json({ ok: true });
}
