import React from "react";
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
  experience?: React.ReactNode;
  education?: string[];
  skills?: string[];
}

export const PIS_AND_COPIS: TeamMember[] = [
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

export const COORDINATORS: TeamMember[] = [
  {
    id: "rudali_huidrom",
    name: "Dr. Rudali Huidrom",
    role: "Faculty Coordinator",
    photo: coordinatorPhoto2,
    email: "rudali.huidrom@iiitd.ac.in",
    address: "IIIT Delhi, Okhla Phase III, Industrial Estate, New Delhi - 110020",
    experience: (
      <div className="space-y-4 text-[color:var(--muted-foreground)] leading-relaxed">
        <p>
          Rudali Huidrom is a computer scientist and engineer specializing in <strong className="text-[color:var(--brand-navy)]">natural language processing</strong>, <strong className="text-[color:var(--brand-navy)]">machine translation</strong>, and <strong className="text-[color:var(--brand-navy)]">natural language generation</strong>.
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-teal)] flex-shrink-0" />
            <span><strong className="text-[color:var(--brand-navy)]">Research Focus:</strong> Generating semantically consistent text and evaluating it, including using large language models as evaluators.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-teal)] flex-shrink-0" />
            <span><strong className="text-[color:var(--brand-navy)]">Open-Source Impact:</strong> Created the largest open-source datasets for Manipuri (Meiteilon) and developed its first ALBERT-based model and fastText embeddings.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-teal)] flex-shrink-0" />
            <span><strong className="text-[color:var(--brand-navy)]">Core Mission:</strong> Passionate about building inclusive technologies and preserving minority languages through digital empowerment.</span>
          </li>
        </ul>
      </div>
    ),
    education: [
      "PhD from the ADAPT Research Centre at Dublin City University"
    ],
    skills: ["Natural Language Processing", "Machine Translation", "NLG", "LLM Evaluation", "Multilingual AI"]
  },
  {
    id: "arun_bashambu",
    name: "Mr. Arun Kumar Bashambu",
    role: "Faculty Coordinator",
    photo: coordinatorPhoto1,
    email: "arunbashambu@rediffmail.com",
    address: "IIIT Delhi, Okhla Phase III, Industrial Estate, New Delhi - 110020",
    experience: (
      <div className="space-y-4 text-[color:var(--muted-foreground)] leading-relaxed">
        <p>
          25+ years experienced professional apt in leading <strong className="text-[color:var(--brand-navy)]">enterprise digital and process transformation</strong> programmes — from strategy through operationalisation to scaled enterprise adoption.
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-teal)] flex-shrink-0" />
            <span><strong className="text-[color:var(--brand-navy)]">AI-Led Transformation:</strong> Proven track record driving AI-led transformation at scale across enterprise environments.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-teal)] flex-shrink-0" />
            <span><strong className="text-[color:var(--brand-navy)]">Emerging Technologies:</strong> Deep, hands-on understanding of GenAI/LLMs, agentic workflows, and cloud-native architectures.</span>
          </li>
        </ul>
      </div>
    ),
    education: [
      "Ph.D. in Computer Science & Engineering",
      "M.Tech in Information Technology"
    ],
    skills: ["Emerging Technologies", "Capacity Building", "Curriculum Design", "Industry Partnerships"]
  }
];
