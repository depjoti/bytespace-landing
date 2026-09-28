import Image from "next/image";
import clsx from "clsx";
import { ChartNoAxesColumn, Star } from "lucide-react";
import type { Course } from "@/data/courses";

export function CourseCard({ course, className }: { course: Course; className?: string }) {
  const meta = [`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`];

  return (
    <article
      className={clsx(
        "group flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-4 transition-shadow hover:shadow-float",
        className,
      )}
    >
      <div className="relative aspect-[341/195] overflow-hidden rounded-xl">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 341px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <ul className="absolute inset-x-3 bottom-3 flex flex-wrap gap-2">
          {meta.map((item) => (
            <li
              key={item}
              className="rounded-full bg-neutral-50/60 px-2.5 py-1 text-xs text-neutral-700 backdrop-blur-md"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 truncate text-xl text-neutral-950" title={course.title}>
            {course.title}
          </h3>
          <p className="flex shrink-0 items-center gap-1 text-xl text-neutral-400">
            <span className="sr-only">Rating:</span>
            {course.rating}
            <Star aria-hidden className="size-4 fill-neutral-300 text-neutral-300" />
          </p>
        </div>
        <p className="text-xs text-neutral-500">
          by <span className="text-primary-800">{course.creator}</span>
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-neutral-50 px-3 text-sm text-neutral-800">
          <ChartNoAxesColumn aria-hidden className="size-4" strokeWidth={2.5} />
          {course.level}
        </span>
        <Image
          src="/images/avatars-course.png"
          alt={`${course.enrolledExtra}+ learners enrolled`}
          width={128}
          height={32}
        />
      </div>

      <p className="font-heading text-2xl font-semibold text-primary-800">
        ${course.price}
        <span className="font-body text-sm font-normal text-neutral-500">/lifetime</span>
      </p>
    </article>
  );
}
