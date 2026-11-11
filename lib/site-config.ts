export const siteConfig = {
  name: "Obekai",
  legalName: "Obekai Technologies",
  tagline: "Engineering digital products that move businesses forward.",
  metaTitle: "Obekai | Custom Software Development Company",
  description:
    "Obekai is a software engineering studio in Ahmedabad, India. We build custom software, web applications, SaaS products and AI automation for businesses in India and internationally.",
  url: "https://obekai.com",
  /** Public contact email shown on the site */
  contactEmail: "hello@obekai.com",
  /** @deprecated Use contactEmail */
  email: "hello@obekai.com",
  phone: "+91 99974 43874",
  phoneTel: "+919997443874",
  whatsappUrl: "https://wa.me/919997443874",
  whatsappPrefill: "Hi Obekai, I'd like to discuss a project",
  address: {
    line1: "",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    postalCode: "380015",
    full: "Ahmedabad, Gujarat, India 380015",
  },
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Ahmedabad%2C%20Gujarat%2C%20India%20380015&t=&z=12&ie=UTF8&iwloc=&output=embed",
  hours: "Mon-Sat, 10:00 AM - 7:00 PM IST (flexible for your timezone)",
  replyNote:
    "We reply within 24 hours on WhatsApp or email, often sooner during working hours.",
  legalBusinessName: "Obekai Technologies",
  gstNumber: "",
  udyamNumber: "",
  privacyUrl: "/privacy",
  termsUrl: "/terms",
  registrationLine: "",
  currency: "USD",
  calendarBookingUrl: "",
  /**
   * Unpublished until each review is confirmed as genuine and authorized.
   * Existing entries below are kept for review and are not rendered.
   */
  showTestimonials: false,
  social: {
    /** Add the live company profile URL when available. */
    linkedin: "",
    /** Add the live company profile URL when available. */
    instagram: "",
  },
  whereWeWork:
    "We work remotely with clients across markets. Our studio is based in Ahmedabad, India.",
} as const;

export function getWhatsAppLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappPrefill);
  return `${siteConfig.whatsappUrl}?text=${text}`;
}

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const images = {
  projectImage: {
    src: "/images/projectimage.png",
    alt: "Sample project preview for Obekai work and hero",
    width: 1600,
    height: 1000,
  },
  heroDashboard: {
    src: "/images/projectimage.png",
    alt: "Business software and dashboard preview",
    width: 1600,
    height: 1000,
  },
  logoDark: {
    src: "/images/logo-dark.png",
    alt: "Obekai Technologies",
    width: 1428,
    height: 356,
  },
  logoLight: {
    src: "/images/logo-light.png",
    alt: "Obekai Technologies",
    width: 1428,
    height: 356,
  },
  /** @deprecated Prefer logoDark / logoLight */
  logo: {
    src: "/images/logo-dark.png",
    alt: "Obekai Technologies",
    width: 1428,
    height: 356,
  },
  icon: {
    src: "/images/icon-192.png",
    alt: "Obekai",
    width: 192,
    height: 192,
  },
  favicon: {
    src: "/images/favicon.ico",
    alt: "Obekai",
    width: 32,
    height: 32,
  },
  appleTouchIcon: {
    src: "/images/apple-touch-icon.png",
    alt: "Obekai",
    width: 180,
    height: 180,
  },
  icon512: {
    src: "/images/icon-512.png",
    alt: "Obekai",
    width: 512,
    height: 512,
  },
  teamRakshit: {
    src: "/images/myprofilepic.png",
    alt: "Rakshit Agarwal, Founder of Obekai",
    width: 800,
    height: 800,
  },
  ogDefault: {
    src: "/images/og/og-default.png",
    alt: "Obekai: websites, software and WhatsApp automation",
    width: 1200,
    height: 630,
  },
} as const satisfies Record<string, SiteImage>;

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "/contact" },
] as const;

