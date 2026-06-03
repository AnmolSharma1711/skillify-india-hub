import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About" },
] as const;

const IIITD_LOGO_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' fill='%231B3A6B'/%3E%3Ctext x='50%25' y='50%25' fill='white' font-family='system-ui' font-size='16' font-weight='bold' text-anchor='middle' dominant-baseline='middle'%3EIITD%3C/text%3E%3C/svg%3E";

const MEIT_LOGO_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' fill='%231B3A6B'/%3E%3Ctext x='50%25' y='50%25' fill='white' font-family='system-ui' font-size='12' font-weight='bold' text-anchor='middle' dominant-baseline='middle'%3EMEIT%3C/text%3E%3C/svg%3E";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "border-b border-[color:var(--border)] shadow-md" : "border-b border-transparent"
      }`}
    >
      <div
        aria-hidden
        className="h-0.5 w-full"
        style={{
          background:
            "linear-gradient(to right, oklch(0.72 0.17 65) 33.33%, oklch(0.93 0.008 240) 33.33% 66.66%, oklch(0.28 0.13 258) 66.66%)",
        }}
      />

      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 items-center">
            <img src={IIITD_LOGO_SVG} alt="IIIT Delhi" className="h-full w-auto object-contain" />
          </div>
          <span aria-hidden className="h-6 w-px bg-[color:var(--border)]" />
          <div className="flex h-10 items-center">
            <img
              src={MEIT_LOGO_SVG}
              alt="Ministry of Electronics and Information Technology"
              className="h-full w-auto rounded bg-white object-contain px-1 py-0.5"
            />
          </div>
          <span className="ml-2 hidden font-display text-sm font-bold tracking-tight text-[color:var(--brand-navy)] sm:inline">
            Skillify
          </span>
        </Link>

        <ul className="flex items-center gap-0.5 sm:gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-md px-3 py-2 text-sm font-semibold text-[color:var(--brand-navy)] bg-[color:var(--muted)]"
                    : "rounded-md px-3 py-2 text-sm font-medium text-[color:var(--muted-foreground)] transition-colors hover:text-[color:var(--brand-navy)]"
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}

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
