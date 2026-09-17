import Image from "next/image";
import type { ProjectImage } from "@/lib/types";

/**
 * Renders a project image.
 *
 * - When `image.placeholder` is true, shows a premium, clearly-labelled
 *   placeholder block instead of a broken image — so we never present a random
 *   render as an actual WAL Serenia asset (brief §14).
 * - When it's a real image, uses next/image for optimization.
 *
 * To go live: drop the real asset into /public, point `src` at it and set
 * `placeholder: false` in the project data.
 */
export default function SmartImage({
  image,
  sizes,
  priority = false,
  className = "",
  rounded = "rounded-2xl",
}: {
  image: ProjectImage;
  sizes?: string;
  priority?: boolean;
  className?: string;
  rounded?: string;
}) {
  if (image.placeholder) {
    return (
      <div
        role="img"
        aria-label={image.alt}
        className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-forest-800 ${rounded} ${className}`}
      >
        {/* Decorative texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(120% 120% at 20% 10%, #256150 0%, #143d2f 45%, #0c241b 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, transparent 45%, #c4a254 46%, #c4a254 47%, transparent 48%)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <span className="font-serif text-lg text-gold-300">
            {image.caption ?? "Project image"}
          </span>
          <span className="mt-2 max-w-[22rem] text-xs uppercase tracking-[0.18em] text-cream/60">
            {image.alt}
          </span>
          <span className="mt-3 rounded-full border border-cream/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cream/50">
            Placeholder — add render
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes ?? "100vw"}
      priority={priority}
      className={`object-cover ${rounded} ${className}`}
    />
  );
}
