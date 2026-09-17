import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { BRAND, CONTACT, MARKETS, SOCIAL, telLink, mailtoLink } from "@/lib/config";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/#featured" },
  { label: "About", href: "/#why" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const year = 2026; // build-time constant; update as needed

  return (
    <footer className="bg-forest-900 text-cream">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/images/brand/dk-logo.webp"
              alt={`${BRAND.name} logo`}
              width={72}
              height={72}
              className="rounded-full"
            />
            <p className="mt-4 font-serif text-2xl">{BRAND.name}</p>
            <p className="mt-1 text-sm text-gold-300">{BRAND.tagline}</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
              {BRAND.descriptionShort}
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-cream/50">
              {MARKETS.join(" | ")}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/80 transition-colors hover:text-gold-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/80">
              <li>
                <a href={telLink()} className="hover:text-gold-300">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={mailtoLink()} className="hover:text-gold-300">
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-cream/60">{CONTACT.addressLine}</li>
            </ul>
            {(SOCIAL.facebook || SOCIAL.instagram) && (
              <div className="mt-4 flex gap-4 text-sm">
                {SOCIAL.instagram && (
                  <a
                    href={SOCIAL.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/80 hover:text-gold-300"
                  >
                    Instagram
                  </a>
                )}
                {SOCIAL.facebook && (
                  <a
                    href={SOCIAL.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/80 hover:text-gold-300"
                  >
                    Facebook
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-6">
          <div className="flex flex-col gap-3 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {BRAND.name}. All rights reserved.
            </p>
            <p className="max-w-xl leading-relaxed">
              D&amp;K Estates is a real estate advisory / property consultancy,
              not a real estate developer. Project details, pricing and
              availability are subject to the respective developers&apos; terms
              and change without notice.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
