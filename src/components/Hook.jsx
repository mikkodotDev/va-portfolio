import { FadeIn } from "./FadeIn";
import { useTheme } from "../hooks/useTheme";
import { FaPalette, FaMobileScreen, FaRocket } from "react-icons/fa6";

export function Hook() {
  const theme = useTheme();

  return (
    <section
      style={{
        padding: "100px 5%",
        background: theme.isDarkMode
          ? "rgba(6, 13, 14, 0.6)"
          : "rgba(225, 239, 242, 0.4)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.primary}06 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        <FadeIn>
          <div style={{ marginBottom: 16 }} className="section-label">
            Why Hire Me
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
              fontSize: "clamp(32px, 5vw, 58px)",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: 28,
              color: theme.text,
            }}
          >
            You need a website that's both{" "}
            <em style={{ color: theme.primary }}>beautiful and effective.</em>
            <br />I deliver both.
          </h2>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 16,
              lineHeight: 1.85,
              color: theme.mutedText,
              maxWidth: 640,
              margin: "0 auto 64px",
            }}
          >
            I build clean, modern WordPress websites and landing pages that work
            beautifully on mobile. Simple designs that are easy for you to
            manage, fast to load, and focused on what matters: results.
          </p>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 1,
            border: `1px solid ${theme.cardBorder}`,
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          {[
            [
              FaPalette,
              "#A78BFA",
              "Stunning Design",
              "Every pixel thoughtfully designed to engage and convert your visitors.",
            ],
            [
              FaMobileScreen,
              "#FF6B35",
              "Fully Responsive",
              "Beautiful on desktop, tablet, and mobile. No compromise on user experience.",
            ],
            [
              FaRocket,
              "#FF6B6B",
              "Fast & SEO Ready",
              "Quick load times and search engine optimization built in from the start.",
            ],
          ].map(([IconComponent, color, title, desc], i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div
                style={{
                  padding: "40px 32px",
                  background: theme.background,
                  borderRight: i < 2 ? `1px solid ${theme.cardBorder}` : "none",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 16 }}>
                  {IconComponent({ size: 28, color: color })}
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 22,
                    fontWeight: 600,
                    color: theme.text,
                    marginBottom: 12,
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: theme.darkMutedText,
                  }}
                >
                  {desc}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
