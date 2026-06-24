import { CourseCardLight } from "./CourseCardLight";
import { UPCOMING_COURSES } from "@/config/courses";
import { CarouselWrapper } from "@/components/ui/CarouselWrapper";

export function UpcomingCourses() {
  return (
    <section className="mt-20">
      <h2 className="mb-3 font-display text-3xl font-bold text-[color:var(--brand-navy)]">
        Coming Soon
      </h2>

      <p className="mb-8 text-[color:var(--muted-foreground)]">
        New programs currently being prepared by IIIT Delhi and MeitY.
      </p>

      <CarouselWrapper>
        <div className="flex gap-6 overflow-x-auto pb-6 pt-2 px-2 -mx-2 snap-x snap-mandatory carousel-scrollbar">
          {UPCOMING_COURSES.map((course) => (
            <div key={course.id} className="w-80 sm:w-96 shrink-0 snap-start">
              <CourseCardLight course={course} />
            </div>
          ))}
        </div>
      </CarouselWrapper>
    </section>
  );
}
