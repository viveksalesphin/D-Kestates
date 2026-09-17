/**
 * Lightweight tracking helpers for Meta Pixel + Google Analytics.
 *
 * These are safe to call anywhere on the client — if the underlying script was
 * not loaded (because no ID is configured), the calls are no-ops.
 *
 * Event conventions (see brief §12):
 *   - PageView    fired automatically by the pixel/GA loader
 *   - ViewContent when a project page is viewed
 *   - Lead        ONLY after a successful form submission
 *   - Contact     on tap of call/WhatsApp/email actions
 *   - Schedule    on a "Schedule Site Visit" intent
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type TrackEvent =
  | "PageView"
  | "ViewContent"
  | "Lead"
  | "Contact"
  | "Schedule";

/** Fire an event to Meta Pixel (standard event) and GA (as a custom event). */
export function track(
  event: TrackEvent,
  params?: Record<string, unknown>,
): void {
  if (typeof window === "undefined") return;

  try {
    window.fbq?.("track", event, params);
  } catch {
    /* no-op */
  }

  try {
    window.gtag?.("event", event, params);
  } catch {
    /* no-op */
  }
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const UTM_STORAGE_KEY = "dk_utms";
const EXTRA_KEYS = ["fbclid", "gclid"] as const;

export type UtmData = Record<string, string>;

/**
 * Capture UTM (and click-id) parameters from the current URL into sessionStorage
 * so they survive navigation and can be attached to the lead form submission.
 */
export function captureUtmsFromUrl(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const found: UtmData = {};

  [...UTM_KEYS, ...EXTRA_KEYS].forEach((key) => {
    const value = params.get(key);
    if (value) found[key] = value;
  });

  if (Object.keys(found).length === 0) return;

  try {
    const existing = getStoredUtms();
    sessionStorage.setItem(
      UTM_STORAGE_KEY,
      JSON.stringify({ ...existing, ...found }),
    );
  } catch {
    /* storage unavailable */
  }
}

export function getStoredUtms(): UtmData {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmData) : {};
  } catch {
    return {};
  }
}
