import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import iiitdLogo from "@/assets/iiitd_logo-removebg-preview.svg";
import meitLogo from "@/assets/meit_logo-removebg-preview.svg";

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

      <Hero />
      <AboutSection />

      {/* Logos section at the end */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-grid opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.99 0.003 240 / 0.92), oklch(0.99 0.003 240 / 0.88))",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mt-16 border-t border-[color:var(--border)] pt-16">
            <p className="mb-8 text-center text-sm uppercase tracking-widest text-[color:var(--brand-teal)]">
              A partnership between
            </p>
            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">
              <div className="flex h-20 items-center sm:h-24">
                <img src={iiitdLogo} alt="IIIT Delhi" className="h-full w-auto object-contain" />
              </div>
              <span className="font-display text-3xl font-bold text-[color:var(--brand-navy)]">×</span>
              <div className="flex h-16 items-center sm:h-20">
                <img
                  src={meitLogo}
                  alt="Ministry of Electronics and Information Technology"
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
