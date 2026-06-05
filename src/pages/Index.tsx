import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/home/Hero";
import { CoursesShowcase } from "@/components/home/CoursesShowcase";
import { AboutSection } from "@/components/home/AboutSection";
import { TargetCursor } from "@/components/ui/TargetCursor";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Skillify IIITD &times; MEIT — Free Tech Courses</title>
        <meta
          name="description"
          content="MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies by IIIT Delhi, powered by MEIT."
        />
      </Helmet>

      <TargetCursor spinDuration={2} hideDefaultCursor={true} parallaxOn={true} />

      <Hero />
      <CoursesShowcase />
      <AboutSection />
    </>
  );
}
