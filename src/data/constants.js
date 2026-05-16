

// ===== Design Tokens =====
export const DESIGN_TOKENS = {
  // Spacing Scale (8px base unit)
  spacing: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
    "4xl": "80px",
    "5xl": "100px",
  },
  // Border Radius
  borderRadius: {
    xs: "2px",
    sm: "3px", // Card standard radius
    md: "8px",
    lg: "12px",
  },
  // Shadows
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 2px 4px rgba(0, 0, 0, 0.08)",
    md: "0 4px 8px rgba(0, 0, 0, 0.1)",
    lg: "0 8px 16px rgba(0, 0, 0, 0.12)",
    "card-hover": "0 12px 24px rgba(0, 0, 0, 0.15)",
  },
  // Z-Index
  zIndex: {
    dropdown: 10,
    sticky: 20,
    fixed: 30,
    modal: 40,
    popover: 50,
    tooltip: 60,
  },
  // Transitions
  transitions: {
    fast: "0.15s cubic-bezier(0.4, 0, 0.2, 1)",
    base: "0.25s cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "0.35s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  // Animation Delays (for cascade effects)
  animationDelays: {
    stagger: 0.05, // 50ms between items, cap at 3 items max
  },
};

export const NAV_LINKS = ["Services", "Stack", "About", "Work", "Contact"];

export const SERVICES = [
  {
    icon: FaCode,
    iconColor: "#0066cc",
    title: "Landing Page Design",
    desc: "Custom-designed landing pages that convert. I create stunning, conversion-focused designs using Figma and build them responsive on any platform.",
    tags: ["Figma", "WordPress", "Responsive Design"],
  },
  {
    icon: FaWordpress,
    iconColor: "#21759b",
    title: "WordPress Website Build",
    desc: "Full WordPress websites built with Elementor or Divi. Fast, beautiful, and easy for you to manage. From blog to e-commerce, I've got you covered.",
    tags: ["Elementor", "Divi", "WooCommerce", "Custom Design"],
  },
  {
    icon: FaFigma,
    iconColor: "#f24e1e",
    title: "UI/UX & Brand Design",
    desc: "Complete design from concept to handoff. Wireframes, mockups, design systems, and brand guidelines to bring your vision to life.",
    tags: ["Figma", "Wireframing", "Design System", "Branding"],
  },
];

export const STACK = [
  {
    category: "Design & Prototyping",
    tools: [
      { name: "Figma", color: "#f24e1e", icon: FaFigma },
      { name: "Adobe XD", color: "#ff26be", icon: FaGear },
      { name: "Wireframing", color: "#a78bfa", icon: FaGear },
      { name: "Prototyping", color: "#8b5cf6", icon: FaGear },
    ],
  },
  {
    category: "Frontend Development",
    tools: [
      { name: "HTML/CSS", color: "#e34c26", icon: FaCode },
      { name: "JavaScript", color: "#f7df1e", icon: SiJavascript },
      { name: "React", color: "#61dafb", icon: SiReact },
      { name: "GitHub", color: "#333", icon: FaGithub },
    ],
  },
  {
    category: "WordPress Builders",
    tools: [
      { name: "WordPress", color: "#21759b", icon: FaWordpress },
      { name: "Elementor", color: "#92003b", icon: FaGear },
      { name: "Divi", color: "#6b46c1", icon: FaGear },
      { name: "WooCommerce", color: "#96588a", icon: FaShopify },
    ],
  },
  {
    category: "Web Platforms",
    tools: [
      { name: "Shopify", color: "#96bf48", icon: FaShopify },
      { name: "Webflow", color: "#4353ff", icon: FaGear },
      { name: "Vercel", color: "#000", icon: FaGear },
      { name: "Hosting/Domains", color: "#008000", icon: FaGear },
    ],
  },
  {
    category: "SEO & Analytics",
    tools: [
      { name: "Google Analytics", color: "#e37400", icon: SiGoogleanalytics },
      { name: "Google Search Console", color: "#4285f4", icon: FaGoogle },
      { name: "SEO Tools", color: "#ff6d00", icon: FaGear },
      { name: "Page Speed", color: "#4ecdc4", icon: FaBolt },
    ],
  },
  {
    category: "Collaboration & Tools",
    tools: [
      { name: "Slack", color: "#4a154b", icon: FaSlack },
      { name: "Notion", color: "#ffffff", icon: SiNotion },
      { name: "Trello", color: "#0079bf", icon: SiTrello },
      { name: "VS Code", color: "#007acc", icon: FaGear },
    ],
  },
];

