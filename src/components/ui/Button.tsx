import Link from "next/link";
import clsx from "clsx";
import type { ComponentProps } from "react";

type Variant = "lime" | "ghost";
type Size = "sm" | "md";

const variants: Record<Variant, string> = {
  lime: "bg-lime-400 text-neutral-950 hover:bg-lime-300 focus-visible:outline-lime-400",
  ghost: "text-current hover:opacity-80 focus-visible:outline-current",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-base",
};

type StyleProps = { variant?: Variant; size?: Size; className?: string };

export function buttonClasses({ variant = "lime", size = "md", className }: StyleProps = {}) {
  return clsx(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-body font-medium whitespace-nowrap transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );
}

export function Button({ variant, size, className, type = "button", ...props }: StyleProps & ComponentProps<"button">) {
  return <button type={type} className={buttonClasses({ variant, size, className })} {...props} />;
}

export function ButtonLink({ variant, size, className, ...props }: StyleProps & ComponentProps<typeof Link>) {
  return <Link className={buttonClasses({ variant, size, className })} {...props} />;
}
