/**
 * Course catalog + Google Form mapping.
 *
 * HOW TO WIRE A REAL GOOGLE FORM
 * ------------------------------
 * 1. Create a Google Form with these fields, in this order:
 *      Full name, Email, Phone, Institution, Year of study, Why interested
 * 2. From the form's "Send" dialog copy the link. The ID between
 *      /forms/d/e/<FORM_ID>/viewform   is your `formId`.
 * 3. Click the 3-dot menu → "Get pre-filled link", fill every field with a
 *    dummy value, click "Get link". The resulting URL contains
 *    `entry.123456789=Dummy` for each field — copy the numeric IDs into the
 *    `fields` map below.
 *
 * The placeholder IDs below let the UI render; submissions will silently
 * fail until you paste real IDs.
 */

export type Course = {
  id: "python" | "llm" | "genai" | "vlsi" | "audio";
  title: string;
  category: string;
  tagline: string;
  description?: string;
  duration: string;
  tentativeDates?: string;
  mode?: string;
  level: string;
  highlights: string[];
  syllabus: string[];
  stats?: Array<{ label: string; value: string }>;
  /** Tailwind gradient class fragment used for the card accent. */
  accent: "cyan" | "violet" | "mixed";
  /** Icon name from lucide-react for the course card header */
  icon: string;
  /** Tech stack badges — icon name from lucide-react + label. */
  techs: Array<{ icon: string; label: string }>;
  individualEnrollLink?: string;
  externalLink?: string;
  status?: "active" | "completed" | "upcoming";
};

