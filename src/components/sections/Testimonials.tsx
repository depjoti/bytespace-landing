import Image from "next/image";
import { testimonials } from "@/data/home";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div aria-hidden className="pointer-events-none absolute top-[-80px] right-[-120px] size-[560px] rounded-full bg-lime-400/40 blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute bottom-[-200px] left-[-160px] size-[520px] rounded-full bg-primary-400/25 blur-[140px]" />

      <div className="container-page relative flex flex-col gap-12 py-16 md:gap-16 md:py-[120px]">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-16">
          <h2 className="text-[32px] leading-[1.2] md:text-[44px]">
            Discover What Our <br className="hidden sm:block" />
            Community Is Saying
          </h2>
          <p className="text-base leading-[1.6] text-neutral-500 md:text-lg">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <ul className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="flex flex-col gap-6 rounded-2xl bg-white p-5 shadow-card">
                <Image src={t.avatar} alt={t.name} width={80} height={80} className="size-20 rounded-full object-cover" />
                <figcaption className="flex flex-col gap-1">
                  <span className="font-heading text-xl font-semibold text-neutral-950">{t.name}</span>
                  <span className="text-lg text-primary-800">{t.role}</span>
                </figcaption>
                <blockquote className="text-lg leading-[1.6] text-neutral-500">“{t.quote}”</blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
