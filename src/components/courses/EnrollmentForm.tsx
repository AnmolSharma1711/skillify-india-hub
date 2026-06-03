/**
 * EnrollmentForm — collects student details, validates with Zod, then
 * fire-and-forgets a POST to the course's Google Form endpoint.
 *
 * Light theme: white inputs, navy CTA button, success state in teal.
 * Google Forms uses no-cors so we treat a resolved fetch as success.
 */
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, Loader2 } from "lucide-react";

import type { Course } from "@/config/courses";
import { submitToGoogleForm } from "@/lib/submitToGoogleForm";

/** Validates all fields — length caps prevent abuse. */
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{7,15}$/, "Enter a valid phone number"),
  institution: z.string().trim().min(2, "Required").max(200),
  year: z.string().trim().min(1, "Required").max(50),
  designation: z.string().trim().min(2, "Required").max(100),
  motivation: z.string().trim().max(500).optional().or(z.literal("")),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function EnrollmentForm({ course }: { course: Course }) {
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
        year: parsed.data.year,
        designation: parsed.data.designation,
        motivation: parsed.data.motivation ?? "",
      });
      setDone(true);
      toast.success("You're enrolled! Check your email for next steps.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-xl border border-[color:var(--brand-teal)]/30 bg-[color:var(--muted)] p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-[color:var(--brand-teal)]" />
        <h4 className="mt-3 font-display text-lg font-semibold text-[color:var(--brand-navy)]">
          You're in!
        </h4>
        <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
          We've recorded your interest for <strong>{course.title}</strong>.
          The IIITD team will reach out shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Field label="Full name" name="name" error={errors.name} />
      <Field label="Email" name="email" type="email" error={errors.email} />
      <Field label="Phone" name="phone" error={errors.phone} />
      <Field label="College / Institution" name="institution" error={errors.institution} />
      <Field
        label="Year of study"
        name="year"
        placeholder="e.g. 2nd year B.Tech"
        error={errors.year}
      />
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

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[image:var(--gradient-brand)] text-sm font-semibold text-white shadow-[var(--shadow-navy)] transition-transform hover:scale-[1.01] disabled:opacity-60"
      >
        {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {submitting ? "Submitting…" : `Enroll in ${course.title}`}
      </button>

      <p className="text-[11px] text-[color:var(--muted-foreground)]">
        By enrolling you agree to be contacted by the IIITD–MEIT programme team.
      </p>
    </form>
  );
}

/** Small labelled text input with inline validation error. */
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
