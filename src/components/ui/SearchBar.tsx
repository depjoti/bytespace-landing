"use client";

import { useRouter } from "next/navigation";
import clsx from "clsx";
import { Search } from "lucide-react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function SearchBar({ className }: { className?: string }) {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = new FormData(event.currentTarget).get("q")?.toString().trim();
    router.push(query ? `/?q=${encodeURIComponent(query)}#courses` : "/#courses");
  }

  return (
    <form role="search" onSubmit={handleSubmit} className={clsx("flex w-full max-w-[476px] items-center gap-3", className)}>
      <label className="relative flex-1">
        <span className="sr-only">Search courses</span>
        <Search aria-hidden className="pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2 text-neutral-400" />
        <input
          type="search"
          name="q"
          placeholder="Course, topic, creator"
          className="h-12 w-full rounded-full bg-white pr-5 pl-12 text-base text-neutral-950 placeholder:text-neutral-400 focus:outline-2 focus:outline-offset-2 focus:outline-lime-400"
        />
      </label>
      <Button type="submit" size="md">
        Search
      </Button>
    </form>
  );
}
