import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Skillify IIITD &times; MEIT</title>
        <meta
          name="description"
          content="About the IIIT Delhi &times; MEIT skilling initiative — a mission to upskill India's youth in modern tech."
        />
      </Helmet>

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-teal)]">
          About the Project
        </p>

        <h1 className="mt-3 font-display text-4xl font-bold text-[color:var(--brand-navy)] sm:text-5xl">
          Skilling the youth of <span className="text-gradient-brand">India</span>.
        </h1>

        <div className="mt-8 space-y-6 text-[color:var(--muted-foreground)]">
          <p className="text-base leading-relaxed">
            <strong className="text-[color:var(--brand-navy)]">Skillify</strong> is a joint
            initiative between{" "}
            <strong className="text-[color:var(--brand-navy)]">IIIT Delhi</strong> and the{" "}
            <strong className="text-[color:var(--brand-navy)]">
              Ministry of Electronics and Information Technology (MEIT)
            </strong>
            . Our goal is simple: give every Indian student — regardless of background — free,
            world-class training in the technologies shaping the next decade.
          </p>

          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-sm">
            <h2 className="font-display text-2xl font-semibold text-[color:var(--brand-navy)]">
              Why this exists
            </h2>
            <p className="mt-3 leading-relaxed">
              India's digital economy is growing faster than its talent pipeline. We believe the
              answer isn't more theory — it's hands-on, project-based learning, taught by people who
              actually build things. That's exactly what this programme delivers.
            </p>
          </div>

          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-sm">
            <h2 className="font-display text-2xl font-semibold text-[color:var(--brand-navy)]">
              What you get
            </h2>
            <ul className="mt-3 space-y-3">
              {[
                "Mentor-led cohorts taught by IIITD faculty and industry experts.",
                "Real capstone projects that prove your skills to employers.",
                "A recognised certificate co-issued by IIITD and MEIT.",
                "A community of learners, mentors and alumni you can grow with.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                    style={{ background: "var(--brand-saffron)" }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-sm">
            <h2 className="font-display text-2xl font-semibold text-[color:var(--brand-navy)]">
              Who it's for
            </h2>
            <p className="mt-3 leading-relaxed">
              College students, recent graduates, and self-learners anywhere in India who want to
              break into Python, Machine Learning or Generative AI. No prior experience required for
              our beginner track.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            to="/courses"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 text-sm font-semibold text-white shadow-[var(--shadow-navy)] transition-transform hover:scale-[1.02]"
          >
            See the Courses
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
