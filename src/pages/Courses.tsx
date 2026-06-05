import { Helmet } from "react-helmet-async";
import { COURSES } from "@/config/courses";
import { CoursesGrid } from "@/components/courses/CoursesGrid";

export default function Courses() {
  return (
    <>
      <Helmet>
        <title>Courses — Skillify IIITD &times; MEIT</title>
        <meta
          name="description"
          content="Browse all industry-aligned courses in Emerging Technologies — Python, Machine Learning and Generative AI — by IIIT Delhi, powered by MEIT."
        />
      </Helmet>

      <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-teal)]">
            Courses Offered
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-[color:var(--brand-navy)] sm:text-5xl">
            Three industry-ready <span className="text-gradient-brand">courses</span>
          </h1>
          <p className="mt-4 text-[color:var(--muted-foreground)]">
            Free, hands-on training in emerging technologies — taught by IIITD faculty and industry experts.
          </p>
        </div>

        <CoursesGrid courses={COURSES} />
      </div>
    </>
  );
}
