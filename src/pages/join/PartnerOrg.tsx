import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Building2, GraduationCap, Globe, Users, CircleCheck as CheckCircle2, Loader as Loader2 } from "lucide-react";
import { submitToGoogleForm } from "@/lib/googleForms";

// TODO: Replace with your actual Google Form ID and entry IDs
const PARTNER_FORM_ID = "1FAIpQLSf_PLACEHOLDER_PARTNER";
const PARTNER_FIELDS = {
  ORG_NAME: "entry.400001",
  CATEGORY: "entry.400002",
  CONTACT_PERSON: "entry.400003",
  EMAIL: "entry.400004",
  PHONE: "entry.400005",
};

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
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      await submitToGoogleForm(PARTNER_FORM_ID, data);
      setDone(true);
    } catch {
      setDone(true);
    } finally {
      setSubmitting(false);
    }
  }

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
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 relative">
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
          <div className="p-8 relative">
            {done ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
                <CheckCircle2 className="mx-auto h-16 w-16 text-[color:var(--brand-teal)]" />
                <h4 className="mt-4 font-display text-2xl font-semibold text-[color:var(--brand-navy)]">
                  Thank You!
                </h4>
                <p className="mt-2 text-base text-[color:var(--muted-foreground)] max-w-md">
                  Your interest has been received. Our partnership team will contact you soon.
                </p>
                <button
                  onClick={() => setDone(false)}
                  className="mt-8 inline-flex h-11 items-center rounded-md bg-[image:var(--gradient-brand)] px-8 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[color:var(--brand-navy)]">Organization Name *</label>
                  <input name={PARTNER_FIELDS.ORG_NAME} type="text" required className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2.5 text-sm text-[color:var(--foreground)] outline-none focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]" />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[color:var(--brand-navy)]">Category *</label>
                  <select name={PARTNER_FIELDS.CATEGORY} required className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2.5 text-sm text-[color:var(--foreground)] outline-none focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]">
                    <option value="">Select a category</option>
                    <option value="Academic Institution">Academic Institution</option>
                    <option value="Training Partner">Training Partner</option>
                    <option value="Industry Organization">Industry Organization</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[color:var(--brand-navy)]">Contact Person Name *</label>
                  <input name={PARTNER_FIELDS.CONTACT_PERSON} type="text" required className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2.5 text-sm text-[color:var(--foreground)] outline-none focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]" />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[color:var(--brand-navy)]">Email Address *</label>
                    <input name={PARTNER_FIELDS.EMAIL} type="email" required className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2.5 text-sm text-[color:var(--foreground)] outline-none focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[color:var(--brand-navy)]">Phone Number *</label>
                    <input name={PARTNER_FIELDS.PHONE} type="text" required className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2.5 text-sm text-[color:var(--foreground)] outline-none focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]" />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex h-12 w-full sm:w-auto min-w-[200px] items-center justify-center gap-2 rounded-md bg-[image:var(--gradient-brand)] text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02] disabled:opacity-70"
                  >
                    {submitting ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
                    {submitting ? "Submitting..." : "Submit Interest"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
