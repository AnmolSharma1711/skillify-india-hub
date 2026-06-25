import { Star, Quote } from "lucide-react";
import { FEEDBACKS } from "@/config/feedbacks";

export function FeedbackMarquee() {
  return (
    <section className="mt-28 mb-10 overflow-hidden bg-[color:var(--muted)] py-12 border-y border-[color:var(--border)]">
      <div className="mb-8 text-center">
        <h2 className="font-display text-3xl font-bold text-[color:var(--brand-navy)]">
          Student Success
        </h2>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative flex max-w-[100vw] overflow-hidden">
        <div className="flex animate-marquee w-max gap-6 px-6 hover:animate-pause">
          {/* Duplicate feedbacks to create seamless infinite scroll */}
          {[...FEEDBACKS, ...FEEDBACKS].map((feedback, index) => (
            <div key={`${feedback.id}-${index}`} className="w-80 sm:w-96 shrink-0">
              <div className="group relative flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-sm transition-all hover:shadow-md">
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
      </div>
    </section>
  );
}
