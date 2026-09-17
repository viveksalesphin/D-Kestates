import type { ReactNode } from "react";

export default function Disclaimer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-xs leading-relaxed text-ink-soft/80 ${className}`}
    >
      {children}
    </p>
  );
}
