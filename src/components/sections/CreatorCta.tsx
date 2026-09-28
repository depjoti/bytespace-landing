import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CreatorCta() {
  return (
    <section className="bg-grid relative overflow-hidden bg-primary-800">
      <Image
        src="/images/cta-ornaments.png"
        alt=""
        width={1440}
        height={488}
        className="pointer-events-none absolute top-1/2 left-1/2 hidden h-auto w-[max(1440px,100vw)] max-w-none -translate-1/2 select-none md:block"
      />
      <div className="container-page relative flex min-h-[488px] flex-col items-center justify-center gap-10 py-20">
        <SectionHeading
          tone="light"
          className="max-w-[740px]"
          titleClassName="max-w-[560px]"
          title="Unlock Your Potential as a Creator with ByteSpace"
          description="Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library."
        />
        <ButtonLink href="/register">Join as Creator</ButtonLink>
      </div>
    </section>
  );
}
