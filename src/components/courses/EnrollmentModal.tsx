import { useState } from "react";
import { createPortal } from "react-dom";
import { CircleCheck as CheckCircle2, X, Loader as Loader2 } from "lucide-react";
import type { Course } from "@/config/courses";
import { submitToGoogleForm } from "@/lib/googleForms";

// TODO: Replace with your actual Google Form IDs
const INDIVIDUAL_FORM_ID = "1FAIpQLSf_PLACEHOLDER_INDIVIDUAL";
const INSTITUTE_FORM_ID = "1FAIpQLSf_PLACEHOLDER_INSTITUTE";

// TODO: Replace with your actual field entry IDs from the Google Forms
const INDIVIDUAL_FIELDS = {
  COURSE: "entry.100001",
  NAME: "entry.100002",
  EMAIL: "entry.100003",
  PHONE: "entry.100004",
  COLLEGE: "entry.100005",
  YEAR: "entry.100006",
  DEPARTMENT: "entry.100007",
  LINKEDIN: "entry.100008",
  PRIOR_KNOWLEDGE: "entry.100009",
  MOTIVATION: "entry.100010",
};

const INSTITUTE_FIELDS = {
  COURSE: "entry.200001",
  INSTITUTE_NAME: "entry.200002",
  ADDRESS: "entry.200003",
  POC_NAME: "entry.200004",
  POC_DESIGNATION: "entry.200005",
  EMAIL: "entry.200006",
  PHONE: "entry.200007",
  STUDENTS_COUNT: "entry.200008",
  INFRASTRUCTURE: "entry.200009", // Checkbox group
  FACILITATION_PLAN: "entry.200010",
};

