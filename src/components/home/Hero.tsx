import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { HeroCanvas } from "./HeroCanvas";

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    const els = contentRef.current.querySelectorAll("[data-animate]");
    gsap.fromTo(
      els,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out" },
    );
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(to right, oklch(0.72 0.17 65) 33.33%, oklch(0.97 0.006 240) 33.33% 66.66%, oklch(0.28 0.13 258) 66.66%)",
        }}
      />

      <HeroCanvas className="pointer-events-none absolute inset-0 z-0 h-full w-full" />

      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.99 0.003 240 / 0.85) 0%, oklch(0.99 0.003 240 / 0.70) 50%, oklch(0.99 0.003 240 / 0.92) 100%)",
        }}
      />

      <div aria-hidden className="absolute inset-0 z-[2] bg-dots opacity-25" />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-5xl px-4 pb-24 pt-20 text-center sm:px-6 sm:pt-28"
      >
        <div
          data-animate
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-teal)]/40 bg-white/80 px-4 py-1.5 text-xs font-semibold text-[color:var(--brand-navy)] shadow-sm backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand-saffron)]" />
          A MEIT-powered initiative at IIIT Delhi
        </div>

        <h1
          data-animate
          className="mt-6 font-display text-5xl font-bold leading-[1.07] text-[color:var(--brand-navy)] sm:text-6xl md:text-7xl"
        >
          Skill the future of <br />
          <span className="text-gradient-brand">Digital India.</span>
        </h1>

        <p
          data-animate
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--muted-foreground)] sm:text-lg"
        >
          Free, mentor-led programs in Python, Machine Learning and Generative AI — designed by
          IIIT Delhi faculty, powered by the Ministry of Electronics and Information Technology.
        </p>

        <div
          data-animate
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            to="/courses"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 text-sm font-semibold text-white shadow-[var(--shadow-navy)] transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)] focus:ring-offset-2"
          >
            Explore Courses
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/about"
            className="inline-flex h-12 items-center rounded-full border-2 border-[color:var(--brand-navy)]/25 bg-white/75 px-7 text-sm font-semibold text-[color:var(--brand-navy)] backdrop-blur transition-colors hover:border-[color:var(--brand-navy)]/50 hover:bg-white"
          >
            About the Programme
          </Link>
        </div>

        <dl data-animate className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 text-left">
          {[
            { k: "3", v: "Industry-ready courses" },
            { k: "100%", v: "Free for students" },
            { k: "IIITD", v: "Certified by faculty" },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-xl border border-[color:var(--brand-navy)]/12 bg-white/85 p-4 shadow-sm backdrop-blur"
            >
              <dt className="font-display text-2xl font-bold text-gradient-brand">{s.k}</dt>
              <dd className="mt-0.5 text-xs text-[color:var(--muted-foreground)]">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
