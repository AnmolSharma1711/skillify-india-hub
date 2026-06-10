import { COURSES } from "@/config/courses";
import { FlipCard } from "@/components/ui/FlipCard";
import courseShowcaseBg from "@/assets/course-showcase-bg.svg";

export function CoursesShowcase() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24"
      style={{
        backgroundImage: `linear-gradient(180deg, oklch(0.99 0.003 240 / 0.90), oklch(0.99 0.003 240 / 0.82)), url(${courseShowcaseBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-teal)]">
            Courses Offered
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-[color:var(--brand-navy)] sm:text-5xl">
            Learn the skills behind modern software, data, and AI products.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--muted-foreground)]">
            MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies. brings Python Programming, Machine Learning, and Generative AI into one clear
            learning path with mentor-led sessions, projects, and IIIT Delhi guidance.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {COURSES.map((course) => (
            <FlipCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
