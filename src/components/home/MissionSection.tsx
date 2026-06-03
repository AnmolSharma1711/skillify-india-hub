/**
 * MissionSection — three pillars explaining what the programme delivers.
 * Uses GSAP ScrollTrigger-style intersection observer for scroll animations.
 * Light theme: white cards, navy headings, teal icons.
 */
import { useEffect, useRef } from "react";
import { GraduationCap, Code as Code2, Rocket } from "lucide-react";
import { gsap } from "gsap";

const pillars = [
  {
    icon: GraduationCap,
    title: "World-class curriculum",
    body: "Designed by IIIT Delhi faculty with input from industry practitioners.",
    color: "var(--brand-navy)",
  },
  {
    icon: Code2,
    title: "Build, don't just learn",
    body: "Every course ends with a capstone project you can put on your resume.",
    color: "var(--brand-teal)",
  },
  {
    icon: Rocket,
    title: "Launch your career",
    body: "Mentorship, demo days and a recognised certificate to open doors.",
    color: "var(--brand-saffron)",
  },
];

export function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Animate cards in when they scroll into view */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const cards = section.querySelectorAll("[data-card]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              cards,
              { opacity: 0, y: 32 },
              { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
            );
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      {/* Section label */}
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-teal)]">
          Why Skillify
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold text-[color:var(--brand-navy)] sm:text-4xl">
          Everything you need to <span className="text-gradient-brand">succeed</span>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, body, color }) => (
          <div
            key={title}
            data-card
            className="group rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-navy)]"
          >
            {/* Coloured icon badge */}
            <div
              className="grid h-11 w-11 place-items-center rounded-lg text-white"
              style={{ background: `linear-gradient(135deg, ${color}, color-mix(in oklab, ${color} 70%, oklch(0.99 0.003 240)))` }}
            >
              <Icon className="h-5 w-5" />
            </div>
            {/* Saffron accent bar appears on hover */}
            <div
              className="mt-4 h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-14"
              style={{ background: `var(--brand-saffron)` }}
            />
            <h3 className="mt-4 font-display text-lg font-semibold text-[color:var(--brand-navy)]">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
