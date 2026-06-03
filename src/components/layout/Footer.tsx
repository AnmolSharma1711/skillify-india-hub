/**
 * Footer — dark navy section with logos and attribution.
 */
// SVG logos embedded as data URIs
const IIITD_LOGO_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='white' opacity='0.9'/%3E%3Ctext x='50%25' y='50%25' fill='%231B3A6B' font-family='system-ui' font-size='24' font-weight='bold' text-anchor='middle' dominant-baseline='middle'%3EIITD%3C/text%3E%3C/svg%3E";

const MEIT_LOGO_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%231B3A6B'/%3E%3Ctext x='50%25' y='50%25' fill='white' font-family='system-ui' font-size='16' font-weight='bold' text-anchor='middle' dominant-baseline='middle'%3EMEIT%3C/text%3E%3C/svg%3E";

export function Footer() {
  return (
    <footer className="mt-24 bg-[color:var(--brand-navy)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {/* Logos row */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:justify-start">
          <div className="h-16 flex items-center">
            <img
              src={IIITD_LOGO_SVG}
              alt="IIIT Delhi"
              className="h-full w-auto object-contain filter brightness-200"
              loading="lazy"
            />
          </div>
          <div className="h-16 flex items-center">
            <img
              src={MEIT_LOGO_SVG}
              alt="Ministry of Electronics and Information Technology"
              className="h-full w-auto object-contain rounded bg-white p-1"
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
