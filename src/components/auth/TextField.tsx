import { useId, type ComponentProps } from "react";

type TextFieldProps = ComponentProps<"input"> & { label: string };

export function TextField({ label, id, ...props }: TextFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="text-sm font-medium text-neutral-950">
        {label}
      </label>
      <input
        id={inputId}
        className="h-12 rounded-xl border border-neutral-100 bg-neutral-50/60 px-5 text-base text-neutral-950 placeholder:text-neutral-400 focus:border-primary-800 focus:bg-white focus:outline-none"
        {...props}
      />
    </div>
  );
}
