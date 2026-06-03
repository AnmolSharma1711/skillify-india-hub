/**
 * Course card. On desktop, hovering opens a slide-in detail panel anchored
 * to one edge of the viewport. On mobile, tapping the card toggles it.
 *
 * Open/close state is OWNED BY the parent CoursesGrid so only one panel is
 * visible at a time and a delayed close timer is shared across cards.
 */
import { ArrowUpRight, Clock, GraduationCap } from "lucide-react";
import * as Icons from "lucide-react";

import type { Course } from "@/config/courses";
import { CourseDetailPanel } from "./CourseDetailPanel";

/** Accent colours per course type (navy/teal/saffron). */
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

export function CourseCard({
  course,
  side = "right",
  open,
  onOpen,
  onScheduleClose,
  onCancelClose,
  onCloseNow,
}: {
  course: Course;
  side?: "left" | "right";
  open: boolean;
  onOpen: () => void;
  onScheduleClose: () => void;
  onCancelClose: () => void;
  onCloseNow: () => void;
}) {
  const accent = ACCENT[course.accent];

  return (
    <>
      <article
        onMouseEnter={onOpen}
        onMouseLeave={onScheduleClose}
        onClick={() => (open ? onCloseNow() : onOpen())}
        onFocus={onOpen}
        onBlur={onScheduleClose}
        tabIndex={0}
        role="button"
        aria-expanded={open}
        aria-label={`${course.title} — view details and enroll`}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-navy)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)]"
        style={open ? { borderColor: accent.border, boxShadow: "var(--shadow-navy)" } : {}}
      >
        {/* Top colour accent bar */}
        <div
          className="absolute left-0 top-0 h-1 w-full rounded-t-2xl transition-all duration-300"
          style={{ background: accent.bg }}
          aria-hidden
        />

        <div className="flex items-start justify-between">
          {/* Course icon */}
          <div
            className="grid h-11 w-11 place-items-center rounded-lg text-white"
            style={{ background: accent.bg }}
          >
            {(() => {
              const IconComponent = Icons[course.icon as keyof typeof Icons] as any;
              return IconComponent ? <IconComponent className="h-5 w-5" /> : null;
            })()}
          </div>
          <ArrowUpRight
            className="h-4 w-4 text-[color:var(--muted-foreground)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            style={{ color: open ? accent.icon : undefined }}
          />
        </div>

        <div className="mt-1 flex items-start justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--brand-teal)]">
            Course
          </p>
        </div>

        <h3 className="mt-3 font-display text-xl font-bold leading-tight text-[color:var(--brand-navy)]">
          {course.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
          {course.tagline}
        </p>

        {/* Tech stack badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {course.techs.map((tech) => {
            const IconComponent = Icons[tech.icon as keyof typeof Icons] as any;
            return (
              <span
                key={tech.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--brand-teal)]/30 bg-[color:var(--brand-teal)]/8 px-2.5 py-1 text-xs font-medium text-[color:var(--brand-teal)]"
              >
                {IconComponent && <IconComponent className="h-3 w-3" />}
                {tech.label}
              </span>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-[color:var(--muted-foreground)]">
          <span className="inline-flex items-center gap-1 rounded-full border border-[color:var(--border)] bg-[color:var(--muted)] px-2.5 py-1">
            <Clock className="h-3 w-3" /> {course.duration}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-[color:var(--border)] bg-[color:var(--muted)] px-2.5 py-1">
            <GraduationCap className="h-3 w-3" /> {course.level}
          </span>
        </div>

        <div
          className="mt-6 inline-flex items-center gap-1 text-xs font-medium transition-colors"
          style={{ color: accent.icon }}
        >
          Hover or tap to view details &amp; enroll
        </div>
      </article>

      <CourseDetailPanel
        course={course}
        open={open}
        onClose={onCloseNow}
        onPanelMouseEnter={onCancelClose}
        onPanelMouseLeave={onScheduleClose}
        side={side}
      />
    </>
  );
}
