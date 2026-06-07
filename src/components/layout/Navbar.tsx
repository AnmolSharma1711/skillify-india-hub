import { PillNav } from "./PillNav";
import iiitdLogo from "../../assets/iiitd_logo-removebg-preview.svg";
import meitLogo from "../../assets/meit_logo-removebg-preview.svg";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <header className="relative z-50 w-full">
      {/* Indian tricolour accent bar */}
      <div
        aria-hidden
        className="h-0.5 w-full"
        style={{
          background:
            "linear-gradient(to right, oklch(0.72 0.17 65) 33.33%, oklch(0.97 0.006 240) 33.33% 66.66%, oklch(0.28 0.13 258) 66.66%)",
        }}
      />

      <div className="flex w-full justify-center py-4 px-4">
        <PillNav
          logo={iiitdLogo}
          logoAlt="IIIT Delhi"
          trailingLogo={meitLogo}
          trailingLogoAlt="Ministry of Electronics and Information Technology"
          items={NAV_ITEMS}
          baseColor="#ffffff"
          pillColor="#1B3A6B"
          hoveredPillTextColor="#1B3A6B"
          initialLoadAnimation={true}
        />
      </div>
    </header>
  );
}
