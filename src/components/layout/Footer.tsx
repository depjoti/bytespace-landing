import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { footerColumns, legalLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="container-page pt-16 pb-10 md:pt-[72px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex max-w-[412px] flex-col gap-6">
            <Logo tone="dark" />
            <p className="text-sm text-neutral-800">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <NewsletterForm />
            <p className="text-xs leading-[1.6] text-neutral-800">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:gap-x-20">
            {footerColumns.map((column, i) => (
              <ul key={i} className="flex flex-col gap-4">
                {column.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-neutral-800 transition-colors hover:text-primary-800">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-neutral-100 pt-6 text-xs text-neutral-800 sm:flex-row sm:items-center sm:justify-between lg:mt-[100px]">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="underline-offset-4 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
