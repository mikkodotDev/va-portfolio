import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { useTheme } from "../hooks/useTheme";
import { submitProjectBrief } from "../services/supabase";

export function ProjectBrief() {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    companyName: "",
    organizationType: "",
    missionStatement: "",
    primaryGoal: "",
    socialMedia: "",
    hasHosting: "",
    domainName: "",
    domainCredentials: "",
    hostingCredentials: "",
    wordpressThemes: "",
    designPreference: "",
    navigationItems: "",
    sampleWebsites: "",
    preferredTone: "",
    callToActionButtons: "",
    brandColors: "",
    googleFonts: "",
    logoFormat: "",
    contactFormFields: "",
    socialProof: "",
    designFile: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitMessage(null);

    try {
      const result = await submitProjectBrief(formData);

      if (result.success) {
        setSubmitMessage({
          type: "success",
          text: "Thank you! Your project brief has been submitted. I'll review it and get back to you within 24-48 hours.",
        });
        // Reset form
        setFormData({
          fullName: "",
          mobileNumber: "",
          email: "",
          companyName: "",
          organizationType: "",
          missionStatement: "",
          primaryGoal: "",
          socialMedia: "",
          hasHosting: "",
          domainName: "",
          domainCredentials: "",
          hostingCredentials: "",
          wordpressThemes: "",
          designPreference: "",
          navigationItems: "",
          sampleWebsites: "",
          preferredTone: "",
          callToActionButtons: "",
          brandColors: "",
          googleFonts: "",
          logoFormat: "",
          contactFormFields: "",
          socialProof: "",
          designFile: "",
          additionalInfo: "",
        });
        // Scroll to success message
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }, 100);
      } else {
        setSubmitMessage({
          type: "error",
          text: result.message,
        });
      }
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "An unexpected error occurred. Please try again.",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 14,
    padding: "12px 16px",
    border: `1px solid ${theme.cardBorder}`,
    borderRadius: 4,
    background: theme.cardBg,
    color: theme.text,
    width: "100%",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
  };

  const labelStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 13,
    fontWeight: 600,
    color: theme.text,
    marginBottom: 8,
    display: "block",
    letterSpacing: "0.05em",
  };

  return (
    <section
      id="project brief"
      style={{
        padding: "100px 5%",
        background: theme.background,
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: 64, textAlign: "center" }}>
            <div style={{ marginBottom: 16 }} className="section-label">
              Project Brief
            </div>
            <h1
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: theme.text,
                marginBottom: 24,
              }}
            >
              Let's Build Your
              <br />
              <em style={{ color: theme.primary }}>WordPress Website</em>
            </h1>
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
              Fill out this brief so I can understand your vision, goals, and
              website needs. This helps me create a proposal tailored to your
              organization.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form
            onSubmit={handleSubmit}
            style={{
              padding: "48px 40px",
              background: theme.cardBg,
              border: `1px solid ${theme.cardBorder}`,
              borderRadius: 8,
            }}
          >
            {/* ===== Basic Information ===== */}
            <div style={{ marginBottom: 48 }}>
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: theme.text,
                  marginBottom: 24,
                  paddingBottom: 12,
                  borderBottom: `1px solid ${theme.cardBorder}`,
                }}
              >
                Basic Information
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 20,
                  marginTop: 24,
                }}
              >
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.target.style.borderColor = theme.primary)
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = theme.cardBorder)
                    }
                  />
                </div>
                <div>
                  <label style={labelStyle}>Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.target.style.borderColor = theme.primary)
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = theme.cardBorder)
                    }
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.target.style.borderColor = theme.primary)
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = theme.cardBorder)
                    }
                  />
                </div>
                <div>
                  <label style={labelStyle}>Company Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.target.style.borderColor = theme.primary)
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = theme.cardBorder)
                    }
                  />
                </div>
              </div>
            </div>

            {/* ===== Organization Details ===== */}
            <div style={{ marginBottom: 48 }}>
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: theme.text,
                  marginBottom: 24,
                  paddingBottom: 12,
                  borderBottom: `1px solid ${theme.cardBorder}`,
                }}
              >
                Organization Details
              </h2>
              <div style={{ marginTop: 24 }}>
                <label style={labelStyle}>Organization Type *</label>
                <select
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                  required
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.cardBorder)
                  }
                >
                  <option value="">Select an option</option>
                  <option value="nonprofit">Non-Profit</option>
                  <option value="church">Church / Religious Org</option>
                  <option value="smallbusiness">Small Business</option>
                  <option value="agency">Agency</option>
                  <option value="community">Community Organization</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={labelStyle}>Mission Statement *</label>
                <textarea
                  name="missionStatement"
                  value={formData.missionStatement}
                  onChange={handleChange}
                  required
                  style={{
                    ...inputStyle,
                    minHeight: "100px",
                    resize: "vertical",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.cardBorder)
                  }
                  placeholder="What does your organization do and what's your mission?"
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={labelStyle}>Primary Website Goal/Purpose *</label>
                <select
                  name="primaryGoal"
                  value={formData.primaryGoal}
                  onChange={handleChange}
                  required
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.cardBorder)
                  }
                >
                  <option value="">Select a goal</option>
                  <option value="inform">Inform / Awareness</option>
                  <option value="fundraising">Fundraising / Donations</option>
                  <option value="volunteering">Volunteer Sign-up</option>
                  <option value="events">Events / Announcements</option>
                  <option value="community">Community Outreach</option>
                  <option value="ecommerce">E-commerce / Sales</option>
                  <option value="multiple">Multiple Goals</option>
                </select>
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={labelStyle}>Social Media Links</label>
                <textarea
                  name="socialMedia"
                  value={formData.socialMedia}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    minHeight: "80px",
                    resize: "vertical",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.cardBorder)
                  }
                  placeholder="Facebook, Instagram, LinkedIn, YouTube, TikTok, etc."
                />
              </div>
            </div>

            {/* ===== Hosting & Domain ===== */}
            <div style={{ marginBottom: 48 }}>
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: theme.text,
                  marginBottom: 24,
                  paddingBottom: 12,
                  borderBottom: `1px solid ${theme.cardBorder}`,
                }}
              >
                Hosting & Domain
              </h2>
              <div style={{ marginTop: 24 }}>
                <label style={labelStyle}>
                  Do you have web hosting and a domain name? *
                </label>
                <select
                  name="hasHosting"
                  value={formData.hasHosting}
                  onChange={handleChange}
                  required
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.cardBorder)
                  }
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes, I have both</option>
                  <option value="partial">
                    I have domain but need hosting
                  </option>
                  <option value="no">
                    No, I need both (I can help - $149/month with 1 year free
                    domain)
                  </option>
                </select>
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={labelStyle}>Domain Name & Credentials</label>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 12,
                    color: theme.darkMutedText,
                    marginBottom: 12,
                    fontStyle: "italic",
                  }}
                >
                  For security, feel free to share these via Google Drive,
                  Dropbox, or directly through our chat instead.
                </p>
                <textarea
                  name="domainCredentials"
                  value={formData.domainCredentials}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    minHeight: "80px",
                    resize: "vertical",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.cardBorder)
                  }
                  placeholder="Your domain name and login credentials (if you have hosting)"
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={labelStyle}>Hosting Service Credentials</label>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 12,
                    color: theme.darkMutedText,
                    marginBottom: 12,
                    fontStyle: "italic",
                  }}
                >
                  For security, feel free to share these via Google Drive,
                  Dropbox, or directly through our chat instead.
                </p>
                <textarea
                  name="hostingCredentials"
                  value={formData.hostingCredentials}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    minHeight: "80px",
                    resize: "vertical",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.cardBorder)
                  }
                  placeholder="Your hosting login credentials (cPanel, Bluehost, etc.)"
                />
              </div>
            </div>

            {/* ===== Design Preferences ===== */}
            <div style={{ marginBottom: 48 }}>
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: theme.text,
                  marginBottom: 24,
                  paddingBottom: 12,
                  borderBottom: `1px solid ${theme.cardBorder}`,
                }}
              >
                Design Preferences
              </h2>
              <div style={{ marginTop: 24 }}>
                <label style={labelStyle}>3 WordPress Themes you prefer</label>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 12,
                    color: theme.darkMutedText,
                    marginBottom: 12,
                    fontStyle: "italic",
                  }}
                >
                  Not sure where to start?{" "}
                  <a
                    href="https://wordpress.org/themes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: theme.primary,
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Browse WordPress themes here
                  </a>{" "}
                  and paste your favorites below.
                </p>
                <textarea
                  name="wordpressThemes"
                  value={formData.wordpressThemes}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    minHeight: "80px",
                    resize: "vertical",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.cardBorder)
                  }
                  placeholder="List 3 WordPress themes you like (e.g., Neve, Astra, OceanWP)"
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={labelStyle}>
                  Website Design Preference (Link)
                </label>
                <input
                  type="url"
                  name="designPreference"
                  value={formData.designPreference}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.cardBorder)
                  }
                  placeholder="Paste a link to a website design you like (optional)"
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={labelStyle}>
                  Preferred Navigation Menu Items
                </label>
                <input
                  type="text"
                  name="navigationItems"
                  value={formData.navigationItems}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.cardBorder)
                  }
                  placeholder="E.g., Home, About Us, Programs, Contact, Donate"
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={labelStyle}>
                  Sample Websites You Like (References)
                </label>
                <textarea
                  name="sampleWebsites"
                  value={formData.sampleWebsites}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    minHeight: "80px",
                    resize: "vertical",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.cardBorder)
                  }
                  placeholder="Paste links to websites you like for reference"
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={labelStyle}>Preferred Tone or Voice *</label>
                <select
                  name="preferredTone"
                  value={formData.preferredTone}
                  onChange={handleChange}
                  required
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.cardBorder)
                  }
                >
                  <option value="">Select a tone</option>
                  <option value="formal">Formal / Professional</option>
                  <option value="friendly">Friendly / Approachable</option>
                  <option value="inspiring">Inspiring / Motivational</option>
                  <option value="casual">Casual / Conversational</option>
                  <option value="mix">Mix of styles</option>
                </select>
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={labelStyle}>Key Call-to-Action Buttons</label>
                <input
                  type="text"
                  name="callToActionButtons"
                  value={formData.callToActionButtons}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.cardBorder)
                  }
                  placeholder="E.g., Donate Now, Join Us, Sign Up, Learn More"
                />
              </div>
            </div>

            {/* ===== Brand & Style ===== */}
            <div style={{ marginBottom: 48 }}>
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: theme.text,
                  marginBottom: 24,
                  paddingBottom: 12,
                  borderBottom: `1px solid ${theme.cardBorder}`,
                }}
              >
                Brand & Styling
              </h2>
              <div style={{ marginTop: 24 }}>
                <label style={labelStyle}>
                  Brand Colors (HEX codes or color names)
                </label>
                <input
                  type="text"
                  name="brandColors"
                  value={formData.brandColors}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.cardBorder)
                  }
                  placeholder="E.g., #FF6B6B, #4ECDC4, Deep Blue"
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={labelStyle}>Preferred Google Fonts</label>
                <input
                  type="text"
                  name="googleFonts"
                  value={formData.googleFonts}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.cardBorder)
                  }
                  placeholder="E.g., Roboto, Open Sans, Poppins"
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={labelStyle}>Existing Logo File Format</label>
                <select
                  name="logoFormat"
                  value={formData.logoFormat}
                  onChange={handleChange}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.cardBorder)
                  }
                >
                  <option value="">Select format</option>
                  <option value="png">PNG</option>
                  <option value="svg">SVG</option>
                  <option value="jpg">JPG</option>
                  <option value="gif">GIF</option>
                  <option value="nologo">No logo yet</option>
                </select>
              </div>
            </div>

            {/* ===== Content & Features ===== */}
            <div style={{ marginBottom: 48 }}>
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: theme.text,
                  marginBottom: 24,
                  paddingBottom: 12,
                  borderBottom: `1px solid ${theme.cardBorder}`,
                }}
              >
                Content & Features
              </h2>
              <div style={{ marginTop: 24 }}>
                <label style={labelStyle}>
                  Contact Form Fields You'd Like Included
                </label>
                <textarea
                  name="contactFormFields"
                  value={formData.contactFormFields}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    minHeight: "80px",
                    resize: "vertical",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.cardBorder)
                  }
                  placeholder="E.g., Name, Email, Message, Phone Number, Dropdown menus, etc."
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={labelStyle}>Social Proof Elements</label>
                <textarea
                  name="socialProof"
                  value={formData.socialProof}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    minHeight: "80px",
                    resize: "vertical",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.cardBorder)
                  }
                  placeholder="E.g., Testimonials, partner logos, success stories, client count"
                />
              </div>
            </div>

            {/* ===== Additional Files ===== */}
            <div style={{ marginBottom: 48 }}>
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: theme.text,
                  marginBottom: 24,
                  paddingBottom: 12,
                  borderBottom: `1px solid ${theme.cardBorder}`,
                }}
              >
                Files & Additional Info
              </h2>
              <div style={{ marginTop: 24 }}>
                <label style={labelStyle}>
                  If you already have a design, kindly attach here
                </label>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    color: theme.darkMutedText,
                    marginBottom: 12,
                    fontStyle: "italic",
                  }}
                >
                  Please share design files, screenshots, or links (you can send
                  via email)
                </p>
                <input
                  type="text"
                  name="designFile"
                  value={formData.designFile}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.cardBorder)
                  }
                  placeholder="Link to design files or brief description"
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={labelStyle}>Other Relevant Information</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    minHeight: "100px",
                    resize: "vertical",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.cardBorder)
                  }
                  placeholder="Any additional details, budget, timeline, or special requirements?"
                />
              </div>
            </div>

            {/* ===== Submit Status Messages ===== */}
            {submitMessage && (
              <div
                style={{
                  marginBottom: 24,
                  padding: "16px 20px",
                  borderRadius: 4,
                  background:
                    submitMessage.type === "success"
                      ? `${theme.primary}20`
                      : "#ff6b6b20",
                  border: `1px solid ${
                    submitMessage.type === "success" ? theme.primary : "#ff6b6b"
                  }`,
                  color:
                    submitMessage.type === "success" ? theme.text : "#ff6b6b",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {submitMessage.text}
                </p>
              </div>
            )}

            {/* ===== Submit Button ===== */}
            <div style={{ marginTop: 40, textAlign: "center" }}>
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "16px 48px",
                  background: isLoading ? theme.darkMutedText : theme.primary,
                  color: theme.background,
                  border: "none",
                  borderRadius: 4,
                  cursor: isLoading ? "not-allowed" : "pointer",
                  transition: "all 0.3s ease",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  opacity: isLoading ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = `0 12px 24px ${theme.primary}40`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }
                }}
              >
                {isLoading ? "Submitting..." : "Submit Project Brief"}
              </button>
            </div>
          </form>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            style={{
              marginTop: 48,
              padding: "32px",
              background: theme.primary + "10",
              border: `1px solid ${theme.primary}30`,
              borderRadius: 8,
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                color: theme.text,
                lineHeight: 1.7,
              }}
            >
              <strong>After submitting your brief:</strong> I'll review all the
              details and send you a custom proposal within{" "}
              <strong>24-48 hours</strong> with pricing, timeline, and next
              steps.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
