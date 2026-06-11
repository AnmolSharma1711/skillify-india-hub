import { FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { X, Linkedin } from "lucide-react";

import {
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";

import { toast } from "sonner";
import member1 from "@/assets/coordinator.png";
import member2 from "@/assets/coordinator.png";
import member3 from "@/assets/coordinator.png";
import member4 from "@/assets/coordinator.png";

const teamMembers = [
  {
    name: "Team member 1",
    photo: member1,
  },
  {
    name: "Team member 2",
    photo: member2,
  },
  {
    name: "Team Member 3",
    photo: member3,
  },
  {
    name: "Team Member 4",
    photo: member4,
  },
];

import iiitdLogo from "@/assets/iiitd_logo-removebg-preview.svg";
import meitLogo from "@/assets/meit_logo-removebg-preview.svg";
import coordinatorPhoto from "@/assets/coordinator.png";

export default function Contact() {
  const [showProfile, setShowProfile] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    toast.success(
      "Thanks. Your contact details are ready to be wired to a live endpoint."
    );
  };

  return (
    <>
      <Helmet>
        <title>Contact - MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies. IIITD &amp; MeitY</title>
        <meta
          name="description"
          content="Contact the MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies. programme team for course, enrollment, and partnership queries."
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
              <span className="text-gradient-brand">MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies.?</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--muted-foreground)]">
              Send course, enrollment, or partnership questions and we will
              keep the next step clear.
              </p>
              <p>
              Email us at{" "}<a
                href="mailto:info@example.com"
                className="text-base sm:text-xl text-[color:var(--brand-teal)] hover:underline"
              >
                info@example.com
              </a>
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">

  {/* Left Contact Card */}
  <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-sm">
    <h2 className="font-display text-xl font-semibold text-[color:var(--brand-navy)]">
      Contact Information
    </h2>

    <div className="mt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-5 text-center sm:text-left">
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[color:var(--brand-navy)] break-words">
          Miss Rutali 
        </h3>

        <p className="mt-1 text-lg sm:text-2xl text-[color:var(--muted-foreground)]">
          Programme Coordinator
        </p>
      </div>

     <div className="flex flex-col items-center gap-3 flex-shrink-0">
  <img
    src={coordinatorPhoto}
    alt="Faculty Coordinator"
    className="h-28 w-28 sm:h-48 sm:w-48 rounded-full object-cover border-4 border-[color:var(--brand-teal)] shadow-lg"
  />

  <button
    onClick={() => setShowProfile(true)}
    className="rounded-full bg-[color:var(--brand-teal)] px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
  >
    View Profile
  </button>
</div>
</div>

    <div className="mt-8 space-y-5">
      <div className="flex items-start gap-3">
        <Mail className="mt-1 sm:mt-0.5 h-5 w-5 flex-shrink-0 text-[color:var(--brand-teal)]" />

        <div className="min-w-0">
          <p className="text-lg sm:text-xl font-semibold text-[color:var(--brand-navy)]">
            Email
          </p>

          <a
            href="mailto:info@example.com"
            className="text-base sm:text-xl text-[color:var(--brand-teal)] hover:underline break-all"
          >
            info@example.com
          </a>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <MapPin className="mt-1 sm:mt-0.5 h-5 w-5 flex-shrink-0 text-[color:var(--brand-teal)]" />

        <div>
          <p className="text-lg sm:text-xl font-semibold text-[color:var(--brand-navy)]">
            Address
          </p>

          <p className="text-base sm:text-xl text-[color:var(--muted-foreground)]">
            IIIT Delhi, Okhla Phase III, Industrial Estate, New Delhi - 110020
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Right Contact Card */}
  <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-sm">
    <h2 className="font-display text-xl font-semibold text-[color:var(--brand-navy)]">
      Contact Information
    </h2>

    <div className="mt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-5 text-center sm:text-left">
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[color:var(--brand-navy)] break-words">
          Mr. Arun Kumar Bashambu
        </h3>

        <p className="mt-1 text-lg sm:text-2xl text-[color:var(--muted-foreground)]">
          Faculty Coordinator
        </p>
      </div>

   <div className="flex flex-col items-center gap-3 flex-shrink-0">
  <img
    src={coordinatorPhoto}
    alt="Faculty Coordinator"
    className="h-28 w-28 sm:h-48 sm:w-48 rounded-full object-cover border-4 border-[color:var(--brand-teal)] shadow-lg"
  />

  <button
    onClick={() => setShowProfile(true)}
    className="rounded-full bg-[color:var(--brand-teal)] px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
  >
    View Profile
  </button>
