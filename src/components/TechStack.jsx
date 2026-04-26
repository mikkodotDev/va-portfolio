import { STACK } from "../data/constants";
import { FadeIn } from "./FadeIn";
import { useTheme } from "../hooks/useTheme";

export function TechStack() {
  const theme = useTheme();

  return (
    <section
      id="stack"
      style={{
        padding: "100px 5%",
        background: theme.isDarkMode
          ? "rgba(6, 13, 14, 0.6)"
          : "rgba(225, 239, 242, 0.4)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div
              style={{ textAlign: "center", marginBottom: 16 }}
              className="section-label"
            >
              Tech Stack
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
              }}
            >
              Tools I Work With <em style={{ color: theme.primary }}>Daily</em>
            </h2>
          </div>
        </FadeIn>

        {STACK.map((category, categoryIdx) => (
          <FadeIn key={categoryIdx} delay={0.15 + categoryIdx * 0.05}>
            <div
              className="stack-category"
              style={{
                marginBottom: 48,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 18,
                  fontWeight: 600,
                  color: theme.text,
                  marginBottom: 16,
                  letterSpacing: "0.05em",
                  textAlign: "center",
                }}
                className="stack-category-title"
              >
                {category.category}
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  justifyContent: "center",
                }}
                className="stack-tools-container"
              >
                {category.tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="stack-chip stack-tool-item"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 12,
                      fontWeight: 400,
                      letterSpacing: "0.06em",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 18px",
                      background: theme.cardBg,
                      border: `1px solid ${theme.cardBorder}`,
                      borderRadius: "3px",
                      transition: "all 0.2s",
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = tool.color;
                      e.currentTarget.style.background = `${tool.color}10`;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = theme.cardBorder;
                      e.currentTarget.style.background = theme.cardBg;
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {tool.icon && typeof tool.icon === "function" ? (
                      tool.icon({
                        size: 16,
                        color: tool.color,
                        style: { display: "block" },
                      })
                    ) : (
                      <span style={{ fontSize: 16 }}>{tool.icon}</span>
                    )}
                    <span style={{ color: theme.mutedText, fontSize: 12 }}>
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
