import { Helmet } from "react-helmet-async";
import { COURSES } from "@/config/courses";
import { CoursesGrid } from "@/components/courses/CoursesGrid";
import { PreviousCourses } from "@/components/courses/PreviousCourses";
import { UpcomingCourses } from "@/components/courses/UpcomingCourses";
import { StudentFeedbackSection } from "@/components/courses/StudentFeedbackSection";

export default function Courses() {
  return (
    <>
      <Helmet>
        <title>Courses — MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies IIITD &times; MeitY</title>
        <meta
          name="description"
          content="Browse all industry-aligned courses in Emerging Technologies — by IIIT Delhi, powered by MeitY."
        />
      </Helmet>

      <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-teal)]">
            Courses Offered
          </p>

          <h1 className="mt-3 font-display text-4xl font-bold text-[color:var(--brand-navy)] sm:text-5xl">
            Industry-Ready <span className="text-gradient-brand">Courses</span>
          </h1>

          <p className="mt-4 text-[color:var(--muted-foreground)]">
            Free, hands-on training in emerging technologies — taught by IIIT Delhi faculty and industry experts.
          </p>
        </div>

        {/* Ongoing Courses */}
        <section>
          <h2 className="mb-6 font-display text-3xl font-bold text-[color:var(--brand-navy)]">
            Ongoing Courses
          </h2>

          <CoursesGrid courses={COURSES} />
        </section>

        {/* Previous Courses */}
        <PreviousCourses />

        {/* Upcoming Courses */}
        <UpcomingCourses />

        {/* Student Feedback */}
        <StudentFeedbackSection />
      </div>

    </>
  );
}