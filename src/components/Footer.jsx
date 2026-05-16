import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

export function Footer({ scrollTo, hideLinks = false }) {
  const theme = useTheme();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [isBackToTopHovered, setIsBackToTopHovered] = useState(false);

  if (hideLinks) {
    return (
      <footer
        style={{
          padding: "64px 5% 40px",
          background: theme.isDarkMode
            ? "rgba(6, 13, 14, 0.8)"
            : "rgba(241, 248, 249, 0.5)",
          borderTop: `1px solid ${theme.cardBorder}`,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              paddingTop: 32,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 12,
                color: theme.darkMutedText,
              }}
            >
              © {new Date().getFullYear()} Mikko Jardenico. Built with React &
              designed to scale.
            </div>
            <button
              onMouseEnter={() => setIsBackToTopHovered(true)}
              onMouseLeave={() => setIsBackToTopHovered(false)}
              onClick={() => scrollTo("hero")}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 12,
                color: theme.primary,
                background: "none",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.08em",
                transition: "all 0.3s ease",
                transform: isBackToTopHovered
                  ? "translateY(-3px)"
                  : "translateY(0)",
                textDecoration: isBackToTopHovered ? "underline" : "none",
              }}
            >
              ← BACK TO PORTFOLIO
            </button>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer
      style={{
        padding: "64px 5% 40px",
        background: theme.isDarkMode
          ? "rgba(6, 13, 14, 0.8)"
          : "rgba(241, 248, 249, 0.5)",
        borderTop: `1px solid ${theme.cardBorder}`,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: 60,
            marginBottom: 40,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 24,
                fontWeight: 600,
                color: theme.text,
                marginBottom: 12,
              }}
            >
              Mikko Jardenico
            </div>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 13,
                lineHeight: 1.7,
                color: theme.darkMutedText,
                maxWidth: 280,
              }}
            >
              Turning business chaos into documented systems that scale. VA,
              process builder, and ops enthusiast.
            </p>
          </div>

          <div>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: theme.primary,
                marginBottom: 20,
                textTransform: "uppercase",
              }}
            >
              Quick Links
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                ["Home", "hero"],
                ["Services", "services"],
                ["Work", "work"],
                ["About", "about"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onMouseEnter={() => setHoveredLink(id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={() => scrollTo(id)}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 13,
                    color: hoveredLink === id ? theme.primary : theme.mutedText,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.3s ease",
                    transform:
                      hoveredLink === id ? "translateX(4px)" : "translateX(0)",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: theme.primary,
                marginBottom: 20,
                textTransform: "uppercase",
              }}
            >
              Social
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                [
                  "LinkedIn",
                  "https://www.linkedin.com/in/mikko-jardenico-3b3626403/",
                ],
                ["Email", "mailto:mjardenico.dev@gmail.com"],
                ["Facebook", "https://www.facebook.com/ItsMe.Meekoh"],
                ["Instagram", "https://www.instagram.com/itzmeekoh/"],
                ["Github", "https://github.com/mikkodotDev"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredSocial(label)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 13,
                    color:
                      hoveredSocial === label ? theme.primary : theme.mutedText,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    transform:
                      hoveredSocial === label
                        ? "translateX(4px)"
                        : "translateX(0)",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            paddingTop: 48,
            paddingBottom: 32,
            borderTop: `1px solid ${theme.cardBorder}`,
            borderBottom: `1px solid ${theme.cardBorder}`,
            marginBottom: 32,
          }}
        >
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 14,
              lineHeight: 1.7,
              color: theme.mutedText,
              margin: 0,
            }}
          >
            Interested in the fine print?{" "}
            <a
              href="./src/downloads/MikkodotDev-VAResume.pdf"
              download
              style={{
                color: theme.primary,
                fontWeight: 600,
                textDecoration: "none",
                borderBottom: `1px solid ${theme.primary}`,
                transition: "opacity 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = "1";
              }}
            >
              Download my CV here
            </a>
            .
          </p>
        </div>

        <div
          style={{
            paddingTop: 32,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 12,
              color: theme.darkMutedText,
            }}
          >
            © {new Date().getFullYear()} Mikko Jardenico. Built with React &
            designed to scale.
          </div>
          <div
            style={{
              display: "flex",
              gap: 24,
            }}
          >
            <button
              onMouseEnter={() => setIsBackToTopHovered(true)}
              onMouseLeave={() => setIsBackToTopHovered(false)}
              onClick={() => scrollTo("hero")}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 12,
                color: theme.primary,
                background: "none",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.08em",
                transition: "all 0.3s ease",
                transform: isBackToTopHovered
                  ? "translateY(-3px)"
                  : "translateY(0)",
                textDecoration: isBackToTopHovered ? "underline" : "none",
              }}
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
