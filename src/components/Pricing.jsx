import { FadeIn } from "./FadeIn";
import { useTheme } from "../hooks/useTheme";
import { FaCheck } from "react-icons/fa6";

export function Pricing() {
  const theme = useTheme();

  const packages = [
    {
      name: "Starter",
      price: "$800",
      description: "Perfect for a landing page or small website.",
      features: [
        "3-page WordPress site or landing page",
        "Custom Elementor/Divi design",
        "Mobile responsive",
        "2 rounds of revisions",
        "Delivery: 2-3 weeks",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$2,500",
      description: "Full website with more pages and features.",
      features: [
        "Up to 8-page WordPress website",
        "Custom UI/UX design (Figma mockups included)",
        "SEO basics setup",
        "Contact form & integration",
        "4 rounds of revisions",
        "Delivery: 4-5 weeks",
        "1 month free support",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "$5,000+",
      description: "Complex projects, custom development, or e-commerce.",
      features: [
        "Full custom WordPress build or React site",
        "Advanced UI/UX with design system",
        "WooCommerce setup (if needed)",
        "Unlimited revisions (in scope)",
        "Custom integrations",
        "Delivery: 6-8 weeks",
        "3 months free support",
      ],
      highlighted: false,
    },
  ];

  return (
    <section
      id="pricing"
      style={{
        padding: "100px 5%",
        background: theme.background,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: 64, textAlign: "center" }}>
            <div style={{ marginBottom: 16 }} className="section-label">
              Pricing
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
              Simple, Transparent Packages
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
              All packages include responsive design, testing, and handoff
              support. Custom projects? Let's chat.
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {packages.map((pkg, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  padding: "40px 32px",
                  background: theme.cardBg,
                  border: `2px solid ${
                    pkg.highlighted ? theme.primary : theme.cardBorder
                  }`,
                  borderRadius: 8,
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transform: pkg.highlighted ? "scale(1.02)" : "scale(1)",
                  transition: "all 0.3s ease",
                }}
              >
                {pkg.highlighted && (
                  <div
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: theme.primary,
                      color: theme.background,
                      padding: "4px 16px",
                      borderRadius: 20,
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <div style={{ marginBottom: 24 }}>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 20,
                      fontWeight: 600,
                      color: theme.text,
                      marginBottom: 8,
                    }}
                  >
                    {pkg.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 32,
                      fontWeight: 700,
                      color: theme.primary,
                      marginBottom: 12,
                    }}
                  >
                    {pkg.price}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 14,
                      color: theme.darkMutedText,
                      lineHeight: 1.6,
                    }}
                  >
                    {pkg.description}
                  </p>
                </div>

                <div style={{ flex: 1, marginBottom: 24 }}>
                  {pkg.features.map((feature, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        gap: 12,
                        marginBottom: 12,
                        alignItems: "flex-start",
                      }}
                    >
                      <FaCheck
                        size={16}
                        style={{
                          color: theme.primary,
                          marginTop: 2,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: 14,
                          color: theme.text,
                          lineHeight: 1.5,
                        }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "12px 24px",
                    background: pkg.highlighted ? theme.primary : "transparent",
                    color: pkg.highlighted ? theme.background : theme.primary,
                    border: `1px solid ${theme.primary}`,
                    borderRadius: 4,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!pkg.highlighted) {
                      e.target.style.background = theme.primary + "10";
                      e.target.style.color = theme.primary;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!pkg.highlighted) {
                      e.target.style.background = "transparent";
                      e.target.style.color = theme.primary;
                    }
                  }}
                >
                  Get Started
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div
            style={{
              marginTop: 64,
              padding: "32px",
              background: theme.cardBg,
              border: `1px solid ${theme.cardBorder}`,
              borderRadius: 8,
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 16,
                color: theme.text,
                marginBottom: 16,
              }}
            >
              <strong>Don't see what you need?</strong>
            </p>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                color: theme.darkMutedText,
                marginBottom: 16,
                lineHeight: 1.7,
              }}
            >
              Every project is unique. I offer custom packages for larger
              builds, ongoing support, and special requirements. Let's discuss
              your project.
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                color: theme.primary,
                fontWeight: 600,
                textDecoration: "none",
                borderBottom: `2px solid ${theme.primary}`,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = "1";
              }}
            >
              Request Custom Quote →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