export const heroContent = {
  headline: "Engineering digital products that move businesses forward.",
  subtext:
    "From custom software and scalable web applications to AI-powered automation, we help businesses turn complex ideas into reliable digital products.",
  primaryCta: "Start a Project",
  secondaryCta: "Explore Our Work",
  /** REVIEW: "6+ years" is carried from existing site copy. Confirm before treating it as final. */
  trustRow: [
    "6+ years of delivery experience",
    "Transparent project proposals",
    "30 days of post-launch support",
  ],
  floatingCards: [
    { label: "New order received", kind: "order" },
    { label: "Appointment confirmed", kind: "appointment" },
    { label: "WhatsApp reminder sent", kind: "reminder" },
  ],
} as const;

/** Honest homepage stats. No inflated project counts. */
export const heroStats = [
  { value: "6+ years", label: "Delivering for growing businesses" },
  { value: "Fixed price", label: "Clear quote before we build" },
  { value: "30 days", label: "Support included after launch" },
] as const;

export const differentiators = [
  {
    title: "Engineering-first approach",
    description:
      "You work with the people designing and building the product. Technical choices follow the business problem.",
    icon: "Code2",
  },
  {
    title: "Transparent communication",
    description:
      "Scope, price and milestones are written down before we start. Progress is shown in language you can act on.",
    icon: "MessagesSquare",
  },
  {
    title: "Scalable, maintainable architecture",
    description:
      "Systems are structured so your team can extend them: clear models, sensible boundaries and technology chosen for the job.",
    icon: "Boxes",
  },
  {
    title: "Ownership and post-launch support",
    description:
      "Source code transfers to you after final payment. Every project includes 30 days of support for issues inside the agreed scope.",
    icon: "KeyRound",
  },
] as const;

export const capabilities = differentiators;

/** @deprecated Use capabilities */
export const valueStrip = capabilities;

export { services, getServiceBySlug } from "@/lib/services";
export type { Service } from "@/lib/services";

export const whoWeHelp = [
  {
    title: "Retail & shops",
    problem:
      "Catalogues, billing and online ordering so customers browse without calling every time.",
  },
  {
    title: "Restaurants & cafes",
    problem:
      "WhatsApp and online ordering that stays clear when the kitchen is busy.",
  },
  {
    title: "Clinics & salons",
    problem:
      "Appointment booking, reminders and fewer missed calls from a paper diary.",
  },
  {
    title: "Coaching & education",
    problem:
      "Course pages, fees and enquiries in one place parents can trust.",
  },
  {
    title: "Professional services",
    problem:
      "A clear site and Google presence that turns searches into calls and bookings.",
  },
  {
    title: "Early-stage products",
    problem:
      "An MVP website or first tool without hiring a full tech team.",
  },
] as const;

export const whyObekai = [
  {
    title: "Direct engineering communication",
    description:
      "You speak with the people doing the work. Questions about architecture, tradeoffs and delivery do not pass through a separate account layer.",
  },
  {
    title: "Transparent fixed-price proposals",
    description:
      "Scope, price and timeline are written before build starts. Changes are quoted before they are made.",
  },
  {
    title: "Clear delivery milestones",
    description:
      "Work is broken into stages you can review. You see working software, not only status updates.",
  },
  {
    title: "Source-code ownership",
    description:
      "After the final payment, the source code, design files and project access transfer to you.",
  },
  {
    title: "Maintainable architecture",
    description:
      "The system is structured so your team, or another vendor, can keep building on it.",
  },
  {
    title: "Post-launch assistance",
    description:
      "Thirty days of support cover issues inside the agreed scope. Care plans after that are optional.",
  },
] as const;

export const founders = [
  {
    name: "Rakshit Agarwal",
    role: "Founder, Software & Automation",
    responsibilities: "Engineering leadership, architecture and delivery",
    bio: "Rakshit leads engineering at Obekai: custom software, web applications and automation. He founded the studio to build products businesses can rely on after launch.",
    expertise: [
      "Custom software & CRM platforms",
      "Web applications and APIs",
      "AI and business automation",
    ],
    image: {
      src: "/images/myprofilepic.png",
      alt: "Rakshit Agarwal, Founder of Obekai",
      width: 800,
      height: 800,
    },
    linkedin: "",
  },
] as const;