</div>
</div>

    <div className="mt-8 space-y-5">
      <div className="flex items-start gap-3">
        <Mail className="mt-1 sm:mt-0.5 h-5 w-5 flex-shrink-0 text-[color:var(--brand-teal)]" />

        <div className="min-w-0">
          <p className="text-lg sm:text-xl font-semibold text-[color:var(--brand-navy)]">
            Email
          </p>

          <a
            href="mailto:arunbashambu@rediffmail.com"
            className="text-base sm:text-xl text-[color:var(--brand-teal)] hover:underline break-all"
          >
            arunbashambu@rediffmail.com
          </a>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <MapPin className="mt-1 sm:mt-0.5 h-5 w-5 flex-shrink-0 text-[color:var(--brand-teal)]" />

        <div>
          <p className="text-lg sm:text-xl font-semibold text-[color:var(--brand-navy)]">
            Address
          </p>

          <p className="text-base sm:text-xl text-[color:var(--muted-foreground)]">
            IIIT Delhi, Okhla Phase III, Industrial Estate, New Delhi - 110020
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>

{/* Team Section */}
<div className="mt-20">
  <div className="text-center">
    <h2 className="font-display text-5xl font-bold text-[color:var(--brand-navy)]">
      Our Team
    </h2>

    <p className="mt-3 text-lg text-[color:var(--muted-foreground)]">
      Meet the people behind the programme.
    </p>
  </div>

  <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-10">
    {teamMembers.map((member) => (
      <div
        key={member.name}
        className="w-[220px] flex flex-col items-center text-center"
      >
        <img
          src={member.photo}
          alt={member.name}
          className="h-36 w-36 sm:h-44 sm:w-44 rounded-full object-cover border-4 border-[color:var(--brand-teal)] shadow-md"
        />

        <h3 className="mt-4 text-lg font-semibold text-[color:var(--brand-navy)]">
          {member.name}
        </h3>
      </div>
    ))}
  </div>
</div>
</div>
      </section>

      {/* Profile Modal */}
      {showProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setShowProfile(false)} 
          />
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="absolute right-4 top-4 z-10">
              <button 
                onClick={() => setShowProfile(false)}
                className="rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors backdrop-blur-md"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Header */}
            <div className="bg-[image:var(--gradient-brand)] px-6 py-8 sm:px-10 sm:py-10 text-white">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src={coordinatorPhoto}
                  alt="Prof. Arun Kumar Bashambu"
                  className="h-28 w-28 sm:h-32 sm:w-32 rounded-full object-cover border-4 border-white/20 shadow-xl flex-shrink-0"
                />
                <div className="text-center sm:text-left pt-2">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold">Prof. Arun Kumar Bashambu</h2>
                  <p className="mt-1 text-white/80 font-medium text-lg">Faculty Coordinator</p>
                  <div className="mt-4 flex items-center justify-center sm:justify-start gap-3">
                    <a href="mailto:arunbashambu@rediffmail.com" className="inline-flex items-center justify-center rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition-colors" title="Send Email">
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-8 sm:px-10 max-h-[60vh] overflow-y-auto">
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-xl font-bold text-[color:var(--brand-navy)] flex items-center gap-2">
                    <span className="h-6 w-1.5 rounded-full bg-[color:var(--brand-teal)]"></span>
                    Experience & Impact
                  </h3>
                  <p className="mt-3 text-[color:var(--muted-foreground)] leading-relaxed">
                    With over two decades of distinguished experience in academia and industry research, Prof. Bashambu has been instrumental in bridging the gap between theoretical knowledge and practical industry applications. He has successfully led multiple capacity-building programs and spearheads initiatives in emerging technologies.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-[color:var(--brand-navy)] flex items-center gap-2">
                    <span className="h-6 w-1.5 rounded-full bg-[color:var(--brand-teal)]"></span>
                    Education
                  </h3>
                  <ul className="mt-3 space-y-3 text-[color:var(--muted-foreground)]">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-teal)] flex-shrink-0" />
                      <span>Ph.D. in Computer Science & Engineering</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-teal)] flex-shrink-0" />
                      <span>M.Tech in Information Technology</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-[color:var(--brand-navy)] flex items-center gap-2">
                    <span className="h-6 w-1.5 rounded-full bg-[color:var(--brand-teal)]"></span>
                    Key Areas of Expertise
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Emerging Technologies", "Capacity Building", "Curriculum Design", "Industry Partnerships"].map((skill) => (
                      <span key={skill} className="rounded-full border border-[color:var(--border)] bg-[color:var(--muted)] px-3 py-1 text-sm font-medium text-[color:var(--brand-navy)]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}