import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

/**
 * Sticker-style button with the Tiny's hard offset shadow.
 * Renders a react-router <Link>, an <a>, or a <button> depending on props.
 */

type Variant = "coral" | "teal" | "sunshine" | "outline" | "outlineLight" | "cream";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  coral:
    "bg-coral text-ink border-ink shadow-hard hover:bg-coral-deep hover:text-cream",
  teal: "bg-teal text-cream border-ink shadow-hard hover:bg-teal-deep",
  sunshine:
    "bg-sunshine text-ink border-ink shadow-hard hover:bg-ink hover:text-sunshine",
  cream: "bg-cream text-ink border-ink shadow-hard hover:bg-sunshine",
  outline:
    "bg-transparent text-ink border-ink shadow-hard hover:bg-ink hover:text-cream",
  outlineLight:
    "bg-transparent text-cream border-cream shadow-hard-cream hover:bg-cream hover:text-ink",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 font-bold tracking-tight transition-all duration-200 hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer";

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  "aria-label"?: string;
}

interface ButtonAsButton extends CommonProps {
  to?: never;
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

interface ButtonAsLink extends CommonProps {
  to: string;
  href?: never;
  onClick?: () => void;
}

interface ButtonAsAnchor extends CommonProps {
  href: string;
  to?: never;
  external?: boolean;
  onClick?: () => void;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "coral",
    size = "md",
    className,
    ...rest
  } = props as ButtonProps & { variant?: Variant; size?: Size };

  const classes = cn(base, variants[variant], sizes[size], className);

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes} onClick={rest.onClick}>
        {children}
      </Link>
    );
  }
  if ("href" in props && props.href) {
    return (
      <a
        href={props.href}
        className={classes}
        onClick={rest.onClick}
        {...(props.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  const btn = props as ButtonAsButton;
  return (
    <button
      type={btn.type ?? "button"}
      className={cn(classes, btn.disabled && "pointer-events-none opacity-50")}
      onClick={btn.onClick}
      disabled={btn.disabled}
      aria-label={props["aria-label"]}
    >
      {children}
    </button>
  );
}
