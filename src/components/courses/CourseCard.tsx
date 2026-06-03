/**
 * Course card. On desktop, hovering opens a slide-in detail panel (anchored
 * to the top-right of the viewport). On mobile, tapping the card toggles it.
 *
 * The panel + card share an open state managed here. We close on mouse leave
 * for the card itself; the panel handles its own dismissal for Escape /
 * backdrop tap.
 */
import { useState } from "react";
import { ArrowUpRight, Clock, GraduationCap } from "lucide-react";

import type { Course } from "@/config/courses";
import { CourseDetailPanel } from "./CourseDetailPanel";

export function CourseCard({
  course,
  side = "right",
}: {
  course: Course;
  /**
   * Which edge the slide-in panel anchors to. Choose the edge OPPOSITE the
   * card's screen position so the panel never overlaps the card and causes
   * a hover open/close loop.
   */
  side?: "left" | "right";
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        // Desktop: hover opens. Mobile users get the click handler below.
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        tabIndex={0}
        role="button"
        aria-expanded={open}
        aria-label={`${course.title} — view details and enroll`}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-cyan)]/60 hover:shadow-[var(--shadow-glow)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-cyan)]/60"
      >
        {/* Gradient accent that intensifies on hover. */}
        <div
          className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-60"
          style={{
            backgroundImage:
              course.accent === "violet"
                ? "radial-gradient(circle, var(--brand-violet), transparent 70%)"
                : course.accent === "mixed"
                ? "var(--gradient-brand)"
                : "radial-gradient(circle, var(--brand-cyan), transparent 70%)",
          }}
          aria-hidden
        />

        <div className="flex items-start justify-between">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
            Course
          </p>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--brand-cyan)]" />
        </div>

        <h3 className="mt-3 font-display text-xl font-bold leading-tight">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{course.tagline}</p>

        <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1 rounded-full border border-border/60 px-2.5 py-1">
            <Clock className="h-3 w-3" /> {course.duration}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-border/60 px-2.5 py-1">
            <GraduationCap className="h-3 w-3" /> {course.level}
          </span>
        </div>

        <div className="mt-6 inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-[color:var(--brand-cyan)]">
          Hover or tap to view details
        </div>
      </article>

      <CourseDetailPanel
        course={course}
        open={open}
        onClose={() => setOpen(false)}
        side={side}
      />
    </>
  );
}