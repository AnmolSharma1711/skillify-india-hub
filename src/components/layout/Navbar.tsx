/**
 * Top navigation bar — sticky, white/light, professional government style.
 * Gains a box-shadow on scroll for depth.
 * Uses fallback logos when asset URLs aren't available.
 */
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import iiitdLogo from "@/assets/iiitd-logo.png.asset.json";
import meitLogo from "@/assets/meit-logo.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About" },
] as const;

/** Fallback logo SVGs for when asset URLs don't load */
const IIITD_FALLBACK = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect fill='%231B3A6B' width='40' height='40'/%3E%3Ctext x='50%25' y='50%25' fill='white' font-size='20' font-weight='bold' text-anchor='middle' dy='.3em'%3EIITD%3C/text%3E%3C/svg%3E`;

const MEIT_FALLBACK = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect fill='%231B3A6B' width='40' height='40'/%3E%3Ctext x='50%25' y='50%25' fill='white' font-size='18' font-weight='bold' text-anchor='middle' dy='.3em'%3EMEIT%3C/text%3E%3C/svg%3E`;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [logosLoaded, setLogosLoaded] = useState({ iiitd: false, meit: false });

  /* Add shadow once user scrolls past 20px */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white transition-shadow duration-300 ${
        scrolled
          ? "shadow-md border-b border-[color:var(--border)]"
          : "border-b border-transparent"
      }`}
    >
      {/* India tricolor stripe */}
      <div
        aria-hidden
        className="h-0.5 w-full"
        style={{
          background:
            "linear-gradient(to right, oklch(0.72 0.17 65) 33.33%, oklch(0.93 0.008 240) 33.33% 66.66%, oklch(0.28 0.13 258) 66.66%)",
        }}
      />

      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Brand logos */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 flex items-center">
            <img
              src={iiitdLogo.url || IIITD_FALLBACK}
              alt="IIIT Delhi"
              className="h-full w-auto object-contain"
              loading="lazy"
              onError={(e) => {
                setLogosLoaded(p => ({ ...p, iiitd: true }));
                (e.target as HTMLImageElement).src = IIITD_FALLBACK;
              }}
            />
          </div>
          <span
            aria-hidden
            className="h-6 w-px bg-[color:var(--border)]"
          />
          <div className="h-10 flex items-center">
            <img
              src={meitLogo.url || MEIT_FALLBACK}
              alt="Ministry of Electronics and Information Technology"
              className="h-full w-auto object-contain rounded bg-white px-1 py-0.5"
              loading="lazy"
              onError={(e) => {
                setLogosLoaded(p => ({ ...p, meit: true }));
                (e.target as HTMLImageElement).src = MEIT_FALLBACK;
              }}
            />
          </div>
          <span className="ml-2 hidden font-display text-sm font-bold tracking-tight text-[color:var(--brand-navy)] sm:inline">
            Skillify
          </span>
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-0.5 sm:gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-[color:var(--muted-foreground)] transition-colors hover:text-[color:var(--brand-navy)]"
                activeProps={{
                  className:
                    "rounded-md px-3 py-2 text-sm font-semibold text-[color:var(--brand-navy)] bg-[color:var(--muted)]",
                }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}

          {/* Enroll CTA */}
          <li className="ml-3 hidden sm:block">
            <Link
              to="/courses"
              className="inline-flex h-9 items-center rounded-md bg-[image:var(--gradient-brand)] px-4 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
            >
              Enroll Free
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
