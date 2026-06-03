import iiitdLogo from "../../assets/iiitd_logo-removebg-preview.svg";
import meitLogo from "../../assets/meit_logo-removebg-preview.svg";

export function Footer() {
  return (
    <footer className="mt-24 bg-[color:var(--brand-navy)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {/* Logos row */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:justify-start">
          <div className="h-20 flex items-center">
            <img
              src={iiitdLogo}
              alt="IIIT Delhi"
              className="h-full w-auto object-contain"
              loading="lazy"
            />
          </div>
          <div className="h-16 flex items-center">
            <img
              src={meitLogo}
              alt="Ministry of Electronics and Information Technology"
              className="h-full w-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Divider */}
        <div
          aria-hidden
          className="my-6 h-px w-full"
          style={{
            background:
              "linear-gradient(to right, oklch(0.72 0.17 65) 33.33%, oklch(0.97 0.006 240 / 0.25) 33.33% 66.66%, oklch(0.52 0.11 215) 66.66%)",
          }}
        />

        {/* Bottom row */}
        <div className="flex flex-col gap-2 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} IIIT Delhi · An initiative powered by{" "}
            <span className="text-white">MEIT</span>.
          </p>
          <p className="text-xs text-white/50">
            Skilling the youth of India · Built for learners, by educators.
          </p>
        </div>
      </div>
    </footer>
  );
}
