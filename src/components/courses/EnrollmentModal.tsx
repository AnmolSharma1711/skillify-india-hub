import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CircleCheck as CheckCircle2, X, Loader as Loader2 } from "lucide-react";
import type { Course } from "@/config/courses";
import { submitToGoogleForm } from "@/lib/submitToGoogleForm";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{7,15}$/, "Enter a valid phone number"),
  institution: z.string().trim().min(2, "Required").max(200),
  designation: z.string().trim().min(2, "Required").max(100),
  motivation: z.string().trim().max(500).optional().or(z.literal("")),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function EnrollmentModal({
  course,
  onClose,
}: {
  course: Course;
  onClose: () => void;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const fe: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!fe[key]) fe[key] = issue.message;
      }
      setErrors(fe);
      return;
    }

    setErrors({});
    setSubmitting(true);
    try {
      await submitToGoogleForm(course, {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        institution: parsed.data.institution,
        designation: parsed.data.designation,
        motivation: parsed.data.motivation ?? "",
      });
      setDone(true);
      toast.success("For success, we will contact you for the update.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-0">
        <div className="w-full max-w-sm rounded-2xl border border-[color:var(--brand-teal)]/30 bg-white p-8 text-center shadow-lg">
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
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-0" onClick={onClose}>
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-lg sm:p-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl font-semibold text-[color:var(--brand-navy)]">
            Enroll in {course.title}
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
          <Field label="Full name" name="name" error={errors.name} />
          <Field label="Email" name="email" type="email" error={errors.email} />
          <Field label="Phone" name="phone" error={errors.phone} />
          <Field label="College / Institution" name="institution" error={errors.institution} />
          <Field
            label="Designation"
            name="designation"
            placeholder="e.g. Student, Faculty, Working Professional"
            error={errors.designation}
          />
          <div>
            <label className="mb-1 block text-xs font-semibold text-[color:var(--muted-foreground)]">
              Why are you interested?{" "}
              <span className="font-normal opacity-60">(optional)</span>
            </label>
            <textarea
              name="motivation"
              rows={3}
              maxLength={500}
              className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2 text-sm text-[color:var(--foreground)] outline-none transition-colors focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[image:var(--gradient-brand)] text-sm font-semibold text-white shadow-[var(--shadow-navy)] transition-transform hover:scale-[1.01] disabled:opacity-60"
        >
          {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {submitting ? "Submitting…" : "Confirm Enrollment"}
        </button>

        <p className="mt-3 text-[11px] text-[color:var(--muted-foreground)]">
          By enrolling you agree to be contacted by the IIITD–MEIT programme team.
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold text-[color:var(--muted-foreground)]">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2 text-sm text-[color:var(--foreground)] outline-none transition-colors focus:border-[color:var(--brand-teal)] focus:ring-1 focus:ring-[color:var(--brand-teal)]"
      />
      {error ? (
        <p className="mt-1 text-[11px] text-destructive">{error}</p>
      ) : null}
    </div>
  );
}
