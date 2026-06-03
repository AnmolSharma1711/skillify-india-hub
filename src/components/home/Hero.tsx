/**
 * Landing hero — gradient headline, MEIT/IIITD framing, primary CTA to /courses.
 */
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--brand-violet)_25%,transparent),transparent_60%)]" aria-hidden />

      <div className="relative mx-auto max-w-5xl px-4 pt-24 pb-20 text-center sm:px-6 sm:pt-32">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand-cyan)]" />
          A MEIT-powered initiative at IIIT Delhi
        </div>

        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
          Skill the future of <br />
          <span className="text-gradient-brand">Digital India.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Free, mentor-led programs in Python, Machine Learning and Generative AI —
          designed by IIIT Delhi faculty, powered by the Ministry of Electronics
          and Information Technology.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/courses"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 text-sm font-semibold text-background shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
          >
            Explore Courses
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/about"
            className="inline-flex h-12 items-center rounded-full border border-border bg-card/60 px-6 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            About the Programme
          </Link>
        </div>

        <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-6 text-left">
          {[
            { k: "3", v: "Industry-ready courses" },
            { k: "100%", v: "Free for students" },
            { k: "IIITD", v: "Certified by faculty" },
          ].map((s) => (
            <div key={s.v} className="rounded-xl border border-border/60 bg-card/40 p-4 backdrop-blur">
              <dt className="font-display text-2xl font-bold text-gradient-brand">{s.k}</dt>
              <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}