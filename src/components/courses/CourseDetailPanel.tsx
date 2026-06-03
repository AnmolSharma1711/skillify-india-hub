/**
 * CourseDetailPanel — slide-in panel anchored to viewport right (or left).
 *
 * Light theme with a navy header band, white scrollable body.
 * Animates in/out via Tailwind transitions (translate-x + opacity).
 * No animation library — keeps bundle small.
 *
 * Closing:
 *   - desktop: parent CourseCard sets open=false on mouseleave grace period
 *   - mobile/keyboard: backdrop click, close button, Escape key
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
  onPanelMouseEnter,
  onPanelMouseLeave,
}: {
  course: Course;
  open: boolean;
  onClose: () => void;
  side?: "left" | "right";
  onPanelMouseEnter?: () => void;
  onPanelMouseLeave?: () => void;
}) {
  /* Close on Escape */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <>
      {/* Mobile tap-away backdrop */}
      <button
        type="button"
        aria-label="Close details"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-[color:var(--brand-navy)]/30 backdrop-blur-sm transition-opacity md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-label={`${course.title} details`}
        aria-hidden={!open}
        onMouseEnter={onPanelMouseEnter}
        onMouseLeave={onPanelMouseLeave}
        className={`fixed top-0 z-50 flex h-dvh w-full max-w-[440px] flex-col bg-white shadow-2xl transition-all duration-300 ease-out ${
          side === "right"
            ? "right-0 border-l border-[color:var(--border)]"
            : "left-0 border-r border-[color:var(--border)]"
        } ${
          open
            ? "translate-x-0 opacity-100"
            : `pointer-events-none opacity-0 ${side === "right" ? "translate-x-8" : "-translate-x-8"}`
        }`}
      >
        {/* ---- Dark navy header ---- */}
        <div
          className="relative overflow-hidden p-6"
          style={{ background: "var(--brand-navy)" }}
        >
          {/* Subtle dot texture in header */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-md bg-white/15 text-white transition-colors hover:bg-white/25"
          >
            <X className="h-4 w-4" />
          </button>

          <p className="relative text-[11px] font-semibold uppercase tracking-widest text-white/60">
            IIITD × MEIT Programme
          </p>
          <h3 className="relative mt-2 font-display text-2xl font-bold text-white">
            {course.title}
          </h3>
          <p className="relative mt-1 text-sm text-white/70">{course.tagline}</p>

          <div className="relative mt-4 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-white/80">
              <Clock className="h-3 w-3" /> {course.duration}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-white/80">
              <GraduationCap className="h-3 w-3" /> {course.level}
            </span>
          </div>

          {/* Saffron accent bar at bottom of header */}
          <div
            aria-hidden
            className="absolute bottom-0 left-0 h-0.5 w-full"
            style={{ background: "var(--brand-saffron)" }}
          />
        </div>

        {/* ---- Scrollable light body ---- */}
        <div className="flex-1 space-y-6 overflow-y-auto p-6">
          {/* Highlights */}
          <section>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-[color:var(--brand-navy)]">
              What you'll get
            </h4>
            <ul className="space-y-2 text-sm">
              {course.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-teal)]" />
                  <span className="text-[color:var(--foreground)]">{h}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Syllabus */}
          <section>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-[color:var(--brand-navy)]">
              Syllabus
            </h4>
            <ol className="space-y-2 text-sm">
              {course.syllabus.map((s, i) => (
                <li
                  key={s}
                  className="flex gap-3 rounded-lg border border-[color:var(--border)] bg-[color:var(--muted)] px-3 py-2"
                >
                  <span className="font-display text-xs font-bold text-[color:var(--brand-teal)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[color:var(--foreground)]">{s}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Enrollment form */}
          <section>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-[color:var(--brand-navy)]">
              Enroll Now — It's Free
            </h4>
            {/* Unmount form on close so state resets between opens */}
            {open ? <EnrollmentForm course={course} /> : null}
          </section>
        </div>
      </aside>
    </>
  );
}
