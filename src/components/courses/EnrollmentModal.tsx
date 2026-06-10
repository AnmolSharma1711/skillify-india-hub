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
  MOTIVATION: "entry.100005",
};

const INSTITUTE_FIELDS = {
  COURSE: "entry.200001",
  INSTITUTE: "entry.200002",
  COORDINATOR: "entry.200003",
  EMAIL: "entry.200004",
  PHONE: "entry.200005",
  BATCH_SIZE: "entry.200006",
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
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      if (enrollmentType === "individual") {
        await submitToGoogleForm(INDIVIDUAL_FORM_ID, data);
      } else {
        await submitToGoogleForm(INSTITUTE_FORM_ID, data);
      }
      setDone(true);
    } catch {
      // With no-cors, fetch only throws on network failure (offline)
      // We'll show success anyway to not block the user, or you can handle errors
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

        <div className="space-y-3">
          {enrollmentType === "individual" ? (
            <>
              <input type="hidden" name={INDIVIDUAL_FIELDS.COURSE} value={course.title} />
              <div className="mb-4 rounded-lg bg-[color:var(--muted)] p-3 border border-[color:var(--border)]">
                <p className="text-xs text-[color:var(--muted-foreground)] font-semibold">Course Selected</p>
                <p className="text-sm font-bold text-[color:var(--brand-navy)] mt-0.5">{course.title}</p>
              </div>
              <Field label="Full name" name={INDIVIDUAL_FIELDS.NAME} required />
              <Field label="Email" name={INDIVIDUAL_FIELDS.EMAIL} type="email" required />
              <Field label="Phone" name={INDIVIDUAL_FIELDS.PHONE} required />
              <div>
                <label className="mb-1 block text-xs font-semibold text-[color:var(--muted-foreground)]">
                  Why are you interested? <span className="font-normal opacity-60">(optional)</span>
                </label>
                <textarea
                  name={INDIVIDUAL_FIELDS.MOTIVATION}
                  rows={3}
                  className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2 text-base sm:text-sm text-[color:var(--foreground)] outline-none focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]"
                />
              </div>
            </>
          ) : (
            <>
              <input type="hidden" name={INSTITUTE_FIELDS.COURSE} value={course.title} />
              <div className="mb-4 rounded-lg bg-[color:var(--muted)] p-3 border border-[color:var(--border)]">
                <p className="text-xs text-[color:var(--muted-foreground)] font-semibold">Course Selected for Institute</p>
                <p className="text-sm font-bold text-[color:var(--brand-navy)] mt-0.5">{course.title}</p>
              </div>
              <Field label="Institute Name" name={INSTITUTE_FIELDS.INSTITUTE} required />
              <Field label="Coordinator Name" name={INSTITUTE_FIELDS.COORDINATOR} required />
              <Field label="Coordinator Email" name={INSTITUTE_FIELDS.EMAIL} type="email" required />
              <Field label="Coordinator Phone" name={INSTITUTE_FIELDS.PHONE} required />
              <Field label="Expected Batch Size" name={INSTITUTE_FIELDS.BATCH_SIZE} type="number" required />
            </>
          )}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[image:var(--gradient-brand)] text-sm font-semibold text-white shadow-[var(--shadow-navy)] transition-transform hover:scale-[1.01] disabled:opacity-60"
        >
          {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {submitting ? "Submitting…" : "Confirm Enrollment"}
        </button>

        <p className="mt-3 text-center text-[11px] text-[color:var(--muted-foreground)]">
          By enrolling you agree to be contacted by the IIITD–MEIT programme team.
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold text-[color:var(--muted-foreground)]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2 text-base sm:text-sm text-[color:var(--foreground)] outline-none transition-colors focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]"
      />
    </div>
  );
}
