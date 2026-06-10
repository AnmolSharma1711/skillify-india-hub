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
    <div className={`flex gap-6 overflow-x-auto pb-6 pt-2 px-2 -mx-2 snap-x snap-mandatory scrollbar-hide ${className || ""}`}>
      {courses.map((c) => (
        <div key={c.id} className="w-80 sm:w-96 shrink-0 snap-start">
          <CourseCardLight course={c} />
        </div>
      ))}
    </div>
  );
}