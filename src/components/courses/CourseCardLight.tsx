import { useState } from "react";
import type { KeyboardEvent } from "react";
import { Clock, GraduationCap, Calendar, MonitorSmartphone } from "lucide-react";
import * as Icons from "lucide-react";
import type { Course } from "@/config/courses";
import { CourseDetailOverlay } from "@/components/courses/CourseDetailOverlay";
import { EnrollmentModal } from "@/components/courses/EnrollmentModal";

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

export function CourseCardLight({ 
  course,
  context = "individual",
}: { 
  course: Course;
  context?: "individual" | "institute";
}) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [enrollmentType, setEnrollmentType] = useState<"individual" | "institute" | null>(null);
  const accent = ACCENT[course.accent];

  const openCourseDetails = () => {
    setShowOverlay(true);
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openCourseDetails();
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
      <article
        className="group relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-navy)] cursor-pointer flex flex-col h-full"
        style={{
          animation: "fadeInScale 0.5s ease-out",
        }}
        onClick={openCourseDetails}
        onKeyDown={handleCardKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${course.title}`}
      >
        {/* Top colour accent bar */}
        <div
          className="absolute left-0 top-0 h-1 w-full rounded-t-2xl"
          style={{ background: accent.bg }}
          aria-hidden
        />

        {/* Header with icon and optional status badge */}
        <div className="mb-3 flex items-start justify-between">
          <div
            className="grid h-11 w-11 place-items-center rounded-lg text-white"
            style={{ background: accent.bg }}
          >
            {(() => {
              const IconComponent = Icons[course.icon as keyof typeof Icons] as any;
              return IconComponent ? <IconComponent className="h-5 w-5" /> : null;
            })()}
          </div>
          {course.status && course.status !== "active" && (
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                course.status === "upcoming"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              {course.status === "upcoming" ? "Coming Soon" : "Completed"}
            </span>
          )}
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
                className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--brand-teal)]/30 bg-[color:var(--brand-teal)]/8 px-2 py-1 text-xs font-medium text-[color:var(--brand-teal)]"
              >
                {IconComponent && <IconComponent className="h-3 w-3 flex-shrink-0" />}
                <span>{tech.label}</span>
              </span>
            );
          })}
        </div>

        <div className="mt-4 flex flex-col gap-2 text-xs text-[color:var(--muted-foreground)]">
          <span className="inline-flex w-fit max-w-full items-center gap-1 rounded-full border border-[color:var(--border)] bg-[color:var(--muted)] px-2 py-1">
            <Clock className="h-3 w-3 flex-shrink-0" /> <span className="truncate">{course.duration}</span>
          </span>
          <span className="inline-flex w-fit max-w-full items-center gap-1 rounded-full border border-[color:var(--border)] bg-[color:var(--muted)] px-2 py-1">
            <GraduationCap className="h-3 w-3 flex-shrink-0" /> <span className="truncate">{course.level}</span>
          </span>
          {course.mode && (
            <span className="inline-flex w-fit max-w-full items-center gap-1 rounded-full border border-[color:var(--border)] bg-[color:var(--muted)] px-2 py-1">
              <MonitorSmartphone className="h-3 w-3 flex-shrink-0" /> <span className="truncate">{course.mode}</span>
            </span>
          )}
          {course.tentativeDates && (
            <span className="inline-flex w-fit max-w-full items-center gap-1 rounded-full border border-[color:var(--border)] bg-[color:var(--muted)] px-2 py-1">
              <Calendar className="h-3 w-3 flex-shrink-0" /> <span className="truncate">{course.tentativeDates}</span>
            </span>
          )}
        </div>

        <div
          className="mt-auto pt-6 inline-flex items-center gap-1 text-xs font-medium transition-colors"
          style={{ color: accent.icon }}
        >
          Click to view details
        </div>
      </article>

      {/* Full-page overlay with course details */}
      <CourseDetailOverlay
        course={course}
        open={showOverlay}
        context={context}
        onClose={() => setShowOverlay(false)}
        onEnrollClick={(type) => {
          setEnrollmentType(type);
          setShowOverlay(false);
        }}
      />

      {/* Enrollment modal */}
      {enrollmentType && (
        <EnrollmentModal
          course={course}
          enrollmentType={enrollmentType}
          onClose={() => setEnrollmentType(null)}
        />
      )}
    </>
  );
}
