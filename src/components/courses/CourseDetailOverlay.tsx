import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Clock, GraduationCap } from "lucide-react";
import * as Icons from "lucide-react";
import type { Course } from "@/config/courses";
import { EnrollmentType } from "@/lib/api";

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

export function CourseDetailOverlay({
  course,
  open,
  onClose,
  onEnrollClick,
}: {
  course: Course;
  open: boolean;
  onClose: () => void;
  onEnrollClick: (type: EnrollmentType) => void;
}) {
  const accent = ACCENT[course.accent];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[998] bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        style={{
          animation: "backdropFadeIn 0.4s ease-out",
        }}
        aria-hidden
      />

      {/* Center Overlay Content */}
      <div
        className="fixed inset-0 z-[999] flex items-center justify-center p-4 pointer-events-none"
        style={{
          animation: "contentFadeIn 0.4s ease-out",
        }}
      >
        <div
          className="w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white rounded-3xl shadow-2xl pointer-events-auto"
          style={{
            animation: "slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          {/* Header with close button */}
          <div
            className="sticky top-0 flex items-center justify-between p-6 sm:p-8 border-b border-[color:var(--border)] bg-white rounded-t-3xl z-10"
            style={{ background: accent.bg }}
          >
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-xl text-white" style={{ background: accent.bg }}>
                {(() => {
                  const IconComponent = Icons[course.icon as keyof typeof Icons] as any;
                  return IconComponent ? <IconComponent className="h-6 w-6" /> : null;
                })()}
              </div>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {course.title}
                </h2>
                <p className="mt-1 text-sm text-white/80">{course.tagline}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-white/20 transition-colors flex-shrink-0"
              aria-label="Close"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Duration & Level */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 rounded-lg border border-[color:var(--border)] bg-[color:var(--muted)] px-4 py-3">
                <Clock className="h-5 w-5 text-[color:var(--muted-foreground)]" />
                <div>
                  <p className="text-xs font-semibold text-[color:var(--muted-foreground)]">Duration</p>
                  <p className="text-sm font-semibold text-[color:var(--brand-navy)]">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-[color:var(--border)] bg-[color:var(--muted)] px-4 py-3">
                <GraduationCap className="h-5 w-5 text-[color:var(--muted-foreground)]" />
                <div>
                  <p className="text-xs font-semibold text-[color:var(--muted-foreground)]">Level</p>
                  <p className="text-sm font-semibold text-[color:var(--brand-navy)]">{course.level}</p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="font-display text-lg font-semibold text-[color:var(--brand-navy)] mb-4">
                Course Highlights
              </h3>
              <ul className="space-y-2">
                {course.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full flex-shrink-0"
                      style={{ background: accent.icon }}
                      aria-hidden
                    />
                    <span className="text-sm text-[color:var(--muted-foreground)]">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Syllabus */}
            <div>
              <h3 className="font-display text-lg font-semibold text-[color:var(--brand-navy)] mb-4">
                Syllabus
              </h3>
              <ol className="space-y-2">
                {course.syllabus.map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 font-semibold text-[color:var(--brand-teal)] text-sm flex-shrink-0">
                      {i + 1}.
                    </span>
                    <span className="text-sm text-[color:var(--muted-foreground)]">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="font-display text-lg font-semibold text-[color:var(--brand-navy)] mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {course.techs.map((tech) => {
                  const IconComponent = Icons[tech.icon as keyof typeof Icons] as any;
                  return (
                    <span
                      key={tech.label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--brand-teal)]/30 bg-[color:var(--brand-teal)]/8 px-3 py-1.5 text-sm font-medium text-[color:var(--brand-teal)]"
                    >
                      {IconComponent && <IconComponent className="h-4 w-4" />}
                      {tech.label}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <button
                onClick={() => onEnrollClick("individual")}
                className="flex-1 inline-flex h-12 items-center justify-center rounded-lg bg-[image:var(--gradient-brand)] text-sm font-semibold text-white shadow-[var(--shadow-navy)] transition-transform hover:scale-[1.02]"
              >
                Individual Enrollment
              </button>
              <button
                onClick={() => onEnrollClick("institute")}
                className="flex-1 inline-flex h-12 items-center justify-center rounded-lg border-2 border-[color:var(--brand-teal)] bg-white text-sm font-semibold text-[color:var(--brand-teal)] transition-colors hover:bg-[color:var(--brand-teal)] hover:text-white"
              >
                University Partnership
              </button>
              <button
                onClick={() => onEnrollClick("mentor")}
                className="flex-1 inline-flex h-12 items-center justify-center rounded-lg border-2 border-[color:var(--brand-navy)] bg-white text-sm font-semibold text-[color:var(--brand-navy)] transition-colors hover:bg-[color:var(--brand-navy)] hover:text-white"
              >
                Become a Mentor
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes backdropFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes contentFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>,
    document.body
  );
}
