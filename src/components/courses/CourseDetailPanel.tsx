/**
 * Slide-in panel anchored to the top-right of the viewport.
 *
 * Renders the full course details + an inline enrollment form. The panel
 * itself is a fixed-position card that animates in via Tailwind transitions
 * (translate-x + opacity) — no animation library.
 *
 * Closing:
 *   - desktop: parent CourseCard sets `open=false` on mouseleave
 *   - mobile/keyboard: backdrop click, close button, Escape
 */
import { useEffect } from "react";
import { X, Clock, GraduationCap, CheckCircle2 } from "lucide-react";

import type { Course } from "@/config/courses";
import { EnrollmentForm } from "./EnrollmentForm";

export function CourseDetailPanel({
  course,
  open,
  onClose,
  side = "right",
}: {
  course: Course;
  open: boolean;
  onClose: () => void;
  /** Which edge of the viewport the panel slides in from. */
  side?: "left" | "right";
}) {
  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <>
      {/* Mobile-only tap-away backdrop. On desktop hover handles closing. */}
      <button
        type="button"
        aria-label="Close details"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-background/60 backdrop-blur-sm transition-opacity md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-label={`${course.title} details`}
        aria-hidden={!open}
        className={`fixed top-0 z-50 flex h-dvh w-full max-w-[440px] flex-col bg-card/95 shadow-[var(--shadow-glow-violet)] backdrop-blur-xl transition-all duration-300 ease-out ${
          side === "right"
            ? "right-0 border-l border-border/80"
            : "left-0 border-r border-border/80"
        } ${
          open
            ? "translate-x-0 opacity-100"
            : `pointer-events-none opacity-0 ${
                side === "right" ? "translate-x-6" : "-translate-x-6"
              }`
        }`}
      >
        {/* Header */}
        <div className="relative overflow-hidden border-b border-border/60 p-6">
          <div
            className="absolute inset-0 -z-10 opacity-50"
            style={{ backgroundImage: "var(--gradient-brand)" }}
            aria-hidden
          />
          <div className="absolute inset-0 -z-10 bg-card/70" aria-hidden />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-md border border-border/60 bg-background/60 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
            IIITD × MEIT
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold">{course.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{course.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-background/50 px-2.5 py-1">
              <Clock className="h-3 w-3" /> {course.duration}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-background/50 px-2.5 py-1">
              <GraduationCap className="h-3 w-3" /> {course.level}
            </span>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 space-y-6 overflow-y-auto p-6">
          <section>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              What you'll get
            </h4>
            <ul className="space-y-1.5 text-sm">
              {course.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-cyan)]" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Syllabus
            </h4>
            <ol className="space-y-1.5 text-sm text-muted-foreground">
              {course.syllabus.map((s, i) => (
                <li key={s} className="flex gap-3">
                  <span className="font-display text-xs text-[color:var(--brand-cyan)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Enroll now
            </h4>
            {/* Only mount the form when panel is open to reset state on close. */}
            {open ? <EnrollmentForm course={course} /> : null}
          </section>
        </div>
      </aside>
    </>
  );
}