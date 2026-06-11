import { CircleCheck as CheckCircle2 } from "lucide-react";

export function ProjectOverview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      {/* Project Title */}
      <div className="mb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-teal)]">
          About the Project
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold text-[color:var(--brand-navy)] sm:text-5xl">
          MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies: MultiLevel Capacity Building and Skilling in{" "}
          <span className="text-gradient-brand">Industry-aligned Emerging Technologies</span>
        </h2>
      </div>

      {/* Objectives */}
      <div className="mb-20">
        <h3 className="mb-8 font-display text-2xl font-bold text-[color:var(--brand-navy)]">
          Objectives of the Project
        </h3>
        <ul className="space-y-4">
          {[
            "Training of engineering, non-engineering students, as well as unemployed youth, through the seven selected academic institutes and C-DAC, Kolkata",
            "Provide industry-focused training in the Electronics and IT domains to engineering, non-engineering students, as well as unemployed youth",
            "To equip students with cutting-edge skills through practical and hands-on training",
            "Development of industry ready courses by esteemed institutions",
            "To conduct Bootcamps in different domains",
            "To conduct a job fair by inviting industries to enhance the employability of the candidates",
            "To conduct capacity building and skill enhancement workshops with help of industry experts",
          ].map((objective, idx) => (
            <li key={idx} className="flex gap-4">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[color:var(--brand-teal)]" />
              <span className="text-[color:var(--muted-foreground)]">{objective}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Targeted Beneficiaries */}
      <div>
        <h3 className="mb-8 font-display text-2xl font-bold text-[color:var(--brand-navy)]">
          Targeted Beneficiaries
        </h3>
        <p className="mb-6 text-[color:var(--muted-foreground)]">
          Engineering and non-engineering students, as well as unemployed youth as per the details below:
        </p>
        <ul className="space-y-3">
          {[
            "Final/Pre-final year undergraduate and postgraduate Engineering students",
            "Engineering graduates (up to two years of post-graduation)",
            "Students of non-engineering Final/Pre-final year MCA, BCA, MBA, BBA, MCOM, BCOM, M.Sc, B.Sc etc (up to two years of graduation)",
            "PhD Scholars, Research Scholars",
            "Unemployed youth, and Working professionals for skill upgradation",
          ].map((beneficiary, idx) => (
            <li key={idx} className="flex gap-4">
              <div className="h-2 w-2 flex-shrink-0 rounded-full bg-[color:var(--brand-teal)] mt-2" />
              <span className="text-[color:var(--muted-foreground)]">{beneficiary}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
