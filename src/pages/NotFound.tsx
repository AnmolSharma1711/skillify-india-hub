import { Link } from "react-router-dom";

export default function NotFound() {
  return (
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
  );
}
