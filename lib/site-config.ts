export const siteConfig = {
  name: "MyAIM",
  tagline: "Your Technology & Digital Growth Partner",
  description:
    "Build your business with custom CRM solutions, SaaS development, website design, digital marketing, and business automation services.",
  url: "https://myaim.example.com",
  email: "hello@myaim.example.com",
  phone: "+1 (555) 000-0000",
  address: "123 Innovation Drive, Suite 400, San Francisco, CA 94105",
  social: {
    linkedin: "https://linkedin.com/company/myaim",
    instagram: "https://instagram.com/myaim",
    twitter: "https://x.com/myaim",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Our Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

export const trustIndicators = [
  {
    title: "Custom-Built Solutions",
    description: "Software shaped around your workflows, not generic templates.",
  },
  {
    title: "Business-First Approach",
    description: "Every decision starts with measurable business outcomes.",
  },
  {
    title: "Scalable Technology",
    description: "Architectures that grow with your team and your customers.",
  },
  {
    title: "Long-Term Partnership",
    description: "Support beyond launch so your digital products keep improving.",
  },
] as const;

export const services = [
  {
    id: "custom-software-crm",
    title: "Custom Software & CRM Development",
    shortDescription:
      "Build CRMs, pipelines, and business systems tailored to how your team actually works.",
    icon: "Database",
    accent: "from-violet-500/20 to-fuchsia-500/10",
    highlights: [
      "Custom CRM development",
      "Sales pipeline management",
      "Lead management systems",
      "Workflow automation",
    ],
    details: [
      "Custom CRM development",
      "Customer management systems",
      "Sales pipeline management",
      "Lead management systems",
      "Business dashboards",
      "Workflow automation",
      "Third-party API integrations",
    ],
  },
  {
    id: "saas-product",
    title: "SaaS Product Development",
    shortDescription:
      "Launch subscription platforms with solid architecture, billing, and admin tooling.",
    icon: "Cloud",
    accent: "from-cyan-500/20 to-blue-500/10",
    highlights: [
      "MVP development",
      "Multi-tenant applications",
      "Payment gateway integration",
      "Admin dashboards",
    ],
    details: [
      "SaaS application development",
      "MVP development",
      "Subscription-based platforms",
      "Multi-tenant applications",
      "SaaS architecture and scalability",
      "Payment gateway integration",
      "Admin dashboards",
    ],
  },
  {
    id: "website-development",
    title: "Website Development",
    shortDescription:
      "High-performing business sites, landing pages, and e-commerce experiences.",
    icon: "Globe",
    accent: "from-emerald-500/20 to-teal-500/10",
    highlights: [
      "Corporate websites",
      "Landing pages",
      "E-commerce websites",
      "Website redesign",
    ],
    details: [
      "Business websites",
      "Corporate websites",
      "Landing pages",
      "E-commerce websites",
      "Portfolio websites",
      "Web application development",
      "Website redesign and optimization",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Social Media",
    shortDescription:
      "Grow visibility with content strategy, campaigns, SEO, and performance marketing.",
    icon: "Megaphone",
    accent: "from-orange-500/20 to-amber-500/10",
    highlights: [
      "Social media management",
      "Content strategy",
      "Paid advertising",
      "SEO optimization",
    ],
    details: [
      "Social media management",
      "Social media marketing",
      "Content strategy",
      "Brand awareness campaigns",
      "Paid advertising campaigns",
      "SEO optimization",
      "Performance marketing",
    ],
  },
  {
    id: "online-presence",
    title: "Online Presence & Brand Management",
    shortDescription:
      "Strengthen how your brand shows up across search, listings, and digital channels.",
    icon: "BadgeCheck",
    accent: "from-rose-500/20 to-pink-500/10",
    highlights: [
      "Google Business Profile",
      "Reputation management",
      "Brand identity",
      "Website maintenance",
    ],
    details: [
      "Google Business Profile setup and optimization",
      "Online reputation management",
      "Brand identity development",
      "Digital presence management",
      "Business listing management",
      "Content management",
      "Website maintenance",
    ],
  },
  {
    id: "business-automation",
    title: "Business Automation & AI Solutions",
    shortDescription:
      "Automate operations with AI tools, chatbots, messaging flows, and analytics.",
    icon: "Bot",
    accent: "from-indigo-500/20 to-violet-500/10",
    highlights: [
      "AI chatbot development",
      "WhatsApp automation",
      "Email automation",
      "Process automation",
    ],
    details: [
      "AI-powered business tools",
      "AI chatbot development",
      "WhatsApp automation",
      "Email automation",
      "Business process automation",
      "AI integrations",
      "Reporting and analytics automation",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX & Product Design",
    shortDescription:
      "Design clear product experiences, dashboards, and design systems users love.",
    icon: "Palette",
    accent: "from-sky-500/20 to-cyan-500/10",
    highlights: [
      "Website UI/UX design",
      "SaaS dashboard design",
      "Mobile-first design",
      "Design systems",
    ],
    details: [
      "Website UI/UX design",
      "SaaS dashboard design",
      "Mobile-first design",
      "Wireframing and prototyping",
      "Design systems",
      "Product redesign",
    ],
  },
] as const;

export const differentiators = [
  {
    title: "Tailored Solutions",
    description:
      "Every business has different needs. We build solutions around your business goals.",
  },
  {
    title: "Modern Technology",
    description:
      "We use modern, reliable, and scalable technologies that support long-term growth.",
  },
  {
    title: "End-to-End Support",
    description:
      "From planning and development to launch and ongoing maintenance, we stay with you.",
  },
  {
    title: "Growth-Focused Approach",
    description:
      "We focus on delivering solutions that create measurable business value.",
  },
] as const;

export const aboutContent = {
  heading: "Technology Meets Business Innovation.",
  introduction:
    "We are a digital solutions company focused on helping businesses build, optimize, and grow through technology. Our approach combines software engineering, creative thinking, and digital strategy to deliver solutions that solve real business problems.",
  mission:
    "Help businesses establish and scale their digital presence with practical, high-quality technology solutions.",
  vision:
    "Become a trusted partner for companies that want technology to drive clearer operations, stronger brands, and sustainable growth.",
} as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand the client's business, requirements, and goals.",
  },
  {
    step: "02",
    title: "Strategize",
    description:
      "Prepare the solution architecture, strategy, scope, and execution plan.",
  },
  {
    step: "03",
    title: "Build",
    description: "Design, develop, test, and refine the solution.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    description:
      "Deploy the solution, provide support, and help the business scale.",
  },
] as const;

export const solutions = [
  {
    title: "CRM Dashboards",
    description: "Pipeline visibility, lead tracking, and team performance views.",
    tags: ["CRM", "Sales", "Analytics"],
  },
  {
    title: "SaaS Platforms",
    description: "Multi-tenant products with billing, roles, and admin controls.",
    tags: ["SaaS", "Subscriptions", "MVP"],
  },
  {
    title: "Business Management Systems",
    description: "Internal tools that connect operations, teams, and reporting.",
    tags: ["Operations", "Workflows", "Admin"],
  },
  {
    title: "E-commerce Platforms",
    description: "Storefronts built for conversion, catalog management, and growth.",
    tags: ["Commerce", "Payments", "UX"],
  },
  {
    title: "Analytics Dashboards",
    description: "Clear reporting layers that turn raw data into decisions.",
    tags: ["BI", "Reporting", "KPIs"],
  },
  {
    title: "AI-Powered Applications",
    description: "Assistants, automation flows, and intelligent business tools.",
    tags: ["AI", "Automation", "Chatbots"],
  },
] as const;

/** Demo content only — replace before publishing as genuine reviews. */
export const testimonials = [
  {
    id: "demo-1",
    name: "Alex Rivera",
    company: "Demo Company A",
    quote:
      "Working with the team felt structured and collaborative. They translated our requirements into a product roadmap we could actually execute.",
    isDemo: true,
  },
  {
    id: "demo-2",
    name: "Jordan Lee",
    company: "Demo Company B",
    quote:
      "The discovery process was thorough. We left with clearer priorities for our CRM and a realistic path to launch.",
    isDemo: true,
  },
  {
    id: "demo-3",
    name: "Sam Okonkwo",
    company: "Demo Company C",
    quote:
      "They balanced design quality with practical delivery. Our landing page and automation flows launched without unnecessary complexity.",
    isDemo: true,
  },
] as const;

export const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with startups, SMBs, and established companies that need custom software, websites, digital marketing, or automation support.",
  },
  {
    question: "Can you build custom CRM software?",
    answer:
      "Yes. We design and build CRM systems tailored to your sales process, lead handling, reporting needs, and integrations.",
  },
  {
    question: "Do you develop SaaS applications from scratch?",
    answer:
      "Yes. We can help with MVP scoping, architecture, development, billing integrations, and admin tooling for SaaS products.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Absolutely. We can audit your current site, improve structure and design, and rebuild for better performance and conversion.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes. We offer ongoing support options covering updates, monitoring, content changes, and continuous improvements.",
  },
  {
    question: "Can you manage our social media accounts?",
    answer:
      "Yes. We can support social media management, content planning, campaign execution, and performance tracking.",
  },
  {
    question: "How much does a custom software project cost?",
    answer:
      "Cost depends on scope, complexity, integrations, and timeline. Share your requirements and we will provide a tailored estimate.",
  },
  {
    question: "How long does it take to develop a website or application?",
    answer:
      "Timelines vary by project. A focused website may take a few weeks, while custom software or SaaS builds typically require longer phased delivery.",
  },
] as const;

export const serviceOptions = [
  "Custom Software & CRM Development",
  "SaaS Product Development",
  "Website Development",
  "Digital Marketing & Social Media",
  "Online Presence & Brand Management",
  "Business Automation & AI Solutions",
  "UI/UX & Product Design",
  "Not sure yet / Multiple services",
] as const;

export const budgetOptions = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Prefer not to say",
] as const;
