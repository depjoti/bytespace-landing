import type { ReactNode } from "react";
import { LogoMark } from "@/components/ui/Logo";
import { AuthIllustration } from "@/components/auth/AuthIllustration";

type AuthLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

/** Shared shell for the Login and Register pages (Figma frames "Login" / "Register"). */
export function AuthLayout({ title, description, children }: AuthLayoutProps) {
  return (
    <div className="bg-grid min-h-screen bg-primary-800">
      <div className="container-page flex min-h-screen flex-col py-8 lg:py-9">
        <LogoMark />

        <div className="flex flex-1 flex-col items-center gap-12 py-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:py-12">
          <div className="flex max-w-[480px] flex-col gap-4 text-center text-white lg:text-left">
            <h1 className="text-xl text-white md:text-2xl">{title}</h1>
            <p className="text-base leading-[1.6] text-white/85">{description}</p>
            <AuthIllustration className="mt-20 hidden lg:block" />
          </div>

          <main className="w-full max-w-[579px] rounded-3xl bg-white px-6 py-10 shadow-float sm:px-16 sm:py-[60px]">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
