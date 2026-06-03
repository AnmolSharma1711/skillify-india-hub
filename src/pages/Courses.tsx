import { Helmet } from "react-helmet-async";
import { CoursesGrid } from "@/components/courses/CoursesGrid";
import { COURSES } from "@/config/courses";

export default function Courses() {
  return (
    <>
      <Helmet>
        <title>Courses — Skillify IIITD &times; MEIT</title>
        <meta
          name="description"
          content="Browse all free programmes — Python, Machine Learning and Generative AI — by IIIT Delhi, powered by MEIT."
        />
      </Helmet>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-teal)]">
            Our Programmes
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-[color:var(--brand-navy)] sm:text-5xl">
            Three tracks. One{" "}
            <span className="text-gradient-brand">future-ready</span> you.
          </h1>
          <p className="mt-4 text-[color:var(--muted-foreground)]">
            Hover (or tap on mobile) any course card to see the full syllabus and enroll instantly.
          </p>
        </header>

        <CoursesGrid courses={COURSES} className="mt-14 grid gap-6 md:grid-cols-3" />
      </section>
    </>
  );
}
