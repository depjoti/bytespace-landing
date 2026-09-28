import Image from "next/image";
import { Star } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { SearchBar } from "@/components/ui/SearchBar";

/**
 * Hero is laid out on the 1440×1024 Figma frame. Decorative layers (3D shapes,
 * lime disc, floating stat cards) are absolutely positioned inside a 1440px
 * "stage" that stays centred, so they keep their exact relation to the student
 * photo at any viewport width.
 */
export function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden bg-primary-800">
      <Header />

      <div className="container-page relative z-10 flex flex-col items-center gap-6 pt-6 text-center md:pt-4">
        <h1 className="max-w-[880px] text-[40px] leading-[1.2] text-white sm:text-[56px] lg:text-[72px]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="max-w-[640px] text-base text-white/90 md:text-lg">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
        <SearchBar className="mt-4" />
      </div>

      <div className="relative mx-auto h-[300px] w-full max-w-[1440px] sm:h-[440px] lg:h-[576px]">
        {/* Stage: 1440px wide, scaled down on small screens so the composition stays intact. */}
        <div className="absolute bottom-0 left-1/2 h-[576px] w-[1440px] origin-bottom -translate-x-1/2 scale-50 sm:scale-75 lg:scale-100">
          <div
            aria-hidden
            className="absolute top-[132px] left-1/2 size-[1120px] -translate-x-1/2 rounded-full bg-lime-500"
          />
          <Image
            src="/images/hero-ornaments.png"
            alt=""
            width={1440}
            height={804}
            priority
            className="pointer-events-none absolute top-[calc(-1*max(227px,15.76vw))] left-1/2 h-auto w-[max(1440px,100vw)] max-w-none -translate-x-1/2 select-none"
          />
          <Image
            src="/images/hero-student.png"
            alt="Smiling student with headphones holding a laptop"
            width={722}
            height={515}
            priority
            className="absolute bottom-0 left-[428px] max-w-none"
          />

          <FloatingCard className="top-[189px] left-[404px] w-[207px]">
            <p className="text-base text-neutral-950">UI/UX Design</p>
            <p className="text-xs text-neutral-300">200 Courses • 1000+ Students</p>
          </FloatingCard>

          <FloatingCard className="top-[203px] left-[841px] w-[232px]">
            <p className="text-sm text-neutral-950">Learning Progress</p>
            <p className="font-heading text-[44px] leading-[1.2] font-semibold text-neutral-950">55%</p>
            <div className="mt-2 h-2 rounded-full bg-neutral-50" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} aria-label="Learning progress">
              <div className="h-full w-[55%] rounded-full bg-lime-400" />
            </div>
          </FloatingCard>

          <FloatingCard className="top-[389px] left-[328px] w-[258px]">
            <p className="text-base text-neutral-950">Happy Students</p>
            <p className="flex items-center gap-1 text-xs text-neutral-950">
              4.5 <span className="text-neutral-300">(240)</span>
              <Star aria-hidden className="size-3 fill-lime-500 text-lime-500" />
            </p>
            <Image
              src="/images/avatars-students.png"
              alt="2K+ happy students"
              width={232}
              height={43}
              className="mt-2"
            />
          </FloatingCard>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <div
      className={`absolute z-10 flex flex-col gap-1 rounded-2xl bg-white p-4 text-left shadow-float ${className}`}
    >
      {children}
    </div>
  );
}
