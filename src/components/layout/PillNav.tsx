import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";
import "./PillNav.css";

interface DropdownItem {
  label: string;
  href?: string;
  description?: string;
  comingSoon?: boolean;
}

interface PillNavItem {
  label: string;
  href?: string;
  ariaLabel?: string;
  dropdown?: DropdownItem[];
}

interface PillNavProps {
  logo: string;
  logoAlt?: string;
  trailingLogo?: string;
  trailingLogoAlt?: string;
  items: PillNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
}

export function PillNav({
  logo,
  logoAlt = "Logo",
  trailingLogo,
  trailingLogoAlt = "Logo",
  items,
  className = "",
  ease = "power3.easeOut",
  baseColor = "#ffffff",
  pillColor = "#1B3A6B",
  hoveredPillTextColor = "#1B3A6B",
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true,
}: PillNavProps) {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const tlRefs = useRef<gsap.core.Timeline[]>([]);
  const activeTweenRefs = useRef<gsap.core.Tween[]>([]);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const dropdownTimers = useRef<Record<number, ReturnType<typeof setTimeout>>>({});

  const location = useLocation();
  const activeHref = location.pathname;

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector(".pill-label");
        const white = pill.querySelector(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" }, 0);
        if (label) tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: "auto" }, 0);
        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();
    window.addEventListener("resize", layout);
    document.fonts?.ready.then(layout).catch(() => {});

    const menu = mobileMenuRef.current;
    if (menu) gsap.set(menu, { visibility: "hidden", opacity: 0 });

    if (initialLoadAnimation) {
      const logoEl = logoRef.current;
      const navItems = navItemsRef.current;
      if (logoEl) {
        gsap.set(logoEl, { scale: 0 });
        gsap.to(logoEl, { scale: 1, duration: 0.5, ease });
      }
      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: "hidden" });
        gsap.to(navItems, { 
          width: "auto", 
          duration: 0.5, 
          ease,
          onComplete: () => gsap.set(navItems, { clearProps: "overflow" })
        });
      }
    }

    return () => window.removeEventListener("resize", layout);
  }, [items, ease, initialLoadAnimation]);

  // Close dropdown when route changes
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: "auto",
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease, overwrite: "auto" });
  };

  const handleDropdownEnter = (i: number) => {
    clearTimeout(dropdownTimers.current[i]);
    setActiveDropdown(i);
  };

  const handleDropdownLeave = (i: number) => {
    dropdownTimers.current[i] = setTimeout(() => {
      setActiveDropdown((prev) => (prev === i ? null : prev));
    }, 120);
  };

  const toggleMobileMenu = () => {
    const next = !isMobileMenuOpen;
    setIsMobileMenuOpen(next);
    if (!next) setMobileExpanded(null);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll(".hamburger-line");
      if (next) {
        gsap.to(lines[0], { rotation: 45, y: 3.5, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3.5, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (next) {
        gsap.set(menu, { visibility: "visible" });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.25, ease }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          duration: 0.2,
          ease,
          onComplete: () => gsap.set(menu, { visibility: "hidden" }),
        });
      }
    }

    onMobileMenuClick?.();
  };

  const closeMobileMenu = () => {
    if (!isMobileMenuOpen) return;
    setIsMobileMenuOpen(false);
    setMobileExpanded(null);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll(".hamburger-line");
      gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
      gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
    }

    if (menu) {
      gsap.to(menu, {
        opacity: 0,
        y: 10,
        duration: 0.2,
        ease,
        onComplete: () => gsap.set(menu, { visibility: "hidden" }),
      });
    }
  };

  const cssVars = {
    ["--base" as string]: baseColor,
    ["--pill-bg" as string]: pillColor,
    ["--hover-text" as string]: hoveredPillTextColor,
    ["--pill-text" as string]: resolvedPillTextColor,
  };

  const isActive = (href?: string) => {
    if (!href) return false;
    return href === "/" ? activeHref === "/" : activeHref.startsWith(href);
  };

  const isDropdownActive = (item: PillNavItem) => {
    if (!item.dropdown) return false;
    return item.dropdown.some((d) => d.href && isActive(d.href));
  };

  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${className}`} aria-label="Primary" style={cssVars}>
        <div className="hidden sm:flex items-center mr-6">
          <Link to="/" aria-label="Home">
            <img src={logo} alt={logoAlt} className="h-16 w-auto object-contain transition-transform hover:scale-105" />
          </Link>
        </div>

        <div className="pill-nav-items desktop-only" ref={navItemsRef}>
          <ul className="pill-list" role="menubar">
            {items.map((item, i) => (
              <li
                key={item.label}
                role="none"
                className="pill-list-item"
                onMouseEnter={() => {
                  handleEnter(i);
                  if (item.dropdown) handleDropdownEnter(i);
                }}
                onMouseLeave={() => {
                  handleLeave(i);
                  if (item.dropdown) handleDropdownLeave(i);
                }}
              >
                {item.dropdown ? (
                  /* Dropdown trigger pill — use div to avoid browser button style overrides */
                  <div
                    role="menuitem"
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === i}
                    className={`pill pill-dropdown-trigger${isDropdownActive(item) ? " is-active" : ""}`}
                    onClick={() => setActiveDropdown(activeDropdown === i ? null : i)}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setActiveDropdown(activeDropdown === i ? null : i)}
                  >
                    <span
                      className="hover-circle"
                      aria-hidden="true"
                      ref={(el) => { circleRefs.current[i] = el; }}
                    />
                    <span className="label-stack">
                      <span className="pill-label pill-label-with-icon">
                        {item.label}
                        <ChevronDown
                          className="pill-chevron"
                          style={{ transform: activeDropdown === i ? "rotate(180deg)" : "rotate(0deg)" }}
                        />
                      </span>
                      <span className="pill-label-hover pill-label-with-icon" aria-hidden="true">
                        {item.label}
                        <ChevronDown className="pill-chevron" />
                      </span>
                    </span>
                  </div>
                ) : (
                  /* Regular link pill */
                  <Link
                    role="menuitem"
                    to={item.href!}
                    className={`pill${isActive(item.href) ? " is-active" : ""}`}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    <span
                      className="hover-circle"
                      aria-hidden="true"
                      ref={(el) => { circleRefs.current[i] = el; }}
                    />
                    <span className="label-stack">
                      <span className="pill-label">{item.label}</span>
                      <span className="pill-label-hover" aria-hidden="true">
                        {item.label}
                      </span>
                    </span>
                  </Link>
                )}

                {/* Desktop dropdown panel */}
                {item.dropdown && activeDropdown === i && (
                  <div
                    className="pill-dropdown-panel"
                    onMouseEnter={() => handleDropdownEnter(i)}
                    onMouseLeave={() => handleDropdownLeave(i)}
                    role="menu"
                  >
                    {item.dropdown.map((d) => (
                      <div key={d.label} className="pill-dropdown-item-wrapper">
                        {d.comingSoon ? (
                          <span className="pill-dropdown-item pill-dropdown-item--disabled">
                            <span className="pill-dropdown-item-label">{d.label}</span>
                            {d.description && (
                              <span className="pill-dropdown-item-desc">{d.description}</span>
                            )}
                            <span className="pill-dropdown-badge">Opening Soon</span>
                          </span>
                        ) : (
                          <Link
                            to={d.href!}
                            className="pill-dropdown-item"
                            role="menuitem"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="pill-dropdown-item-label">{d.label}</span>
                            {d.description && (
                              <span className="pill-dropdown-item-desc">{d.description}</span>
                            )}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Large MeitY Logo */}
        {trailingLogo && (
          <div className="hidden sm:flex items-center ml-6">
            <img src={trailingLogo} alt={trailingLogoAlt} className="h-16 w-auto object-contain transition-transform hover:scale-105" />
          </div>
        )}

        <button
          className="mobile-menu-button mobile-only"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          ref={hamburgerRef}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className="mobile-menu-popover mobile-only" ref={mobileMenuRef} style={cssVars}>
        <ul className="mobile-menu-list">
          {items.map((item, i) => (
            <li key={item.label}>
              {item.dropdown ? (
                <>
                  <button
                    className={`mobile-menu-link mobile-menu-link--dropdown${
                      isDropdownActive(item) ? " is-active" : ""
                    }`}
                    onClick={() => setMobileExpanded(mobileExpanded === i ? null : i)}
                  >
                    {item.label}
                    <ChevronDown
                      className="mobile-chevron"
                      style={{ transform: mobileExpanded === i ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>
                  {mobileExpanded === i && (
                    <ul className="mobile-submenu">
                      {item.dropdown.map((d) => (
                        <li key={d.label}>
                          {d.comingSoon ? (
                            <span className="mobile-menu-link mobile-menu-link--sub mobile-menu-link--disabled">
                              {d.label}
                              <span className="pill-dropdown-badge">Soon</span>
                            </span>
                          ) : (
                            <Link
                              to={d.href!}
                              className="mobile-menu-link mobile-menu-link--sub"
                              onClick={closeMobileMenu}
                            >
                              {d.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item.href!}
                  className={`mobile-menu-link${isActive(item.href) ? " is-active" : ""}`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
