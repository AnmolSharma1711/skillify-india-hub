/**
 * Submit an enrollment payload to a Google Form.
 *
 * Google Forms accepts cross-origin POSTs to its `/formResponse` endpoint but
 * does NOT set CORS headers, so we fire the request with `mode: "no-cors"`.
 * That means the response is opaque — we cannot read status codes. The
 * standard practice is to assume success if the network call resolves.
 *
 * If a future Django backend takes over enrollment, swap this helper for a
 * `fetch("/api/enroll", ...)` call.
 */

import type { Course } from "@/config/courses";

export type EnrollmentPayload = {
  name: string;
  email: string;
  phone: string;
  institution: string;
  year: string;
  designation: string;
  motivation: string;
};

export async function submitToGoogleForm(
  course: Course,
  payload: EnrollmentPayload,
): Promise<void> {
  const { formId, fields } = course.googleForm;
  const url = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

  // Encode each answer against its Google Form entry ID.
  const body = new URLSearchParams();
  body.append(fields.name, payload.name);
  body.append(fields.email, payload.email);
  body.append(fields.phone, payload.phone);
  body.append(fields.institution, payload.institution);
  body.append(fields.year, payload.year);
  if (fields.designation) body.append(fields.designation, payload.designation);
  body.append(fields.motivation, payload.motivation);

  await fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
}