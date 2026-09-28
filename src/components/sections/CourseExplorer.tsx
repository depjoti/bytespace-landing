"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CourseCard } from "@/components/ui/CourseCard";
import { Pill } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { courseCategories, courses, type CourseCategory } from "@/data/courses";

export function CourseExplorer() {
  const [active, setActive] = useState<CourseCategory>("Featured");
  const query = useSearchParams().get("q")?.trim().toLowerCase() ?? "";

  const visibleCourses = useMemo(
    () =>
      courses.filter(
        (course) =>
          course.categories.includes(active) &&
          (!query || `${course.title} ${course.creator}`.toLowerCase().includes(query)),
      ),
    [active, query],
  );

  return (
    <section id="courses" className="scroll-mt-8 py-16 md:py-24">
      <div className="container-page flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-10">
          <SectionHeading
            title={
              <>
                Discover Your Passion, <br className="hidden sm:block" />
                Build Your Skills
              </>
            }
            description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          />

          <div
            role="group"
            aria-label="Course categories"
            className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:mx-auto md:max-w-[1120px] md:flex-wrap md:justify-center md:gap-x-4 md:gap-y-5 md:overflow-visible md:px-0 md:pb-0"
          >
            {courseCategories.map((category) => (
              <Pill key={category} active={category === active} onClick={() => setActive(category)}>
                {category}
              </Pill>
            ))}
            <Link href="/#categories" className="inline-flex h-[43px] items-center px-2 text-base text-primary-800 hover:underline md:text-lg">
              + More
            </Link>
          </div>
        </div>

        {visibleCourses.length > 0 ? (
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
            {visibleCourses.map((course) => (
              <li key={course.id} className="min-w-0">
                <CourseCard course={course} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="rounded-2xl bg-neutral-50 py-16 text-center text-neutral-500">
            No courses in <strong className="text-neutral-950">{active}</strong>
            {query && (
              <>
                {" "}matching <strong className="text-neutral-950">“{query}”</strong>
              </>
            )}{" "}
            yet. Try another category.
          </p>
        )}
      </div>
    </section>
  );
}
