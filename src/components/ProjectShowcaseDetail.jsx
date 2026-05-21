import { PORTFOLIO_PROJECTS } from "../data/constants";
import { FadeIn } from "./FadeIn";
import { useTheme } from "../hooks/useTheme";
import { FaArrowLeft, FaFigma, FaGlobe } from "react-icons/fa6";

export function ProjectShowcaseDetail({ projectId, onBack }) {
  const theme = useTheme();
  const project = PORTFOLIO_PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    return (
      <section
        style={{
          padding: "100px 5%",
          background: theme.background,
          textAlign: "center",
        }}
      >
        <p style={{ color: theme.text }}>Project not found</p>
        <button
          onClick={onBack}
          style={{
            marginTop: 24,
            padding: "12px 24px",
            background: theme.primary,
            color: theme.background,
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            fontFamily: "'Poppins', sans-serif",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Back to Portfolio
        </button>
      </section>
    );
  }

  return (
    <section
      style={{
        padding: "100px 5%",
        background: theme.background,
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Back Button */}
        <FadeIn>
          <button
            onClick={onBack}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              background: "none",
              border: `1px solid ${theme.cardBorder}`,
              borderRadius: 4,
              color: theme.text,
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 32,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = theme.primary;
              e.currentTarget.style.color = theme.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = theme.cardBorder;
              e.currentTarget.style.color = theme.text;
            }}
          >
            <FaArrowLeft size={12} />
            Back to Portfolio
          </button>
        </FadeIn>

        {/* Hero Image */}
        <FadeIn delay={0.1}>
          <div
            style={{
              width: "100%",
              borderRadius: 8,
              overflow: "hidden",
              border: `1px solid ${theme.cardBorder}`,
              marginBottom: 64,
              height: "400px",
            }}
          >
            <img
              src={project.placeholder}
              alt={project.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </FadeIn>

        {/* Project Header */}
        <FadeIn delay={0.15}>
          <div style={{ marginBottom: 48 }}>
            <div
              style={{
                display: "flex",
                gap: 12,
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  background: theme.primary,
                  color: theme.background,
                  padding: "6px 12px",
                  borderRadius: 20,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {project.category}
              </span>
              <span
                style={{
                  fontSize: 13,
                  color: theme.darkMutedText,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {project.dateCreated}
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 700,
                color: theme.text,
                marginBottom: 24,
                lineHeight: 1.2,
              }}
            >
              {project.name}
            </h1>

            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 16,
                lineHeight: 1.8,
                color: theme.mutedText,
              }}
            >
              {project.shortDescription}
            </p>
          </div>
        </FadeIn>

        {/* What They Needed */}
        <FadeIn delay={0.2}>
          <div style={{ marginBottom: 48 }}>
            <div
              style={{
                width: 48,
                height: 1,
                background: theme.primary,
                marginBottom: 24,
              }}
            />
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 24,
                fontWeight: 600,
                color: theme.text,
                marginBottom: 16,
              }}
            >
              What They Needed
            </h2>

            <div
              style={{
                padding: 24,
                background: theme.cardBg,
                border: `1px solid ${theme.cardBorder}`,
                borderRadius: 4,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  color: theme.text,
                  marginBottom: 12,
                  margin: 0,
                }}
              >
                The Problem
              </h3>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: theme.mutedText,
                  margin: "12px 0 0 0",
                }}
              >
                {project.clientNeeded.problem}
              </p>

              <h3
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  color: theme.text,
                  marginTop: 24,
                  marginBottom: 12,
                  margin: "24px 0 12px 0",
                }}
              >
                What They Required
              </h3>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: theme.mutedText,
                  margin: "0",
                }}
              >
                {project.clientNeeded.explanation}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* How I Helped */}
        <FadeIn delay={0.25}>
          <div style={{ marginBottom: 48 }}>
            <div
              style={{
                width: 48,
                height: 1,
                background: theme.primary,
                marginBottom: 24,
              }}
            />
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 24,
                fontWeight: 600,
                color: theme.text,
                marginBottom: 16,
              }}
            >
              How I Helped
            </h2>

            <div
              style={{
                padding: 24,
                background: theme.cardBg,
                border: `1px solid ${theme.cardBorder}`,
                borderRadius: 4,
              }}
            >
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: theme.mutedText,
                  margin: 0,
                }}
              >
                {project.howIHelped}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Gallery Section */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <FadeIn delay={0.3}>
            <div style={{ marginBottom: 48 }}>
              <div
                style={{
                  width: 48,
                  height: 1,
                  background: theme.primary,
                  marginBottom: 24,
                }}
              />
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 24,
                  fontWeight: 600,
                  color: theme.text,
                  marginBottom: 32,
                }}
              >
                Project Gallery
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                }}
              >
                {project.galleryImages.map((image, idx) => (
                  <div
                    key={idx}
                    style={{
                      borderRadius: 8,
                      overflow: "hidden",
                      border: `1px solid ${theme.cardBorder}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: theme.isDarkMode ? "#0a1516" : "#f5f5f5",
                    }}
                  >
                    <img
                      src={image}
                      alt={`${project.name} gallery ${idx + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        {/* Results */}
        <FadeIn delay={0.3}>
          <div style={{ marginBottom: 48 }}>
            <div
              style={{
                width: 48,
                height: 1,
                background: theme.primary,
                marginBottom: 24,
              }}
            />
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 24,
                fontWeight: 600,
                color: theme.text,
                marginBottom: 24,
              }}
            >
              Results
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 20,
              }}
            >
              {project.results.map((result, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: 24,
                    background: theme.cardBg,
                    border: `1px solid ${theme.cardBorder}`,
                    borderRadius: 4,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 28,
                      fontWeight: 700,
                      color: theme.primary,
                      marginBottom: 8,
                    }}
                  >
                    {result.metric}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13,
                      color: theme.mutedText,
                      fontWeight: 500,
                    }}
                  >
                    {result.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={0.35}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 16,
              marginBottom: 48,
            }}
          >
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                padding: "16px 24px",
                background: theme.primary,
                color: theme.background,
                textDecoration: "none",
                borderRadius: 4,
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 12px 24px ${theme.primary}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <FaFigma size={16} />
              View Figma Design
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                padding: "16px 24px",
                background: "transparent",
                color: theme.primary,
                border: `1px solid ${theme.primary}`,
                textDecoration: "none",
                borderRadius: 4,
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${theme.primary}10`;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FaGlobe size={16} />
              Visit Live Website
            </a>
          </div>
        </FadeIn>

        {/* Back Button at Bottom */}
        <FadeIn delay={0.4}>
          <div style={{ textAlign: "center" }}>
            <button
              onClick={onBack}
              style={{
                padding: "12px 32px",
                background: theme.cardBg,
                color: theme.text,
                border: `1px solid ${theme.cardBorder}`,
                borderRadius: 4,
                cursor: "pointer",
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = theme.primary;
                e.currentTarget.style.color = theme.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = theme.cardBorder;
                e.currentTarget.style.color = theme.text;
              }}
            >
              ← Back to Portfolio
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
