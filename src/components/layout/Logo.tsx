import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/lib/config";

/**
 * D&K Estates logo — the circular brand badge (forest green + gold, transparent
 * background). Self-contained artwork, so it sits well on light and dark.
 * Height is responsive: comfortable in the compact mobile header, larger in the
 * taller desktop header. Swap /public/images/brand/dk-logo.webp to update.
 */
export default function Logo({
  className = "",
  sizeClass = "h-[52px] w-[52px] md:h-[68px] md:w-[68px]",
}: {
  className?: string;
  /** Tailwind height/width classes controlling the rendered logo size */
  sizeClass?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${BRAND.name} — home`}
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/images/brand/dk-logo.webp"
        alt={`${BRAND.name} logo`}
        width={256}
        height={256}
        priority
        className={sizeClass}
      />
      <span className="sr-only">
        {BRAND.name} — {BRAND.tagline}
      </span>
    </Link>
  );
}
