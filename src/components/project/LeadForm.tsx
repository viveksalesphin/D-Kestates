"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { getStoredUtms, track } from "@/lib/tracking";
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from "@/lib/config";
import type { Project } from "@/lib/types";

const PURPOSES = ["Self-use", "Investment", "Exploring Both"];
const BUDGETS = [
  "Below ₹1.25 Cr",
  "₹1.25 Cr – ₹1.5 Cr",
  "₹1.5 Cr – ₹2 Cr",
  "₹2 Cr+",
];
const TIMELINES = [
  "Within 1 Month",
  "1–3 Months",
  "3–6 Months",
  "6+ Months / Exploring",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm({ project }: { project: Project }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    purpose: "",
    budget: "",
    timeline: "",
    consent: false,
  });
  // Honeypot — bots fill this; humans never see it.
  const [botcheck, setBotcheck] = useState("");

  const update = (key: keyof typeof form, value: string | boolean) =>
    setForm((f) => ({ ...f, [key]: value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    const digits = form.phone.replace(/\D/g, "");
    if (form.fullName.trim().length < 2) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (digits.length < 10) {
      setErrorMsg("Please enter a valid phone number.");
      return;
    }
    if (!form.consent) {
      setErrorMsg("Please accept the privacy policy to continue.");
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setErrorMsg(
        "The enquiry form isn't configured yet. Please call or WhatsApp us instead.",
      );
      return;
    }

    setStatus("submitting");
    try {
      const utms = getStoredUtms();
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New enquiry — ${project.projectName} (${form.fullName})`,
          from_name: "D&K Estates Website",
          botcheck, // honeypot; Web3Forms rejects if filled
          // Enquiry details
          name: form.fullName,
          phone: form.phone,
          buying_purpose: form.purpose || "Not specified",
          budget: form.budget || "Not specified",
          purchase_timeline: form.timeline || "Not specified",
          project: project.projectName,
          project_slug: project.slug,
          page_url: typeof window !== "undefined" ? window.location.href : "",
          ...utms,
        }),
      });

      const data = (await res.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;

      if (!res.ok || !data?.success) {
        throw new Error(data?.message ?? "Something went wrong.");
      }

      // Fire Meta/GA Lead event ONLY on a successful submission.
      track("Lead", {
        content_name: project.projectName,
        content_category: project.propertyType,
      });

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-gold-500/30 bg-white p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest-800 text-gold-300">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-4 font-serif text-xl text-forest-900">Thank you.</h3>
        <p className="mt-2 text-sm text-ink-soft">
          A D&amp;K Estates property advisor will connect with you shortly.
        </p>
      </div>
    );
  }

  const fieldCls =
    "w-full rounded-lg border border-forest-800/20 bg-white px-4 py-3 text-sm text-forest-900 placeholder:text-ink-soft/50 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30";
  const labelCls =
    "mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-forest-800";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot: visually hidden, off the tab order — bots fill it, humans don't */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={botcheck}
        onChange={(e) => setBotcheck(e.target.value)}
        className="hidden"
      />

      <div>
        <label htmlFor="fullName" className={labelCls}>
          Full Name<span className="text-gold-600"> *</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          required
          value={form.fullName}
          onChange={(e) => update("fullName", e.target.value)}
          className={fieldCls}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelCls}>
          Phone Number<span className="text-gold-600"> *</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          className={fieldCls}
          placeholder="+91 XXXXX XXXXX"
        />
      </div>

      <div>
        <label htmlFor="purpose" className={labelCls}>
          Buying Purpose
        </label>
        <select
          id="purpose"
          name="purpose"
          value={form.purpose}
          onChange={(e) => update("purpose", e.target.value)}
          className={fieldCls}
        >
          <option value="">Select purpose</option>
          {PURPOSES.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className={labelCls}>
            Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={(e) => update("budget", e.target.value)}
            className={fieldCls}
          >
            <option value="">Select budget</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className={labelCls}>
            Purchase Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={form.timeline}
            onChange={(e) => update("timeline", e.target.value)}
            className={fieldCls}
          >
            <option value="">Select timeline</option>
            {TIMELINES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <label className="flex items-start gap-3 text-xs leading-relaxed text-ink-soft">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => update("consent", e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-forest-800/30 text-forest-800 focus:ring-gold-500/40"
          required
        />
        <span>
          I agree to be contacted by D&amp;K Estates regarding this enquiry and
          accept the{" "}
          <Link
            href="/privacy-policy"
            className="text-forest-800 underline underline-offset-2 hover:text-gold-600"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {errorMsg ? (
        <p role="alert" className="text-sm text-red-700">
          {errorMsg}
        </p>
      ) : null}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "submitting"}
        className="w-full"
      >
        {status === "submitting" ? "Sending…" : "Get Price List & Brochure"}
      </Button>

      <p className="text-center text-[11px] text-ink-soft/70">
        Your details are used only to respond to this enquiry.
      </p>
    </form>
  );
}
