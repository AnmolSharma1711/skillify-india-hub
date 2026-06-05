import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Clock, GraduationCap, ArrowRight, CircleCheck as CheckCircle } from "lucide-react";
import * as Icons from "lucide-react";
import { COURSES } from "@/config/courses";
import type { Course } from "@/config/courses";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore – JSX component without type declarations
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";
import { CourseDetailOverlay } from "@/components/courses/CourseDetailOverlay";
import { EnrollmentModal } from "@/components/courses/EnrollmentModal";

const ACCENT_STYLES: Record<Course["accent"], {
  bg: string;
  badge: string;
  badgeText: string;
  pill: string;
  pillText: string;
  cardBg: string;
  iconBg: string;
}> = {
  cyan: {
    bg: "linear-gradient(135deg, var(--brand-teal), oklch(0.68 0.12 200))",
    badge: "rgba(0,168,168,0.12)",
    badgeText: "var(--brand-teal)",
    pill: "var(--brand-teal)",
    pillText: "#fff",
    cardBg: "linear-gradient(135deg, #f0fdfc 0%, #e6fafa 100%)",
    iconBg: "linear-gradient(135deg, var(--brand-teal), oklch(0.68 0.12 200))",
  },
  mixed: {
    bg: "var(--gradient-brand)",
    badge: "rgba(27,58,107,0.10)",
    badgeText: "var(--brand-navy)",
    pill: "var(--brand-navy)",
    pillText: "#fff",
    cardBg: "linear-gradient(135deg, #f0f4ff 0%, #e8eef8 100%)",
    iconBg: "var(--gradient-brand)",
  },
  violet: {
    bg: "var(--gradient-saffron)",
    badge: "rgba(231,111,28,0.12)",
    badgeText: "var(--brand-saffron)",
    pill: "var(--brand-saffron)",
    pillText: "#fff",
    cardBg: "linear-gradient(135deg, #fff8f0 0%, #fef3e8 100%)",
    iconBg: "var(--gradient-saffron)",
  },
};

function CourseCard({ course, onView, onEnroll }: {
  course: Course;
  onView: () => void;
  onEnroll: () => void;
}) {
  const a = ACCENT_STYLES[course.accent];
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[course.icon];

  return (
    <div
      className="flex h-full min-h-[22rem] flex-col overflow-hidden rounded-[32px]"
      style={{ background: a.cardBg }}
    >
      <div className="flex flex-col gap-6 p-8 sm:flex-row sm:items-start">
        {/* Icon */}
        <div
          className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-2xl text-white shadow-lg"
          style={{ background: a.iconBg }}
        >
          {IconComponent && <IconComponent className="h-8 w-8" />}
        </div>

        {/* Header text */}
        <div className="flex-1">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
            style={{ background: a.badge, color: a.badgeText }}
          >
            {course.category}
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-[color:var(--brand-navy)] sm:text-3xl">
            {course.title}
          </h2>
          <p className="mt-1 text-base text-[color:var(--muted-foreground)]">{course.tagline}</p>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-6 px-8 pb-8">
        {/* Meta pills */}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-white/70 px-3 py-1 text-xs font-medium text-[color:var(--muted-foreground)]">
            <Clock className="h-3.5 w-3.5" /> {course.duration}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-white/70 px-3 py-1 text-xs font-medium text-[color:var(--muted-foreground)]">
            <GraduationCap className="h-3.5 w-3.5" /> {course.level}
          </span>
          {course.techs.slice(0, 3).map((tech) => {
            const TechIcon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[tech.icon];
            return (
              <span
                key={tech.label}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                style={{ background: a.badge, color: a.badgeText }}
              >
                {TechIcon && <TechIcon className="h-3 w-3" />}
                {tech.label}
              </span>
            );
          })}
        </div>

        {/* Highlights */}
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {course.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-[color:var(--muted-foreground)]">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: a.badgeText }} />
              {h}
            </li>
          ))}
        </ul>

        {/* Syllabus preview */}
        <div className="rounded-xl border border-[color:var(--border)] bg-white/60 p-4 backdrop-blur">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--muted-foreground)]">
            What you'll learn
          </p>
          <ul className="grid gap-1 sm:grid-cols-2">
            {course.syllabus.slice(0, 4).map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-[color:var(--muted-foreground)]">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: a.badgeText }} />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="mt-auto flex flex-wrap gap-3">
          <button
            onClick={onEnroll}
            className="inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02]"
            style={{ background: a.bg }}
          >
            Enroll Free
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={onView}
            className="inline-flex h-11 items-center gap-2 rounded-full border-2 bg-white/70 px-6 text-sm font-semibold backdrop-blur transition-all hover:bg-white"
            style={{ borderColor: a.badgeText, color: a.badgeText }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Courses() {
  const [overlayId, setOverlayId] = useState<Course["id"] | null>(null);
  const [enrollId, setEnrollId] = useState<Course["id"] | null>(null);

  const overlayClose = () => setOverlayId(null);
  const enrollClose = () => setEnrollId(null);

  return (
    <>
      <Helmet>
        <title>Courses — Skillify IIITD &times; MEIT</title>
        <meta
          name="description"
          content="Browse all industry-aligned courses in Emerging Technologies — Python, Machine Learning and Generative AI — by IIIT Delhi, powered by MEIT."
        />
      </Helmet>

      {/* Page header — outside the scroller so it stays readable */}
      <div className="mx-auto max-w-3xl px-4 pt-20 pb-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-teal)]">
          Courses Offered
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-[color:var(--brand-navy)] sm:text-5xl">
          Three industry-ready <span className="text-gradient-brand">courses</span>
        </h1>
        <p className="mt-4 text-[color:var(--muted-foreground)]">
          Scroll through each course — learn what it covers and enroll for free.
        </p>
      </div>

      {/* ScrollStack — fixed height viewport scroller */}
      <div style={{ height: "100vh" }} className="w-full overflow-hidden">
        <ScrollStack
          className="h-full"
          itemDistance={120}
          itemScale={0.04}
          itemStackDistance={28}
          stackPosition="18%"
          scaleEndPosition="8%"
          baseScale={0.88}
        >
          {COURSES.map((course) => (
            <ScrollStackItem key={course.id}>
              <CourseCard
                course={course}
                onView={() => setOverlayId(course.id)}
                onEnroll={() => setEnrollId(course.id)}
              />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      {/* Overlays */}
      {COURSES.map((course) => (
        <CourseDetailOverlay
          key={course.id}
          course={course}
          open={overlayId === course.id}
          onClose={overlayClose}
          onEnrollClick={() => {
            setOverlayId(null);
            setEnrollId(course.id);
          }}
        />
      ))}

      {enrollId && (
        <EnrollmentModal
          course={COURSES.find((c) => c.id === enrollId)!}
          onClose={enrollClose}
        />
      )}
    </>
  );
}
