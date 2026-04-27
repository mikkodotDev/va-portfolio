import { FadeIn } from "./FadeIn";
import { useTheme } from "../hooks/useTheme";
import { FaUserTie, FaPencil, FaCode, FaCheck } from "react-icons/fa6";

export function Process() {
  const theme = useTheme();

  const steps = [
    {
      step: 1,
      icon: FaUserTie,
      title: "Discovery & Brief",
      description:
        "We align on your vision, goals, audience, and timeline. I'll ask questions to understand your brand and competition.",
      duration: "1-2 days",
    },
    {
      step: 2,
      icon: FaPencil,
      title: "Design & Planning",
      description:
        "I create wireframes and Figma mockups for your approval. Once approved, we're ready to build.",
      duration: "3-5 days",
    },
    {
      step: 3,
      icon: FaCode,
      title: "Build & Development",
      description:
        "I develop your site using WordPress, React, or custom code. You'll have visibility throughout, with progress updates.",
      duration: "1-2 weeks",
    },
    {
      step: 4,
      icon: FaCheck,
      title: "Review, Revisions & Launch",
      description:
        "Testing, your requested revisions, final QA, and deployment. You'll receive documentation and training.",
      duration: "3-5 days",
    },
  ];

  return (
    <section
      id="process"
      style={{
        padding: "100px 5%",
        background: theme.background,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: 64, textAlign: "center" }}>
            <div style={{ marginBottom: 16 }} className="section-label">
              How I Work
            </div>
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
              A Clear, Collaborative Process
            </h2>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 16,
                color: theme.darkMutedText,
                maxWidth: 600,
                lineHeight: 1.7,
                margin: "0 auto",
              }}
            >
              I keep you involved every step of the way. No surprises, just
              results.
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 32,
            marginBottom: 64,
          }}
        >
          {steps.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  style={{
                    position: "relative",
                    paddingTop: 20,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 60,
                      height: 60,
                      background: theme.primary,
                      borderRadius: "50%",
                      marginBottom: 24,
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <Icon size={28} color={theme.background} />
                  </div>

                  {i < steps.length - 1 && (
                    <div
                      style={{
                        position: "absolute",
                        top: 30,
                        left: "calc(50% + 30px)",
                        width: "calc(100% - 60px)",
                        height: 2,
                        background: theme.primary + "30",
                        zIndex: 0,
                      }}
                    />
                  )}

                  <div
                    style={{
                      padding: "24px",
                      background: theme.cardBg,
                      border: `1px solid ${theme.cardBorder}`,
                      borderRadius: 8,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 12,
                        color: theme.primary,
                        letterSpacing: "0.1em",
                        marginBottom: 8,
                        textTransform: "uppercase",
                        fontWeight: 600,
                      }}
                    >
                      Step {item.step}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 18,
                        fontWeight: 600,
                        color: theme.text,
                        marginBottom: 12,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 14,
                        color: theme.darkMutedText,
                        lineHeight: 1.6,
                        marginBottom: 12,
                      }}
                    >
                      {item.description}
                    </p>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 12,
                        color: theme.primary,
                        fontWeight: 600,
                      }}
                    >
                      {item.duration}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.4}>
          <div
            style={{
              padding: "40px",
              background: theme.cardBg,
              border: `1px solid ${theme.cardBorder}`,
              borderRadius: 8,
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 20,
                fontWeight: 600,
                color: theme.text,
                marginBottom: 16,
              }}
            >
              Ready to Get Started?
            </h3>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                color: theme.darkMutedText,
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              I respond within 24 hours and typically start projects within 1
              week.
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                padding: "12px 32px",
                background: theme.primary,
                color: theme.background,
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                borderRadius: 4,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = `0 8px 16px ${theme.primary}40`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Schedule Free Consultation
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
