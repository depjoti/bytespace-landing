"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { mainNav } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative z-30">
      <div className="container-page flex h-[88px] items-center justify-between gap-6 md:h-[120px]">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-4">
            {mainNav.map((item) => {
              const active = item.href === pathname;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "px-1 text-base transition-colors hover:text-white",
                      active ? "font-medium text-white" : "text-white/85",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 text-base text-white/85 md:flex">
          <Link href="/login" className="transition-colors hover:text-white">
            Sign In
          </Link>
          <Link href="/register" className="transition-colors hover:text-white">
            Join Us
          </Link>
          <button type="button" aria-label="Cart" className="text-white transition-opacity hover:opacity-80">
            <ShoppingBag className="size-5" />
          </button>
        </div>

        <button
          type="button"
          className="text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="container-page md:hidden">
          <nav
            aria-label="Mobile"
            className="flex flex-col gap-1 rounded-2xl bg-white p-3 text-neutral-950 shadow-float"
          >
            {[...mainNav, { label: "Sign In", href: "/login" }, { label: "Join Us", href: "/register" }].map(
              (item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base hover:bg-neutral-50"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
