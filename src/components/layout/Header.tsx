"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { NAV_LINKS, CTA } from "@/lib/config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-cream/95 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-forest-800/10 shadow-[0_2px_16px_rgba(20,61,47,0.08)]"
          : "border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Logo size={52} className="shrink-0" />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-forest-800/80 transition-colors hover:text-gold-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={CTA.secondary.href} variant="primary" size="md">
            {CTA.secondary.label}
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-forest-900 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6" aria-hidden>
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-6 bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-6 bg-current transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      {/* Mobile menu — absolutely positioned below the bar so it never inflates
          the (cream) header height and cover the hero when closed */}
      <div
        className={`absolute inset-x-0 top-full md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`origin-top bg-cream px-5 pb-8 pt-2 shadow-lg transition-all duration-300 ${
            open ? "opacity-100 translate-y-0" : "-translate-y-4 opacity-0"
          }`}
        >
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-forest-800/10 py-3.5 text-base font-medium text-forest-800"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <ButtonLink
              href={CTA.primary.href}
              variant="secondary"
              size="lg"
              onClick={() => setOpen(false)}
            >
              {CTA.primary.label}
            </ButtonLink>
            <ButtonLink
              href={CTA.secondary.href}
              variant="primary"
              size="lg"
              onClick={() => setOpen(false)}
            >
              {CTA.secondary.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
