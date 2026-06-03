/**
 * Top navigation bar — sticky, translucent, dark.
 * Used inside __root.tsx so it renders on every route.
 */
import { Link } from "@tanstack/react-router";

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
          <span className="grid h-8 w-8 place-items-center rounded-md bg-[image:var(--gradient-brand)] font-display text-sm font-bold text-background">
            S
          </span>
          <span className="font-display text-base font-semibold tracking-tight">
            Skillify <span className="text-muted-foreground">· IIITD × MEIT</span>
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