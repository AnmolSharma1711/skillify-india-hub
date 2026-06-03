/**
 * Mission strip — three pillars explaining what the programme delivers.
 */
import { GraduationCap, Code2, Rocket } from "lucide-react";

const pillars = [
  {
    icon: GraduationCap,
    title: "World-class curriculum",
    body: "Designed by IIIT Delhi faculty with input from industry practitioners.",
  },
  {
    icon: Code2,
    title: "Build, don't just learn",
    body: "Every course ends with a capstone project you can put on your resume.",
  },
  {
    icon: Rocket,
    title: "Launch your career",
    body: "Mentorship, demo days and a recognized certificate to open doors.",
  },
];

export function MissionSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="group rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur transition-colors hover:border-[color:var(--brand-cyan)]/50"
          >
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-background">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}