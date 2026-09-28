import clsx from "clsx";
import type { ComponentProps } from "react";

type PillProps = ComponentProps<"button"> & { active?: boolean };

/** Rounded filter chip used by the course category tabs. */
export function Pill({ active = false, className, ...props }: PillProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={clsx(
        "inline-flex h-[43px] items-center rounded-full px-4 text-base whitespace-nowrap transition-colors md:text-lg",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800",
        active ? "bg-lime-400 text-neutral-950" : "bg-neutral-50 text-neutral-800 hover:bg-neutral-100",
        className,
      )}
      {...props}
    />
  );
}
