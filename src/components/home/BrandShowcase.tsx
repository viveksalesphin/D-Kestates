import Image from "next/image";
import Container from "@/components/ui/Container";

/**
 * Brand showcase band using the D&K Estates marketing creatives.
 * Wide banner on larger screens, square creative on mobile (each is a
 * self-contained, designed artwork, so we present them whole — no cropping or
 * text overlay).
 */
export default function BrandShowcase() {
  return (
    <section aria-label="D&K Estates" className="bg-cream pb-4 pt-[var(--spacing-section)]">
      <Container>
        <div className="overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(20,61,47,0.12)]">
          {/* Wide banner — tablet and up */}
          <Image
            src="/images/brand/brand-wide.webp"
            alt="D&K Estates — Spaces Today. A Better Tomorrow. Residential, Commercial, Plots & Land and Investment Advisory across Gurugram, NCR, Haryana and Chandigarh."
            width={2056}
            height={765}
            sizes="(max-width: 640px) 0px, 100vw"
            className="hidden h-auto w-full sm:block"
          />
          {/* Square creative — mobile */}
          <Image
            src="/images/brand/brand-square.webp"
            alt="D&K Estates — Your Trusted Real Estate Partner. Rooted locally, growing together across Gurugram, NCR, Haryana and Chandigarh."
            width={1254}
            height={1254}
            sizes="(max-width: 640px) 100vw, 0px"
            className="block h-auto w-full sm:hidden"
          />
        </div>
      </Container>
    </section>
  );
}
