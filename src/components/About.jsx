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
                "I'm passionate about creating beautiful digital experiences
                that actually work. From pixel-perfect designs to responsive
                builds, I help small businesses and creators establish a strong
                online presence with modern, user-friendly websites."
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
                    Frontend Developer · UI/UX Designer
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
              Design Meets
              <br />
              <em style={{ color: theme.primary }}>for Better Websites</em>
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
              As a frontend developer and UI/UX designer, I build clean,
              responsive websites that help small businesses and creators look
              professional and earn trust online.
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
              I work with WordPress (Elementor & Divi) and React to deliver
              modern websites with clear user flows, strong visuals, and
              conversion-focused sections.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {[
                "Custom Landing Page Design (Figma to Live Site)",
                "WordPress Builds (Elementor & Divi)",
                "Responsive Frontend Development (React / HTML / CSS)",
                "Website Redesigns & Performance Improvements",
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
