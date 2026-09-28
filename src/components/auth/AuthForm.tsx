"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/auth/TextField";
import { SocialLogin } from "@/components/auth/SocialLogin";

type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  autoComplete: string;
  minLength?: number;
};

type AuthFormProps = {
  eyebrow: string;
  title: ReactNode;
  fields: Field[];
  submitLabel: string;
  showSocial?: boolean;
  footer: { text: string; linkLabel: string; href: string };
};

/**
 * Presentational auth form. There is no backend for this assessment, so submit
 * only runs native validation and shows a confirmation message.
 */
export function AuthForm({ eyebrow, title, fields, submitLabel, showSocial = false, footer }: AuthFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <p className="text-base text-primary-800">{eyebrow}</p>
        <h2 className="text-[32px] leading-[1.2] text-neutral-950 md:text-[44px]">{title}</h2>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {fields.map(({ name, ...field }) => (
          <TextField key={name} name={name} required {...field} />
        ))}
        <div className="flex items-center justify-between gap-4">
          <p role="status" className="text-sm text-primary-800">
            {submitted ? "Looks good! (Demo only — no account was created.)" : ""}
          </p>
          <Button type="submit" size="sm" className="ml-auto">
            {submitLabel}
          </Button>
        </div>
      </form>

      {showSocial && <SocialLogin />}

      <p className="text-center text-sm text-neutral-500">
        {footer.text}{" "}
        <Link href={footer.href} className="text-primary-800 hover:underline">
          {footer.linkLabel}
        </Link>
      </p>
    </div>
  );
}
