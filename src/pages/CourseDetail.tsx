import { Helmet } from "react-helmet-async";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Users, Briefcase, DollarSign, Building2 } from "lucide-react";
import { COURSES } from "@/config/courses";
import { Button } from "@/components/ui/button";
import iiitdLogo from "@/assets/iiitd_logo-removebg-preview.svg";
import meitLogo from "@/assets/meit_logo-removebg-preview.svg";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = COURSES.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 text-center">
        <h1 className="font-display text-4xl font-bold text-[color:var(--brand-navy)]">
          Course not found
        </h1>
        <p className="mt-4 text-[color:var(--muted-foreground)]">
          The course you're looking for doesn't exist.
        </p>
        <Link
          to="/courses"
          className="mt-6 inline-flex items-center gap-2 text-[color:var(--brand-teal)] hover:text-[color:var(--brand-navy)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{course.title} — Skillify IIITD &times; MEIT</title>
        <meta name="description" content={course.description} />
      </Helmet>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <button
          onClick={() => navigate("/courses")}
          className="inline-flex items-center gap-2 text-[color:var(--brand-teal)] hover:text-[color:var(--brand-navy)] mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </button>

        <div className="mb-12">
          <div className="inline-block rounded-full bg-[color:var(--brand-teal)]/10 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[color:var(--brand-teal)]">{course.category}</span>
          </div>
          <h1 className="font-display text-4xl font-bold text-[color:var(--brand-navy)] sm:text-5xl">
            {course.title}
          </h1>
          <p className="mt-6 text-lg text-[color:var(--muted-foreground)]">{course.description}</p>
        </div>

        <div className="mb-16 grid gap-6 sm:grid-cols-2">
          {course.stats?.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[color:var(--brand-navy)]/12 bg-white/50 p-6 backdrop-blur"
            >
              <p className="text-sm font-semibold text-[color:var(--muted-foreground)]">{stat.label}</p>
              <p className="mt-2 font-display text-2xl font-bold text-[color:var(--brand-navy)]">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Registration Section */}
        <div className="rounded-2xl border-2 border-[color:var(--brand-teal)]/20 bg-gradient-to-br from-[color:var(--brand-teal)]/5 to-transparent p-8 mb-16">
          <h2 className="font-display text-2xl font-bold text-[color:var(--brand-navy)] mb-8">
            Registration &amp; Enrollment
          </h2>

          <div className="space-y-8">
            {/* Students */}
            <div className="flex gap-4">
              <Users className="h-6 w-6 text-[color:var(--brand-teal)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[color:var(--brand-navy)] mb-2">Students</h3>
                <p className="text-[color:var(--muted-foreground)]">
                  Course registration charges shall be minimal (almost NIL). Students can enroll directly to gain
                  cutting-edge skills in industry-aligned emerging technologies.
                </p>
              </div>
            </div>

            {/* Resource Persons */}
            <div className="flex gap-4">
              <Briefcase className="h-6 w-6 text-[color:var(--brand-teal)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[color:var(--brand-navy)] mb-2">Resource Persons / Instructors</h3>
                <p className="text-[color:var(--muted-foreground)] mb-3">Honorarium Structure:</p>
                <ul className="space-y-2 text-[color:var(--muted-foreground)]">
                  <li className="flex gap-2">
                    <DollarSign className="h-4 w-4 text-[color:var(--brand-teal)] flex-shrink-0 mt-0.5" />
                    <span>Rs. 5,000 per lecture session (1.5 hours)</span>
                  </li>
                  <li className="flex gap-2">
                    <DollarSign className="h-4 w-4 text-[color:var(--brand-teal)] flex-shrink-0 mt-0.5" />
                    <span>Rs. 3,000 per practical session (2 hours)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Universities */}
            <div className="flex gap-4">
              <Building2 className="h-6 w-6 text-[color:var(--brand-teal)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[color:var(--brand-navy)] mb-2">Universities &amp; Institutions</h3>
                <p className="text-[color:var(--muted-foreground)] mb-3">
                  Universities can enroll to offer courses at their campus for their students. Partners need to provide:
                </p>
                <ul className="space-y-1 text-[color:var(--muted-foreground)] ml-4">
                  <li className="list-disc">Laboratory facilities</li>
                  <li className="list-disc">Logistic support</li>
                </ul>
                <p className="text-[color:var(--muted-foreground)] mt-3">
                  Courses will be delivered by the project team resource persons, ensuring standardized quality education
                  across all partner institutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="h-12 rounded-full bg-[image:var(--gradient-brand)] text-white font-semibold shadow-[var(--shadow-navy)] hover:scale-[1.02] transition-transform">
            Register Now
          </Button>
          <Button
            variant="outline"
            className="h-12 rounded-full border-2 border-[color:var(--brand-navy)]/25 font-semibold hover:border-[color:var(--brand-navy)]/50"
          >
            Download Course Brochure
          </Button>
        </div>
      </div>

      {/* Logos section at the end */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-grid opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.99 0.003 240 / 0.92), oklch(0.99 0.003 240 / 0.88))",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mt-16 border-t border-[color:var(--border)] pt-16">
            <p className="mb-8 text-center text-sm uppercase tracking-widest text-[color:var(--brand-teal)]">
              A partnership between
            </p>
            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">
              <div className="flex h-20 items-center sm:h-24">
                <img src={iiitdLogo} alt="IIIT Delhi" className="h-full w-auto object-contain" />
              </div>
              <span className="font-display text-3xl font-bold text-[color:var(--brand-navy)]">×</span>
              <div className="flex h-16 items-center sm:h-20">
                <img
                  src={meitLogo}
                  alt="Ministry of Electronics and Information Technology"
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