/** Credible studio signals only — no invented client names or metrics. */
export const credibilityStrip = [
  {
    label: "Custom CRM",
    detail: "Pipelines, customer records and operational dashboards",
  },
  {
    label: "E-commerce",
    detail: "Catalogue, checkout, payments and order flows",
  },
  {
    label: "Automation",
    detail: "Enquiry, booking and WhatsApp notification systems",
  },
  {
    label: "Web & SaaS",
    detail: "Marketing sites, authenticated apps and MVP releases",
  },
] as const;

export const aboutContent = {
  story:
    "Obekai is an engineering-led software studio in Ahmedabad, India. We work with startups, growing businesses and established companies in India and internationally. The studio was founded by a software engineer, and clients work directly with the people building the product.",
  principles: [
    {
      title: "Build what the business needs now",
      description:
        "The first release covers the workflow that matters. Unused complexity stays out of scope.",
    },
    {
      title: "Put the commercial terms in writing",
      description:
        "Price, timeline and deliverables are agreed before engineering starts.",
    },
    {
      title: "Stay through launch",
      description:
        "Thirty days of support follow go-live. Ongoing care after that is optional.",
    },
  ],
} as const;

export const workingPrinciples = [
  {
    title: "Engineers on the call",
    description:
      "Discovery, scope and delivery conversations happen with the people who will build the system.",
  },
  {
    title: "Nothing important stays verbal",
    description:
      "Scope, milestones, price and what is out of scope are written down before work starts.",
  },
  {
    title: "You can leave with the code",
    description:
      "Final payment transfers the repository, design files and the access required to run the product.",
  },
  {
    title: "Built to be maintained",
    description:
      "Structure, data and integrations are chosen so the product can be extended without a rewrite.",
  },
  {
    title: "Support has a defined window",
    description:
      "The first 30 days after launch cover issues inside the agreed scope. Later work is a care plan or a quoted change.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    duration: "2–3 days",
    description:
      "Understand the business problem, requirements and objectives.",
    outcome: "A shared picture of the problem and what the first release must do.",
  },
  {
    step: "02",
    title: "Plan & Design",
    duration: "3–5 days",
    description:
      "Define architecture, user experience, milestones and scope.",
    outcome: "A written proposal: scope, price, timeline and what is out of scope.",
  },
  {
    step: "03",
    title: "Engineer",
    duration: "1–10 weeks",
    description: "Develop, integrate, test and demonstrate progress.",
    outcome: "Working software you can review at each milestone.",
  },
  {
    step: "04",
    title: "Launch & Support",
    duration: "30 days of support",
    description:
      "Deploy, hand over source code and provide post-launch support.",
    outcome: "A live product, repository access, and 30 days of in-scope support.",
  },
] as const;

export const processExtras = {
  whatWeNeed: [
    "Logo (or we can design one)",
    "Text and photos (or we help gather them)",
    "Business details: hours, services, prices if public",
    "A single decision-maker for approvals",
  ],
  revisions:
    "1–2 rounds of revisions are included depending on your plan. Extra changes are quoted in advance so there are no surprises.",
} as const;

/** Curated for websites, CRM/software, automation, design and cloud delivery. */
export const techStack = [
  { name: "Next.js", src: "/images/tech/nextjs.png" },
  { name: "React", src: "/images/tech/react.png" },
  { name: "TypeScript", src: "/images/tech/typescript.png" },
  { name: "Node.js", src: "/images/tech/nodejs.png" },
  { name: "NestJS", src: "/images/tech/nestjs.png" },
  { name: "Python", src: "/images/tech/python.png" },
  { name: "PostgreSQL", src: "/images/tech/postgresql.png" },
  { name: "MongoDB", src: "/images/tech/mongodb.png" },
  { name: "Redis", src: "/images/tech/redis.png" },
  { name: "Tailwind CSS", src: "/images/tech/tailwind.png" },
  { name: "Docker", src: "/images/tech/docker.png" },
  { name: "AWS", src: "/images/tech/aws.png" },
  { name: "Figma", src: "/images/tech/figma.png" },
  { name: "GitHub", src: "/images/tech/github.png" },
] as const;

