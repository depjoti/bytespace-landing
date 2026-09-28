"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No backend in this assessment: acknowledge locally and reset the field.
    event.currentTarget.reset();
    setStatus("done");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex gap-4">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          onChange={() => setStatus("idle")}
          className="h-12 min-w-0 flex-1 rounded-full border border-neutral-200 px-5 text-base placeholder:text-neutral-800 focus:border-primary-800 focus:outline-none"
        />
        <Button type="submit">Subscribe</Button>
      </div>
      <p role="status" className="min-h-5 text-sm text-primary-800">
        {status === "done" ? "Thanks! You're on the list." : ""}
      </p>
    </form>
  );
}
