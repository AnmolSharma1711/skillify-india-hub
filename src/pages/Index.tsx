import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Hero } from "@/components/home/Hero";
import { MissionSection } from "@/components/home/MissionSection";
import { CoursesGrid } from "@/components/courses/CoursesGrid";
import { COURSES } from "@/config/courses";
import { ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Skillify IIITD &times; MEIT — Free Tech Courses</title>
        <meta
          name="description"
          content="Free, mentor-led Python, Machine Learning and Generative AI courses by IIIT Delhi, powered by MEIT."
        />
      </Helmet>

      <Hero />
      <MissionSection />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-teal)]">
              Programmes
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-[color:var(--brand-navy)] sm:text-4xl">
              Choose your <span className="text-gradient-brand">track</span>
            </h2>
          </div>
          <Link
            to="/courses"
            className="hidden items-center gap-1 text-sm font-medium text-[color:var(--brand-teal)] transition-colors hover:text-[color:var(--brand-navy)] sm:inline-flex"
          >
            All courses <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <CoursesGrid courses={COURSES} className="grid gap-5 md:grid-cols-3" />
      </section>
    </>
  );
}
