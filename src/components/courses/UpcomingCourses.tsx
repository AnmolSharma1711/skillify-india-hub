import { CourseCardLight } from "./CourseCardLight";
import type { Course } from "@/config/courses";

const UPCOMING_COURSES: Course[] = [
  {
    id: "ai" as any,
    title: "AI & Robotics",
    category: "AI",
    tagline: "Build intelligent robotic systems using AI, computer vision and automation.",
    duration: "Flexible",
    level: "Advanced",
    accent: "mixed",
    icon: "Bot",
    techs: [{ icon: "Cpu", label: "AI" }, { icon: "Aperture", label: "Vision" }],
    highlights: ["Computer Vision", "Path Planning", "ROS framework"],
    syllabus: ["Intro to Robotics", "Kinematics", "Computer Vision", "ROS Basics"],
    status: "upcoming",
  },
  {
    id: "cloud" as any,
    title: "Cloud Computing",
    category: "Cloud",
    tagline: "Learn cloud infrastructure, deployment pipelines and scalable applications.",
    duration: "Flexible",
    level: "Intermediate",
    accent: "cyan",
    icon: "Cloud",
    techs: [{ icon: "Server", label: "AWS" }, { icon: "Database", label: "Azure" }],
    highlights: ["Cloud Architecture", "Docker & K8s", "CI/CD"],
    syllabus: ["Cloud Basics", "Containerization", "Microservices", "Deployment"],
    status: "upcoming",
  },
  {
    id: "blockchain" as any,
    title: "Blockchain Technology",
    category: "Web3",
    tagline: "Explore decentralized systems, smart contracts and Web3 development.",
    duration: "Flexible",
    level: "Intermediate",
    accent: "violet",
    icon: "Boxes",
    techs: [{ icon: "Link", label: "Web3" }, { icon: "Code", label: "Solidity" }],
    highlights: ["Smart Contracts", "DApps", "Crypto Protocols"],
    syllabus: ["Intro to Web3", "Ethereum & Solidity", "DApp Development", "Security"],
    status: "upcoming",
  },
];

export function UpcomingCourses() {
  return (
    <section className="mt-20">
      <h2 className="mb-3 font-display text-3xl font-bold text-[color:var(--brand-navy)]">
        Coming Soon
      </h2>

      <p className="mb-8 text-[color:var(--muted-foreground)]">
        New programs currently being prepared by IIIT Delhi and MeitY.
      </p>

      <div className="flex gap-6 overflow-x-auto pb-6 pt-2 px-2 -mx-2 snap-x snap-mandatory scrollbar-hide">
        {UPCOMING_COURSES.map((course) => (
          <div key={course.id} className="w-80 sm:w-96 shrink-0 snap-start">
            <CourseCardLight course={course} />
          </div>
        ))}
      </div>
    </section>
  );
}
