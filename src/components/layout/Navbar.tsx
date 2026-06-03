/**
 * Top navigation bar — sticky, translucent, dark.
 * Used inside __root.tsx so it renders on every route.
 */
import { Link } from "@tanstack/react-router";
import iiitdLogo from "@/assets/iiitd-logo.png.asset.json";
import meitLogo from "@/assets/meit-logo.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={iiitdLogo.url}
            alt="IIIT Delhi"
            className="h-9 w-auto"
          />
          <span className="h-7 w-px bg-border/80" aria-hidden />
          <img
            src={meitLogo.url}
            alt="Ministry of Electronics and Information Technology"
            className="h-9 w-auto bg-white/90 rounded px-1 py-0.5"
          />
          <span className="ml-2 hidden font-display text-sm font-semibold tracking-tight sm:inline">
            Skillify
          </span>
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}