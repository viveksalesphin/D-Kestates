"use client";

import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { CONTACT, telLink, mailtoLink, waMeLink, BRAND } from "@/lib/config";
import { track } from "@/lib/tracking";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-forest-900 py-[var(--spacing-section)] text-cream"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 120% at 80% 0%, #256150 0%, #143d2f 45%, #0c241b 100%)",
        }}
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="dk-rule" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">
              Talk to Us
            </span>
            <span className="dk-rule" aria-hidden />
          </div>
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
            Looking for the right property?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream/80">
            Let&apos;s understand what you&apos;re looking for. Tell us your
            requirement and a {BRAND.name} advisor will help you find what fits.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink
              href={telLink()}
              variant="primary"
              size="lg"
              onClick={() =>
                track("Contact", { method: "call", surface: "home-cta" })
              }
            >
              Talk to an Advisor
            </ButtonLink>
            <ButtonLink
              href={waMeLink(
                "Hi D&K Estates, I'd like to talk to an advisor about a property.",
              )}
              variant="onDark"
              size="lg"
              external
              onClick={() =>
                track("Contact", { method: "whatsapp", surface: "home-cta" })
              }
            >
              WhatsApp Us
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-col items-center gap-1 text-sm text-cream/70 sm:flex-row sm:justify-center sm:gap-6">
            <a
              href={telLink()}
              className="hover:text-gold-300"
              onClick={() =>
                track("Contact", { method: "call", surface: "home-cta-text" })
              }
            >
              {CONTACT.phoneDisplay}
            </a>
            <span aria-hidden className="hidden sm:inline text-cream/30">
              •
            </span>
            <a
              href={mailtoLink("Property enquiry — D&K Estates")}
              className="hover:text-gold-300"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
