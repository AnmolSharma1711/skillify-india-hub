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
  tagline: string;
  duration: string;
  level: string;
  highlights: string[];
  syllabus: string[];
  /** Tailwind gradient class fragment used for the card accent. */
  accent: "cyan" | "violet" | "mixed";
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
    tagline: "From zero to writing real-world Python in 6 weeks.",
    duration: "6 weeks · 3 hrs/week",
    level: "Beginner friendly",
    accent: "cyan",
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
      formId: "REPLACE_WITH_PYTHON_FORM_ID",
      fields: {
        name: "entry.1111111111",
        email: "entry.2222222222",
        phone: "entry.3333333333",
        institution: "entry.4444444444",
        year: "entry.5555555555",
        designation: "entry.7777777777",
        motivation: "entry.6666666666",
      },
    },
  },
  {
    id: "ml",
    title: "Machine Learning",
    tagline: "Build real ML models — from regression to neural networks.",
    duration: "8 weeks · 4 hrs/week",
    level: "Intermediate",
    accent: "mixed",
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
      formId: "REPLACE_WITH_ML_FORM_ID",
      fields: {
        name: "entry.1111111111",
        email: "entry.2222222222",
        phone: "entry.3333333333",
        institution: "entry.4444444444",
        year: "entry.5555555555",
        designation: "entry.7777777777",
        motivation: "entry.6666666666",
      },
    },
  },
  {
    id: "genai",
    title: "Generative AI",
    tagline: "Ship AI products with LLMs, embeddings & agents.",
    duration: "6 weeks · 4 hrs/week",
    level: "Intermediate · Advanced",
    accent: "violet",
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
      formId: "REPLACE_WITH_GENAI_FORM_ID",
      fields: {
        name: "entry.1111111111",
        email: "entry.2222222222",
        phone: "entry.3333333333",
        institution: "entry.4444444444",
        year: "entry.5555555555",
        designation: "entry.7777777777",
        motivation: "entry.6666666666",
      },
    },
  },
];

export const getCourse = (id: Course["id"]) =>
  COURSES.find((c) => c.id === id);