export const PROJECTS = [
  {
    label: "E-Commerce",
    title: "Shopify Store Overhaul",
    desc: "Rebuilt product pages, integrated abandoned cart automations via Klaviyo, and optimized checkout flow for a fashion brand — reducing cart abandonment by 34%.",
    metric: "−34% Cart Abandonment",
    tags: ["Shopify", "Klaviyo", "Zapier"],
    color: "#c9a96e",
  },
  {
    label: "Automation",
    title: "Lead Pipeline Automation",
    desc: "Connected Typeform → Airtable → HubSpot → Slack into a single flow. New leads are scored, tagged, assigned, and notified without a single manual click.",
    metric: "6 hrs/week saved",
    tags: ["Make", "HubSpot", "Airtable"],
    color: "#7c9e8a",
  },
  {
    label: "Operations",
    title: "SOP + Knowledge Base Build",
    desc: "Documented all business processes into a structured Notion workspace — onboarding new team members went from 3 weeks to 4 days.",
    metric: "3 weeks → 4 days",
    tags: ["Notion", "Loom", "G-Suite"],
    color: "#8a7ca0",
  },
];

export const CASE_STUDIES = [
  {
    title: "WordPress Service Website (Client Project)",
    problem:
      "A local service business had an outdated website, weak mobile layout, and unclear call-to-action sections, which made it hard for visitors to inquire.",
    solution:
      "I redesigned and rebuilt the site into a clean 5-page WordPress website using Elementor. I improved content hierarchy, added stronger CTA sections, and used a mobile-first layout for a better browsing experience.",
    metrics: [
      { value: "+42%", label: "Inquiry clicks" },
      { value: "90+", label: "Mobile PageSpeed" },
      { value: "-28%", label: "Bounce rate" },
    ],
    tools: ["WordPress", "Elementor", "Figma", "Google Analytics"],
  },
  {
    title: "SaaS Landing Page Redesign (Sample Project)",
    problem:
      "The original landing page was text-heavy and did not communicate the value proposition clearly, causing visitors to drop before reaching the CTA.",
    solution:
      "I created a focused Figma redesign and built a responsive React landing page with clearer headline structure, better section flow, and stronger social-proof blocks.",
    metrics: [
      { value: "2.1x", label: "Clearer message flow" },
      { value: "+35%", label: "CTA visibility" },
      { value: "100%", label: "Responsive checks passed" },
    ],
    tools: ["Figma", "React", "CSS", "Vite"],
  },
  {
    title: "Portfolio to Client-Ready Website (Personal Project)",
    problem:
      "My old portfolio looked generic and did not clearly communicate my services, process, or pricing to potential clients.",
    solution:
      "I rebuilt the portfolio with a clearer service structure, pricing packages, process section, FAQ, and stronger contact CTAs to make it client-ready.",
    metrics: [
      { value: "<2s", label: "Local first load" },
      { value: "3", label: "Clear service packages" },
      { value: "24h", label: "Response-time promise" },
    ],
    tools: ["React", "WordPress", "UI/UX", "GitHub"],
  },
];

export const CORE_SKILLS = [
  "WordPress Website Design & Development",
  "Landing Page Design & Conversion Optimization",
  "UI/UX & Responsive Web Design",
  "Elementor & Divi Page Builder",
  "Frontend Development (HTML/CSS/JavaScript)",
  "Web Performance & SEO Optimization",
  "Client Communication & Project Management",
  "Brand Design & Visual Identity",
];

export const TOOLS_AND_PLATFORMS = STACK;

