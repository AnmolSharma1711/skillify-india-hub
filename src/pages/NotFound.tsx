import { Link } from "react-router-dom";
import iiitdLogo from "@/assets/iiitd_logo-removebg-preview.svg";
import meitLogo from "@/assets/meit_logo-removebg-preview.svg";

export default function NotFound() {
  return (
    <>
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-7xl font-bold text-[color:var(--brand-navy)]">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-[color:var(--brand-navy)]">
            Page not found
          </h2>
          <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-[image:var(--gradient-brand)] px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>

      {/* Logos section at the end */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-grid opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.99 0.003 240 / 0.92), oklch(0.99 0.003 240 / 0.88))",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mt-16 border-t border-[color:var(--border)] pt-16">
            <p className="mb-8 text-center text-sm uppercase tracking-widest text-[color:var(--brand-teal)]">
              A partnership between
            </p>
            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">
              <div className="flex h-20 items-center sm:h-24">
                <img src={iiitdLogo} alt="IIIT Delhi" className="h-full w-auto object-contain" />
              </div>
              <span className="font-display text-3xl font-bold text-[color:var(--brand-navy)]">×</span>
              <div className="flex h-16 items-center sm:h-20">
                <img
                  src={meitLogo}
                  alt="Ministry of Electronics and Information Technology"
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