export const COURSES: Course[] = [
  {
    id: "audio",
    title: "Building the Future of Voice & Audio",
    category: "AI & Audio",
    icon: "Mic",
    tagline: "Transition from the physical foundations of sound to state-of-the-art AI applications",
    description: "This intensive upskilling course bridges classical digital signal processing with modern neural architectures. Move beyond simple classification and build sophisticated, end-to-end generative and analytical audio systems.",
    duration: "10 Days",
    tentativeDates: "1st July 2026 - 12th July 2026",
    mode: "Hybrid",
    level: "Intermediate",
    accent: "cyan",
    stats: [
      { label: "Course Duration", value: "10 Days" },
      { label: "Format", value: "3-4hr Lectures + 3hr Lab" },
      { label: "Eligibility", value: "2nd-year+ UG" },
      { label: "Mode", value: "Online / Hybrid" },
    ],
    techs: [
      { icon: "Brain", label: "PyTorch" },
      { icon: "Waves", label: "Librosa" },
      { icon: "Sparkles", label: "Hugging Face" },
    ],
    highlights: [
      "Master Audio Fundamentals & Signal Mechanics",
      "Implement Sequence-to-Sequence (Seq2Seq) neural models",
      "Build Integrated Apps: Meeting Transcribers, Voice Assistants",
    ],
    syllabus: [
      "Day 1: Signal Mechanics & Spectral Representations",
      "Day 2: Dissecting Audio Domains: Traits & Classical ML",
      "Day 3: Transitioning from Statistical ML to Deep Pipelines",
      "Day 4: Deep Representation Learning & Speech Transformers",
      "Day 5: Synthesis, Embeddings & Production Orchestration",
      "Day 6-10: Project Work & Demo",
    ],
    individualEnrollLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_Vs-XKtxWyfBPEXnf-upHKxnRY3Ymw9d8O7kt_HrXArJKcw/viewform?usp=header",
  },
  {
    id: "python",
    title: "Python Programming Using Emerging Technologies",
    category: "Programming",
    icon: "Code2",
    tagline: "10 Days Comprehensive Curriculum from zero to AI-assisted coding",
    description: "Write syntactically correct Python code, manipulate data structures, perform file operations, analyze data with Matplotlib, and utilize AI-assisted coding tools like GitHub Copilot and Claude to build interactive applications.",
    duration: "10 Days",
    tentativeDates: "1st July 2026 - 12th July 2026",
    mode: "Online (Google Colab)",
    level: "Beginner friendly",
    accent: "cyan",
    stats: [
      { label: "Course Duration", value: "10 Days" },
      { label: "Session Format", value: "1hr lecture + 2hr lab" },
      { label: "Prerequisites", value: "None" },
      { label: "Assessment", value: "Lab Exercises & Final Quiz" },
    ],
    techs: [
      { icon: "Code", label: "Python" },
      { icon: "LineChart", label: "Matplotlib" },
      { icon: "Bot", label: "AI Tools" },
    ],
    highlights: [
      "Foundational Programming & Control Structures",
      "Data Structures & File Operations",
      "Data Analysis & Visualization",
      "Modern Development Tools & AI Pair Programming",
    ],
    syllabus: [
      "Session 1-3: Fundamentals, Variables, Conditionals, Loops",
      "Session 4-6: Lists, Dictionaries, File Operations",
      "Session 7-8: Data Analysis Basics & Visualization",
      "Session 9-10: AI-Assisted Coding Tools & Pair Programming",
    ],
    individualEnrollLink: "https://docs.google.com/forms/d/e/1FAIpQLSdCg_jd7-r4ESQ_9p1NdPMB--5s3ktsC-3rgMYNkZkAvT1mOw/viewform?usp=publish-editor",
  },
  {
    id: "llm",
    title: "LLM Applications and Prompt Design",
    category: "AI & LLMs",
    icon: "Bot",
    tagline: "Design and develop production-ready applications using Large Language Models",
    description: "To enable students to design and develop production-ready applications using Large Language Models. It aims to build strong foundations in prompt engineering, RAG, agent orchestration, and GenAI system design. By the end of the course, learners will be prepared to apply LLM technologies effectively.",
    duration: "10 Days",
    tentativeDates: "1st July 2026 - 12th July 2026",
    mode: "Hybrid",
    level: "Intermediate",
    accent: "mixed",
    stats: [
      { label: "Course Duration", value: "10 Days" },
      { label: "Mode", value: "Online / Hybrid" },
      { label: "Batches Run", value: "Upcoming" },
      { label: "Certification", value: "IIITD + MeitY" },
    ],
    techs: [
      { icon: "Brain", label: "LLMs" },
      { icon: "MessageSquare", label: "Prompting" },
      { icon: "Database", label: "RAG" },
    ],
    highlights: [
      "Production-ready LLM apps",
      "Advanced RAG techniques",
      "Hands-on GenAI project work",
    ],
    syllabus: [
  "Day 1: Foundations of GenAI & LLMs",
  "Day 2: Prompt Engineering & In-Context Learning",
  "Day 3: Retrieval-Augmented Generation (RAG)",
  "Day 4: LLM Orchestration & Agents",
  "Day 5: GenAI SDLC & LLMOps",
  "Day 6-10: Capstone Project, Demo & Evaluation",
],
    individualEnrollLink: "https://docs.google.com/forms/d/e/1FAIpQLSfqXbisGF96ZKGflC2tWYhuRlJWMnCwHflgpTud-j_AQ1FuVg/viewform?usp=publish-editor",
  },
  {
    id: "genai",
    title: "Generative AI",
    category: "AI & LLMs",
    icon: "Sparkles",
    tagline: "Ship AI products with LLMs, embeddings & agents",
    description: "Learn to build and deploy generative AI applications. Master LLM APIs, embeddings, RAG systems, and intelligent agents in this advanced bootcamp",
    duration: "10 Days",
    tentativeDates: "1st July 2026 - 12th July 2026", 
    mode: "Hybrid",
    level: "Intermediate · Advanced",
    accent: "violet",
    stats: [
      { label: "Course Duration", value: "6 Weeks" },
      { label: "Weekly Commitment", value: "4 Hours" },
      { label: "Batches Run", value: "Multiple" },
      { label: "Certification", value: "IIITD + MeitY" },
    ],
    techs: [
      { icon: "Brain", label: "LLMs" },
      { icon: "Network", label: "Embeddings" },
      { icon: "Workflow", label: "Agents" },
    ],
    highlights: [
      "Build with modern LLM APIs",
      "RAG, agents & evaluations",
      "Demo day with industry mentors",
    ],
    syllabus: [
      "Foundations: transformers & tokenization",
      "Prompt engineering & structured outputs",
      "Embeddings & retrieval-augmented generation",
      "Tool use, function calling & agents",
      "Evaluation, safety & guardrails",
      "Capstone: ship a GenAI product",
    ],
    individualEnrollLink: "https://docs.google.com/forms/d/e/1FAIpQLSeNoEM1JGShwcP9vdKnvtj4SyvdYw5d4yQ7tqamJXFGi2h5hA/viewform?usp=publish-editor",
  },
  {
    id: "vlsi",
    title: "VLSI and Embedded Systems",
    category: "Hardware",
    icon: "Cpu",
    tagline: "Deep dive into VLSI design and embedded systems architecture",
    description: "Master the fundamentals and advanced concepts of VLSI design, semiconductor technologies, and embedded systems programming",
    duration: "Flexible",
    level: "Intermediate",
    accent: "cyan",
    highlights: [
      "VLSI Design Flow",
      "Embedded C",
      "Hardware Architecture"
    ],
    syllabus: [
      "Digital Logic Design",
      "VLSI Fundamentals",
      "Embedded Systems Basics",
      "Microcontrollers"
    ],
    techs: [
      { icon: "Cpu", label: "VLSI" },
      { icon: "CircuitBoard", label: "Embedded" }
    ],
    externalLink: "https://iiitd.ac.in/vlsirevisited2026/",
  }
];

export const getCourse = (id: Course["id"]) =>
  COURSES.find((c) => c.id === id);