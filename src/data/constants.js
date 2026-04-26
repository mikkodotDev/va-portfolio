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
    title: "Web Development & Optimization",
    desc: "Building and improving websites with clean UI, fast performance, and scalable structure.",
    tags: ["React", "Shopify", "WordPress", "Performance"],
  },
  {
    icon: FaLightbulb,
    iconColor: "#FDB813",
    title: "Automation & System Building",
    desc: "I create smart workflows and integrations that eliminate repetitive work and connect your tools seamlessly.",
    tags: ["Zapier", "Make", "API Integrations", "Workflows"],
  },
  {
    icon: FaFigma,
    iconColor: "#f24e1e",
    title: "UI/UX & Product Design",
    desc: "Designing clean, user-friendly interfaces for web and mobile apps that people actually enjoy using.",
    tags: ["Figma", "Wireframing", "User Research", "Design Systems"],
  },
];

export const STACK = [
  {
    category: "Automation & Systems",
    tools: [
      { name: "Zapier", color: "#ff4a00", icon: FaBolt },
      { name: "Make", color: "#6d00cc", icon: SiMake },
      { name: "n8n", color: "#ff6b35", icon: FaBolt },
      { name: "Webhooks", color: "#ff6b6b", icon: FaGear },
      { name: "API Integrations", color: "#4ecdc4", icon: FaGear },
    ],
  },
  {
    category: "Development",
    tools: [
      { name: "JavaScript", color: "#f7df1e", icon: SiJavascript },
      { name: "React", color: "#61dafb", icon: SiReact },
      { name: "Firebase", color: "#ffa500", icon: SiFirebase },
      { name: "REST APIs", color: "#4ecdc4", icon: FaGear },
      { name: "GitHub", color: "#333", icon: FaGithub },
    ],
  },
  {
    category: "Business Tools",
    tools: [
      { name: "Shopify", color: "#96bf48", icon: FaShopify },
      { name: "HubSpot", color: "#ff7a59", icon: SiHubspot },
      { name: "Airtable", color: "#18bfff", icon: SiAirtable },
      { name: "Notion", color: "#ffffff", icon: SiNotion },
      { name: "WordPress", color: "#21759b", icon: FaWordpress },
    ],
  },
  {
    category: "Data & Reporting",
    tools: [
      { name: "Google Sheets", color: "#34a853", icon: SiGooglesheets },
      { name: "Excel", color: "#217346", icon: FaBolt },
      { name: "Google Analytics", color: "#e37400", icon: SiGoogleanalytics },
      { name: "Looker Studio", color: "#4285f4", icon: FaGoogle },
    ],
  },
  {
    category: "Design & UX",
    tools: [
      { name: "Figma", color: "#f24e1e", icon: FaFigma },
      { name: "Wireframing", color: "#a78bfa", icon: FaGear },
      { name: "User Flows", color: "#8b5cf6", icon: FaGear },
    ],
  },
  {
    category: "Project Management",
    tools: [
      { name: "Trello", color: "#0079bf", icon: SiTrello },
      { name: "Slack", color: "#4a154b", icon: FaSlack },
      { name: "ClickUp", color: "#7b68ee", icon: SiClickup },
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
    title: "E-Commerce Workflow Optimization",
    problem:
      "A Shopify store owner was spending hours daily managing orders, responding to customers, and updating inventory across multiple platforms — leading to delays and errors.",
    solution:
      "I mapped out the entire fulfillment workflow, identified bottlenecks, and rebuilt the process using automation and real-time syncing between tools. Connected Shopify → Google Sheets → Slack → Klaviyo to automate order tracking, customer notifications, and inventory alerts.",
    metrics: [
      { value: "~4 hrs", label: "Saved daily" },
      { value: "Faster", label: "Order processing" },
      { value: "Improved", label: "Customer experience" },
    ],
    tools: ["Shopify", "Zapier", "Klaviyo", "Google Sheets"],
  },
  {
    title: "SaaS Onboarding System",
    problem:
      "A SaaS company had a fragmented onboarding process — scattered documents, missed steps, and inconsistent client experience.",
    solution:
      "I restructured their onboarding into a clear, repeatable system with centralized documentation and automated task flows. Built a Notion workspace with SOPs, checklists, and templates. Integrated automation to handle client intake, task assignment, and follow-ups.",
    metrics: [
      { value: "Weeks → Days", label: "Onboarding time" },
      { value: "Improved", label: "Consistency" },
      { value: "Reduced", label: "Manual admin work" },
    ],
    tools: ["Notion", "HubSpot", "Zapier", "Loom"],
  },
  {
    title: "Lead Generation Automation",
    problem:
      "Leads were being collected but not properly tracked or followed up, resulting in missed opportunities.",
    solution:
      "I redesigned the lead pipeline to ensure every lead is captured, tracked, and acted on in real time. Connected Typeform → Airtable → HubSpot → Slack, with automation handling lead scoring, assignment, and notifications.",
    metrics: [
      { value: "Faster", label: "Response times" },
      { value: "Better", label: "Lead visibility" },
      { value: "More", label: "Qualified conversions" },
    ],
    tools: ["Typeform", "Make", "Airtable", "HubSpot"],
  },
];
