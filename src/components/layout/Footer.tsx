/**
 * Footer — dark navy section with logos and attribution.
 * Fallback SVG logos for when asset URLs aren't available.
 */
import { useState } from "react";
import iiitdLogo from "@/assets/iiitd-logo.png.asset.json";
import meitLogo from "@/assets/meit-logo.png.asset.json";

/** Fallback logo SVGs */
const IIITD_FALLBACK = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Crect fill='white' width='56' height='56' opacity='0.9'/%3E%3Ctext x='50%25' y='50%25' fill='%231B3A6B' font-size='24' font-weight='bold' text-anchor='middle' dy='.35em' font-family='monospace'%3EIITD%3C/text%3E%3C/svg%3E`;

const MEIT_FALLBACK = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Crect fill='%231B3A6B' width='56' height='56'/%3E%3Ctext x='50%25' y='50%25' fill='white' font-size='18' font-weight='bold' text-anchor='middle' dy='.35em' font-family='monospace'%3EMEIT%3C/text%3E%3C/svg%3E`;

export function Footer() {
  const [logoErrors, setLogoErrors] = useState({ iiitd: false, meit: false });

  const handleLogoError = (key: "iiitd" | "meit", e: React.SyntheticEvent<HTMLImageElement>) => {
    setLogoErrors(p => ({ ...p, [key]: true }));
    e.currentTarget.src = key === "iiitd" ? IIITD_FALLBACK : MEIT_FALLBACK;
  };

  return (
    <footer className="mt-24 bg-[color:var(--brand-navy)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {/* Logos row */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:justify-start">
          <div className="h-14 flex items-center">
            <img
              src={iiitdLogo.url || IIITD_FALLBACK}
              alt="IIIT Delhi"
              className="h-full w-auto object-contain filter brightness-200"
              loading="lazy"
              onError={(e) => handleLogoError("iiitd", e)}
            />
          </div>
          <div className="h-14 flex items-center">
            <img
              src={meitLogo.url || MEIT_FALLBACK}
              alt="Ministry of Electronics and Information Technology"
              className="h-full w-auto object-contain rounded bg-white p-1"
              loading="lazy"
              onError={(e) => handleLogoError("meit", e)}
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
