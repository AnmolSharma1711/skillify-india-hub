import { Helmet } from "react-helmet-async";
import { BookOpen, Award, Briefcase, Star } from "lucide-react";

const WHO_CAN_APPLY = [
  {
    icon: Briefcase,
    title: "Industry Mentors",
    desc: "Professionals with 5+ years of experience in Electronics, IT, or allied domains who wish to guide students through real-world projects.",
    criteria: [
      "Minimum 5 years of relevant industry experience",
      "Strong command over at least one course domain offered by Skillify",
      "Ability to commit 4–6 hours per week per cohort",
      "Willingness to review and grade learner assignments / projects",
    ],
  },
  {
    icon: BookOpen,
    title: "Trainers & Instructors",
    desc: "Skilled educators who can design and deliver hands-on technical sessions for learners at undergraduate/postgraduate level.",
    criteria: [
      "Formal qualification in relevant domain (B.Tech / M.Tech / PhD or equivalent)",
      "Prior teaching or training experience (academic or corporate)",
      "Ability to deliver sessions in hybrid (online + offline) mode",
      "Proficiency in tools and technologies covered in the course",
    ],
  },
  {
    icon: Star,
    title: "Subject Matter Experts (SMEs)",
    desc: "Domain specialists who contribute curated content, assessments, or capstone problem statements.",
    criteria: [
      "Recognised expertise in a specific technology area",
      "Publications, certifications, or demonstrable work portfolio",
      "Available for content review cycles and quality audits",
      "Open to collaboration with IIITD faculty for curriculum alignment",
    ],
  },
];

const GENERAL_REQUIREMENTS = [
  "Valid government-issued photo ID and professional proof of credentials",
  "Signed engagement agreement with IIIT Delhi and MEIT",
  "Complete an onboarding orientation session before cohort begins",
  "Adhere to Skillify's code of conduct and academic integrity policy",
  "Provide timely feedback and assessment within agreed SLA",
];

const BENEFITS = [
  "Official Skillify Trainer / Mentor certificate from IIIT Delhi",
  "Honorarium as per engagement terms",
  "Access to Skillify's learner community and alumni network",
  "Co-branding on course material where applicable",
  "Priority consideration for future program expansions",
];

export default function TrainerEnroll() {
  return (
    <>
      <Helmet>
        <title>Trainer Enrollment — Skillify IIITD × MEIT</title>
        <meta
          name="description"
          content="Join Skillify as a trainer, mentor or subject matter expert and help upskill India's youth."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.99 0.003 240 / 0.92), oklch(0.99 0.003 240 / 0.88))",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-teal)]">
            Join Us · Trainer
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-[color:var(--brand-navy)] sm:text-5xl">
            Trainer{" "}
            <span className="text-gradient-brand">Enrollment</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--muted-foreground)]">
            Shape the next generation of technology professionals. Join Skillify as a trainer,
            industry mentor, or subject matter expert and contribute to India's largest
            government-backed skilling initiative.
          </p>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="mb-2 font-display text-2xl font-bold text-[color:var(--brand-navy)]">
          Who Can Apply
        </h2>
        <p className="mb-8 text-sm text-[color:var(--muted-foreground)]">
          We welcome applications from three professional categories.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {WHO_CAN_APPLY.map(({ icon: Icon, title, desc, criteria }) => (
            <div
              key={title}
              className="rounded-2xl border border-[color:var(--border)] bg-white/90 p-6 shadow-sm backdrop-blur flex flex-col"
            >
              <div
                className="grid h-11 w-11 place-items-center rounded-xl text-white mb-4"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-[color:var(--brand-navy)] mb-2">
                {title}
              </h3>
              <p className="text-sm text-[color:var(--muted-foreground)] mb-4 leading-relaxed">
                {desc}
              </p>
              <div className="mt-auto grid gap-2">
                {criteria.map((c) => (
                  <div
                    key={c}
                    className="flex gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--muted)] p-3"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ background: "var(--brand-teal)" }}
                    />
                    <span className="text-xs leading-relaxed text-[color:var(--muted-foreground)]">
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* General Requirements + Benefits */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Requirements */}
          <div className="rounded-2xl border border-[color:var(--border)] bg-white/90 p-6 shadow-sm backdrop-blur">
            <div
              className="grid h-11 w-11 place-items-center rounded-xl text-white mb-4"
              style={{ background: "var(--gradient-saffron)" }}
            >
              <Award className="h-5 w-5" />
            </div>
            <h2 className="font-display text-xl font-bold text-[color:var(--brand-navy)] mb-4">
              General Requirements
            </h2>
            <div className="grid gap-3">
              {GENERAL_REQUIREMENTS.map((req) => (
                <div
                  key={req}
                  className="flex gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--muted)] p-3"
                >
                  <span
                    className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                    style={{ background: "var(--brand-saffron)" }}
                  />
                  <span className="text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                    {req}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="rounded-2xl border border-[color:var(--border)] bg-white/90 p-6 shadow-sm backdrop-blur">
            <div
              className="grid h-11 w-11 place-items-center rounded-xl text-white mb-4"
              style={{ background: "var(--gradient-brand)" }}
            >
              <Star className="h-5 w-5" />
            </div>
            <h2 className="font-display text-xl font-bold text-[color:var(--brand-navy)] mb-4">
              What You Get
            </h2>
            <div className="grid gap-3">
              {BENEFITS.map((b) => (
                <div
                  key={b}
                  className="flex gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--muted)] p-3"
                >
                  <span
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
        </div>
      </section>

      {/* Google Form */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-2xl border border-[color:var(--border)] bg-white shadow-sm overflow-hidden">
          <div
            className="px-8 py-6 border-b border-[color:var(--border)]"
            style={{ background: "var(--gradient-brand)" }}
          >
            <h2 className="font-display text-xl font-bold text-white">
              Apply to Join as a Trainer
            </h2>
            <p className="mt-1 text-sm text-white/80">
              Submit your application and our team will review it within 5 working days.
            </p>
          </div>
          <div className="p-2">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf_PLACEHOLDER_TRAINER/viewform?embedded=true"
              width="100%"
              height="700"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Trainer Enrollment Application Form"
              className="rounded-xl"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </>
  );
}