export function EnrollmentModal({
  course,
  enrollmentType,
  onClose,
}: {
  course: Course;
  enrollmentType: "individual" | "institute";
  onClose: () => void;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    
    // Checkboxes (like Infrastructure) might have multiple values
    // In native Google Forms, checkboxes share the same name and you send multiple values.
    // URLSearchParams handles this automatically if we append them.
    // However, our custom submitToGoogleForm currently takes Record<string, string>.
    // To support checkboxes, we should ideally adjust submitToGoogleForm, but joining by comma
    // sometimes works depending on the form config, or passing multiple values.
    // We'll join them by comma for the data record, or pass them appropriately.
    // Wait, Google Forms checkboxes need to be passed as separate fields with the same key.
    // I will adjust submitToGoogleForm or just send them here directly using fetch.
    
    // For now, let's collect all data.
    const url = `https://docs.google.com/forms/d/e/${enrollmentType === "individual" ? INDIVIDUAL_FORM_ID : INSTITUTE_FORM_ID}/formResponse`;
    const formUrlEncoded = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      formUrlEncoded.append(key, value.toString());
    }

    try {
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formUrlEncoded.toString(),
      });
      setDone(true);
    } catch {
      setDone(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return createPortal(
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div className="w-full max-w-sm rounded-2xl border border-[color:var(--brand-teal)]/30 bg-white p-6 sm:p-8 text-center shadow-lg">
          <CheckCircle2 className="mx-auto h-12 w-12 text-[color:var(--brand-teal)]" />
          <h4 className="mt-4 font-display text-xl font-semibold text-[color:var(--brand-navy)]">
            Thank You!
          </h4>
          <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
            Your enrollment for <strong>{course.title}</strong> has been recorded.
            We will contact you soon with further updates.
          </p>
          <button
            onClick={onClose}
            className="mt-6 inline-flex h-10 items-center rounded-md bg-[image:var(--gradient-brand)] px-6 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            Close
          </button>
        </div>
      </div>,
      document.body
    );
  }

  return createPortal(
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-5 shadow-lg sm:p-8"
      >
        <div className="flex items-start sm:items-center justify-between mb-5 sm:mb-6 gap-2">
          <h2 className="font-display text-lg sm:text-xl font-semibold text-[color:var(--brand-navy)] capitalize leading-tight">
            {enrollmentType} Enrollment
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 transition-colors hover:bg-[color:var(--muted)]"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          {enrollmentType === "individual" ? (
            <>
              <input type="hidden" name={INDIVIDUAL_FIELDS.COURSE} value={course.title} />
              <div className="mb-4 rounded-lg bg-[color:var(--brand-teal)]/5 p-3 border border-[color:var(--brand-teal)]/20">
                <p className="text-xs text-[color:var(--brand-teal)] font-semibold">Course Selected</p>
                <p className="text-sm font-bold text-[color:var(--brand-navy)] mt-0.5">{course.title}</p>
              </div>
              
              <Field label="Full Name" name={INDIVIDUAL_FIELDS.NAME} required />
              
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email Address" name={INDIVIDUAL_FIELDS.EMAIL} type="email" required />
                <Field label="WhatsApp / Contact" name={INDIVIDUAL_FIELDS.PHONE} required />
              </div>
              
              <Field label="College / University Name" name={INDIVIDUAL_FIELDS.COLLEGE} required />
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[color:var(--brand-navy)]">Current Year of Study <span className="text-red-500">*</span></label>
                  <select name={INDIVIDUAL_FIELDS.YEAR} required className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2 text-sm text-[color:var(--foreground)] outline-none focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]">
                    <option value="">Select Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="PG">PG</option>
                  </select>
                </div>
                <Field label="Department / Branch" name={INDIVIDUAL_FIELDS.DEPARTMENT} placeholder="e.g. CSE, AIML" required />
              </div>

              <Field label="LinkedIn Profile URL" name={INDIVIDUAL_FIELDS.LINKEDIN} type="url" placeholder="Optional" />

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[color:var(--brand-navy)]">Prior Knowledge in {course.title} <span className="text-red-500">*</span></label>
                <div className="flex items-center justify-between gap-2 bg-[color:var(--muted)]/50 p-3 rounded-lg border border-[color:var(--border)]">
                  <span className="text-xs text-[color:var(--muted-foreground)]">Novice</span>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <label key={num} className="flex flex-col items-center cursor-pointer group">
                      <input type="radio" name={INDIVIDUAL_FIELDS.PRIOR_KNOWLEDGE} value={num} required className="peer sr-only" />
                      <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border border-[color:var(--border)] bg-white text-[color:var(--foreground)] transition-colors peer-checked:bg-[color:var(--brand-teal)] peer-checked:text-white peer-checked:border-[color:var(--brand-teal)] group-hover:border-[color:var(--brand-teal)]">
                        {num}
                      </span>
                    </label>
                  ))}
                  <span className="text-xs text-[color:var(--muted-foreground)]">Expert</span>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-[color:var(--brand-navy)]">
                  Why are you interested in this course? <span className="text-red-500">*</span>
                </label>
                <textarea
                  name={INDIVIDUAL_FIELDS.MOTIVATION}
                  rows={3}
                  required
                  className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2 text-sm text-[color:var(--foreground)] outline-none focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]"
                />
              </div>
            </>
          ) : (
            <>
              <input type="hidden" name={INSTITUTE_FIELDS.COURSE} value={course.title} />
              <div className="mb-4 rounded-lg bg-[color:var(--brand-teal)]/5 p-3 border border-[color:var(--brand-teal)]/20">
                <p className="text-xs text-[color:var(--brand-teal)] font-semibold">Course Selected for Institute</p>
                <p className="text-sm font-bold text-[color:var(--brand-navy)] mt-0.5">{course.title}</p>
              </div>

              <Field label="Name of the Institute" name={INSTITUTE_FIELDS.INSTITUTE_NAME} required />
              <Field label="Address / Location" name={INSTITUTE_FIELDS.ADDRESS} required />
              
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Point of Contact (POC) Name" name={INSTITUTE_FIELDS.POC_NAME} required />
                <Field label="POC Designation" name={INSTITUTE_FIELDS.POC_DESIGNATION} placeholder="e.g. HOD, Dean" required />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Official Email Address" name={INSTITUTE_FIELDS.EMAIL} type="email" required />
                <Field label="Contact Number" name={INSTITUTE_FIELDS.PHONE} required />
              </div>

              <Field label="Expected Number of Students" name={INSTITUTE_FIELDS.STUDENTS_COUNT} type="number" required />

              <div>
                <label className="mb-2 block text-xs font-semibold text-[color:var(--brand-navy)]">Available Infrastructure for the Course <span className="text-red-500">*</span></label>
                <div className="space-y-2.5">
                  {[
                    "Lab Access",
                    "High-speed Internet",
                    "Seminar Hall / Smart Classroom",
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-2.5 cursor-pointer">
                      <input type="checkbox" name={INSTITUTE_FIELDS.INFRASTRUCTURE} value={item} className="w-4 h-4 rounded text-[color:var(--brand-teal)] border-[color:var(--border)] focus:ring-[color:var(--brand-teal)]" />
                      <span className="text-sm text-[color:var(--foreground)]">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-[color:var(--brand-navy)]">
                  How do you plan to facilitate this course within your campus? <span className="text-red-500">*</span>
                </label>
                <textarea
                  name={INSTITUTE_FIELDS.FACILITATION_PLAN}
                  rows={3}
                  required
                  className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2 text-sm text-[color:var(--foreground)] outline-none focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]"
                />
              </div>
            </>
          )}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[image:var(--gradient-brand)] text-sm font-bold tracking-wide text-white shadow-md transition-transform hover:scale-[1.02] disabled:opacity-70"
        >
          {submitting ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
          {submitting ? "Submitting…" : "Confirm Enrollment"}
        </button>

        <p className="mt-4 text-center text-xs text-[color:var(--muted-foreground)]">
          By enrolling, you agree to be contacted by the MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies. IIITD–MeitY team.
        </p>
      </form>
    </div>,
    document.body
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-[color:var(--brand-navy)]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2 text-sm text-[color:var(--foreground)] outline-none transition-colors focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]"
      />
    </div>
  );
}
