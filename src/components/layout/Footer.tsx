/**
 * Footer — minimal, links + attribution. Rendered globally in __root.tsx.
 */
import iiitdLogo from "@/assets/iiitd-logo.png.asset.json";
import meitLogo from "@/assets/meit-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 text-sm text-muted-foreground sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:justify-start">
          <img src={iiitdLogo.url} alt="IIIT Delhi" className="h-12 w-auto" />
          <img
            src={meitLogo.url}
            alt="Ministry of Electronics and Information Technology"
            className="h-12 w-auto bg-white/90 rounded px-2 py-1"
          />
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} IIIT Delhi · An initiative powered by
          <span className="text-foreground"> MEIT</span>.
        </p>
        <p className="text-xs">
          Skilling the youth of India · Built for learners, by educators.
        </p>
        </div>
      </div>
    </footer>
  );
}