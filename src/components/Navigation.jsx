import { useState } from "react";
import { NAV_LINKS } from "../data/constants";
import { useTheme } from "../hooks/useTheme";

export function Navigation({ scrolled, menuOpen, setMenuOpen, scrollTo }) {
  const theme = useTheme();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isHireMeHovered, setIsHireMeHovered] = useState(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 5%",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled
            ? theme.isDarkMode
              ? "rgba(6,13,14,0.92)"
              : "rgba(241,248,249,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? `1px solid ${theme.cardBorder}`
            : "1px solid transparent",
          transition: "all 0.3s",
        }}
      >
        <div onClick={() => scrollTo("hero")} style={{ cursor: "pointer" }}>
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: theme.text,
            }}
          >
            Mikko <span style={{ color: theme.primary }}> Jardenico</span>
          </span>
        </div>

        <div
          className="hide-mobile"
          style={{ display: "flex", gap: 40, alignItems: "center" }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              className="nav-link"
              onMouseEnter={() => setHoveredLink(l)}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => scrollTo(l.toLowerCase())}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 13,
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: hoveredLink === l ? theme.primary : theme.mutedText,
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
                background: "none",
                border: "none",
                transform:
                  hoveredLink === l ? "translateY(-2px)" : "translateY(0)",
              }}
            >
              {l}
            </button>
          ))}
          <button
            onMouseEnter={() => setIsHireMeHovered(true)}
            onMouseLeave={() => setIsHireMeHovered(false)}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "10px 24px",
              background: theme.primary,
              color: theme.isDarkMode ? theme.background : theme.text,
              border: "none",
              borderRadius: "2px",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              display: "inline-block",
              transform: isHireMeHovered ? "scale(1.08)" : "scale(1)",
              boxShadow: isHireMeHovered
                ? `0 16px 32px ${theme.primary}40`
                : "0 4px 12px rgba(0,0,0,0.1)",
            }}
            onClick={() => scrollTo("contact")}
          >
            Hire Me
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: theme.text,
            fontSize: 28,
            cursor: "pointer",
            display: "none",
          }}
          className="show-mobile"
        >
          <div
            style={{
              width: 24,
              height: 2,
              background: theme.text,
              transition: "all 0.3s",
              transform: menuOpen
                ? "rotate(45deg) translateY(10px)"
                : "rotate(0)",
            }}
          />
          <div
            style={{
              width: 24,
              height: 2,
              background: theme.text,
              transition: "all 0.3s",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <div
            style={{
              width: 24,
              height: 2,
              background: theme.text,
              transition: "all 0.3s",
              transform: menuOpen
                ? "rotate(-45deg) translateY(-10px)"
                : "rotate(0)",
            }}
          />
        </button>
      </nav>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: theme.background,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
            animation: "menuFadeIn 0.3s ease-out",
          }}
        >
          {NAV_LINKS.map((l, index) => (
            <button
              key={l}
              onMouseEnter={() => setHoveredLink(l)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 18,
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: hoveredLink === l ? theme.primary : theme.mutedText,
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
                background: "none",
                border: "none",
                transform: hoveredLink === l ? "scale(1.1)" : "scale(1)",
                animation: `menuItemSlideIn 0.4s ease-out ${index * 0.08}s backwards`,
              }}
              onClick={() => {
                scrollTo(l.toLowerCase());
                setMenuOpen(false);
              }}
            >
              {l}
            </button>
          ))}
          <button
            onMouseEnter={() => setIsHireMeHovered(true)}
            onMouseLeave={() => setIsHireMeHovered(false)}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "10px 24px",
              background: theme.primary,
              color: theme.isDarkMode ? theme.background : theme.text,
              border: "none",
              borderRadius: "2px",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              display: "inline-block",
              transform: isHireMeHovered ? "scale(1.08)" : "scale(1)",
              boxShadow: isHireMeHovered
                ? `0 16px 32px ${theme.primary}40`
                : "0 4px 12px rgba(0,0,0,0.1)",
              animation: `menuItemSlideIn 0.4s ease-out ${NAV_LINKS.length * 0.08}s backwards`,
            }}
            onClick={() => {
              scrollTo("contact");
              setMenuOpen(false);
            }}
          >
            Hire Me
          </button>
        </div>
      )}
    </>
  );
}
