import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Hero } from "@/components/home/Hero";
import { ProjectOverview } from "@/components/home/ProjectOverview";
import { CoursesShowcase } from "@/components/home/CoursesShowcase";
import { ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Skillify IIITD &times; MEIT — Free Tech Courses</title>
        <meta
          name="description"
          content="MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies by IIIT Delhi, powered by MEIT."
        />
      </Helmet>

      <Hero />
      <ProjectOverview />
      <CoursesShowcase />

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-[color:var(--brand-navy)] sm:text-4xl">
            Ready to upskill? <span className="text-gradient-brand">Get started today</span>
          </h2>
          <p className="mt-4 text-[color:var(--muted-foreground)] max-w-2xl mx-auto">
            Explore our industry-ready courses in Python Programming, Machine Learning, and Generative AI.
          </p>
          <Link
            to="/courses"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 text-sm font-semibold text-white shadow-[var(--shadow-navy)] transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)] focus:ring-offset-2"
          >
            Explore Courses
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
