import { Helmet } from "react-helmet-async";
import { COURSES } from "@/config/courses";
import { CoursesGrid } from "@/components/courses/CoursesGrid";
import iiitdLogo from "@/assets/iiitd_logo-removebg-preview.svg";
import meitLogo from "@/assets/meit_logo-removebg-preview.svg";

const PREVIOUS_COURSES = [
  {
    title: "Full Stack Web Development",
    description:
      "Learned modern frontend and backend development with industry-standard technologies.",
  },
  {
    title: "Data Science Foundations",
    description:
      "Built strong foundations in data analysis, visualization and statistics.",
  },
  {
    title: "Cyber Security Essentials",
    description:
      "Explored digital security, ethical hacking concepts and cyber awareness.",
  },
];

const UPCOMING_COURSES = [
  {
    title: "AI & Robotics",
    description:
      "Build intelligent robotic systems using AI, computer vision and automation.",
  },
  {
    title: "Cloud Computing",
    description:
      "Learn cloud infrastructure, deployment pipelines and scalable applications.",
  },
  {
    title: "Blockchain Technology",
    description:
      "Explore decentralized systems, smart contracts and Web3 development.",
  },
];

function PlaceholderCourseCard({
  title,
  description,
  status,
}: {
  title: string;
  description: string;
  status: "Completed" | "Coming Soon";
}) {
  return (
    <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-navy)]">
      <span
        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
          status === "Coming Soon"
            ? "bg-amber-100 text-amber-700"
            : "bg-slate-100 text-slate-700"
        }`}
      >
        {status}
      </span>

      <h3 className="mt-4 font-display text-xl font-bold text-[color:var(--brand-navy)]">
        {title}
      </h3>

      <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">
        {description}
      </p>
    </div>
  );
}

export default function Courses() {
  return (
    <>
      <Helmet>
        <title>Courses — Skillify IIITD &times; MEIT</title>
        <meta
          name="description"
          content="Browse all industry-aligned courses in Emerging Technologies — by IIIT Delhi, powered by MEIT."
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
        <section className="mt-20">
          <h2 className="mb-3 font-display text-3xl font-bold text-[color:var(--brand-navy)]">
            Previously Offered Courses
          </h2>

          <p className="mb-8 text-[color:var(--muted-foreground)]">
            Successful programs conducted in previous cohorts.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PREVIOUS_COURSES.map((course) => (
              <PlaceholderCourseCard
                key={course.title}
                title={course.title}
                description={course.description}
                status="Completed"
              />
            ))}
          </div>
        </section>

        {/* Upcoming Courses */}
        <section className="mt-20">
          <h2 className="mb-3 font-display text-3xl font-bold text-[color:var(--brand-navy)]">
            Coming Soon
          </h2>

          <p className="mb-8 text-[color:var(--muted-foreground)]">
            New programs currently being prepared by IIIT Delhi and MeitY.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {UPCOMING_COURSES.map((course) => (
              <PlaceholderCourseCard
                key={course.title}
                title={course.title}
                description={course.description}
                status="Coming Soon"
              />
            ))}
          </div>
        </section>
      </div>

    </>
  );
}