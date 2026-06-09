import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="mt-16 bg-[color:var(--brand-navy)]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-5 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p>
              &copy; {new Date().getFullYear()} IIIT Delhi - An initiative powered by{" "}
              <span className="text-white">MEIT</span>.
            </p>
            <p className="mt-1 text-xs text-white/50">
              Skilling the youth of India - Built for learners, by educators.
            </p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-4 text-sm">
            <Link className="transition-colors hover:text-white" to="/">
              Home
            </Link>
            <Link className="transition-colors hover:text-white" to="/courses">
              Courses
            </Link>
            <Link className="transition-colors hover:text-white" to="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
