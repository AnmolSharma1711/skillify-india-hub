/**
 * Footer — minimal, links + attribution. Rendered globally in __root.tsx.
 */
export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} IIIT Delhi · An initiative powered by
          <span className="text-foreground"> MEIT</span>.
        </p>
        <p className="text-xs">
          Skilling the youth of India · Built for learners, by educators.
        </p>
      </div>
    </footer>
  );
}