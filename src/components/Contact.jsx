import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { useTheme } from "../hooks/useTheme";

export function Contact() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would connect to your backend/email service
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 5%",
        background: theme.background,
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ marginBottom: 16 }} className="section-label">
              Let's Talk
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
                lineHeight: 1.1,
                color: theme.text,
              }}
            >
              Ready to Build Something
              <br />
              <em style={{ color: theme.primary }}>Better</em>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div>
              <label
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  color: theme.text,
                  display: "block",
                  marginBottom: 8,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 14,
                  background: theme.cardBg,
                  border: `1px solid ${theme.cardBorder}`,
                  borderRadius: "2px",
                  color: theme.text,
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  color: theme.text,
                  display: "block",
                  marginBottom: 8,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 14,
                  background: theme.cardBg,
                  border: `1px solid ${theme.cardBorder}`,
                  borderRadius: "2px",
                  color: theme.text,
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  color: theme.text,
                  display: "block",
                  marginBottom: 8,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Tell Me About Your Project
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 14,
                  background: theme.cardBg,
                  border: `1px solid ${theme.cardBorder}`,
                  borderRadius: "2px",
                  color: theme.text,
                  outline: "none",
                  minHeight: 120,
                  resize: "vertical",
                  transition: "border-color 0.2s",
                }}
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              onMouseEnter={() => setIsSubmitHovered(true)}
              onMouseLeave={() => setIsSubmitHovered(false)}
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
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                alignSelf: "flex-start",
                transform: isSubmitHovered ? "scale(1.05)" : "scale(1)",
                boxShadow: isSubmitHovered
                  ? `0 16px 32px ${theme.primary}40`
                  : "0 8px 16px rgba(0,0,0,0.15)",
              }}
            >
              {submitted ? "✓ Message Sent" : "Send Message →"}
            </button>
          </form>

          <div
            style={{
              marginTop: 60,
              paddingTop: 40,
              borderTop: `1px solid ${theme.cardBorder}`,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 12,
                  color: theme.primary,
                  letterSpacing: "0.1em",
                  marginBottom: 8,
                  textTransform: "uppercase",
                }}
              >
                Email
              </div>
              <a
                href="mailto:mjardenico.dev@gmail.com"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 14,
                  color: theme.text,
                  textDecoration: "none",
                }}
              >
                mjardenico.dev@gmail.com
              </a>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12,
                  color: theme.primary,
                  letterSpacing: "0.1em",
                  marginBottom: 8,
                  textTransform: "uppercase",
                }}
              >
                Response Time
              </div>
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 14,
                  color: theme.text,
                }}
              >
                Within 24 hours
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
