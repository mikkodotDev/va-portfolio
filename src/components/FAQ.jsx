import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { useTheme } from "../hooks/useTheme";
import { FaChevronDown } from "react-icons/fa6";

export function FAQ() {
  const theme = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does a website typically take?",
      answer:
        "Depending on the package, it usually takes 2-5 weeks from start to launch. Starter packages (landing pages) take about 2-3 weeks. Larger projects take longer. I'll give you a specific timeline after our initial consultation.",
    },
    {
      question: "Can you work with WordPress, React, or custom code?",
      answer:
        "Yes! I primarily work with WordPress (Elementor/Divi) for quick, client-friendly builds. I also build React sites for more complex projects. I can also do custom HTML/CSS builds. During our discovery call, we'll pick the best platform for your needs and budget.",
    },
    {
      question: "Do you offer revisions?",
      answer:
        "Absolutely. Every package includes a set number of revision rounds (2-4 depending on the package). This covers changes to design, layout, and copy. If you need major changes outside the scope, we can discuss additional costs.",
    },
    {
      question: "What if I need changes after launch?",
      answer:
        "All packages include 1-3 months of free post-launch support. After that, I offer hourly support rates ($50-75/hour depending on complexity) or monthly retainer options for ongoing maintenance.",
    },
    {
      question: "What's included in the handoff?",
      answer:
        "You'll receive all website files, login credentials, a simple documentation guide, and a brief walkthrough call on how to update your site. If it's WordPress, I'll show you how to manage content and make basic edits yourself.",
    },
    {
      question: "How do you handle payments?",
      answer:
        "I ask for 50% upfront to get started and 50% upon completion. This protects both of us. I accept bank transfers, PayPal, and credit card payments.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes! I work with clients worldwide. I'm flexible with timezones for meetings and communication happens via email, Slack, or Zoom calls.",
    },
    {
      question: "What if I don't like the design?",
      answer:
        "That's why I show you mockups in Figma before building! Once approved, we're on the same page. If major changes are requested after that, they'd be treated as additional work beyond the revision rounds.",
    },
    {
      question: "Can you help with ongoing maintenance?",
      answer:
        "Yes! I offer monthly retainers starting at $200/month for basic updates, security monitoring, and performance checks. Custom retainers available based on your needs.",
    },
    {
      question: "Do you provide SEO help?",
      answer:
        "I handle basic SEO setup (metadata, site structure, mobile optimization). For in-depth SEO strategy and keyword research, I recommend working with an SEO specialist, but I'm happy to collaborate.",
    },
  ];

  return (
    <section
      id="faq"
      style={{
        padding: "100px 5%",
        background: theme.background,
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: 64, textAlign: "center" }}>
            <div style={{ marginBottom: 16 }} className="section-label">
              FAQ
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
              Questions? I've Got Answers
            </h2>
          </div>
        </FadeIn>

        <div>
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div
                style={{
                  marginBottom: 16,
                  border: `1px solid ${theme.cardBorder}`,
                  borderRadius: 3,
                  overflow: "hidden",
                  background: theme.cardBg,
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    background: "transparent",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = theme.primary + "08";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 16,
                      fontWeight: 600,
                      color: theme.text,
                      margin: 0,
                    }}
                  >
                    {faq.question}
                  </h3>
                  <FaChevronDown
                    size={16}
                    style={{
                      color: theme.primary,
                      transition: "transform 0.3s ease",
                      transform:
                        openIndex === i ? "rotate(180deg)" : "rotate(0)",
                      flexShrink: 0,
                    }}
                  />
                </button>

                {openIndex === i && (
                  <div
                    style={{
                      padding: "0 24px 20px",
                      borderTop: `1px solid ${theme.cardBorder}`,
                      animation: "fadeIn 0.3s ease",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 14,
                        color: theme.darkMutedText,
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div
            style={{
              marginTop: 64,
              padding: "40px",
              background: theme.primary + "10",
              border: `1px solid ${theme.primary}30`,
              borderRadius: 3,
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
              <strong>Still have questions?</strong>
            </p>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                color: theme.darkMutedText,
                marginBottom: 24,
                lineHeight: 1.7,
              }}
            >
              I'm happy to chat about your project. Reach out and we can discuss
              your needs in detail.
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
              Get in Touch →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
