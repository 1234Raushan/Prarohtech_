import {
  Code2,
  Globe,
  BrainCircuit,
  Cloud,
  Boxes,
  Plug,
  Lightbulb,
  Users,
  TestTube2,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "PrarohTech",
  tagline: "Software, AI & Cloud Solutions",
  website: "https://prarohtech.com",
  email: "info@prarohtech.com",
  address: "Shiv Shakti Enclave, Gali No. 7,Gali No. 07, Gautam Buddha Nagar, Uttar Pradesh – 201305, India",
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "custom-software",
    title: "Custom Software Development",
    summary: "Purpose-built software designed around your workflows, goals and operating needs.",
    icon: Code2,
    points: ["Business application development", "Legacy software modernisation", "Scalable solution architecture"],
  },
  {
    slug: "web-development",
    title: "Web Application Development",
    summary: "Responsive, accessible web applications built for reliable day-to-day use.",
    icon: Globe,
    points: ["Responsive web applications", "Angular and React interfaces", "Performance and accessibility"],
  },
  {
    slug: "dotnet-angular",
    title: ".NET / Angular Development",
    summary: "Modern business systems using C#, ASP.NET Core and Angular.",
    icon: Code2,
    points: ["ASP.NET Core applications", "Angular front ends", "SQL Server integration"],
  },
  {
    slug: "ai-automation",
    title: "AI & Business Automation",
    summary: "Practical AI and workflow automation for repetitive, information-heavy processes.",
    icon: BrainCircuit,
    points: ["AI and LLM integration", "Document and data workflows", "Process automation"],
  },
  {
    slug: "erp",
    title: "ERP & Business Applications",
    summary: "Connected applications for finance, inventory, operations and internal teams.",
    icon: Boxes,
    points: ["Custom business modules", "Workflow integration", "Role-based access"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    summary: "Cloud infrastructure and delivery practices that support reliable software releases.",
    icon: Cloud,
    points: ["Azure cloud solutions", "Docker and Kubernetes", "CI/CD and monitoring"],
  },
  {
    slug: "consulting",
    title: "IT Consulting",
    summary: "Practical technical guidance for software decisions, planning and improvement.",
    icon: Lightbulb,
    points: ["Technology assessment", "Architecture planning", "Modernisation roadmaps"],
  },
  {
    slug: "dedicated-developers",
    title: "Dedicated Developers / Staff Augmentation",
    summary: "Flexible engineering support aligned with your team, priorities and delivery process.",
    icon: Users,
    points: ["Dedicated development support", "Team extension", "Flexible engagement models"],
  },
  {
    slug: "qa-testing",
    title: "QA & Software Testing",
    summary: "Structured testing to improve software quality, stability and release confidence.",
    icon: TestTube2,
    points: ["Functional testing", "Test automation", "Performance and regression testing"],
  },
  {
    slug: "maintenance-support",
    title: "Software Maintenance & Support",
    summary: "Ongoing technical support for updates, issue resolution and software improvement.",
    icon: LifeBuoy,
    points: ["Application maintenance", "Issue investigation", "Enhancements and updates"],
  },
];

export const processSteps = [
  { title: "Plan", text: "Discovery workshops, scope, success metrics and a costed roadmap." },
  { title: "Design", text: "Experience design, architecture and a clickable prototype." },
  { title: "Develop", text: "Two-week sprints, automated testing and transparent demos." },
  { title: "Deploy", text: "CI/CD, cloud hardening, performance and security sign-off." },
  { title: "Support", text: "SLA-backed monitoring, iteration and continuous improvement." },
];

export const technologies = [
  "C#",
  ".NET / ASP.NET Core",
  "Angular",
  "React",
  "SQL Server",
  "Azure",
  "Docker",
  "Kubernetes",
  "REST APIs",
  "AI/LLM Integration",
];

export const industries = [
  "Banking & Fintech",
  "Healthcare",
  "Manufacturing",
  "Retail & E-commerce",
  "Logistics",
  "Education",
  "Real Estate",
  "Energy & Utilities",
];

