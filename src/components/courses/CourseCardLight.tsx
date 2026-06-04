import { useState, useRef } from "react";
import { Clock, GraduationCap } from "lucide-react";
import * as Icons from "lucide-react";
import type { Course } from "@/config/courses";
import { CourseDetailOverlay } from "./CourseDetailOverlay";
import { EnrollmentModal } from "./EnrollmentModal";

const ACCENT: Record<Course["accent"], { border: string; bg: string; icon: string }> = {
  cyan: {
    border: "var(--brand-teal)",
    bg: "linear-gradient(135deg, var(--brand-teal), oklch(0.68 0.12 200))",
    icon: "var(--brand-teal)",
  },
  mixed: {
    border: "var(--brand-navy)",
    bg: "var(--gradient-brand)",
    icon: "var(--brand-navy)",
  },
  violet: {
    border: "var(--brand-saffron)",
    bg: "var(--gradient-saffron)",
    icon: "var(--brand-saffron)",
  },
};

export function CourseCardLight({ course }: { course: Course }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const accent = ACCENT[course.accent];

  const handleCardMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setShowOverlay(true);
  };

  const handleCardMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setShowOverlay(false);
    }, 300);
  };

  const handleOverlayMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleOverlayMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setShowOverlay(false);
    }, 300);
  };

  return (
    <>
      <article
        className="group relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-navy)] cursor-pointer"
        onMouseEnter={handleCardMouseEnter}
        onMouseLeave={handleCardMouseLeave}
        onClick={() => {
          if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
          setShowOverlay(true);
        }}
      >
        {/* Top colour accent bar */}
        <div
          className="absolute left-0 top-0 h-1 w-full rounded-t-2xl"
          style={{ background: accent.bg }}
          aria-hidden
        />

        {/* Course icon */}
        <div
          className="grid h-11 w-11 place-items-center rounded-lg text-white mb-3"
          style={{ background: accent.bg }}
        >
          {(() => {
            const IconComponent = Icons[course.icon as keyof typeof Icons] as any;
            return IconComponent ? <IconComponent className="h-5 w-5" /> : null;
          })()}
        </div>

        <h3 className="font-display text-xl font-bold text-[color:var(--brand-navy)]">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-[color:var(--muted-foreground)] line-clamp-2">
          {course.tagline}
        </p>

        {/* Tech badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {course.techs.slice(0, 2).map((tech) => {
            const IconComponent = Icons[tech.icon as keyof typeof Icons] as any;
            return (
              <span
                key={tech.label}
                className="inline-flex items-center gap-1 rounded-full border border-[color:var(--brand-teal)]/30 bg-[color:var(--brand-teal)]/8 px-2 py-1 text-xs font-medium text-[color:var(--brand-teal)]"
              >
                {IconComponent && <IconComponent className="h-3 w-3" />}
                {tech.label}
              </span>
            );
          })}
        </div>

        <div className="mt-4 flex gap-2 text-xs text-[color:var(--muted-foreground)]">
          <span className="inline-flex items-center gap-1 rounded-full border border-[color:var(--border)] bg-[color:var(--muted)] px-2 py-1">
            <Clock className="h-3 w-3" /> {course.duration}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-[color:var(--border)] bg-[color:var(--muted)] px-2 py-1">
            <GraduationCap className="h-3 w-3" /> {course.level}
          </span>
        </div>

        <div
          className="mt-6 inline-flex items-center gap-1 text-xs font-medium transition-colors"
          style={{ color: accent.icon }}
        >
          Hover or click to view details
        </div>
      </article>

      {/* Full-page overlay with course details */}
      <CourseDetailOverlay
        course={course}
        open={showOverlay}
        onClose={() => setShowOverlay(false)}
        onMouseEnter={handleOverlayMouseEnter}
        onMouseLeave={handleOverlayMouseLeave}
        onEnrollClick={() => {
          setShowEnrollModal(true);
          setShowOverlay(false);
        }}
      />

      {/* Enrollment modal */}
      {showEnrollModal && (
        <EnrollmentModal
          course={course}
          onClose={() => setShowEnrollModal(false)}
        />
      )}
    </>
  );
}


export { CourseCardLight }