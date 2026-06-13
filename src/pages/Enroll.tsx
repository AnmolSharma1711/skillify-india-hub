import { Helmet } from "react-helmet-async";
import { COURSES } from "@/config/courses";
import { CourseCardLight } from "@/components/courses/CourseCardLight";

export default function Enroll() {
  return (
    <>
      <Helmet>
        <title>Enroll Now - MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies</title>
      </Helmet>

      <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-teal)]">
            Enrollment Portal
          </p>

          <h1 className="mt-3 font-display text-4xl font-bold text-[color:var(--brand-navy)] sm:text-5xl">
            Enroll in <span className="text-gradient-brand">MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies</span>
          </h1>

          <p className="mt-4 text-[color:var(--muted-foreground)]">
            Choose your course and select how you would like to participate.
          </p>

          <p className="mt-4 text-sm font-medium text-[color:var(--brand-teal)]">
            Click on a course card to view details and enroll
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <CourseCardLight key={course.id} course={course} context="individual" />
          ))}
        </div>
      </div>
    </>
  );
}