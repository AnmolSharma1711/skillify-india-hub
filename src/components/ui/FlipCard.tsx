import { useState, ElementType } from "react";
import * as Icons from "lucide-react";
import { Clock, GraduationCap } from "lucide-react";
import type { Course } from "@/config/courses";
import { EnrollmentModal } from "@/components/courses/EnrollmentModal";
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

export function FlipCard({ 
  course, 
  context = "individual" 
}: { 
  course: Course;
  context?: "individual" | "institute";
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [enrollmentType, setEnrollmentType] = useState<"individual" | "institute" | null>(null);

  const accent = ACCENT[course.accent];
  const IconComponent = Icons[course.icon as keyof typeof Icons] as ElementType;

  return (
    <div
      className="flip-card-container"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        {/* Front Side */}
        <div className="flip-card-front">
          <div className="flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-white/90 p-6 shadow-sm backdrop-blur">
            <div
              className="grid h-12 w-12 place-items-center rounded-xl text-white"
              style={{ background: accent.bg }}
            >
              {IconComponent && <IconComponent className="h-6 w-6" />}
            </div>

            <div className="mt-5">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: accent.text }}
              >
                {course.category}
              </p>

              <h3 className="mt-2 font-display text-lg font-bold text-[color:var(--brand-navy)]">
                {course.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                {course.tagline}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {course.techs.slice(0, 3).map((tech) => {
                const TechIcon = Icons[tech.icon as keyof typeof Icons] as ElementType;

                return (
                  <span
                    key={tech.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/40 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-600 shadow-[0_0_12px_rgba(34,211,238,0.25)]"
                  >
                    {TechIcon && <TechIcon className="h-3 w-3 flex-shrink-0" />}
                    <span>{tech.label}</span>
                  </span>
                );
              })}
            </div>

            <div className="mt-auto pt-4">
              <div className="flex flex-col gap-2 text-xs text-[color:var(--muted-foreground)]">
                <span className="inline-flex w-fit max-w-full items-center gap-1 rounded-full bg-[color:var(--muted)] px-2 py-1">
                  <Clock className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{course.duration}</span>
                </span>

                <span className="inline-flex w-fit max-w-full items-center gap-1 rounded-full bg-[color:var(--muted)] px-2 py-1">
                  <GraduationCap className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{course.level}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
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

            <p className="mt-2 text-2xs leading-relaxed text-[color:var(--muted-foreground)]">
              {course.description || course.tagline}
            </p>

            <div className="mt-3 space-y-2">
              {course.highlights?.slice(0, 2).map((highlight, idx) => (
                <p
                  key={idx}
                  className="text-xm text-[color:var(--brand-navy)]"
                >
                  ✓ {highlight}
                </p>
              ))}
            </div>

            {/* Enrollment Buttons */}
            <div className="mt-auto pt-4">
              {course.externalLink ? (
                <a
                  href={course.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full rounded-lg bg-[image:var(--gradient-brand)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] active:scale-95"
                  onClick={(e) => e.stopPropagation()}
                >
                  Enroll Now
                </a>
              ) : (
                <button
                  onClick={(e) => { e.stopPropagation(); setEnrollmentType(context); }}
                  className="w-full rounded-lg bg-[image:var(--gradient-brand)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] active:scale-95"
                >
                  Enroll Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {enrollmentType && (
        <EnrollmentModal
          course={course}
          enrollmentType={enrollmentType}
          onClose={() => setEnrollmentType(null)}
        />
      )}
    </div>
  );
}