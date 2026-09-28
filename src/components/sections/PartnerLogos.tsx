import Image from "next/image";
import { partnerLogos } from "@/data/site";

export function PartnerLogos() {
  return (
    <section aria-label="Trusted by" className="bg-neutral-50">
      <ul className="container-page flex flex-wrap items-center justify-center gap-x-[72px] gap-y-8 py-12 md:py-20">
        {partnerLogos.map((src, i) => (
          <li key={src}>
            <Image src={src} alt={`Partner ${i + 1}`} width={168} height={41} className="h-8 w-auto md:h-[41px]" />
          </li>
        ))}
      </ul>
    </section>
  );
}
