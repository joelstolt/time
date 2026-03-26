"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const navLinks = [
  {
    label: "Privatperson",
    href: "/tjanster",
    children: [
      { label: "Hemstädning", href: "/hemstadning" },
      { label: "Fönsterputs", href: "/fonsterputs" },
      { label: "Storstädning", href: "/storstadning" },
      { label: "Flyttstädning", href: "/flyttstadning" },
      { label: "Visningsstädning", href: "/visningsstadning" },
      { label: "Köksstädning", href: "/koksstadning" },
      { label: "Badrumsstädning", href: "/badrumsstadning" },
      { label: "Mattvätt", href: "/mattvatt" },
    ],
  },
  {
    label: "Företag",
    href: "/foretag",
    children: [
      { label: "Kontorstädning", href: "/kontorstadning" },
      { label: "Fönsterputs", href: "/fonsterputs-foretag" },
      { label: "Fönsterputs butik", href: "/fonsterputs-butik" },
      { label: "Butiksservice", href: "/butiksservice" },
      { label: "Storstädning", href: "/storstadning-foretag" },
      { label: "Flyttstädning", href: "/flyttstadning-foretag" },
      { label: "Golvvård", href: "/golvvard" },
      { label: "Trappstädning", href: "/trappstadning" },
    ],
  },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  let dropdownTimeout = null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

  const handleMouseEnter = (index) => {
    clearTimeout(dropdownTimeout);
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      {/* Top bar */}
      <div style={{ background: "var(--color-primary)", color: "rgba(255,255,255,0.85)", fontSize: 13 }}>
        <div className="container" style={{ padding: "8px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <a href="tel:08-377176" style={{ color: "inherit", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
              <Phone size={13} /> 08-37 71 76
            </a>
            <a href="mailto:info@timeoutservice.se" className="topbar-email" style={{ color: "inherit", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
              <Mail size={13} /> info@timeoutservice.se
            </a>
          </div>
          <span className="topbar-hours">Mån–Fre 08:00–17:00</span>
        </div>
      </div>

      {/* Scroll progress */}
      <motion.div className="scroll-progress" style={{ scaleX: useSpring(useScroll().scrollYProgress, { stiffness: 100, damping: 30 }) }} />

      {/* Main nav */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: scrolled ? "rgba(255,255,255,0.85)" : "white",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "2px solid var(--color-accent)" : "1px solid var(--color-border-light)",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.06)" : "none",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <nav className="container header-nav" style={{ padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          {/* Logo */}
          <a href="/" className="header-logo" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
            <img
              src="/timeout-logo-2.png"
              alt="Timeout Service AB"
              style={{ height: 64, width: "auto" }}
            />
          </a>

          {/* Desktop nav */}
          <ul style={{ listStyle: "none", gap: 24, alignItems: "center", display: "flex" }} className="desktop-nav">
            {navLinks.map((link, i) => (
              <li
                key={link.label}
                style={{ position: "relative" }}
                onMouseEnter={() => link.children && handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={link.href}
                  style={{
                    color: "var(--color-heading)",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "8px 0",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} />}
                </a>

                {link.children && activeDropdown === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: -16,
                      background: "white",
                      border: "1px solid var(--color-border-light)",
                      boxShadow: "0 16px 48px rgba(0,0,0,0.1)",
                      borderRadius: 10,
                      padding: "8px 0",
                      minWidth: 230,
                      zIndex: 50,
                    }}
                  >
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        style={{
                          display: "block",
                          padding: "10px 24px",
                          color: "var(--color-body)",
                          textDecoration: "none",
                          fontSize: 14,
                          transition: "all 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "var(--color-primary-light)";
                          e.target.style.color = "var(--color-primary)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "transparent";
                          e.target.style.color = "var(--color-body)";
                        }}
                      >
                        {child.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA + Mobile toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <a href="/boka" className="btn-primary" style={{ padding: "8px 18px", fontSize: 13 }} id="header-cta">
              Boka städning
            </a>
            <button
              id="header-hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-heading)", padding: 4 }}
              aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "white",
              zIndex: 200,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Mobile header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", borderBottom: "1px solid var(--color-border-light)" }}>
              <a href="/" style={{ textDecoration: "none" }}>
                <img src="/timeout-logo-2.png" alt="Timeout Service AB" style={{ height: 48, width: "auto" }} />
              </a>
              <button
                onClick={() => setMobileOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-heading)", padding: 4 }}
                aria-label="Stäng meny"
              >
                <X size={28} />
              </button>
            </div>

            {/* Links */}
            <div style={{ flex: 1, overflowY: "auto", padding: "8px 20px" }}>
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      fontFamily: "var(--font-heading)",
                      color: "var(--color-heading)",
                      textDecoration: "none",
                      display: "block",
                      padding: "16px 0 12px",
                      borderBottom: link.children ? "none" : "1px solid var(--color-border-light)",
                    }}
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <div style={{ paddingLeft: 12, marginBottom: 8, borderBottom: "1px solid var(--color-border-light)", paddingBottom: 12 }}>
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          style={{
                            display: "block",
                            padding: "8px 0",
                            color: "var(--color-muted)",
                            textDecoration: "none",
                            fontSize: 15,
                          }}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div style={{ padding: "16px 20px", borderTop: "1px solid var(--color-border-light)", display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="tel:08-377176" className="btn-secondary" style={{ justifyContent: "center", width: "100%" }}>
                <Phone size={16} /> Ring 08-37 71 76
              </a>
              <a href="/boka" className="btn-primary" style={{ justifyContent: "center", width: "100%" }}>
                Boka städning
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
