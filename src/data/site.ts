import {
  Code2,
  Globe,
  Smartphone,
  BrainCircuit,
  Cloud,
  Boxes,
  PenTool,
  Plug,
  Workflow,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "PrarohTech",
  tagline: "Engineering growth through software, AI and cloud.",
  email: "hello@prarohtech.com",
  phone: "+91 98765 43210",
  address: "4th Floor, Tech Park One, Baner Road, Pune, Maharashtra 411045, India",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "GitHub", href: "https://github.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
  ],
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
    summary: "Product-grade platforms built for scale, security and long-term maintainability.",
    icon: Code2,
    points: ["Domain-driven architecture", "Modernisation of legacy systems", "Dedicated delivery pods"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    summary: "Fast, accessible, SEO-first web applications and marketing platforms.",
    icon: Globe,
    points: ["Angular & React front-ends", "ASP.NET Core APIs", "Core Web Vitals tuning"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    summary: "Native and cross-platform apps with polished, App-Store-ready experiences.",
    icon: Smartphone,
    points: ["iOS, Android & Flutter", "Offline-first sync", "Release automation"],
  },
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    summary: "Applied AI that ships: copilots, document intelligence and predictive models.",
    icon: BrainCircuit,
    points: ["RAG & LLM copilots", "Forecasting & scoring", "MLOps and evaluation"],
  },
  {
    slug: "cloud",
    title: "Cloud Solutions",
    summary: "Azure and AWS landing zones, migrations and cost-optimised operations.",
    icon: Cloud,
    points: ["Cloud migration", "Kubernetes & serverless", "FinOps and observability"],
  },
  {
    slug: "erp",
    title: "ERP Development",
    summary: "Finance, inventory, HR and manufacturing modules tailored to your workflows.",
    icon: Boxes,
    points: ["Custom ERP builds", "Dynamics & SAP integrations", "Role-based governance"],
  },
  {
    slug: "ui-ux",
    title: "UI/UX Design",
    summary: "Research-led product design systems that make complex software feel effortless.",
    icon: PenTool,
    points: ["Discovery & journey mapping", "Design systems", "Usability testing"],
  },
  {
    slug: "api",
    title: "API Development",
    summary: "Secure, documented, versioned APIs that power partners and internal teams.",
    icon: Plug,
    points: ["REST & GraphQL", "OAuth2 and API gateways", "Contract-first delivery"],
  },
  {
    slug: "automation",
    title: "Business Automation",
    summary: "Remove manual work with orchestrated workflows and intelligent document flows.",
    icon: Workflow,
    points: ["RPA & workflow engines", "Approval automation", "Integration hubs"],
  },
  {
    slug: "consulting",
    title: "IT Consulting",
    summary: "Technology strategy, audits and roadmaps grounded in commercial outcomes.",
    icon: Lightbulb,
    points: ["Architecture reviews", "Security & compliance", "Team enablement"],
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
  "Angular",
  "React",
  ".NET Core",
  "Node.js",
  "Python",
  "SQL Server",
  "PostgreSQL",
  "Azure",
  "AWS",
  "Docker",
  "Kubernetes",
  "Flutter",
  "OpenAI",
  "Power BI",
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

export const stats = [
  { value: 180, suffix: "+", label: "Projects delivered" },
  { value: 12, suffix: "+", label: "Years of engineering" },
  { value: 60, suffix: "+", label: "Specialists on staff" },
  { value: 98, suffix: "%", label: "Client retention" },
];

export const testimonials = [
  {
    quote:
      "PrarohTech rebuilt our core lending platform in nine months. Throughput tripled and our release cycle went from quarterly to weekly.",
    name: "Ananya Rao",
    role: "CTO, Northbridge Finance",
  },
  {
    quote:
      "Their AI team shipped a document-processing copilot that removed 4,000 manual hours a year. Measured, pragmatic, no hype.",
    name: "Marcus Lehmann",
    role: "COO, Vantage Logistics",
  },
  {
    quote:
      "The ERP rollout across six plants was the smoothest enterprise programme we have run. Communication was flawless.",
    name: "Priya Menon",
    role: "VP Operations, Suryan Industries",
  },
];

export const faqs = [
  {
    q: "How do engagements typically start?",
    a: "With a paid discovery sprint of one to three weeks. You leave with an architecture outline, a prototype and a fixed delivery plan — whether or not you continue with us.",
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
    a: "Secure SDLC, code scanning, least-privilege cloud access and support for SOC 2, ISO 27001, HIPAA and GDPR programmes.",
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
    title: "Northbridge Lending Platform",
    category: "Software",
    result: "3× loan throughput, weekly releases",
    stack: ["Angular", ".NET Core", "Azure"],
  },
  {
    title: "Vantage Freight Copilot",
    category: "AI",
    result: "4,000 manual hours removed per year",
    stack: ["Python", "OpenAI", "PostgreSQL"],
  },
  {
    title: "Suryan Manufacturing ERP",
    category: "ERP",
    result: "Six plants unified on one system",
    stack: [".NET Core", "SQL Server", "Power BI"],
  },
  {
    title: "Curelink Patient App",
    category: "Mobile",
    result: "4.8★ rating, 120k installs",
    stack: ["Flutter", "Node.js", "AWS"],
  },
  {
    title: "Aurora Retail Commerce",
    category: "Web",
    result: "62% faster LCP, +28% conversion",
    stack: ["React", "Node.js", "Azure"],
  },
  {
    title: "Helios Grid Analytics",
    category: "Cloud",
    result: "Real-time telemetry for 9,000 assets",
    stack: ["Kubernetes", "Python", "AWS"],
  },
  {
    title: "Meridian Claims Automation",
    category: "AI",
    result: "Claim handling time down 57%",
    stack: ["Python", "Azure", "SQL Server"],
  },
  {
    title: "Beacon Campus Portal",
    category: "Web",
    result: "40k students on a single portal",
    stack: ["Angular", ".NET Core", "SQL Server"],
  },
];

export const clients = [
  "Northbridge",
  "Vantage",
  "Suryan",
  "Curelink",
  "Aurora",
  "Helios",
  "Meridian",
  "Beacon",
];
