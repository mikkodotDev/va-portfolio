import { SERVICES } from "../data/constants";
import { FadeIn } from "./FadeIn";
import { useTheme } from "../hooks/useTheme";

export function Services() {
  const theme = useTheme();

  return (
    <section
      id="services"
      style={{ padding: "100px 5%", background: theme.background }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: 64 }}>
            <div style={{ marginBottom: 16 }} className="section-label">
              Services
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 24,
              }}
            >
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: theme.text,
                }}
              >
                Here's how I can
                <br />
                <em style={{ color: theme.primary }}>help you</em>
              </h2>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 14,
                  color: theme.darkMutedText,
                  maxWidth: 300,
                  lineHeight: 1.7,
                }}
              >
                Beautiful design. Fast builds. Client-friendly platforms.
              </p>
            </div>
          </div>
        </FadeIn>

        <div
          className="service-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {SERVICES.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="card"
                style={{
                  padding: "40px 32px",
                  height: "100%",
                  background: theme.cardBg,
                  border: `1px solid ${theme.cardBorder}`,
                  borderRadius: "3px",
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 20 }}>
                  {s.icon && typeof s.icon === "function"
                    ? s.icon({
                        size: 32,
                        color: s.iconColor,
                        style: { display: "block" },
                      })
                    : s.icon}
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 24,
                    fontWeight: 600,
                    color: theme.text,
                    marginBottom: 14,
                    lineHeight: 1.2,
                  }}
                >
                  {s.title}
                </div>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: theme.darkMutedText,
                    marginBottom: 28,
                  }}
                >
                  {s.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 11,
                        fontWeight: 400,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "4px 12px",
                        border: `1px solid ${theme.primary}40`,
                        borderRadius: "2px",
                        color: theme.primary,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