export const PORTFOLIO_PROJECTS = [
  {
    id: "nonprofit-website",
    name: "Non-Profit Community Hub",
    dateCreated: "October 2024",
    category: "WordPress Build",
    shortDescription:
      "A comprehensive community website for a non-profit organization with volunteer sign-up, event management, and donor integration.",
    clientNeeded: {
      problem:
        "The organization needed a modern, user-friendly website to increase volunteer engagement and donations.",
      explanation:
        "They required clear navigation, mobile responsiveness, event scheduling, and a seamless donation workflow.",
    },
    howIHelped:
      "I designed and built a WordPress site using Elementor with custom sections for volunteer sign-up, featured events, testimonials, and integrated PayPal for donations. Implemented SEO best practices and optimized for mobile.",
    results: [
      { metric: "+156%", label: "Volunteer sign-ups" },
      { metric: "+42%", label: "Donation inquiries" },
      { metric: "98", label: "Mobile PageSpeed Score" },
    ],
    figmaUrl: "https://www.figma.com",
    liveUrl: "https://example-nonprofit.com",
    placeholder: "https://images.unsplash.com/photo-1553531088-b0f5efd82d59?w=800&h=600&fit=crop",
  },
  {
    id: "ecommerce-store",
    name: "E-Commerce Fashion Store",
    dateCreated: "September 2024",
    category: "WordPress + WooCommerce",
    shortDescription:
      "Fully functional e-commerce platform for a sustainable fashion brand with product catalog, checkout, and inventory management.",
    clientNeeded: {
      problem:
        "The brand needed an online store to reach customers globally and streamline sales operations.",
      explanation:
        "Required product filters, shopping cart, secure payment gateway, order tracking, and inventory sync.",
    },
    howIHelped:
      "Built a WordPress e-commerce site with WooCommerce, integrated Stripe and PayPal, added product filtering, reviews section, and automated order confirmation emails. Created mobile-first design with fast loading.",
    results: [
      { metric: "+89%", label: "Online orders monthly" },
      { metric: "2.1s", label: "Average page load" },
      { metric: "94%", label: "Customer satisfaction" },
    ],
    figmaUrl: "https://www.figma.com",
    liveUrl: "https://example-fashion.com",
    placeholder: "https://images.unsplash.com/photo-1460925895917-adf4e566c39f?w=800&h=600&fit=crop",
  },
  {
    id: "coaching-landing",
    name: "Life Coaching Landing Page",
    dateCreated: "August 2024",
    category: "Landing Page Design",
    shortDescription:
      "High-converting landing page for a life coach with service packages, testimonials, and email capture.",
    clientNeeded: {
      problem:
        "The coach needed a professional landing page to convert visitors into coaching clients.",
      explanation:
        "Required clear value proposition, service tiers, social proof, calendar integration, and email list building.",
    },
    howIHelped:
      "Designed and built a conversion-focused landing page in Figma and Elementor. Added service comparison table, client testimonials, integrated Calendly for bookings, and Mailchimp for email capture.",
    results: [
      { metric: "+127%", label: "Conversion rate" },
      { metric: "34", label: "Bookings/month" },
      { metric: "2,400", label: "Email subscribers" },
    ],
    figmaUrl: "https://www.figma.com",
    liveUrl: "https://example-coaching.com",
    placeholder: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    id: "saas-website",
    name: "SaaS Product Website",
    dateCreated: "July 2024",
    category: "Web Design",
    shortDescription:
      "Modern, scalable website for a SaaS platform with feature showcase, pricing tiers, and signup flow.",
    clientNeeded: {
      problem:
        "The SaaS company needed a website that effectively showcases features and converts free-trial signups.",
      explanation:
        "Needed feature comparisons, interactive demos section, clear pricing tiers, customer testimonials, and smooth signup flow.",
    },
    howIHelped:
      "Created a custom design in Figma with interactive elements. Built responsive pages using React/Elementor with feature cards, pricing toggle, FAQ accordion, and integrated with their auth system.",
    results: [
      { metric: "+64%", label: "Free trial signups" },
      { metric: "3.8/5", label: "Average rating" },
      { metric: "45s", label: "Avg session duration" },
    ],
    figmaUrl: "https://www.figma.com",
    liveUrl: "https://example-saas.com",
    placeholder: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: "agency-portfolio",
    name: "Digital Agency Portfolio",
    dateCreated: "June 2024",
    category: "Portfolio Website",
    shortDescription:
      "Showcase portfolio for a creative agency displaying projects, services, and client testimonials.",
    clientNeeded: {
      problem:
        "The agency needed a professional portfolio to attract high-quality clients and showcase their best work.",
      explanation:
        "Required project gallery, case studies, service descriptions, team profiles, and client testimonials.",
    },
    howIHelped:
      "Designed and built a stunning portfolio with custom project cards, lightbox galleries, animated backgrounds, smooth scrolling, and integrated contact forms.",
    results: [
      { metric: "+73%", label: "Inquiry requests" },
      { metric: "15+", label: "Projects showcased" },
      { metric: "4.9/5", label: "Client testimonials" },
    ],
    figmaUrl: "https://www.figma.com",
    liveUrl: "https://example-agency.com",
    placeholder: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    id: "restaurant-website",
    name: "Restaurant Booking Website",
    dateCreated: "May 2024",
    category: "WordPress Build",
    shortDescription:
      "Full-featured restaurant website with online reservations, menu showcase, and location details.",
    clientNeeded: {
      problem:
        "The restaurant wanted to streamline reservations and showcase their menu online.",
      explanation:
        "Needed reservation system, menu display with images, photo gallery, testimonials, and Google Maps integration.",
    },
    howIHelped:
      "Built WordPress site with Elementor, integrated TablePress for reservations, created menu gallery with lightboxes, added customer reviews section, and optimized for local SEO.",
    results: [
      { metric: "+220", label: "Online reservations/month" },
      { metric: "92%", label: "Mobile traffic" },
      { metric: "4.8★", label: "Google rating" },
    ],
    figmaUrl: "https://www.figma.com",
    liveUrl: "https://example-restaurant.com",
    placeholder: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop",
  },
  {
    id: "startup-mvp",
    name: "Tech Startup MVP Landing",
    dateCreated: "April 2024",
    category: "Landing Page",
    shortDescription:
      "Minimalist landing page for a tech startup launching their MVP with beta signup and feature highlights.",
    clientNeeded: {
      problem:
        "The startup needed a clean, fast landing page to collect beta signups before full launch.",
      explanation:
        "Required clear problem/solution messaging, feature highlights, waitlist form, and social media links.",
    },
    howIHelped:
      "Created a minimalist design focused on conversions. Built with React for optimal performance, added animated features section, integrated email capture, and included social proof counters.",
    results: [
      { metric: "2,100", label: "Beta signups" },
      { metric: "1.2s", label: "Load time" },
      { metric: "68%", label: "Email capture rate" },
    ],
    figmaUrl: "https://www.figma.com",
    liveUrl: "https://example-startup.com",
    placeholder: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    id: "course-platform",
    name: "Online Course Platform",
    dateCreated: "March 2024",
    category: "WordPress Learning",
    shortDescription:
      "Educational platform with course listings, student dashboard, and course enrollment system.",
    clientNeeded: {
      problem:
        "An educator needed a platform to sell and deliver online courses to students worldwide.",
      explanation:
        "Required course pages, payment integration, student login, progress tracking, and certification.",
    },
    howIHelped:
      "Integrated LearnDash plugin with WordPress, created course landing pages, set up payment processing, designed student dashboard, and configured email notifications for course progress.",
    results: [
      { metric: "450+", label: "Active students" },
      { metric: "+$42K", label: "Monthly revenue" },
      { metric: "4.7/5", label: "Course rating" },
    ],
    figmaUrl: "https://www.figma.com",
    liveUrl: "https://example-courses.com",
    placeholder: "https://images.unsplash.com/photo-1516534775068-bb6c1213e73e?w=800&h=600&fit=crop",
  },
  {
    id: "healthcare-clinic",
    name: "Healthcare Clinic Website",
    dateCreated: "February 2024",
    category: "WordPress Build",
    shortDescription:
      "Professional healthcare website with appointment booking, doctor profiles, and patient information.",
    clientNeeded: {
      problem:
        "The clinic needed an online presence to reduce administrative work and improve patient experience.",
      explanation:
        "Required appointment scheduling, doctor bios, service information, insurance details, and contact options.",
    },
    howIHelped:
      "Built professional WordPress site with appointment booking system, created doctor profile pages, added service descriptions, integrated contact forms, and implemented HIPAA-friendly privacy practices.",
    results: [
      { metric: "+320%", label: "Online bookings" },
      { metric: "98%", label: "Patient satisfaction" },
      { metric: "2x", label: "No-show reduction" },
    ],
    figmaUrl: "https://www.figma.com",
    liveUrl: "https://example-clinic.com",
    placeholder: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
  },
];
