export interface Feedback {
  id: number | string;
  name: string;
  role: string;
  course: string;
  content: string;
  rating: number;
}

export const FEEDBACKS: Feedback[] = [
  // {
  //   id: 1,
  //   name: "Aarav Sharma",
  //   role: "B.Tech Student",
  //   course: "Generative AI",
  //   content: "The GenAI course completely transformed my understanding of LLMs. Building an actual RAG application in the capstone project gave me the confidence to apply for AI internships.",
  //   rating: 5,
  // },
  // {
  //   id: 2,
  //   name: "Priya Patel",
  //   role: "Recent Graduate",
  //   course: "Python Programming",
  //   content: "I started with zero coding experience, and within 6 weeks, I was writing scripts to automate my daily tasks. The IIITD faculty explained complex topics so simply!",
  //   rating: 5,
  // },
  // {
  //   id: 3,
  //   name: "Rohan Gupta",
  //   role: "Software Engineer",
  //   course: "Machine Learning",
  //   content: "The rigorous curriculum and regular assignments kept me on my toes. The certificate from MeitY added immense value to my resume. Highly recommended!",
  //   rating: 5,
  // },
  // {
  //   id: 4,
  //   name: "Sneha Reddy",
  //   role: "M.Tech Student",
  //   course: "VLSI and Embedded Systems",
  //   content: "Getting hands-on experience with industry-standard EDA tools was the highlight for me. The mentorship sessions were incredibly insightful.",
  //   rating: 5,
  // },
];
