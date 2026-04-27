import { CASE_STUDIES } from "../data/constants";
import { FadeIn } from "./FadeIn";
import { useTheme } from "../hooks/useTheme";

export function CaseStudies() {
  const theme = useTheme();

  return (
    <section
      id="work"
      style={{
        padding: "100px 5%",
        background: theme.isDarkMode
          ? "rgba(6, 13, 14, 0.6)"
          : "rgba(225, 239, 242, 0.4)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: 64, textAlign: "center" }}>
            <div style={{ marginBottom: 16 }} className="section-label">
              Case Studies
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
                color: theme.text,
                marginBottom: 24,
              }}
            >
              Results That Speak for
              <br />
              <em style={{ color: theme.primary }}>Themselves</em>
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
              A mix of client work and sample projects focused on design
              quality, responsive development, and business-ready websites.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {CASE_STUDIES.map((cs, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  background: theme.cardBg,
                  border: `1px solid ${theme.cardBorder}`,
                  borderRadius: 3,
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 0,
                }}
              >
                <div
                  style={{
                    padding: "48px 40px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 28,
                        fontWeight: 500,
                        color: theme.text,
                        marginBottom: 12,
                      }}
                    >
                      {cs.title}
                    </div>
                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 14,
                        lineHeight: 1.75,
                        color: theme.darkMutedText,
                        marginBottom: 24,
                      }}
                    >
                      {cs.problem}
                    </p>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 11,
                        color: theme.primary,
                        letterSpacing: "0.1em",
                        marginBottom: 12,
                        textTransform: "uppercase",
                      }}
                    >
                      Solution & Results
                    </div>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14,
                        lineHeight: 1.75,
                        color: theme.text,
                      }}
                    >
                      {cs.solution}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    padding: "48px 40px",
                    background: theme.isDarkMode
                      ? "rgba(71, 161, 169, 0.08)"
                      : "rgba(86, 176, 184, 0.08)",
                    borderLeft: `1px solid ${theme.cardBorder}`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 24,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 11,
                        color: theme.primary,
                        letterSpacing: "0.1em",
                        marginBottom: 12,
                        textTransform: "uppercase",
                      }}
                    >
                      Key Metrics
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                      }}
                    >
                      {cs.metrics.map((m, j) => (
                        <div key={j}>
                          <div
                            style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: 28,
                              fontWeight: 300,
                              color: theme.primary,
                            }}
                          >
                            {m.value}
                          </div>
                          <div
                            style={{
                              fontFamily: "'DM Sans', sans-serif",
                              fontSize: 12,
                              color: theme.darkMutedText,
                            }}
                          >
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    style={{
                      paddingTop: 24,
                      borderTop: `1px solid ${theme.cardBorder}`,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 11,
                        color: theme.primary,
                        letterSpacing: "0.1em",
                        marginBottom: 12,
                        textTransform: "uppercase",
                      }}
                    >
                      Tools Used
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 8,
                      }}
                    >
                      {cs.tools.map((tool) => (
                        <span
                          key={tool}
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 11,
                            fontWeight: 400,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            padding: "4px 10px",
                            border: `1px solid ${theme.primary}40`,
                            borderRadius: "2px",
                            color: theme.primary,
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
