import { useState, ElementType } from "react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { Clock, GraduationCap, ArrowRight } from "lucide-react";
import type { Course } from "@/config/courses";
import "./FlipCard.css";

const ACCENT: Record<string, { bg: string; text: string }> = {
  cyan: {
    bg: "linear-gradient(135deg, var(--brand-teal), oklch(0.68 0.12 200))",
    text: "var(--brand-teal)",
  },
  mixed: {
    bg: "var(--gradient-brand)",
    text: "var(--brand-navy)",
  },
  violet: {
    bg: "var(--gradient-saffron)",
    text: "var(--brand-saffron)",
  },
};

export function FlipCard({ course }: { course: Course }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const accent = ACCENT[course.accent];
  const IconComponent = Icons[course.icon as keyof typeof Icons] as ElementType;

  return (
    <div
      className="flip-card-container"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        {/* Front side */}
        <div className="flip-card-front">
          <div className="flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-white/90 p-6 shadow-sm backdrop-blur">
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
              <h3 className="mt-2 font-display text-lg font-bold text-[color:var(--brand-navy)]">
                {course.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                {course.tagline}
              </p>
            </div>
            <div className="mt-auto pt-4">
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
            </div>
          </div>
        </div>

        {/* Back side */}
        <div className="flip-card-back">
          <div className="flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-gradient-to-br from-white/95 to-white/85 p-6 shadow-sm backdrop-blur">
            <div
              className="grid h-10 w-10 place-items-center rounded-lg text-white"
              style={{ background: accent.bg }}
            >
              {IconComponent && <IconComponent className="h-5 w-5" />}
            </div>
            <h3 className="mt-4 font-display text-sm font-bold text-[color:var(--brand-navy)]">
              {course.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted-foreground)]">
              {course.description || course.tagline}
            </p>
            <div className="mt-auto pt-4 space-y-2">
              {course.highlights && course.highlights.slice(0, 2).map((highlight, idx) => (
                <p key={idx} className="text-xs text-[color:var(--brand-navy)]">
                  ✓ {highlight}
                </p>
              ))}
            </div>
            <Link
              to="/courses"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-105"
            >
              View Course
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
