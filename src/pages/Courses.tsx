import { Helmet } from "react-helmet-async";
import { COURSES } from "@/config/courses";
import { CoursesGrid } from "@/components/courses/CoursesGrid";
import iiitdLogo from "@/assets/iiitd_logo-removebg-preview.svg";
import meitLogo from "@/assets/meit_logo-removebg-preview.svg";

import type { Course } from "@/config/courses";
import { CourseCardLight } from "@/components/courses/CourseCardLight";
import { StudentFeedbackSection } from "@/components/courses/StudentFeedbackSection";

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

export default function Courses() {
  return (
    <>
      <Helmet>
        <title>Courses — MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies IIITD &times; MeitY</title>
        <meta
          name="description"
          content="Browse all industry-aligned courses in Emerging Technologies — by IIIT Delhi, powered by MeitY."
        />
      </Helmet>

      <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-teal)]">
            Courses Offered
          </p>

          <h1 className="mt-3 font-display text-4xl font-bold text-[color:var(--brand-navy)] sm:text-5xl">
            Industry-Ready <span className="text-gradient-brand">Courses</span>
          </h1>

          <p className="mt-4 text-[color:var(--muted-foreground)]">
            Free, hands-on training in emerging technologies — taught by IIIT Delhi faculty and industry experts.
          </p>
        </div>

        {/* Ongoing Courses */}
        <section>
          <h2 className="mb-6 font-display text-3xl font-bold text-[color:var(--brand-navy)]">
            Ongoing Courses
          </h2>

          <CoursesGrid courses={COURSES} />
        </section>

        {/* Previous Courses */}
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

        {/* Upcoming Courses */}
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

        {/* Student Feedback */}
        <StudentFeedbackSection />
      </div>

    </>
  );
}