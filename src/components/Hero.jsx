import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import heroImage from "../assets/images/heroImage.png";

const buttonHoverStyle = (isHovered, theme) => ({
  transform: isHovered ? "scale(1.05)" : "scale(1)",
  boxShadow: isHovered
    ? `0 12px 24px ${theme.primary}30`
    : "0 4px 8px rgba(0,0,0,0.1)",
});

// Make it dynamic and connected to project showcase/case studies
const heroStats = [
  { value: 15, label: "Websites Designed", suffix: "+" },
  { value: 8, label: "Happy Clients", suffix: "+" },
  { value: 100, label: "% Responsive & Fast", suffix: "%" },
];

export function Hero({ scrollTo }) {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const [isSeeWorkHovered, setIsSeeWorkHovered] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(() =>
    heroStats.map(() => 0),
  );

  useEffect(() => {
    const duration = 1800;
    const startTime = performance.now();

    const tick = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setAnimatedStats(
        heroStats.map((stat) => Math.round(stat.value * easedProgress)),
      );

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(tick);
      }
    };

    let animationFrameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 5% 80px",
        position: "relative",
        overflow: "hidden",
        background: theme.background,
        color: theme.text,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 60% 50% at 70% 50%, ${theme.primary}08 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 80%, ${theme.secondary}06 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 80,
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: 280 }}>
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: theme.primary,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: theme.accent,
                  animation: "pulse-dot 2s infinite",
                }}
              />
              Available for new projects
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(48px, 7vw, 84px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              marginBottom: 28,
              color: theme.text,
            }}
          >
            Beautiful, Fast Websites{" "}
            <em style={{ color: theme.primary, fontStyle: "italic" }}>
              Built for Conversions
            </em>
          </h1>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 17,
              fontWeight: 300,
              lineHeight: 1.75,
              color: theme.mutedText,
              maxWidth: 480,
              marginBottom: 40,
            }}
          >
            Frontend developer & UI/UX designer. I create responsive, modern
            websites using WordPress, React, and design tools that help small
            businesses and creators stand out online.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              marginBottom: 40,
            }}
          >
            <button
              onMouseEnter={() => setIsCtaHovered(true)}
              onMouseLeave={() => setIsCtaHovered(false)}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "14px 36px",
                background: theme.primary,
                color: theme.isDarkMode ? theme.background : theme.text,
                border: "none",
                borderRadius: "2px",
                cursor: "pointer",
                transition:
                  "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease",
                transform: isCtaHovered ? "scale(1.05)" : "scale(1)",
                boxShadow: isCtaHovered
                  ? `0 16px 32px ${theme.primary}40`
                  : "0 8px 16px rgba(0,0,0,0.15)",
              }}
              onClick={() => scrollTo("contact")}
            >
              Start a Project →
            </button>
            <button
              onMouseEnter={() => setIsSeeWorkHovered(true)}
              onMouseLeave={() => setIsSeeWorkHovered(false)}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 13,
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "13px 32px",
                background: "transparent",
                color: isSeeWorkHovered ? theme.primary : theme.text,
                border: `1px solid ${isSeeWorkHovered ? theme.primary : theme.mutedText}40`,
                borderRadius: "2px",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transform: isSeeWorkHovered ? "scale(1.05)" : "scale(1)",
              }}
              onClick={() => scrollTo("work")}
            >
              See My Work
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: 48,
              paddingTop: 40,
              borderTop: `1px solid ${theme.cardBorder}`,
            }}
          >
            {heroStats.map((stat, index) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 36,
                    fontWeight: 700,
                    color: theme.primary,
                    lineHeight: 1,
                  }}
                >
                  {animatedStats[index]}
                  {stat.suffix}
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 12,
                    color: theme.darkMutedText,
                    letterSpacing: "0.08em",
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="hide-mobile"
          style={{
            position: "relative",
            width: 420,
            height: 520,
            flexShrink: 0,
          }}
        >
          <img
            src={heroImage}
            alt="Mikko Jardenico"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 3,
              display: "block",
              transition:
                "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.4s ease",
              transform: isHovered
                ? "scale(1.05) translateY(-8px)"
                : "scale(1) translateY(0)",
              filter: isHovered
                ? `drop-shadow(0 25px 50px ${theme.isDarkMode ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.3)"}) drop-shadow(0 0 40px ${theme.primary}30)`
                : `drop-shadow(0 10px 30px ${theme.isDarkMode ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.15)"})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "24px 20px",
              background: `linear-gradient(0deg, ${theme.isDarkMode ? "rgba(6,13,14,0.95)" : "rgba(241,248,249,0.95)"} 0%, transparent 100%)`,
              borderRadius: "0 0 3px 3px",
              backdropFilter: "blur(4px)",
            }}
          >
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: theme.primary,
                letterSpacing: "0.1em",
              }}
            >
              MIKKO JARDENICO
            </div>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 11,
                fontWeight: 500,
                color: theme.darkMutedText,
                letterSpacing: "0.1em",
                marginTop: 2,
              }}
            >
              Developer · Systems & Automation Specialist
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with animated mouse */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          animation: "bounce 2s infinite",
        }}
      >
        <style>{`
          @keyframes bounce {
            0%, 100% {
              transform: translateX(-50%) translateY(0);
            }
            50% {
              transform: translateX(-50%) translateY(-12px);
            }
          }
          
          @keyframes scroll-wheel {
            0% {
              opacity: 1;
              transform: translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateY(8px);
            }
          }
        `}</style>

        {/* Mouse Icon SVG */}
        <svg
          width="24"
          height="36"
          viewBox="0 0 24 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            stroke: theme.primary,
            strokeWidth: 1.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        >
          {/* Mouse body */}
          <path
            d="M12 2C7.03 2 3 6.03 3 11V22C3 27.52 7.04 32 12 32C16.96 32 21 27.52 21 22V11C21 6.03 16.97 2 12 2Z"
            fill="none"
          />
          {/* Scroll wheel */}
          <circle
            cx="12"
            cy="12"
            r="2"
            fill={theme.primary}
            style={{
              animation: "scroll-wheel 1.5s infinite",
            }}
          />
          <circle
            cx="12"
            cy="18"
            r="1.5"
            fill={theme.primary}
            style={{
              animation: "scroll-wheel 1.5s infinite 0.5s",
            }}
          />
        </svg>

        {/* Scroll text */}
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 12,
            fontWeight: 500,
            color: theme.primary,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          Scroll
        </div>
      </div>
    </section>
  );
}
