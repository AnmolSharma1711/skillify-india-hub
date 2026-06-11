import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { BookOpen, Award, Briefcase, Star, CircleCheck as CheckCircle2, Loader as Loader2 } from "lucide-react";
import { submitToGoogleForm } from "@/lib/googleForms";

// TODO: Replace with your actual Google Form ID and entry IDs
const TRAINER_FORM_ID = "1FAIpQLSd8LXsTN0cBvhXEMFjvO7GRoe_Ma19-eO9l62rxTxF-FKdi2A";
const TRAINER_FIELDS = {
  NAME: "entry.707866290",
  EMAIL: "entry.1478895290",
  DESIGNATION: "entry.403901445",
  EXPERTISE: "entry.1172900388", // Checkbox group
  EXPERIENCE: "entry.662668080",
  RESUME_LINK: "entry.678900614",
  QUALIFICATION: "entry.1628470396",
  TIME_COMMITMENT: "entry.1047384663",
  EXPERIENCE_DESC: "entry.1159653658",
};

const WHO_CAN_APPLY = [
  {
    icon: Briefcase,
    title: "Industry Mentors",
    desc: "Professionals with 5+ years of experience in Electronics, IT, or allied domains who wish to guide students through real-world projects.",
    criteria: [
      "Minimum 5 years of relevant industry experience",
      "Strong command over at least one course domain offered by MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies.",
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
  "Signed engagement agreement with IIIT Delhi and MeitY",
  "Complete an onboarding orientation session before cohort begins",
  "Adhere to MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies.'s code of conduct and academic integrity policy",
  "Provide timely feedback and assessment within agreed SLA",
];

const BENEFITS = [
  "Official MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies. Trainer / Mentor certificate from IIIT Delhi",

  <>
    Honorarium as per engagement terms:{" "}
    <span className="font-bold">₹5000</span> for a 1.5-hour theory session and{" "}
    <span className="font-bold">₹5000</span> for a 2-hour practical session.
  </>,

  "Access to MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies's learner community and alumni network",

  "Co-branding on course material where applicable",

  "Priority consideration for future program expansions",
];
export default function TrainerEnroll() {
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
      await submitToGoogleForm(TRAINER_FORM_ID, data);
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
        <title>Trainer Enrollment — MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies. IIITD × MeitY</title>
        <meta
          name="description"
          content="Join MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies. as a trainer, mentor or subject matter expert and help upskill India's youth."
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
            Shape the next generation of technology professionals. Join MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies. as a trainer,
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
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 relative">
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
          <div className="p-8 relative">
            {done ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
                <CheckCircle2 className="mx-auto h-16 w-16 text-[color:var(--brand-teal)]" />
                <h4 className="mt-4 font-display text-2xl font-semibold text-[color:var(--brand-navy)]">
                  Thank You!
                </h4>
                <p className="mt-2 text-base text-[color:var(--muted-foreground)] max-w-md">
                  Your application has been received successfully. We will contact you soon for the next steps.
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
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[color:var(--brand-navy)]">Full Name *</label>
                    <input name={TRAINER_FIELDS.NAME} type="text" required className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2.5 text-sm text-[color:var(--foreground)] outline-none focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[color:var(--brand-navy)]">Professional Email Address *</label>
                    <input name={TRAINER_FIELDS.EMAIL} type="email" required className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2.5 text-sm text-[color:var(--foreground)] outline-none focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]" />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[color:var(--brand-navy)]">Current Designation & Organization *</label>
                  <input name={TRAINER_FIELDS.DESIGNATION} type="text" placeholder="e.g. Senior Data Scientist at Microsoft" required className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2.5 text-sm text-[color:var(--foreground)] outline-none focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[color:var(--brand-navy)]">Primary Areas of Expertise *</label>
                  <div className="space-y-2.5">
                    {[
                      "Machine Learning",
                      "Generative AI / LLMs",
                      "Python Programming",
                      "IoT & Embedded Systems",
                      "Web Development",
                      "App Development",
                      "Cloud Computing",
                      "Cybersecurity",
                      "VLSI & Semiconductor",
                    ].map((item) => (
                      <label key={item} className="flex items-center gap-2.5 cursor-pointer">
                        <input type="checkbox" name={TRAINER_FIELDS.EXPERTISE} value={item} className="w-4 h-4 rounded text-[color:var(--brand-teal)] border-[color:var(--border)] focus:ring-[color:var(--brand-teal)]" />
                        <span className="text-sm text-[color:var(--foreground)]">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[color:var(--brand-navy)]">Years of Experience *</label>
                    <input name={TRAINER_FIELDS.EXPERIENCE} type="number" required min="0" className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2.5 text-sm text-[color:var(--foreground)] outline-none focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-[color:var(--brand-navy)]">Highest Qualification *</label>
                    <input name={TRAINER_FIELDS.QUALIFICATION} type="text" placeholder="e.g. M.Tech, PhD" required className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2.5 text-sm text-[color:var(--foreground)] outline-none focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]" />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[color:var(--brand-navy)]">Weekly Time Commitment *</label>
                  <select name={TRAINER_FIELDS.TIME_COMMITMENT} required className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2.5 text-sm text-[color:var(--foreground)] outline-none focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]">
                    <option value="">Select commitment</option>
                    <option value="2-4 hours">2-4 hours / week</option>
                    <option value="5-8 hours">5-8 hours / week</option>
                    <option value="8+ hours">8+ hours / week</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[color:var(--brand-navy)]">
                    Resume Link * <span className="text-[11px] font-normal text-[color:var(--muted-foreground)] ml-1">(Google Drive, Dropbox, or LinkedIn)</span>
                  </label>
                  <input name={TRAINER_FIELDS.RESUME_LINK} type="text" required className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2.5 text-sm text-[color:var(--foreground)] outline-none focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]" />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[color:var(--brand-navy)]">Briefly describe your previous mentoring experience *</label>
                  <textarea name={TRAINER_FIELDS.EXPERIENCE_DESC} rows={4} required className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2.5 text-sm text-[color:var(--foreground)] outline-none focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]"></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex h-12 w-full sm:w-auto min-w-[200px] items-center justify-center gap-2 rounded-md bg-[image:var(--gradient-brand)] text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02] disabled:opacity-70"
                  >
                    {submitting ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
                    {submitting ? "Submitting..." : "Submit Application"}
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
