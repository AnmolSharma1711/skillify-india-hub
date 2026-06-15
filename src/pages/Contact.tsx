import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { X, Mail, MapPin } from "lucide-react";

import member1 from "@/assets/vikram_sir.jpeg";
import member2 from "@/assets/sujay_sir.jpeg";
import coordinatorPhoto1 from "@/assets/coordinator.png";
import coordinatorPhoto2 from "@/assets/rudali_mam.jpg";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  email?: string;
  address?: string;
  experience?: string;
  education?: string[];
  skills?: string[];
}

const PIS_AND_COPIS: TeamMember[] = [
  {
    id: "vikram_goyal",
    name: "Dr. Vikram Goyal",
    role: "PI",
    photo: member1,
    email: "vikram@iiitd.ac.in",
  },
  {
    id: "sujay_deb",
    name: "Dr. Sujay Deb",
    role: "Co-PI",
    photo: member2,
    email: "sdeb@iiitd.ac.in",
  },
];

const COORDINATORS: TeamMember[] = [
  {
    id: "rudali_huidrom",
    name: "Dr. Rudali Huidrom",
    role: "Faculty Coordinator",
    photo: coordinatorPhoto2,
    email: "rudali.huidrom@iiitd.ac.in",
    address: "IIIT Delhi, Okhla Phase III, Industrial Estate, New Delhi - 110020",
    experience: "Dr. Rudali Huidrom is a dedicated faculty coordinator instrumental in bridging the gap between theoretical knowledge and practical industry applications. She spearheads initiatives in emerging technologies.",
    education: [
      "Ph.D. in related field",
      "M.Tech / Higher Education Degree"
    ],
    skills: ["Emerging Technologies", "Capacity Building", "Curriculum Design", "Mentorship"]
  },
  // Add more coordinators here just by copying the object above!
];

