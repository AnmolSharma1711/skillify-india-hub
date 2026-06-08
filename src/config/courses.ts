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
  id: "python" | "ml" | "genai";
  title: string;
  category: string;
  tagline: string;
  description?: string;
  duration: string;
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
  googleForm: {
    formId: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      institution: string;
      year: string;
      designation: string;
      motivation: string;
    };
  };
};

export const COURSES: Course[] = [
  {
    id: "python",
    title: "Python Programming",
    category: "Programming",
    icon: "Code2",
    tagline: "From zero to writing real-world Python in 6 weeks.",
    description: "Master Python fundamentals through hands-on learning. Build practical projects while learning from IIIT Delhi faculty in this beginner-friendly program.",
    duration: "6 weeks · 3 hrs/week",
    level: "Beginner friendly",
    accent: "cyan",
    stats: [
      { label: "Course Duration", value: "6 Weeks" },
      { label: "Weekly Commitment", value: "3 Hours" },
      { label: "Batches Run", value: "Multiple" },
      { label: "Certification", value: "IIITD + MEIT" },
    ],
    techs: [
      { icon: "Code", label: "Python" },
      { icon: "Database", label: "JSON" },
      { icon: "GitBranch", label: "Git" },
    ],
    highlights: [
      "Live mentor sessions",
      "Hands-on capstone project",
      "Certificate from IIIT Delhi & MEIT",
    ],
    syllabus: [
      "Python syntax, data types & control flow",
      "Functions, modules and the standard library",
      "Working with files, JSON & APIs",
      "Object-oriented programming",
      "Intro to NumPy & Pandas",
      "Capstone: build a CLI data tool",
    ],
    googleForm: {
      formId: "1FAIpQLSdiEY5qM9AHD8aD85RzPeSiVtIdTpEHmgvOXy0JrSbccdRYiw",
      fields: {
        name: "entry.512721180",
        email: "entry.1771973368",
        phone: "entry.1798785379",
        institution: "entry.1696048112",
        year: "entry.1281950865",
        designation: "entry.1289524753",
        motivation: "entry.240615900",
      },
    },
  },
  {
    id: "ml",
    title: "Machine Learning",
    category: "Data Science",
    icon: "Brain",
    tagline: "Build real ML models — from regression to neural networks.",
    description: "Learn machine learning fundamentals and build real-world ML models. Work with industry-standard datasets and compete in Kaggle-style competitions.",
    duration: "8 weeks · 4 hrs/week",
    level: "Intermediate",
    accent: "mixed",
    stats: [
      { label: "Course Duration", value: "8 Weeks" },
      { label: "Weekly Commitment", value: "4 Hours" },
      { label: "Batches Run", value: "Multiple" },
      { label: "Certification", value: "IIITD + MEIT" },
    ],
    techs: [
      { icon: "BarChart3", label: "NumPy" },
      { icon: "TrendingUp", label: "Scikit-learn" },
      { icon: "Zap", label: "PyTorch" },
    ],
    highlights: [
      "Real-world datasets",
      "Kaggle-style competition",
      "Mentorship from IIITD faculty",
    ],
    syllabus: [
      "Math refresher: linear algebra & probability",
      "Supervised learning: regression & classification",
      "Model evaluation, bias-variance, regularization",
      "Unsupervised learning & clustering",
      "Intro to neural networks with PyTorch",
      "Capstone: end-to-end ML pipeline",
    ],
    googleForm: {
      formId: "1FAIpQLSfjxXK5IvmFnynxQ9bjS9UtXuFHvxIZCrpprghkb0obmRIwkA",
      fields: {
        name: "entry.1314184296",
        email: "entry.588026433",
        phone: "entry.518301378",
        institution: "entry.977125670",
        year: "entry.5555555555",
        designation: "entry.1775123361",
        motivation: "entry.1668991990",
      },
    },
  },
  {
    id: "genai",
    title: "Generative AI",
    category: "AI & LLMs",
    icon: "Sparkles",
    tagline: "Ship AI products with LLMs, embeddings & agents.",
    description: "Learn to build and deploy generative AI applications. Master LLM APIs, embeddings, RAG systems, and intelligent agents in this advanced bootcamp.",
    duration: "6 weeks · 4 hrs/week",
    level: "Intermediate · Advanced",
    accent: "violet",
    stats: [
      { label: "Course Duration", value: "6 Weeks" },
      { label: "Weekly Commitment", value: "4 Hours" },
      { label: "Batches Run", value: "Multiple" },
      { label: "Certification", value: "IIITD + MEIT" },
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
    googleForm: {
      formId: "1FAIpQLSfXMj0n-tmbh0Tbla0Y_DSQ3xdkUquf1oKoSn919Twgo-ti0g",
      fields: {
        name: "entry.492756643",
        email: "entry.555274686",
        phone: "entry.1091198701",
        institution: "entry.179070552",
        year: "entry.5555555555",
        designation: "entry.1458402060",
        motivation: "entry.1427641699",
      },
    },
  },
];

export const getCourse = (id: Course["id"]) =>
  COURSES.find((c) => c.id === id);