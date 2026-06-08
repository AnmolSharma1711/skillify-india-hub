import { Course } from "@/config/courses";

export type EnrollmentType = "individual" | "institute" | "mentor";

interface EnrollmentPayload {
  name: string;
  email: string;
  phone: string;
  institution: string;
  designation: string;
  motivation: string;
}

export async function submitToBackend(
  course: Course,
  type: EnrollmentType,
  data: EnrollmentPayload
) {
  const url = `http://localhost:8000/api/enrollments/${type}/`;
  
  const payload = {
    ...data,
    course_name: course.title,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to submit enrollment");
  }

  return response.json();
}
