import { FadeIn } from "./FadeIn";
import { useTheme } from "../hooks/useTheme";
import aboutImage from "../assets/images/AboutmeIMG.JPG";

export function About() {
  const theme = useTheme();

  return (
    <section
      id="about"
      style={{
        padding: "100px 5%",
        background: theme.background,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        <FadeIn>
          <div style={{ position: "relative" }}>
            <div
              style={{
                background: theme.cardBg,
                border: `1px solid ${theme.cardBorder}`,
                borderRadius: 3,
                padding: "48px 40px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -1,
                  left: 40,
                  right: 40,
                  height: 3,
                  background: `linear-gradient(90deg, ${theme.primary}, transparent)`,
                  borderRadius: "0 0 2px 2px",
                }}
              />
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: theme.primary,
                  letterSpacing: "0.12em",
                  marginBottom: 24,
                }}
              >
                MY STORY
              </div>
              <blockquote
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 24,
                  fontWeight: 400,
                  lineHeight: 1.55,
                  color: theme.text,
                  fontStyle: "italic",
                  borderLeft: `2px solid ${theme.primary}30`,
                  paddingLeft: 24,
                }}
              >
                "I started as a developer — writing code, debugging systems, and
                building applications from the ground up. Over time, I realized
                something: most businesses don't fail because of bad tech — they
                struggle because of broken processes around it."
              </blockquote>
              <div
                style={{
                  marginTop: 24,
                  paddingTop: 24,
                  borderTop: `1px solid ${theme.cardBorder}`,
                  display: "flex",
                  gap: 16,
                }}
              >
                <img
                  src={aboutImage}
                  alt="Mikko Jardenico"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: `2px solid ${theme.primary}`,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13,
                      color: theme.text,
                    }}
                  >
                    Mikko Jardenico
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      color: theme.darkMutedText,
                    }}
                  >
                    Developer · Systems & Automation Specialist
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div>
            <div style={{ marginBottom: 16 }} className="section-label">
              About Me
            </div>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(28px, 3vw, 44px)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: theme.text,
                marginBottom: 24,
              }}
            >
              The Bridge Between
              <br />
              <em style={{ color: theme.primary }}>Dev & Operations</em>
            </h2>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                lineHeight: 1.85,
                color: theme.darkMutedText,
                marginBottom: 20,
              }}
            >
              With 3+ years of experience across development and operations, I
              sit at the intersection of both worlds. I don't just understand
              how to build systems — I understand why they're needed and where
              they break.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                lineHeight: 1.85,
                color: theme.darkMutedText,
                marginBottom: 40,
              }}
            >
              I've worked with e-commerce founders, SaaS teams, and solo
              entrepreneurs to streamline their workflows — transforming messy,
              manual processes into efficient, automated systems that actually
              scale.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {[
                "Process Auditing & Workflow Optimization",
                "API Integrations & Automation (Zapier, Make, Webhooks)",
                "Shopify Store Management & Performance Optimization",
                "Operations Support & System Design",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontSize: 14,
                    color: theme.mutedText,
                  }}
                >
                  <span
                    style={{
                      color: theme.primary,
                      fontSize: 16,
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
