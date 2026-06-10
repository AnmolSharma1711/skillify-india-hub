import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CircleCheck as CheckCircle2 } from "lucide-react";
import iiitdLogo from "../assets/iiitd_logo-removebg-preview.svg";
import meitLogo from "../assets/meit_logo-removebg-preview.svg";

const OBJECTIVES = [
  "Training of engineering, non-engineering students, as well as unemployed youth, through the seven selected academic institutes and C-DAC, Kolkata.",
  "Provide industry-focused training in the Electronics and IT domains to engineering, non-engineering students, as well as unemployed youth.",
  "To equip students with cutting-edge skills through practical and hands-on training.",
  "Development of industry ready courses by esteemed institutions.",
  "To conduct Bootcamps in different domains.",
  "To conduct a job fair by inviting industries to enhance the employability of the candidates.",
  "To conduct capacity building and skill enhancement workshops with help of industry experts.",
];

const BENEFICIARIES = [
  "Final/Pre-final year undergraduate and postgraduate Engineering students",
  "Engineering graduates (up to two years of post-graduation)",
  "Students of non-engineering Final/Pre-final year MCA, BCA, MBA, BBA, MCOM, BCOM, M.Sc, B.Sc etc (up to two years of graduation)",
  "PhD Scholars, Research Scholars",
  "Unemployed youth, and Working professionals for skill upgradation.",
];

const WHAT_YOU_GET = [
  "Mentor-led cohorts taught by IIITD faculty and industry experts.",
  "Real capstone projects that prove your skills to employers.",
  "A recognised certificate co-issued by IIITD and MEIT.",
  "A community of learners, mentors and alumni you can grow with.",
];

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

      <div className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.99 0.003 240 / 0.92), oklch(0.99 0.003 240 / 0.88))",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-28 sm:px-6">
          {/* Header */}
          <div className="mb-16 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-teal)]">
              About the Project
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-[color:var(--brand-navy)] sm:text-5xl">
              Skillify: MultiLevel Capacity Building and Skilling in{" "}
              <span className="text-gradient-brand">Industry-aligned Emerging Technologies</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--muted-foreground)]">
              <strong className="text-[color:var(--brand-navy)]">Skillify</strong> is a joint
              initiative between{" "}
              <strong className="text-[color:var(--brand-navy)]">IIIT Delhi</strong> and the{" "}
              <strong className="text-[color:var(--brand-navy)]">
                Ministry of Electronics and Information Technology (MEIT)
              </strong>
              . Our goal: give every Indian student — regardless of background — free, world-class
              training in the technologies shaping the next decade.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: Objectives */}
            <div>
              <h2 className="mb-6 font-display text-2xl font-bold text-[color:var(--brand-navy)]">
                Objectives of the Project
              </h2>
              <div className="grid gap-3">
                {OBJECTIVES.map((obj, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 rounded-xl border border-[color:var(--border)] bg-white/80 p-4 shadow-sm backdrop-blur"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--brand-teal)]" />
                    <span className="text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                      {obj}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: What you get + Beneficiaries */}
            <div className="space-y-10">
              <div>
                <h2 className="mb-6 font-display text-2xl font-bold text-[color:var(--brand-navy)]">
                  What you get
                </h2>
                <div className="grid gap-3">
                  {WHAT_YOU_GET.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 rounded-xl border border-[color:var(--border)] bg-white/80 p-4 shadow-sm backdrop-blur"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                        style={{ background: "var(--brand-saffron)" }}
                      />
                      <span className="text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 font-display text-2xl font-bold text-[color:var(--brand-navy)]">
                  Targeted Beneficiaries
                </h2>
                <p className="mb-4 text-sm text-[color:var(--muted-foreground)]">
                  Engineering and non-engineering students, as well as unemployed youth:
                </p>
                <div className="grid gap-3">
                  {BENEFICIARIES.map((b, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 rounded-xl border border-[color:var(--border)] bg-white/80 p-4 shadow-sm backdrop-blur"
                    >
                      <div
                        aria-hidden
                        className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                        style={{ background: "var(--brand-teal)" }}
                      />
                      <span className="text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/courses"
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 text-sm font-semibold text-white shadow-[var(--shadow-navy)] transition-transform hover:scale-[1.02]"
              >
                See the Courses
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
