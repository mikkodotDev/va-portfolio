import { CORE_SKILLS } from "../data/constants";
import { FadeIn } from "./FadeIn";
import { useTheme } from "../hooks/useTheme";
import { FaCheck } from "react-icons/fa6";

export function CoreSkills() {
  const theme = useTheme();

  return (
    <section
      id="skills"
      style={{
        padding: "100px 5%",
        background: theme.isDarkMode
          ? "rgba(6, 13, 14, 0.6)"
          : "rgba(225, 239, 242, 0.4)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div
              style={{ textAlign: "center", marginBottom: 16 }}
              className="section-label"
            >
              Core Skills
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
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 700,
                color: theme.text,
                marginBottom: 24,
              }}
            >
              What I <em style={{ color: theme.primary }}>Specialize In</em>
            </h2>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 16,
                lineHeight: 1.75,
                color: theme.mutedText,
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              These are my core competencies. Everything I do revolves around
              delivering clean, professional WordPress websites and engaging
              digital experiences.
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {CORE_SKILLS.map((skill, idx) => (
            <FadeIn key={idx} delay={idx * 0.08}>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  padding: 24,
                  background: theme.cardBg,
                  border: `1px solid ${theme.cardBorder}`,
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.primary;
                  e.currentTarget.style.boxShadow = `0 4px 12px ${theme.primary}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.cardBorder;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: theme.primary,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 2,
                  }}
                >
                  <FaCheck
                    size={14}
                    style={{
                      color:
                        theme.isDarkMode === true
                          ? "rgba(6, 13, 14, 0.9)"
                          : "white",
                    }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 16,
                      fontWeight: 500,
                      color: theme.text,
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {skill}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