export const techGroups = [
  {
    name: "Frontend",
    items: [
      { name: "React", src: "/images/tech/react.png" },
      { name: "Next.js", src: "/images/tech/nextjs.png" },
      { name: "TypeScript", src: "/images/tech/typescript.png" },
      { name: "Tailwind CSS", src: "/images/tech/tailwind.png" },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", src: "/images/tech/nodejs.png" },
      { name: "NestJS", src: "/images/tech/nestjs.png" },
      { name: "Python", src: "/images/tech/python.png" },
    ],
  },
  {
    name: "Database",
    items: [
      { name: "PostgreSQL", src: "/images/tech/postgresql.png" },
      { name: "MongoDB", src: "/images/tech/mongodb.png" },
      { name: "Redis", src: "/images/tech/redis.png" },
    ],
  },
  {
    name: "Cloud & Infrastructure",
    items: [
      { name: "AWS", src: "/images/tech/aws.png" },
      { name: "Docker", src: "/images/tech/docker.png" },
      { name: "GitHub", src: "/images/tech/github.png" },
    ],
  },
  {
    name: "AI & Integrations",
    items: [
      { name: "LLM APIs" },
      { name: "Automation" },
      { name: "Third-party integrations" },
    ],
  },
] as const;

export const projects = [
  {
    slug: "custom-crm-platform",
    isSample: false,
    label: "Project 01",
    title: "Custom CRM Platform",
    businessType: "CRM",
    problem:
      "Sales and customer data scattered across sheets, chats and disconnected tools.",
    solution:
      "A centralized business management platform with customer tracking, sales pipelines, analytics, and automated workflows.",
    delivers: [
      "Customer tracking in one place",
      "Sales pipelines and analytics",
      "Automated workflows",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    image: {
      src: "/images/project111.jpg",
      alt: "Custom CRM platform dashboard with pipelines and analytics",
      width: 1600,
      height: 1200,
    },
    mockup: "dashboard" as const,
    features: [
      "Customer and lead tracking",
      "Sales pipeline management",
      "Analytics dashboards",
      "Automated workflows",
    ],
  },
  {
    slug: "ecommerce-platform",
    isSample: false,
    label: "Project 02",
    title: "E-commerce Platform",
    businessType: "Commerce",
    problem:
      "Selling online without a reliable catalogue, checkout or order system.",
    solution:
      "A custom shopping experience with product management, checkout, payments, and order tracking.",
    delivers: [
      "Product management",
      "Secure checkout and payments",
      "Order tracking",
    ],
    tech: ["React", "Stripe", "Node.js"],
    image: {
      src: "/images/project222.jpg",
      alt: "Custom e-commerce platform with product catalogue and checkout",
      width: 1600,
      height: 1200,
    },
    mockup: "store" as const,
    features: [
      "Product catalogue management",
      "Cart and checkout",
      "Stripe payments",
      "Order tracking",
    ],
  },
  {
    slug: "business-automation",
    isSample: false,
    label: "Project 03",
    title: "Business Automation",
    businessType: "Automation",
    problem:
      "Manual replies, bookings and reminders eating into daily operations.",
    solution:
      "Automated customer enquiries, appointment bookings, and WhatsApp notifications.",
    delivers: [
      "Automated customer enquiries",
      "Appointment bookings",
      "WhatsApp notifications",
    ],
    tech: ["WhatsApp API", "AI", "Automation"],
    image: {
      src: "/images/project333.jpg",
      alt: "Business automation flows for enquiries, bookings and WhatsApp alerts",
      width: 1536,
      height: 1024,
    },
    mockup: "automation" as const,
    features: [
      "Enquiry automation",
      "Appointment booking flows",
      "WhatsApp notifications",
      "AI-assisted responses",
    ],
  },
] as const;

export const testimonials = [
  {
    id: "t1",
    projectSlug: "business-automation",
    isSample: false,
    quote:
      "The business automation Obekai built changed our front desk. Enquiry replies, appointment bookings and WhatsApp reminders now run on their own. Missed chats dropped fast, and staff only step in when a conversation needs a human.",
    name: "Priya Nair",
    role: "Clinic Operations Manager",
    company: "Harborview Dental",
    avatar: {
      src: "/images/person11.jpg",
      alt: "Priya Nair, Clinic Operations Manager at Harborview Dental",
      width: 600,
      height: 900,
    },
  },
  {
    id: "t2",
    projectSlug: "custom-crm-platform",
    isSample: false,
    quote:
      "They replaced our spreadsheet CRM with a real pipeline: customer tracking, stages, analytics and follow-up workflows. Reps actually use it day to day, and we received the source code after final payment.",
    name: "Arjun Mehta",
    role: "Head of Sales",
    company: "Brightline Services",
    avatar: {
      src: "/images/person44.jpeg",
      alt: "Arjun Mehta, Head of Sales at Brightline Services",
      width: 683,
      height: 1024,
    },
  },
  {
    id: "t3",
    projectSlug: "ecommerce-platform",
    isSample: false,
    quote:
      "Their e-commerce platform gave us a proper store—catalogue, Stripe checkout and order tracking—instead of selling through DMs. Launch matched the fixed quote and timeline, and we update products without calling a developer.",
    name: "Daniel Brooks",
    role: "Founder",
    company: "Northline Supply Co.",
    avatar: {
      src: "/images/person22.jpg",
      alt: "Daniel Brooks, Founder of Northline Supply Co.",
      width: 740,
      height: 493,
    },
  },
] as const;

export const engagementModels = [
  {
    id: "websites",
    title: "Websites",
    approach: "Starting price or defined packages",
    detail:
      "Page count, design and launch are written into a package. Current website packages are listed below.",
  },
  {
    id: "web-apps",
    title: "Web applications",
    approach: "Scope-based quotation",
    detail:
      "Accounts, workflows and integrations are quoted after the first release is clear. There is no single public price for a product build.",
  },
  {
    id: "custom",
    title: "Custom software and SaaS",
    approach: "Discovery, then a fixed proposal",
    detail:
      "We write the scope before engineering starts. Custom systems usually begin from the figure on the software package below.",
  },
  {
    id: "automation",
    title: "AI and automation",
    approach: "Based on integrations and complexity",
    detail:
      "A defined WhatsApp or workflow automation has a starting price in the add-ons. Broader AI work is quoted from the systems involved.",
  },
] as const;

export const pricingTiers = [
  {
    id: "starter-website",
    name: "Starter Website",
    priceFrom: "$299",
    range: "$299-$599",
    timeline: "Usually 1-3 weeks",
    description:
      "A focused multi-page site that helps customers find you and get in touch.",
    includes: [
      "Up to 5 pages",
      "Mobile-friendly design",
      "Contact form and WhatsApp button",
      "Map embed",
      "Basic SEO setup",
      "1 round of text and image changes after delivery",
    ],
    bestFor: "Shops, freelancers, salons, tutors",
    highlighted: false,
  },
  {
    id: "business-store",
    name: "Business Website / Online Store",
    priceFrom: "$799",
    range: "$799-$1,999 · Online store from $1,299",
    timeline: "Usually 3-6 weeks",
    description:
      "A fuller site or store with catalogues, enquiry flows or online checkout.",
    includes: [
      "Up to 12 pages or 50 products",
      "Custom design",
      "Blog",
      "Enquiry forms",
      "Online payments",
      "Admin panel to edit content",
      "Speed and SEO setup",
      "2 revision rounds",
    ],
    bestFor: "Clinics, restaurants, coaches, D2C brands",
    highlighted: true,
  },
  {
    id: "custom-software",
    name: "Custom Software / Automation",
    priceFrom: "$2,000",
    range: "$2,000-$8,000+ depending on scope",
    timeline: "Usually 6-12 weeks",
    description:
      "CRM, billing, inventory, booking systems or WhatsApp automation tailored to your workflow.",
    includes: [
      "Free discovery call",
      "Written scope before build",
      "Weekly demos",
      "Staff training",
      "30 days free support after launch",
    ],
    bestFor: "Shops, clinics, distributors, service businesses",
    highlighted: false,
  },
] as const;

export const pricingAddOns = [
  { name: "WhatsApp automation / order bot", priceFrom: "$499" },
  {
    name: "Google Business Profile setup + SEO foundations (one-time)",
    priceFrom: "$199",
  },
  { name: "Logo + basic brand kit", priceFrom: "$199" },
  {
    name: "Monthly care plan: Basic",
    priceFrom: "$49/month",
  },
  {
    name: "Monthly care plan: Growth",
    priceFrom: "$129/month",
  },
  { name: "Social media management", priceFrom: "$249/month" },
] as const;

export const pricingNotes = {
  notIncluded:
    "Not included: domain, hosting (or free tiers where suitable), paid ads budget, third-party fees (payment gateway charges, WhatsApp API usage), and content writing or photography unless booked.",
  gst: "Prices shown in USD. Quotes available in your currency. Applicable taxes may apply.",
  paymentTerms:
    "Payment terms: 40% advance, 40% at design or demo approval, 20% on delivery. Invoices provided. Source code and accounts are handed over after final payment.",
} as const;

export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "The core work is custom software engineering, web and SaaS development, AI and business automation, and e-commerce or other customer platforms. UI/UX and search presence are available alongside a build. Each engagement starts from the business problem, then a written scope.",
  },
  {
    question: "How does the development process work?",
    answer:
      "We discover the problem, write the architecture, scope, milestones and price, then engineer against that plan with reviews along the way. Launch includes deployment, source-code handover and 30 days of support for issues inside the agreed scope. To start we need a clear goal, brand or content direction, and one person who can approve decisions.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Website packages start from $299 (typical range $299-$599). Business sites are often $799-$1,999, and online stores start from $1,299. Custom software usually starts from $2,000. WhatsApp or workflow automation starts from $499. Web applications, SaaS and broader AI work are quoted from scope. Quotes can be issued in USD or INR. Standard payment is 40% to start, 40% at design or demo approval, and 20% on delivery. Domain, hosting, paid ads and third-party usage fees are excluded unless we agree otherwise.",
  },
  {
    question: "How long does development take?",
    answer:
      "A simple marketing website often takes 1-3 weeks. A business site or store usually takes 3-6 weeks. Custom software, CRM or automation is typically 6-12 weeks, depending on integrations and how quickly feedback comes back. Every quote includes a timeline.",
  },
  {
    question: "Who owns the source code?",
    answer:
      "You do. Once the final invoice is paid, ownership of the project source code, design files and related project assets transfers to you. We deliver the repository or an agreed archive, plus the credentials needed to run it. Hosting, domains and third-party services are transferred into your name wherever the provider allows it.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes, as an optional monthly care plan covering updates, monitoring, small in-scope tweaks, dependency patches and priority support. If you only need occasional help, we quote individual tasks. You can also maintain the product yourself with the source code we hand over.",
  },
  {
    question: "Can you work with international clients?",
    answer:
      "Yes. We work remotely with clients across markets and time zones. Communication is on WhatsApp, email or scheduled calls. Contracts, invoices and payments can be handled in USD or INR. The studio is in Ahmedabad, India.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. We sign mutual NDAs before detailed discussions when an idea, dataset or process needs protection. Share your template or ask for ours.",
  },
  {
    question: "What happens after project delivery?",
    answer:
      "You receive the live product, source code and access after final payment. The next 30 days cover bug fixes and small adjustments inside the agreed scope. After that you can take a care plan, request paid changes, or run the product with your own team.",
  },
] as const;

export const serviceOptions = [
  "Custom Software Engineering",
  "Web & SaaS Development",
  "AI & Business Automation",
  "E-commerce & Digital Platforms",
  "Not sure yet",
] as const;

export const budgetOptions = [
  "Under $500",
  "$500 - $1,500",
  "$1,500 - $5,000",
  "$5,000+",
  "Not sure yet",
] as const;

export const currencyOptions = ["USD", "INR", "No preference"] as const;

export type Project = (typeof projects)[number];

export { blogPosts } from "@/lib/blog-posts";
export type { BlogPost } from "@/lib/blog-posts";
