import { Star, Quote } from "lucide-react";
import { FEEDBACKS } from "@/config/feedbacks";
import { CarouselWrapper } from "@/components/ui/CarouselWrapper";

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

      <CarouselWrapper>
        <div className="flex gap-6 overflow-x-auto pb-6 pt-2 px-2 snap-x snap-mandatory carousel-scrollbar">
          {FEEDBACKS.map((feedback) => (
            <div key={feedback.id} className="w-80 sm:w-96 shrink-0 snap-start">
              <div className="group relative flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
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
            </div>
          ))}
        </div>
      </CarouselWrapper>
    </section>
  );
}
