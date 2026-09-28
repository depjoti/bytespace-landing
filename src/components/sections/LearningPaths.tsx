import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { learningPaths } from "@/data/home";

export function LearningPaths() {
  return (
    <section id="categories" className="scroll-mt-8 pb-16 md:pb-[120px]">
      <div className="container-page flex flex-col gap-12 md:gap-16">
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
          {learningPaths.map(({ label, icon: Icon }) => (
            <li key={label}>
              <Link
                href="/#courses"
                className="flex h-[167px] flex-col items-center justify-center gap-4 rounded-2xl border border-neutral-100 bg-white px-2 transition hover:-translate-y-1 hover:border-lime-400 hover:shadow-float"
              >
                <span className="grid size-16 place-items-center rounded-full bg-lime-400 text-neutral-950">
                  <Icon aria-hidden className="size-7" strokeWidth={2} />
                </span>
                <span className="text-center text-lg text-neutral-950 md:text-xl">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
