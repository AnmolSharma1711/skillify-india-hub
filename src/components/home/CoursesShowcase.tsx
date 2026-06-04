import { Link } from "react-router-dom";
import type { ElementType } from "react";
import { ArrowRight, Clock, GraduationCap } from "lucide-react";
import * as Icons from "lucide-react";
import { COURSES } from "@/config/courses";
import courseShowcaseBg from "@/assets/course-showcase-bg.svg";

const ACCENT: Record<string, { bg: string; text: string; ring: string }> = {
  cyan: {
    bg: "linear-gradient(135deg, var(--brand-teal), oklch(0.68 0.12 200))",
    text: "var(--brand-teal)",
    ring: "border-[color:var(--brand-teal)]/25",
  },
  mixed: {
    bg: "var(--gradient-brand)",
    text: "var(--brand-navy)",
    ring: "border-[color:var(--brand-navy)]/20",
  },
  violet: {
    bg: "var(--gradient-saffron)",
    text: "var(--brand-saffron)",
    ring: "border-[color:var(--brand-saffron)]/35",
  },
};

export function CoursesShowcase() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24"
      style={{
        backgroundImage: `linear-gradient(180deg, oklch(0.99 0.003 240 / 0.90), oklch(0.99 0.003 240 / 0.82)), url(${courseShowcaseBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-teal)]">
            Courses Offered
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-[color:var(--brand-navy)] sm:text-5xl">
            Learn the skills behind modern software, data, and AI products.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--muted-foreground)]">
            Skillify brings Python Programming, Machine Learning, and Generative AI into one clear
            learning path with mentor-led sessions, projects, and IIIT Delhi guidance.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {COURSES.map((course) => {
            const accent = ACCENT[course.accent];
            const IconComponent = Icons[course.icon as keyof typeof Icons] as ElementType;

            return (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className={`group flex min-h-[260px] flex-col rounded-2xl border ${accent.ring} bg-white/90 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-navy)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)] focus:ring-offset-2`}
              >
                <div
                  className="grid h-12 w-12 place-items-center rounded-xl text-white"
                  style={{ background: accent.bg }}
                >
                  {IconComponent && <IconComponent className="h-6 w-6" />}
                </div>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: accent.text }}>
                    {course.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-[color:var(--brand-navy)]">
                    {course.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                    {course.tagline}
                  </p>
                </div>
                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-2 text-xs text-[color:var(--muted-foreground)]">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--muted)] px-2 py-1">
                      <Clock className="h-3 w-3" />
                      {course.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--muted)] px-2 py-1">
                      <GraduationCap className="h-3 w-3" />
                      {course.level}
                    </span>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-navy)]">
                    View course
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
