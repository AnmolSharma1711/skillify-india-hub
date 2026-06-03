import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Skillify IIITD × MEIT" },
      {
        name: "description",
        content:
          "About the IIIT Delhi × MEIT skilling initiative — a mission to upskill India's youth in modern tech.",
      },
      { property: "og:title", content: "About — Skillify IIITD × MEIT" },
      {
        property: "og:description",
        content: "Our mission to upskill India's youth in modern technology.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">
        About the Project
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
        Skilling the youth of <span className="text-gradient-brand">India</span>.
      </h1>

      <div className="prose prose-invert mt-8 max-w-none space-y-5 text-muted-foreground">
        <p>
          <strong className="text-foreground">Skillify</strong> is a joint
          initiative between <strong className="text-foreground">IIIT Delhi</strong>{" "}
          and the{" "}
          <strong className="text-foreground">
            Ministry of Electronics and Information Technology (MEIT)
          </strong>
          . Our goal is simple: give every Indian student — regardless of
          background — free, world-class training in the technologies shaping the
          next decade.
        </p>

        <h2 className="!mt-10 font-display text-2xl font-semibold text-foreground">
          Why this exists
        </h2>
        <p>
          India's digital economy is growing faster than its talent pipeline.
          We believe the answer isn't more theory — it's hands-on, project-based
          learning, taught by people who actually build things. That's exactly
          what this programme delivers.
        </p>

        <h2 className="!mt-10 font-display text-2xl font-semibold text-foreground">
          What you get
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Mentor-led cohorts taught by IIITD faculty and industry experts.</li>
          <li>Real capstone projects that prove your skills to employers.</li>
          <li>A recognized certificate co-issued by IIITD and MEIT.</li>
          <li>A community of learners, mentors and alumni you can grow with.</li>
        </ul>

        <h2 className="!mt-10 font-display text-2xl font-semibold text-foreground">
          Who it's for
        </h2>
        <p>
          College students, recent graduates, and self-learners anywhere in
          India who want to break into Python, Machine Learning or Generative
          AI. No prior experience required for our beginner track.
        </p>
      </div>

      <div className="mt-12">
        <Link
          to="/courses"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 text-sm font-semibold text-background shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
        >
          See the Courses
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}