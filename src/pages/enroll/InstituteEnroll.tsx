import { Helmet } from "react-helmet-async";
import { Building2, GraduationCap, CheckCircle } from "lucide-react";

const ELIGIBILITY = [
  "Recognised university, deemed institution, or affiliated college",
  "Minimum batch of 20+ students per cohort willing to enroll",
  "Dedicated faculty co-ordinator appointed by the institution",
  "Basic lab infrastructure with internet access available",
  "Willingness to integrate Skillify modules within the academic calendar",
  "Institution must be AICTE / UGC / State board recognised",
];

const WHAT_INSTITUTION_GETS = [
  "Co-branded certificates for enrolled students, issued by IIIT Delhi & MEIT",
  "Access to curated, industry-ready course content and assessments",
  "Guest lectures and bootcamps by IIIT Delhi faculty and industry experts",
  "Priority placement and job-fair invitations for enrolled students",
  "Institutional recognition and MoU with IIIT Delhi",
  "Dedicated programme support and a single point of contact",
];

const PROCESS_STEPS = [
  { step: "01", title: "Submit Expression of Interest", desc: "Fill the Google Form below with your institution's details." },
  { step: "02", title: "Eligibility Review", desc: "The Skillify team verifies credentials and batch readiness within 5 working days." },
  { step: "03", title: "MoU Signing", desc: "Formal agreement signed between your institution, IIIT Delhi, and MEIT." },
  { step: "04", title: "Cohort Onboarding", desc: "Students enroll, orientation conducted, and learning begins." },
];

export default function InstituteEnroll() {
  return (
    <>
      <Helmet>
        <title>Institute Enrollment — Skillify IIITD × MEIT</title>
        <meta
          name="description"
          content="Partner with Skillify to bring government-backed tech skilling to your institution's students."
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
            Enroll · Institution
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-[color:var(--brand-navy)] sm:text-5xl">
            Institute{" "}
            <span className="text-gradient-brand">Enrollment</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--muted-foreground)]">
            Bring Skillify to your campus. Register your institution to provide your students
            with free, IIIT Delhi-certified training in industry-aligned emerging technologies.
          </p>
        </div>
      </section>

      {/* Eligibility + Benefits */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Eligibility */}
          <div className="rounded-2xl border border-[color:var(--border)] bg-white/90 p-6 shadow-sm backdrop-blur">
            <div
              className="grid h-11 w-11 place-items-center rounded-xl text-white mb-4"
              style={{ background: "var(--gradient-brand)" }}
            >
              <Building2 className="h-5 w-5" />
            </div>
            <h2 className="font-display text-xl font-bold text-[color:var(--brand-navy)] mb-4">
              Eligibility Criteria
            </h2>
            <div className="grid gap-3">
              {ELIGIBILITY.map((e) => (
                <div
                  key={e}
                  className="flex gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--muted)] p-3"
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--brand-teal)]" />
                  <span className="text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                    {e}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* What institution gets */}
          <div className="rounded-2xl border border-[color:var(--border)] bg-white/90 p-6 shadow-sm backdrop-blur">
            <div
              className="grid h-11 w-11 place-items-center rounded-xl text-white mb-4"
              style={{ background: "var(--gradient-saffron)" }}
            >
              <GraduationCap className="h-5 w-5" />
            </div>
            <h2 className="font-display text-xl font-bold text-[color:var(--brand-navy)] mb-4">
              What Your Institution Gets
            </h2>
            <div className="grid gap-3">
              {WHAT_INSTITUTION_GETS.map((w) => (
                <div
                  key={w}
                  className="flex gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--muted)] p-3"
                >
                  <span
                    className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                    style={{ background: "var(--brand-saffron)" }}
                  />
                  <span className="text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                    {w}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <h2 className="mb-8 font-display text-2xl font-bold text-[color:var(--brand-navy)]">
          How It Works
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map(({ step, title, desc }) => (
            <div
              key={step}
              className="rounded-2xl border border-[color:var(--border)] bg-white/90 p-5 shadow-sm backdrop-blur"
            >
              <p
                className="font-display text-3xl font-bold mb-3"
                style={{ color: "var(--brand-teal)" }}
              >
                {step}
              </p>
              <h3 className="font-display text-base font-bold text-[color:var(--brand-navy)] mb-2">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[color:var(--muted-foreground)]">{desc}</p>
            </div>
          ))}
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
              Register Your Institution
            </h2>
            <p className="mt-1 text-sm text-white/80">
              Submit the expression of interest and our team will connect with you within 5 working days.
            </p>
          </div>
          <div className="p-2">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf_PLACEHOLDER_INSTITUTE/viewform?embedded=true"
              width="100%"
              height="700"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Institute Enrollment Registration Form"
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
