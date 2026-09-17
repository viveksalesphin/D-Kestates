import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // Muted gold primary
  primary:
    "bg-gold-500 text-forest-900 hover:bg-gold-400 shadow-sm hover:shadow-md",
  // Outlined on light backgrounds
  secondary:
    "border border-forest-800/25 text-forest-800 hover:bg-forest-800 hover:text-cream",
  ghost: "text-forest-800 hover:text-gold-600",
  // For use on dark forest backgrounds
  onDark:
    "border border-cream/40 text-cream hover:bg-cream hover:text-forest-900",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: () => void;
};

export function ButtonLink({
  children,
  href,
  external = false,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: LinkButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    const rel = external || href.startsWith("http") ? "noopener noreferrer" : undefined;
    const target = external || href.startsWith("http") ? "_blank" : undefined;
    return (
      <a href={href} className={cls} rel={rel} target={target} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  );
}

type ActionButtonProps = CommonProps & {
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled,
}: ActionButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
