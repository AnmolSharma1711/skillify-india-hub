import { Link } from "react-router-dom";
import { ArrowRight, CircleCheck as CheckCircle2 } from "lucide-react";
import { HOME_HIGHLIGHTS, WHY_JOIN } from "@/config/about";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.99 0.003 240 / 0.92), oklch(0.99 0.003 240 / 0.88))",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 w-full">
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-teal)]">
            About the Project
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-[color:var(--brand-navy)] sm:text-5xl">
            Skilling the youth of{" "}
            <span className="text-gradient-brand">India</span>
          </h2>
          <p className="mt-5 w-full text-base leading-relaxed text-[color:var(--muted-foreground)]">
            <strong className="text-[color:var(--brand-navy)]">MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies</strong> is a joint initiative between{" "}
            <strong className="text-[color:var(--brand-navy)]">IIIT Delhi</strong> and the{" "}
            <strong className="text-[color:var(--brand-navy)]">
              Ministry of Electronics and Information Technology (MeitY)
            </strong>
            , aimed at bridging the gap between education and industry Through free, industry-aligned training, hands-on projects, expert mentorship, and emerging technology programs, the initiative empowers students, graduates, and aspiring professionals across India to develop future-ready skills and enhance their career opportunities
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left column: Objectives & Beneficiaries */}
          <div className="space-y-10">
            <div>
              <h3 className="mb-6 font-display text-2xl font-bold text-[color:var(--brand-navy)]">
                Objectives of the Project
              </h3>
              <div className="grid gap-3">
              <b>
                {HOME_HIGHLIGHTS.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 rounded-xl border border-[color:var(--border)] bg-white/80 p-4 shadow-sm backdrop-blur"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--brand-teal)]" />
                    <span className="text-sm leading-relaxed text-[color:var(--muted-foreground)]">{highlight}</span>
                  </div>
                ))}
                </b>
              </div>
            </div>
          </div>

          {/* Right column: What you get */}
          <div className="space-y-10">
            <div>
              <h3 className="mb-6 font-display text-2xl font-bold text-[color:var(--brand-navy)]">
                What you get
              </h3>
              <div className="grid gap-3">
                <b>
                {WHY_JOIN.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 rounded-xl border border-[color:var(--border)] bg-white/80 p-4 shadow-sm backdrop-blur"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                      style={{ background: "var(--brand-saffron)" }}
                    />
                    <span className="text-sm leading-relaxed text-[color:var(--muted-foreground)]">{item}</span>
                  </div>
                ))}
              </b>
              </div>
            </div>

            <Link
              to="/enroll"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 text-sm font-semibold text-white shadow-[var(--shadow-navy)] transition-transform hover:scale-[1.02]"
            >
              See Ongoing Courses
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