export default function Contact() {
  const [selectedProfile, setSelectedProfile] = useState<TeamMember | null>(null);

  return (
    <>
      <Helmet>
        <title>Contact - MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies IIITD &amp; MeitY</title>
        <meta
          name="description"
          content="Contact the MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies programme team for course, enrollment, and partnership queries."
        />
      </Helmet>

      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-70" />

        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.99 0.003 240 / 0.90), oklch(0.99 0.003 240 / 0.98))",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-teal)]">
              Contact
            </p>

            <h1 className="mt-3 font-display text-4xl font-bold text-[color:var(--brand-navy)] sm:text-5xl">
              Have a question about{" "}
              <span className="text-gradient-brand">MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies?</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--muted-foreground)]">
              Send course, enrollment, or partnership questions and we will
              keep the next step clear
            </p>
            <p>
              Email us at{" "}
              <a
                href="mailto:saksham.tech@iiitd.ac.in"
                className="text-base sm:text-xl text-[color:var(--brand-teal)] hover:underline"
              >
                saksham.tech@iiitd.ac.in
              </a>
            </p>
          </div>

          {/* Team Section (PIs and CoPIs) */}
          <div className="mt-20">
            <div className="text-center">
              <h2 className="font-display text-5xl font-bold text-[color:var(--brand-navy)]">
                PIs and CoPIs
              </h2>

              <p className="mt-3 text-lg text-[color:var(--muted-foreground)]">
                Meet the people behind the programme.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-10">
              {PIS_AND_COPIS.map((member) => (
                <div
                  key={member.id}
                  className="w-[220px] flex flex-col items-center text-center cursor-pointer group"
                  onClick={() => setSelectedProfile(member)}
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-36 w-36 sm:h-44 sm:w-44 rounded-full object-cover border-4 border-[color:var(--brand-teal)] shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border-[color:var(--brand-navy)]"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-[color:var(--brand-navy)] group-hover:text-[color:var(--brand-teal)] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-[color:var(--muted-foreground)]">
                    {member.role}
                  </p>
                  <span className="mt-2 text-xs font-semibold text-[color:var(--brand-teal)] opacity-0 group-hover:opacity-100 transition-opacity">
                    View Profile &rarr;
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Coordinators Section */}
          <div className="mt-28">
            <div className="text-center">
              <h2 className="font-display text-5xl font-bold text-[color:var(--brand-navy)]">
                Programme Coordinators
              </h2>
            </div>
            
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {COORDINATORS.map((coordinator) => (
                <div key={coordinator.id} className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                  <h2 className="font-display text-xl font-semibold text-[color:var(--brand-navy)]">
                    Contact Information
                  </h2>

                  <div className="mt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-5 text-center sm:text-left">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[color:var(--brand-navy)] break-words">
                        {coordinator.name}
                      </h3>
                      <p className="mt-1 text-lg text-[color:var(--muted-foreground)]">
                        {coordinator.role}
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-3 flex-shrink-0">
                      <img
                        src={coordinator.photo}
                        alt={coordinator.name}
                        className="h-28 w-28 sm:h-48 sm:w-48 rounded-full object-cover border-4 border-[color:var(--brand-teal)] shadow-lg"
                      />

                      <button
                        onClick={() => setSelectedProfile(coordinator)}
                        className="rounded-full bg-[color:var(--brand-teal)] px-5 py-2 text-sm font-semibold text-white hover:bg-[color:var(--brand-navy)] transition-colors"
                      >
                        View Profile
                      </button>
                    </div>
                  </div>

                  <div className="mt-8 space-y-5 flex-1">
                    {coordinator.email && (
                      <div className="flex items-start gap-3">
                        <Mail className="mt-1 sm:mt-0.5 h-5 w-5 flex-shrink-0 text-[color:var(--brand-teal)]" />
                        <div className="min-w-0">
                          <p className="text-lg sm:text-xl font-semibold text-[color:var(--brand-navy)]">
                            Email
                          </p>
                          <a
                            href={`mailto:${coordinator.email}`}
                            className="text-base sm:text-xl text-[color:var(--brand-teal)] hover:underline break-all"
                          >
                            {coordinator.email}
                          </a>
                        </div>
                      </div>
                    )}

                    {coordinator.address && (
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-1 sm:mt-0.5 h-5 w-5 flex-shrink-0 text-[color:var(--brand-teal)]" />
                        <div>
                          <p className="text-lg sm:text-xl font-semibold text-[color:var(--brand-navy)]">
                            Address
                          </p>
                          <p className="text-base sm:text-xl text-[color:var(--muted-foreground)]">
                            {coordinator.address}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Profile Modal */}
      {selectedProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProfile(null)}
          />
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="absolute right-4 top-4 z-10">
              <button
                onClick={() => setSelectedProfile(null)}
                className="rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors backdrop-blur-md"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Header */}
            <div className="bg-[image:var(--gradient-brand)] px-6 py-8 sm:px-10 sm:py-10 text-white">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src={selectedProfile.photo}
                  alt={selectedProfile.name}
                  className="h-28 w-28 sm:h-32 sm:w-32 rounded-full object-cover border-4 border-white/20 shadow-xl flex-shrink-0"
                />
                <div className="text-center sm:text-left pt-2">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold">{selectedProfile.name}</h2>
                  <p className="mt-1 text-white/80 font-medium text-lg">{selectedProfile.role}</p>
                  
                  {selectedProfile.email && (
                    <div className="mt-4 flex items-center justify-center sm:justify-start gap-3">
                      <a
                        href={`mailto:${selectedProfile.email}`}
                        className="inline-flex items-center justify-center rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition-colors"
                        title="Send Email"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-8 sm:px-10 max-h-[60vh] overflow-y-auto">
              <div className="space-y-8">
                
                {selectedProfile.experience ? (
                  <div>
                    <h3 className="font-display text-xl font-bold text-[color:var(--brand-navy)] flex items-center gap-2">
                      <span className="h-6 w-1.5 rounded-full bg-[color:var(--brand-teal)]"></span>
                      Experience &amp; Impact
                    </h3>
                    <p className="mt-3 text-[color:var(--muted-foreground)] leading-relaxed">
                      {selectedProfile.experience}
                    </p>
                  </div>
                ) : (
                  <div>
                    <h3 className="font-display text-xl font-bold text-[color:var(--brand-navy)] flex items-center gap-2">
                      <span className="h-6 w-1.5 rounded-full bg-[color:var(--brand-teal)]"></span>
                      About
                    </h3>
                    <p className="mt-3 text-[color:var(--muted-foreground)] leading-relaxed">
                      {selectedProfile.name} is serving as {selectedProfile.role} for the IIITD &amp; MeitY initiative.
                    </p>
                  </div>
                )}

                {selectedProfile.education && selectedProfile.education.length > 0 && (
                  <div>
                    <h3 className="font-display text-xl font-bold text-[color:var(--brand-navy)] flex items-center gap-2">
                      <span className="h-6 w-1.5 rounded-full bg-[color:var(--brand-teal)]"></span>
                      Education
                    </h3>
                    <ul className="mt-3 space-y-3 text-[color:var(--muted-foreground)]">
                      {selectedProfile.education.map((edu, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-teal)] flex-shrink-0" />
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProfile.skills && selectedProfile.skills.length > 0 && (
                  <div>
                    <h3 className="font-display text-xl font-bold text-[color:var(--brand-navy)] flex items-center gap-2">
                      <span className="h-6 w-1.5 rounded-full bg-[color:var(--brand-teal)]"></span>
                      Key Areas of Expertise
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedProfile.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-[color:var(--border)] bg-[color:var(--muted)] px-3 py-1 text-sm font-medium text-[color:var(--brand-navy)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}