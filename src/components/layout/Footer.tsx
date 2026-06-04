import { Link } from "react-router-dom";
import iiitdLogo from "../../assets/iiitd_logo-removebg-preview.svg";
import meitLogo from "../../assets/meit_footer.svg";

export function Footer() {
  return (
    <footer className="mt-24 bg-[color:var(--brand-navy)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:justify-start">
          <div className="flex h-20 items-center">
            <img
              src={iiitdLogo}
              alt="IIIT Delhi"
              className="h-full w-auto object-contain"
              loading="lazy"
            />
          </div>
          <div className="flex h-28 items-center">
            <img
              src={meitLogo}
              alt="Ministry of Electronics and Information Technology"
              className="h-full w-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div
          aria-hidden
          className="my-6 h-px w-full"
          style={{
            background:
              "linear-gradient(to right, oklch(0.72 0.17 65) 33.33%, oklch(0.97 0.006 240 / 0.25) 33.33% 66.66%, oklch(0.52 0.11 215) 66.66%)",
          }}
        />

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
