import { useRef, ReactNode, cloneElement, isValidElement } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CarouselWrapper({ children }: { children: ReactNode }) {
  const scrollRef = useRef<HTMLElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 340 : 420; 
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  if (!isValidElement(children)) {
    return <>{children}</>;
  }

  // Clone the child element to inject the ref and smooth scrolling class
  const scrollableChild = cloneElement(children as React.ReactElement<any>, {
    ref: scrollRef,
    className: `${children.props.className || ''} scroll-smooth`
  });

  return (
    <div className="relative group">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-5 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-lg border border-[color:var(--border)] text-[color:var(--brand-navy)] opacity-0 transition-opacity group-hover:opacity-100 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)]"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {scrollableChild}

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-5 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-lg border border-[color:var(--border)] text-[color:var(--brand-navy)] opacity-0 transition-opacity group-hover:opacity-100 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)]"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
