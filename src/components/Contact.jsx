import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { useTheme } from "../hooks/useTheme";

export function Contact() {
  const theme = useTheme();
  const [hoveredOption, setHoveredOption] = useState(null);

  return (
    <section
      id="contact"
      style={{
        padding: "100px 5%",
        background: theme.background,
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ marginBottom: 16 }} className="section-label">
              Let's Talk
            </div>
            <div
              style={{
                width: 48,
                height: 1,
                background: theme.primary,
                margin: "0 auto 32px",
              }}
            />
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: theme.text,
                marginBottom: 24,
              }}
            >
              Ready to Build Something
              <br />
              <em style={{ color: theme.primary }}>Amazing</em>
            </h2>
            <div
              style={{
                display: "inline-block",
                padding: "12px 24px",
                background: theme.primary + "15",
                border: `1px solid ${theme.primary}30`,
                borderRadius: 4,
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                color: theme.text,
              }}
            >
              ✓ I respond within <strong>24 hours</strong>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 32,
              marginTop: 48,
            }}
          >
            {/* Email Option */}
            <div
              className="card"
              onMouseEnter={() => setHoveredOption("email")}
              onMouseLeave={() => setHoveredOption(null)}
              style={{
                padding: 32,
                background: theme.cardBg,
                border: `1px solid ${hoveredOption === "email" ? theme.primary : theme.cardBorder}`,
                borderRadius: "3px",
                transition: "all 0.3s ease",
                cursor: "pointer",
                transform:
                  hoveredOption === "email"
                    ? "translateY(-8px)"
                    : "translateY(0)",
                boxShadow:
                  hoveredOption === "email"
                    ? `0 16px 32px ${theme.primary}20`
                    : "0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 12,
                  color: theme.primary,
                  letterSpacing: "0.1em",
                  marginBottom: 16,
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                📧 Email
              </div>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 13,
                  color: theme.text,
                  marginBottom: 20,
                  opacity: 0.8,
                  lineHeight: 1.5,
                }}
              >
                Quick questions? Email me anytime
              </p>
              <a
                href="mailto:mjardenico.dev@gmail.com"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: theme.primary,
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                mjardenico.dev@gmail.com →
              </a>
            </div>

            {/* LinkedIn Option */}
            <div
              className="card"
              onMouseEnter={() => setHoveredOption("linkedin")}
              onMouseLeave={() => setHoveredOption(null)}
              style={{
                padding: 32,
                background: theme.cardBg,
                border: `1px solid ${hoveredOption === "linkedin" ? theme.primary : theme.cardBorder}`,
                borderRadius: "3px",
                transition: "all 0.3s ease",
                cursor: "pointer",
                transform:
                  hoveredOption === "linkedin"
                    ? "translateY(-8px)"
                    : "translateY(0)",
                boxShadow:
                  hoveredOption === "linkedin"
                    ? `0 16px 32px ${theme.primary}20`
                    : "0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 12,
                  color: theme.primary,
                  letterSpacing: "0.1em",
                  marginBottom: 16,
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                💼 LinkedIn
              </div>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 13,
                  color: theme.text,
                  marginBottom: 20,
                  opacity: 0.8,
                  lineHeight: 1.5,
                }}
              >
                Connect with me professionally
              </p>
              <a
                href="https://www.linkedin.com/in/mikko-jardenico-3b3626403/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: theme.primary,
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                View Profile →
              </a>
            </div>

            {/* Calendly Option */}
            <div
              className="card"
              onMouseEnter={() => setHoveredOption("calendly")}
              onMouseLeave={() => setHoveredOption(null)}
              style={{
                padding: 32,
                background: theme.cardBg,
                border: `1px solid ${hoveredOption === "calendly" ? theme.primary : theme.cardBorder}`,
                borderRadius: "3px",
                transition: "all 0.3s ease",
                cursor: "pointer",
                transform:
                  hoveredOption === "calendly"
                    ? "translateY(-8px)"
                    : "translateY(0)",
                boxShadow:
                  hoveredOption === "calendly"
                    ? `0 16px 32px ${theme.primary}20`
                    : "0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 12,
                  color: theme.primary,
                  letterSpacing: "0.1em",
                  marginBottom: 16,
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                📅 Schedule
              </div>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 13,
                  color: theme.text,
                  marginBottom: 20,
                  opacity: 0.8,
                  lineHeight: 1.5,
                }}
              >
                Let's discuss your project (free consultation)
              </p>
              <a
                href="https://calendly.com/mjardenico-dev/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: theme.primary,
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                Book Now →
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
