import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { creatorBenefits, growthStats } from "@/data/home";

export function Features() {
  return (
    <section id="creators" className="relative scroll-mt-8 overflow-hidden bg-surface">
      <Glow className="top-[-120px] left-[-160px] bg-lime-400/40" />
      <Glow className="top-[40%] left-[-200px] bg-primary-400/20" />
      <Glow className="right-[-200px] bottom-[-120px] bg-primary-400/25" />

      <div className="container-page relative flex flex-col gap-20 py-16 md:gap-[72px] md:py-[120px]">
        {/* Row 1 — Your path */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <h2 className="text-[32px] leading-[1.2] md:text-[44px]">Your Path to Professional Growth Starts Here!</h2>
            <p className="max-w-[520px] text-base leading-[1.6] text-neutral-500 md:text-lg">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
              journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
              career path entirely, we have the resources you need.
            </p>
            <dl className="mt-4 flex gap-12">
              {growthStats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-1">
                  <dt className="text-sm text-neutral-500">{stat.label}</dt>
                  <dd className="font-heading text-[36px] leading-[1.2] font-medium text-primary-800">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Image
            src="/images/feature-growth.png"
            alt="Student with a laptop next to a course card and a 55% learning-progress badge"
            width={703}
            height={697}
            sizes="(min-width: 1024px) 560px, 90vw"
            className="mx-auto w-full max-w-[560px] lg:mr-0"
          />
        </div>

        {/* Row 2 — Create & manage */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Image
            src="/images/feature-manage.png"
            alt="Creator with headphones and a tablet, surrounded by revenue and happy-student cards"
            width={587}
            height={719}
            sizes="(min-width: 1024px) 500px, 90vw"
            className="order-2 mx-auto w-full max-w-[500px] lg:order-1 lg:ml-0"
          />
          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <h2 className="text-[32px] leading-[1.2] md:text-[44px]">Create &amp; Manage Courses Easily.</h2>
            <p className="max-w-[520px] text-base leading-[1.6] text-neutral-500 md:text-lg">
              <strong className="font-bold text-neutral-950">ByteSpace</strong> supports individuals or entities in the
              creation, publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {creatorBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-base text-neutral-950 md:text-lg">
                  <CircleCheck aria-hidden className="size-6 shrink-0 fill-primary-800 text-white" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Glow({ className }: { className: string }) {
  return <div aria-hidden className={`pointer-events-none absolute size-[520px] rounded-full blur-[120px] ${className}`} />;
}
