import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FEEDBACKS = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "B.Tech Student",
    course: "Generative AI",
    content: "The GenAI course completely transformed my understanding of LLMs. Building an actual RAG application in the capstone project gave me the confidence to apply for AI internships.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Recent Graduate",
    course: "Python Programming",
    content: "I started with zero coding experience, and within 6 weeks, I was writing scripts to automate my daily tasks. The IIITD faculty explained complex topics so simply!",
    rating: 5,
  },
  {
    id: 3,
    name: "Rohan Gupta",
    role: "Software Engineer",
    course: "Machine Learning",
    content: "The rigorous curriculum and regular assignments kept me on my toes. The certificate from MeitY added immense value to my resume. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "M.Tech Student",
    course: "VLSI and Embedded Systems",
    content: "Getting hands-on experience with industry-standard EDA tools was the highlight for me. The mentorship sessions were incredibly insightful.",
    rating: 5,
  },
];

export function StudentFeedbackSection() {
  return (
    <section className="mt-28 mb-10 border-t border-[color:var(--border)] pt-20">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-teal)]">
          Student Success
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-[color:var(--brand-navy)] sm:text-4xl">
          Don't just take our word for it
        </h2>
        <p className="mt-4 mx-auto max-w-2xl text-[color:var(--muted-foreground)]">
          Hear from students and professionals who have accelerated their careers through our industry-aligned programs.
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {FEEDBACKS.map((feedback) => (
              <CarouselItem key={feedback.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div 
                  className="group relative flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(feedback.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-[color:var(--muted)] opacity-50 transition-colors group-hover:text-[color:var(--brand-teal)]" />
                  </div>
                  
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                    "{feedback.content}"
                  </p>
                  
                  <div className="mt-auto border-t border-[color:var(--border)] pt-4">
                    <p className="font-semibold text-[color:var(--brand-navy)]">{feedback.name}</p>
                    <p className="text-xs text-[color:var(--muted-foreground)] mt-0.5">{feedback.role} &middot; {feedback.course}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
