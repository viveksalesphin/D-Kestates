import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/lib/config";

/**
 * D&K Estates logo — the circular brand badge (forest green + gold, cream
 * interior). Self-contained artwork, so it sits well on both light and dark
 * backgrounds. Swap the file at /public/images/brand/dk-logo.webp to update.
 */
export default function Logo({
  className = "",
  size = 48,
}: {
  className?: string;
  size?: number;
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
        width={size}
        height={size}
        priority
        className="h-auto w-auto"
        style={{ height: size, width: size }}
      />
      <span className="sr-only">
        {BRAND.name} — {BRAND.tagline}
      </span>
    </Link>
  );
}
