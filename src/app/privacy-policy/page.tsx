import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { BRAND, CONTACT, telLink, mailtoLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How D&K Estates collects, uses and protects the information you share through enquiries, forms, WhatsApp and calls.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "17 September 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-xl text-forest-900">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-cream pt-16 md:pt-20">
      {/* Header band */}
      <div className="bg-forest-900 text-cream">
        <Container className="py-14 md:py-16">
          <div className="flex items-center gap-3">
            <span className="dk-rule" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
              {BRAND.name}
            </span>
          </div>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-cream/70">
            Effective date: {EFFECTIVE_DATE}
          </p>
        </Container>
      </div>

      <Container className="max-w-3xl py-14 md:py-16">
        <p className="text-sm leading-relaxed text-ink-soft">
          This Privacy Policy explains how {BRAND.name} (&quot;D&amp;K
          Estates&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses and
          protects the information you share with us when you enquire about a
          property or otherwise interact with us — including through this
          website, forms, WhatsApp, calls, SMS, email and social media lead
          forms (such as those on Facebook and Instagram). By sharing your
          details with us, you agree to the practices described below.
        </p>

        <Section title="Information We May Collect">
          <p>Depending on how you interact with us, we may collect:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>Your name</li>
            <li>Phone number</li>
            <li>Email address (if supplied)</li>
            <li>Property preferences</li>
            <li>Budget</li>
            <li>Buying purpose and timeline</li>
            <li>
              Any other information you voluntarily provide through forms,
              WhatsApp, calls or other enquiry channels
            </li>
          </ul>
          <p>
            We may also receive limited technical information (such as the
            campaign or source that referred you) to understand how our
            enquiries are generated.
          </p>
        </Section>

        <Section title="How We Use Your Information">
          <p>We use the information you share to:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>Respond to your property enquiries</li>
            <li>Share relevant project information</li>
            <li>Send brochures, pricing and availability</li>
            <li>Arrange calls and site visits</li>
            <li>Suggest relevant properties matching your requirements</li>
            <li>Provide transaction and advisory support</li>
          </ul>
        </Section>

        <Section title="How We May Contact You">
          <p>
            You may be contacted through phone, WhatsApp, SMS or email in
            connection with your enquiry, subject to applicable law and your
            communication preferences.
          </p>
        </Section>

        <Section title="Sharing of Information">
          <p>
            Your information may be shared where reasonably necessary with
            relevant developers, their authorised representatives or service
            providers, in order to fulfil your property enquiry.
          </p>
          <p>
            D&amp;K Estates does not sell your personal information to unrelated
            third parties.
          </p>
        </Section>

        <Section title="Data Protection">
          <p>
            We use reasonable safeguards to help protect the personal
            information you share with us against unauthorised access,
            alteration or disclosure.
          </p>
        </Section>

        <Section title="Your Choices">
          <p>You may, at any time, request that we:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>Correct your information</li>
            <li>Delete your information</li>
            <li>Withdraw from marketing or further contact</li>
          </ul>
          <p>
            To make any of these requests, please contact us using the details
            below.
          </p>
        </Section>

        <Section title="Contact Us">
          <p>
            For any questions about this Privacy Policy or your information,
            reach D&amp;K Estates at:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              Phone:{" "}
              <a href={telLink()} className="text-forest-800 underline underline-offset-2">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href={mailtoLink("Privacy request — D&K Estates")}
                className="text-forest-800 underline underline-offset-2"
              >
                {CONTACT.email}
              </a>
            </li>
            <li>{CONTACT.addressLine}</li>
          </ul>
        </Section>

        <Section title="Updates to This Policy">
          <p>
            We may update this Privacy Policy from time to time. The latest
            version will always be available on this page.
          </p>
        </Section>

        <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
          Note: D&amp;K Estates is a real estate advisory / property
          consultancy, not a real estate developer. This policy refers to
          D&amp;K Estates as a business/brand.
        </p>
      </Container>
    </div>
  );
}
