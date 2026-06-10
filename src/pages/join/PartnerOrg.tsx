import { Helmet } from "react-helmet-async";
import { Building2, GraduationCap, Globe, Users } from "lucide-react";

const ELIGIBILITY = [
  {
    icon: Building2,
    title: "Academic Institutions",
    items: [
      "Recognised universities, colleges or deemed institutions",
      "Must have a minimum enrolment of 100+ active students",
      "Dedicated faculty co-ordinator to liaise with Skillify",
      "Willingness to integrate courses into semester timetable",
    ],
  },
  {
    icon: Users,
    title: "Training Partners",
    items: [
      "Registered entity (company, society or trust)",
      "Proven track record in IT / Electronics domain training",
      "Minimum batch strength of 30 learners per cohort",
      "Adequate lab / hardware infrastructure",
    ],
  },
  {
    icon: Globe,
    title: "Industry Organizations",
    items: [
      "Registered company operating in Electronics / IT sector",
      "Open to sponsoring or co-branding certification courses",
      "Committed to providing real-world project case studies",
      "Willing to participate in placement / job-fair drives",
    ],
  },
];

const REQUIREMENTS = [
  "MoU / Letter of Intent signed with IIIT Delhi & MEIT",
  "Designation of a single point of contact from your organisation",
  "Adherence to Skillify's content quality and assessment standards",
  "Provide a basic lab / internet-ready classroom for offline cohorts",
  "Agree to nominee terms for co-branded certification issuance",
];

export default function PartnerOrg() {
  return (
    <>
      <Helmet>
        <title>Partnering Organizations — Skillify IIITD × MEIT</title>
        <meta
          name="description"
          content="Partner with Skillify to bring industry-aligned tech education to your institution or organisation."
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
            Join Us · Partner
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-[color:var(--brand-navy)] sm:text-5xl">
            Partnering{" "}
            <span className="text-gradient-brand">Organizations</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--muted-foreground)]">
            Join the Skillify ecosystem as an academic institution, training partner, or
            industry organisation — and co-deliver world-class, government-backed technology
            education at scale.
          </p>
        </div>
      </section>

      {/* Eligibility */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="mb-2 font-display text-2xl font-bold text-[color:var(--brand-navy)]">
          Eligibility Criteria
        </h2>
        <p className="mb-8 text-sm text-[color:var(--muted-foreground)]">
          We welcome partners from three categories. Check the criteria that applies to you.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {ELIGIBILITY.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="rounded-2xl border border-[color:var(--border)] bg-white/90 p-6 shadow-sm backdrop-blur"
            >
              <div
                className="grid h-11 w-11 place-items-center rounded-xl text-white mb-4"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-[color:var(--brand-navy)] mb-3">
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[color:var(--muted-foreground)]">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ background: "var(--brand-teal)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="rounded-2xl border border-[color:var(--border)] bg-white/90 p-8 shadow-sm backdrop-blur">
          <div className="flex items-start gap-4">
            <div
              className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl text-white"
              style={{ background: "var(--gradient-saffron)" }}
            >
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h2 className="font-display text-xl font-bold text-[color:var(--brand-navy)] mb-4">
                Partnership Requirements
              </h2>
              <div className="grid gap-3">
                {REQUIREMENTS.map((req) => (
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
              Express Partnership Interest
            </h2>
            <p className="mt-1 text-sm text-white/80">
              Fill in the form below and our partnership team will reach out within 3 working days.
            </p>
          </div>
          <div className="p-2">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf_PLACEHOLDER_PARTNER/viewform?embedded=true"
              width="100%"
              height="700"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Partnering Organization Registration Form"
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
