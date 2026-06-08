import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import heroClassroomBg from "@/assets/hero-classroom-bg.jpeg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(to right, oklch(0.72 0.17 65) 33.33%, oklch(0.97 0.006 240) 33.33% 66.66%, oklch(0.28 0.13 258) 66.66%)",
        }}
      />

      <img
        src={heroClassroomBg}
        alt=""
        aria-hidden
        className="absolute inset-0 z-0 h-full w-full object-cover object-center opacity-[1]"
      />

      <div
        aria-hidden
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.99 0.003 240 / 0.78) 0%, oklch(0.99 0.003 240 / 0.68) 48%, oklch(0.99 0.003 240 / 0.84) 100%)",
        }}
      />

      <div aria-hidden className="absolute inset-0 z-[3] bg-dots opacity-20" />

      <div
        className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-20 text-center sm:px-6 sm:pt-28"
        style={{
          animation: "fadeInUp 0.6s ease-out, staggerChildren 0.8s ease-out",
        }}
      >
        <div
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-teal)]/40 bg-white/80 px-4 py-1.5 text-xs font-semibold text-[color:var(--brand-navy)] shadow-sm backdrop-blur"
          style={{ animationDelay: "0s" }}
        >
          <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand-saffron)]" />
          A MEIT-powered initiative at IIIT Delhi
        </div>

        <h1
          className="mt-6 font-display text-12xl font-bold leading-[1.07] text-[color:var(--brand-navy)] sm:text-12xl md:text-7xl"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-gradient-brand">Skillify:</span> Skill the future of <br />
          <span className="text-gradient-brand">Digital India.</span>
        </h1>

        <p
          className="mx-auto mt-8 max-w-7xl text-xl leading-relaxed text-gray-900 sm:text-2xl"
          style={{ animationDelay: "0.2s" }}
        >
          <b>
          Free Learning | Hands-On Training | Industry-Ready Skills | Portfolio Projects | Certifications
          <br />
          Future Technologies | Career Readiness | Expert Mentorship | IIIT Delhi |
          MeitY | Digital India
          </b>
        </p>
        <div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            to="/courses"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 text-sm font-semibold text-white shadow-[var(--shadow-navy)] transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)] focus:ring-offset-2"
          >
            Explore Courses
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <dl
          className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 text-left"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { k: "3", v: "Industry-ready courses" },
            { k: "100%", v: "Free for students" },
            { k: "IIITD", v: "Certified by faculty" },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-xl border border-[color:var(--brand-navy)]/12 bg-white/85 p-4 shadow-sm backdrop-blur"
            >
              <dt className="font-display text-2xl font-bold text-gradient-brand">{s.k}</dt>
              <dd className="mt-0.5 text-xs text-[color:var(--muted-foreground)]">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes staggerChildren {
          0% {
            animation-delay: 0s !important;
          }
          100% {
            animation-delay: 0.12s !important;
          }
        }
        [style*="animationDelay"] {
          animation: fadeInUp 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
