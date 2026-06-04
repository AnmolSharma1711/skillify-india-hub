import type { Course } from "@/config/courses";
import { CourseCardLight } from "./CourseCardLight";

export function CoursesGrid({
  courses,
  className,
}: {
  courses: Course[];
  className?: string;
}) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${className || ""}`}>
      {courses.map((c) => (
        <CourseCardLight key={c.id} course={c} />
      ))}
    </div>
  );
}