export const faqs = [
  {
    q: "How do engagements typically start?",
    a: "We begin by understanding your business needs, current systems and priorities. From there, we can define a suitable scope and delivery approach.",
  },
  {
    q: "Do you work fixed-price or time-and-materials?",
    a: "Both. Well-defined scopes run fixed-price with milestone billing; evolving products run as dedicated squads billed monthly.",
  },
  {
    q: "Who owns the intellectual property?",
    a: "You do — source code, infrastructure definitions and documentation transfer to you on payment of each milestone.",
  },
  {
    q: "How do you handle security and compliance?",
    a: "Security needs are discussed during planning and reflected in the architecture, access controls, testing and delivery process for each engagement.",
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Yes. We start with a technical audit, stabilise the build and test pipeline, then plan incremental modernisation.",
  },
];

export const posts = [
  {
    slug: "shipping-ai-copilots",
    title: "Shipping AI copilots that survive contact with production",
    category: "AI",
    date: "2026-06-18",
    excerpt:
      "Evaluation harnesses, retrieval hygiene and guardrails — the unglamorous work that separates a demo from a dependable copilot.",
    read: "8 min read",
  },
  {
    slug: "dotnet-modernisation",
    title: "A pragmatic path from .NET Framework to .NET 9",
    category: ".NET",
    date: "2026-05-30",
    excerpt:
      "Strangler-fig migration, shared authentication and how to keep releasing features while the platform moves underneath you.",
    read: "10 min read",
  },
  {
    slug: "angular-performance",
    title: "Angular signals and the end of change-detection guesswork",
    category: "Angular",
    date: "2026-05-02",
    excerpt: "How zoneless Angular and signal-based stores cut interaction latency on a 300-screen enterprise app.",
    read: "7 min read",
  },
  {
    slug: "cloud-cost",
    title: "Cutting cloud spend 41% without touching the roadmap",
    category: "Cloud",
    date: "2026-04-11",
    excerpt: "Right-sizing, storage tiering and the scheduling changes that paid for an entire platform team.",
    read: "6 min read",
  },
  {
    slug: "automation-roi",
    title: "How to pick the first process to automate",
    category: "Business",
    date: "2026-03-19",
    excerpt: "A scoring model for volume, variance and value — so your first automation win funds the next five.",
    read: "5 min read",
  },
  {
    slug: "design-systems",
    title: "Design systems for enterprise software teams",
    category: "Business",
    date: "2026-02-27",
    excerpt: "Tokens, governance and adoption metrics that stop a design system becoming shelfware.",
    read: "9 min read",
  },
];

export const projects = [
  {
    title: "Business Operations Portal",
    category: "Software",
    type: "Demo Project",
    description: "A sample workflow portal for managing requests, approvals and operational records.",
    stack: ["Angular", "ASP.NET Core", "Azure"],
  },
  {
    title: "Document Knowledge Assistant",
    category: "AI",
    type: "Proof of Concept",
    description: "An internal concept for finding answers across approved business documents with source references.",
    stack: ["AI/LLM", "REST APIs", "SQL Server"],
  },
  {
    title: "Inventory & Purchasing Workspace",
    category: "ERP",
    type: "Sample Solution",
    description: "A sample business application for inventory, purchase requests and supplier records.",
    stack: ["ASP.NET Core", "SQL Server", "Angular"],
  },
  {
    title: "Service Request Dashboard",
    category: "Web",
    type: "Internal Project",
    description: "An internal dashboard concept for triaging service requests and tracking progress.",
    stack: ["React", "REST APIs", "Azure"],
  },
  {
    title: "Automated Invoice Review",
    category: "Automation",
    type: "Proof of Concept",
    description: "A workflow concept for extracting invoice details and routing exceptions for review.",
    stack: ["AI/LLM", ".NET", "SQL Server"],
  },
  {
    title: "Cloud Deployment Blueprint",
    category: "Cloud",
    type: "Internal Project",
    description: "A reusable reference setup for containerised applications, deployment and monitoring.",
    stack: ["Azure", "Docker", "Kubernetes"],
  },
];
