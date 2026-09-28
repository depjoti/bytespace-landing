import { Suspense } from "react";
import { Footer } from "@/components/layout/Footer";
import { CourseExplorer } from "@/components/sections/CourseExplorer";
import { CreatorCta } from "@/components/sections/CreatorCta";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <PartnerLogos />
        {/* CourseExplorer reads ?q= from the hero search, which needs a Suspense boundary. */}
        <Suspense>
          <CourseExplorer />
        </Suspense>
        <LearningPaths />
        <Features />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
