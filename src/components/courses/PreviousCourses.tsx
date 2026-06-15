import { CourseCardLight } from "./CourseCardLight";
import type { Course } from "@/config/courses";

const PREVIOUS_COURSES: Course[] = [
  {
    id: "fullstack" as any,
    title: "Full Stack Web Development",
    category: "Web",
    tagline: "Learned modern frontend and backend development with industry-standard technologies.",
    duration: "8 weeks",
    level: "Beginner",
    accent: "mixed",
    icon: "Monitor",
    techs: [{ icon: "Code", label: "React" }, { icon: "Server", label: "Node.js" }],
    highlights: ["Frontend Basics", "Backend APIs", "Database Design"],
    syllabus: ["HTML/CSS/JS", "React JS", "Node & Express", "MongoDB"],
    status: "completed",
  },
  {
    id: "datascience" as any,
    title: "Data Science Foundations",
    category: "Data",
    tagline: "Built strong foundations in data analysis, visualization and statistics.",
    duration: "6 weeks",
    level: "Beginner",
    accent: "violet",
    icon: "Database",
    techs: [{ icon: "LineChart", label: "Analysis" }, { icon: "PieChart", label: "Viz" }],
    highlights: ["Data Wrangling", "Statistical Analysis", "Visualization"],
    syllabus: ["Python for Data", "Pandas & NumPy", "Matplotlib", "Basic Stats"],
    status: "completed",
  },
  {
    id: "cyber" as any,
    title: "Cyber Security Essentials",
    category: "Security",
    tagline: "Explored digital security, ethical hacking concepts and cyber awareness.",
    duration: "6 weeks",
    level: "Intermediate",
    accent: "cyan",
    icon: "Shield",
    techs: [{ icon: "Lock", label: "Security" }, { icon: "Key", label: "Cryptography" }],
    highlights: ["Network Security", "Ethical Hacking", "Cryptography basics"],
    syllabus: ["Intro to CyberSec", "Networking Basics", "Web Vulnerabilities", "Cryptography"],
    status: "completed",
  },
];

export function PreviousCourses() {
  return (
    <section className="mt-20">
      <h2 className="mb-3 font-display text-3xl font-bold text-[color:var(--brand-navy)]">
        Previously Offered Courses
      </h2>

      <p className="mb-8 text-[color:var(--muted-foreground)]">
        Successful programs conducted in previous cohorts.
      </p>

      <div className="flex gap-6 overflow-x-auto pb-6 pt-2 px-2 -mx-2 snap-x snap-mandatory scrollbar-hide">
        {PREVIOUS_COURSES.map((course) => (
          <div key={course.id} className="w-80 sm:w-96 shrink-0 snap-start">
            <CourseCardLight course={course} />
          </div>
        ))}
      </div>
    </section>
  );
}
