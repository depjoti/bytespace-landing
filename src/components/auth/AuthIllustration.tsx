import Image from "next/image";
import clsx from "clsx";
import { Star } from "lucide-react";
import { CourseCard } from "@/components/ui/CourseCard";
import { courses } from "@/data/courses";

/** Collage from the auth frames: two overlapping course cards, a stats badge and 3D shapes. */
export function AuthIllustration({ className }: { className?: string }) {
  const [, backCourse, frontCourse] = courses;

  return (
    <div aria-hidden className={clsx("relative h-[585px] w-[508px]", className)}>
      <CourseCard course={backCourse} className="absolute top-[89px] left-[26px] w-[373px]" />
      <CourseCard course={frontCourse} className="absolute top-0 left-[137px] w-[371px]" />

      <Image src="/images/auth/torus-lime.png" alt="" width={148} height={147} className="absolute top-[13px] left-[53px]" />
      <Image src="/images/auth/squiggle-white.png" alt="" width={177} height={176} className="absolute top-[319px] left-[372px]" />

      <div className="absolute top-[435px] left-[252px] flex w-[257px] flex-col gap-1 rounded-2xl bg-lime-400 p-4 text-neutral-950">
        <p className="text-base">Happy Students</p>
        <p className="flex items-center gap-1 text-xs">
          4.5 <span className="text-neutral-600">(240)</span>
          <Star className="size-3 fill-primary-800 text-primary-800" />
        </p>
        <Image src="/images/avatars-students.png" alt="" width={232} height={43} className="mt-2" />
      </div>

      <Image src="/images/auth/cone-lime.png" alt="" width={190} height={189} className="absolute top-[397px] left-0" />
    </div>
  );
}
