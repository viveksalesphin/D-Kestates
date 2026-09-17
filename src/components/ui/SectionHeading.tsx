import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  onDark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <div
          className={`mb-3 flex items-center gap-3 ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="dk-rule" aria-hidden />
          <span
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
              onDark ? "text-gold-300" : "text-gold-600"
            }`}
          >
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2
        className={`font-serif text-3xl leading-tight sm:text-4xl ${
          onDark ? "text-cream" : "text-forest-900"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-4 text-base leading-relaxed ${
            onDark ? "text-cream/80" : "text-ink-soft"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
