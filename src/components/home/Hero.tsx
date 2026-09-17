import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BRAND, CTA } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-900 text-cream">
      {/* Background wash */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 15% 0%, #256150 0%, #143d2f 42%, #0c241b 100%)",
        }}
      />
      {/* Subtle architectural line texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #c4a254 1px, transparent 1px)",
          backgroundSize: "72px 100%",
        }}
      />

      <Container className="relative flex min-h-[88vh] flex-col justify-center py-28 sm:min-h-[92vh] md:py-32">
        <div className="max-w-3xl">
          <div className="dk-reveal flex items-center gap-3">
            <span className="dk-rule" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">
              {BRAND.name} — Gurugram Real Estate Advisory
            </span>
          </div>

          <h1
            className="dk-reveal mt-6 font-serif text-4xl leading-[1.08] sm:text-5xl md:text-6xl"
            style={{ animationDelay: "0.05s" }}
          >
            Finding the Right Property Starts with the Right Advice.
          </h1>

          <p
            className="dk-reveal mt-5 font-serif text-xl text-gold-300 sm:text-2xl"
            style={{ animationDelay: "0.12s" }}
          >
            {BRAND.tagline}
          </p>

          <p
            className="dk-reveal mt-5 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
            style={{ animationDelay: "0.18s" }}
          >
            {BRAND.descriptionShort}
          </p>

          <div
            className="dk-reveal mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.24s" }}
          >
            <ButtonLink href={CTA.primary.href} variant="primary" size="lg">
              {CTA.primary.label}
            </ButtonLink>
            <ButtonLink href={CTA.secondary.href} variant="onDark" size="lg">
              {CTA.secondary.label}
            </ButtonLink>
          </div>

          <p
            className="dk-reveal mt-10 text-xs uppercase tracking-[0.2em] text-cream/50"
            style={{ animationDelay: "0.3s" }}
          >
            {BRAND.ethos}
          </p>
        </div>
      </Container>
    </section>
  );
}
