import {
  FaGear,
  FaLightbulb,
  FaClipboardList,
  FaBolt,
  FaCode,
} from "react-icons/fa6";
import {
  FaShopify,
  FaWordpress,
  FaGoogle,
  FaSlack,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import {
  SiMake,
  SiNotion,
  SiAirtable,
  SiTrello,
  SiHubspot,
  SiJavascript,
  SiReact,
  SiFirebase,
  SiGooglesheets,
  SiGoogleanalytics,
  SiClickup,
} from "react-icons/si";

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
