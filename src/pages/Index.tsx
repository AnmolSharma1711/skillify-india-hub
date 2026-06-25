import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { FeedbackMarquee } from "@/components/home/FeedbackMarquee";
import iiitdLogo from "@/assets/iiitd_logo-removebg-preview.svg";
import meitLogo from "@/assets/meit_logo-removebg-preview.svg";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies</title>
        <meta
          name="description"
          content="MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies by IIIT Delhi, powered by MeitY."
        />
      </Helmet>

      <Hero />
      <AboutSection />
      <FeedbackMarquee />

    </>
  );
}
