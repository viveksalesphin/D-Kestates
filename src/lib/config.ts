/**
 * Central site configuration.
 *
 * IMPORTANT: Do not hard-code personal phone/email inside components. Read from
 * here. Contact values and analytics IDs are sourced from environment variables
 * where available, with clearly-marked placeholders as fallbacks so the site
 * runs before real values are supplied. Replace the placeholders (or set the
 * env vars) before going live — see `.env.example`.
 */

export const SITE_URL = "https://dkestates.co.in";

export const BRAND = {
  name: "D&K Estates",
  /** D = Dinesh, K = Krishna */
  tagline: "Zameen Se Sapno Tak.",
  taglineEnglish: "From Land to Dreams.",
  positioning: "Your Trusted Property Partner",
  ethos: "People • Properties • Progress",
  descriptionShort:
    "A Gurugram-based real estate advisory helping homebuyers and investors discover carefully selected property opportunities across Gurugram, NCR, Haryana and Chandigarh.",
} as const;

export const MARKETS = ["Gurugram", "NCR", "Haryana", "Chandigarh"] as const;

/**
 * Contact details.
 *
 * NOTE: The fallbacks below are PLACEHOLDERS. Set the corresponding
 * NEXT_PUBLIC_* env vars (or edit these values) with the real D&K Estates
 * business phone / WhatsApp / email before launch.
 */
const PLACEHOLDER_PHONE_E164 = "+910000000000"; // replace me
const PLACEHOLDER_PHONE_DISPLAY = "+91 00000 00000"; // replace me

export const CONTACT = {
  /** E.164 format for tel: links, e.g. +919812345678 */
  phoneE164: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? PLACEHOLDER_PHONE_E164,
  /** Human-friendly display, e.g. +91 98123 45678 */
  phoneDisplay:
    process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY ?? PLACEHOLDER_PHONE_DISPLAY,
  /** Digits only for wa.me links, e.g. 919812345678 */
  whatsapp: (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ??
    process.env.NEXT_PUBLIC_CONTACT_PHONE ??
    PLACEHOLDER_PHONE_E164
  ).replace(/[^\d]/g, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@dkestates.co.in",
  addressLine: "Gurugram, Haryana, India",
  serviceAreas: MARKETS.join(" • "),
} as const;

/** Whether the current contact phone is still the placeholder (used to hint in dev). */
export const CONTACT_IS_PLACEHOLDER =
  CONTACT.phoneE164 === PLACEHOLDER_PHONE_E164;

export const SOCIAL = {
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
} as const;

/** Primary navigation. Items with `sectionId` scroll to a home-page section. */
export const NAV_LINKS: {
  label: string;
  href: string;
  sectionId?: string;
}[] = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/#featured", sectionId: "featured" },
  { label: "About", href: "/#why", sectionId: "why" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export const CTA = {
  primary: { label: "Explore Properties", href: "/#featured" },
  secondary: { label: "Talk to an Advisor", href: "/#contact" },
} as const;

/** Analytics / tracking IDs. Empty string => the loader is skipped. */
export const ANALYTICS = {
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_ID ?? "",
} as const;

/**
 * Web3Forms access key (https://web3forms.com) — the lead form submits here
 * since the static export has no server/API route. The key is public by design
 * (it maps to your receiving email). Set NEXT_PUBLIC_WEB3FORMS_KEY at build time.
 */
export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function waMeLink(message?: string): string {
  const base = `https://wa.me/${CONTACT.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function telLink(): string {
  return `tel:${CONTACT.phoneE164}`;
}

export function mailtoLink(subject?: string): string {
  const base = `mailto:${CONTACT.email}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}
