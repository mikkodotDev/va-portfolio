import { useState } from "react";
import { PORTFOLIO_PROJECTS } from "../data/constants";
import { FadeIn } from "./FadeIn";
import { useTheme } from "../hooks/useTheme";

export function PortfolioShowcase({ onProjectClick }) {
  const theme = useTheme();
  const [hoveredProject, setHoveredProject] = useState(null);

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
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: 64, textAlign: "center" }}>
            <div style={{ marginBottom: 16 }} className="section-label">
              Recent Works
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
              Projects I'm
              <br />
              <em style={{ color: theme.primary }}>Proud Of</em>
            </h2>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 16,
                lineHeight: 1.75,
                color: theme.mutedText,
                maxWidth: 700,
                margin: "0 auto",
              }}
            >
              A showcase of recent projects across WordPress, landing pages, and
              web design. Click on any project to view the full case study,
              design files, and live website.
            </p>
          </div>
        </FadeIn>

        {/* 3x3 Grid Showcase */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: 24,
            marginTop: 48,
          }}
        >
          {PORTFOLIO_PROJECTS.map((project, idx) => (
            <FadeIn key={project.id} delay={idx * 0.08}>
              <button
                onClick={() => onProjectClick(project.id)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  textAlign: "left",
                  transition: "all 0.3s ease",
                  transform:
                    hoveredProject === project.id ? "translateY(-8px)" : "translateY(0)",
                }}
              >
                {/* Image Container */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "75%",
                    marginBottom: 20,
                    borderRadius: 8,
                    overflow: "hidden",
                    background: theme.cardBg,
                    border: `1px solid ${theme.cardBorder}`,
                  }}
                >
                  <img
                    src={project.placeholder}
                    alt={project.name}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredProject === project.id
                          ? "scale(1.05)"
                          : "scale(1)",
                    }}
                  />

                  {/* Category Tag */}
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      background: theme.primary,
                      color: theme.background,
                      padding: "6px 12px",
                      borderRadius: 20,
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {project.category}
                  </div>

                  {/* Overlay on Hover */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        hoveredProject === project.id
                          ? `${theme.primary}20`
                          : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {hoveredProject === project.id && (
                      <div
                        style={{
                          color: theme.primary,
                          fontSize: 14,
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        View Project
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <h3
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 18,
                      fontWeight: 600,
                      color: theme.text,
                      margin: "0 0 8px 0",
                      lineHeight: 1.4,
                    }}
                  >
                    {project.name}
                  </h3>

                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13,
                      color: theme.darkMutedText,
                      margin: "0 0 12px 0",
                      fontStyle: "italic",
                    }}
                  >
                    {project.dateCreated}
                  </p>

                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 14,
                      color: theme.mutedText,
                      margin: 0,
                      lineHeight: 1.6,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.shortDescription}
                  </p>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
