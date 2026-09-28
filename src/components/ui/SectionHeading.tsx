import clsx from "clsx";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  /** "light" for text on blue backgrounds. */
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  title,
  description,
  align = "center",
  tone = "dark",
  as: Tag = "h2",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-[960px] items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Tag
        className={clsx(
          "text-[32px] leading-[1.2] text-balance md:text-[44px]",
          tone === "light" ? "text-white" : "text-neutral-950",
          titleClassName,
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={clsx(
            "text-base leading-[1.6] md:text-lg",
            tone === "light" ? "text-white/90" : "text-neutral-400",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
