export const siteConfig = {
  name: "Obekai",
  legalName: "Obekai Technologies",
  tagline: "Building What's Next.",
  description:
    "Obekai is a mid-sized software company with over 6 years of experience building websites, business systems and WhatsApp automation for growing businesses.",
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
    line1: "Ramdev Nagar",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    full: "Ramdev Nagar, Ahmedabad, Gujarat, India",
  },
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Ramdev%20Nagar%2C%20Ahmedabad%2C%20Gujarat%2C%20India&t=&z=14&ie=UTF8&iwloc=&output=embed",
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
  /** Keep false until you have signed client reviews */
  showTestimonials: true,
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
    github: "",
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
    alt: "Rakshit Agarwal, Co-founder of Obekai",
    width: 800,
    height: 800,
  },
  teamDivyang: {
    src: "/images/myprofilepic.png",
    alt: "Divyang Solanki, Co-founder of Obekai",
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
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const heroContent = {
  headline: "Build digital products that win customers and run your business.",
  subtext:
    "From high-performing websites to custom software and WhatsApp automation, Obekai delivers fixed-price projects with clear timelines and a team that has shipped for clients for over 6 years.",
  primaryCta: "Get in touch",
  secondaryCta: "View projects",
  trustRow: [
    "6+ years of client delivery",
    "Fixed-price proposals",
    "30 days of launch support",
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

export const capabilities = [
  {
    title: "Websites that bring customers in",
    description:
      "Fast, mobile-first sites and stores that help people find you, trust you, and take action.",
    icon: "Globe",
  },
  {
    title: "Software that replaces spreadsheet chaos",
    description:
      "Billing, inventory, bookings and CRMs shaped around how your team already works, not a bloated package.",
    icon: "Database",
  },
  {
    title: "WhatsApp that keeps up at rush hour",
    description:
      "Order flows, reminders and FAQ replies so fewer messages get lost when your team is busy.",
    icon: "Bot",
  },
  {
    title: "Experienced team, clear delivery",
    description:
      "A mid-sized company with over 6 years shipping for clients. Weekly updates, plain language, and a scope you can plan around.",
    icon: "Users",
  },
] as const;

/** @deprecated Use capabilities */
export const valueStrip = capabilities;

export const services = [
  {
    slug: "business-websites",
    title: "Business Websites & Online Stores",
    outcome:
      "Look credible online, rank for the right searches, and convert visitors into enquiries or orders.",
    icon: "Globe",
    featured: true,
    tags: ["Business website", "E-commerce", "Landing pages"],
    summary:
      "Clean, fast websites and online stores built to help customers find you, trust you, and take the next step.",
    includes: [
      "Mobile-first design",
      "WhatsApp and contact CTAs",
      "SEO-ready foundations",
      "Online payments (Stripe, PayPal and more)",
      "Easy content editing",
    ],
    whoFor:
      "Shops, clinics, restaurants, coaches, freelancers and brands that need a stronger online presence.",
    timeline: "Usually 1-6 weeks depending on pages and store features",
    priceFrom: "$299",
    faqs: [
      {
        question: "Do I need to write all the text myself?",
        answer:
          "You can share rough notes. We help shape clear page copy, or you can book content writing as an add-on.",
      },
      {
        question: "Can customers pay online?",
        answer:
          "Yes. We integrate payment providers that fit your market, including Stripe, PayPal, Razorpay and similar options.",
      },
      {
        question: "Will it work on phones?",
        answer:
          "Yes. Every site is designed mobile first, because most visitors browse on their phone.",
      },
    ],
  },
  {
    slug: "custom-software-crm",
    title: "Custom Software & CRM",
    outcome:
      "Replace notebooks and spreadsheets with software that matches how your team already works.",
    icon: "Database",
    featured: true,
    tags: ["CRM", "Billing", "Inventory"],
    summary:
      "Practical tools for billing, stock, customers and reporting, designed around your real day-to-day process.",
    includes: [
      "Invoicing and billing flows",
      "Inventory tracking",
      "Customer records",
      "Staff logins",
      "Reports",
    ],
    whoFor:
      "Shops, clinics, distributors and service businesses that have outgrown notebooks and shared spreadsheets.",
    timeline: "Usually 6-12 weeks after scope is agreed",
    priceFrom: "$2,000",
    faqs: [
      {
        question: "Can you match how we already work?",
        answer:
          "Yes. We start by learning your current process, then build only what you need.",
      },
      {
        question: "Will my staff need training?",
        answer:
          "We include a short walkthrough and simple notes so your team can use the system confidently.",
      },
      {
        question: "Who owns the software?",
        answer:
          "You do. After final payment we hand over the code and accounts.",
      },
    ],
  },
  {
    slug: "whatsapp-ai-automation",
    title: "WhatsApp & AI Automation",
    outcome: "Answer customers faster, even when your team is at capacity.",
    icon: "Bot",
    featured: true,
    tags: ["WhatsApp bots", "Auto-replies", "Lead capture"],
    summary:
      "WhatsApp flows that take orders, answer FAQs, book appointments and capture leads, so fewer messages slip through.",
    includes: [
      "Order-taking bots",
      "Appointment reminders",
      "FAQ auto-replies",
      "Lead capture to Google Sheets",
    ],
    whoFor:
      "Restaurants, clinics, shops and service businesses that handle high WhatsApp volume every day.",
    timeline: "Often 2-6 weeks depending on the flow",
    priceFrom: "$499",
    faqs: [
      {
        question: "Do I need the WhatsApp Business API?",
        answer:
          "For simple auto-replies, WhatsApp Business may be enough. For larger order flows we recommend the API. We help you choose.",
      },
      {
        question: "Can a human take over a chat?",
        answer:
          "Yes. Bots handle the common questions. Your team can step in when a conversation needs a person.",
      },
      {
        question: "Where do leads go?",
        answer:
          "We can send them to Google Sheets, your CRM, or email, whichever is easiest for your team.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & Google Presence",
    outcome: "Show up when customers search for what you offer.",
    icon: "Megaphone",
    featured: true,
    tags: ["Google Business Profile", "SEO", "Social media"],
    summary:
      "Strengthen your presence on Google and social platforms so the right people can find and contact you.",
    includes: [
      "Google Business Profile setup",
      "SEO foundations",
      "Social media posts",
    ],
    whoFor:
      "Businesses that want more enquiries, calls and visits from people searching online.",
    timeline: "Setup often within 1-2 weeks. Ongoing plans are monthly.",
    priceFrom: "$199",
    faqs: [
      {
        question: "Is this the same as paid ads?",
        answer:
          "No. This focuses on your free Google profile and organic presence. Paid ads are separate and optional.",
      },
      {
        question: "Do you manage posts every month?",
        answer:
          "Yes, if you choose a monthly social plan. One-time setup is also available.",
      },
      {
        question: "How soon will I see results?",
        answer:
          "Google profiles can start looking better within days. Ranking takes longer and depends on competition and reviews.",
      },
    ],
  },
  {
    slug: "ui-ux-brand",
    title: "UI/UX & Brand Design",
    outcome: "Give customers a brand and interface they trust at first glance.",
    icon: "Palette",
    featured: true,
    tags: ["Logo", "Brand kit", "Dashboards"],
    summary:
      "Clear branding and interface design so your product and website feel professional, simple and trustworthy.",
    includes: [
      "Logo and basic brand kit",
      "App and dashboard design",
      "Website UI layouts",
    ],
    whoFor:
      "Businesses launching a new brand or refreshing a site or app that feels unclear.",
    timeline: "Usually 1-3 weeks for a logo kit. Longer for full product UI.",
    priceFrom: "$199",
    faqs: [
      {
        question: "What do I get in a brand kit?",
        answer:
          "Logo files, colours, fonts and simple usage guidance you can share with printers or freelancers.",
      },
      {
        question: "Can you design only a few screens?",
        answer:
          "Yes. We can design key screens first and expand later.",
      },
      {
        question: "Do you also build what you design?",
        answer:
          "Yes, when you want. Many clients keep design and build with us so nothing gets lost between teams.",
      },
    ],
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    outcome: "Give customers a fast app experience on iOS and Android.",
    icon: "Smartphone",
    featured: true,
    tags: ["iOS", "Android", "Flutter"],
    summary:
      "Cross-platform mobile apps for bookings, commerce, internal tools and customer portals.",
    includes: [
      "Flutter or React Native builds",
      "Push notifications",
      "Secure auth and profiles",
      "API-backed features",
      "App store launch support",
    ],
    whoFor:
      "Businesses that need a dedicated mobile experience beyond a responsive website.",
    timeline: "Usually 6-14 weeks depending on features",
    priceFrom: "$2,500",
    faqs: [
      {
        question: "Do you build native or cross-platform?",
        answer:
          "We usually recommend Flutter or React Native for speed and one codebase. Native is available when the product needs it.",
      },
      {
        question: "Can the app connect to our existing system?",
        answer:
          "Yes. We integrate with your APIs, CRM, payment providers or WhatsApp workflows.",
      },
      {
        question: "Do you help with store publishing?",
        answer:
          "Yes. We guide screenshots, listings and submission for App Store and Google Play.",
      },
    ],
  },
  {
    slug: "api-integrations",
    title: "API & System Integrations",
    outcome: "Connect your tools so data moves without manual copy-paste.",
    icon: "Plug",
    featured: true,
    tags: ["APIs", "Webhooks", "Automation"],
    summary:
      "Reliable integrations between your website, CRM, payments, spreadsheets and third-party platforms.",
    includes: [
      "Payment gateway wiring",
      "CRM and Sheets sync",
      "Webhook automation",
      "Auth and secure data flow",
      "Error monitoring basics",
    ],
    whoFor:
      "Teams using multiple tools that need clean, automated handoffs between systems.",
    timeline: "Often 1-4 weeks depending on the systems involved",
    priceFrom: "$499",
    faqs: [
      {
        question: "Which platforms can you connect?",
        answer:
          "Common ones include Stripe, PayPal, Razorpay, HubSpot, Google Sheets, WhatsApp API and custom backends.",
      },
      {
        question: "What if an API is poorly documented?",
        answer:
          "We prototype early, validate endpoints, and flag risks before locking the quote.",
      },
      {
        question: "Will you document the integration?",
        answer:
          "Yes. You get a short handover note covering endpoints, keys and how to monitor failures.",
      },
    ],
  },
  {
    slug: "mvp-product-build",
    title: "MVP & Product Builds",
    outcome: "Launch a focused first version fast, then improve with real users.",
    icon: "Rocket",
    featured: true,
    tags: ["MVP", "SaaS", "Prototypes"],
    summary:
      "Scoped MVP websites and product backends for founders who need a credible first release without overbuilding.",
    includes: [
      "Discovery and feature prioritisation",
      "Clickable prototype or wireframes",
      "Production-ready first release",
      "Analytics setup",
      "Iteration roadmap",
    ],
    whoFor:
      "Startups and internal teams validating a product idea before hiring a full engineering squad.",
    timeline: "Usually 4-10 weeks for a first usable version",
    priceFrom: "$3,000",
    faqs: [
      {
        question: "How do you keep an MVP from becoming too big?",
        answer:
          "We define one primary user journey, cut nice-to-haves, and lock scope in writing before build.",
      },
      {
        question: "Can we expand after launch?",
        answer:
          "Yes. We leave a clean codebase and a short roadmap for the next release.",
      },
      {
        question: "Do you help with product decisions?",
        answer:
          "Yes. We advise on what to ship first based on speed, cost and customer value.",
      },
    ],
  },
  {
    slug: "care-maintenance",
    title: "Care Plans & Maintenance",
    outcome: "Keep your site or product fast, secure and up to date after launch.",
    icon: "LifeBuoy",
    featured: true,
    tags: ["Support", "Updates", "Monitoring"],
    summary:
      "Ongoing care for websites and software: updates, small improvements, backups and priority support.",
    includes: [
      "Dependency and security updates",
      "Uptime and basic monitoring",
      "Content and feature tweaks",
      "Priority response window",
      "Monthly progress notes",
    ],
    whoFor:
      "Businesses that want a reliable partner after launch instead of ad-hoc emergency fixes.",
    timeline: "Monthly plans. Onboarding usually within 1 week.",
    priceFrom: "$49",
    faqs: [
      {
        question: "What is covered in a care plan?",
        answer:
          "Routine updates, small content or UI changes, monitoring alerts and a defined response window. Larger features are scoped separately.",
      },
      {
        question: "Can we pause or change the plan?",
        answer:
          "Yes. Plans are month to month unless you choose a longer commitment for a better rate.",
      },
      {
        question: "Do you support products you did not build?",
        answer:
          "Often yes, after a short audit of the stack and access. We confirm fit before onboarding.",
      },
    ],
  },
] as const;

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
    title: "6+ years of delivery",
    description: "A mid-sized team with proven experience building and serving clients.",
  },
  {
    title: "Fixed-price quotes",
    description: "Agreed in writing before we start.",
  },
  {
    title: "Weekly progress updates",
    description: "Clear updates on WhatsApp every week.",
  },
  {
    title: "30 days free support",
    description: "After launch, so small fixes are covered.",
  },
] as const;

export const founders = [
  {
    name: "Rakshit Agarwal",
    role: "Co-founder, Software & Automation",
    bio: "Rakshit builds the software side of Obekai: websites, billing tools and WhatsApp automation. He likes turning messy spreadsheets into simple systems that shop owners can actually use.",
    image: {
      src: "/images/myprofilepic.png",
      alt: "Rakshit Agarwal, Co-founder of Obekai",
      width: 800,
      height: 800,
    },
    linkedin: "",
  },
  {
    name: "Divyang Solanki",
    role: "Co-founder, Design & Growth",
    bio: "Divyang leads design and growth: layouts, branding and Google presence. He makes sure every site is clear on mobile and easy for customers to act on.",
    /** Leave src empty until a unique photo is available. Do not reuse another founder photo. */
    image: {
      src: "",
      alt: "Divyang Solanki, Co-founder of Obekai",
      width: 800,
      height: 800,
    },
    linkedin: "",
  },
] as const;

export const aboutContent = {
  story:
    "Obekai is a mid-sized, remote-first software company with over 6 years of experience building and serving clients. We combine practical engineering with clear design so growing businesses get products that fit how they work, priced fairly and explained without jargon.",
  principles: [
    {
      title: "Build what matters now",
      description: "Ship the features you need today. Leave unused complexity out.",
    },
    {
      title: "Honest cost and time",
      description: "Fixed quotes and timelines in writing before we start.",
    },
    {
      title: "Stay after launch",
      description:
        "Thirty days of free support, then optional care plans so your product keeps running.",
    },
  ],
} as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    duration: "2–3 days",
    description: "We learn how your business works and what you need first.",
    outcome: "A short list of goals and must-have features.",
  },
  {
    step: "02",
    title: "Plan",
    duration: "3–5 days",
    description: "We agree scope, price and timeline in plain language.",
    outcome: "A fixed-price quote and a simple project plan.",
  },
  {
    step: "03",
    title: "Build",
    duration: "1–10 weeks",
    description:
      "We design and build, and share progress every week on WhatsApp.",
    outcome: "Working screens you can click and give feedback on.",
  },
  {
    step: "04",
    title: "Launch & Support",
    duration: "30 days free support",
    description: "We go live, hand over access, and stay for early fixes.",
    outcome: "Your live site or tool, plus ownership of the work.",
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
    question: "How much does a website or software cost?",
    answer:
      "We give fixed-price quotes after a short discovery call, so you know the total before we start. Starter websites usually start from $299 (typical range $299-$599). Business sites and online stores often fall between $799 and $1,999. Custom software, CRM and automation usually start from $2,000. Quotes can be issued in USD or another currency you prefer, with scope and timeline written down before any payment.",
  },
  {
    question: "Who owns the source code?",
    answer:
      "You do. Once the final invoice is paid, ownership of the project source code, design files and related project assets transfers to you. We do not keep proprietary lock-in on your product. Hosting accounts, domains and third-party services set up for the project are also handed over or transferred into your name wherever the provider allows it.",
  },
  {
    question: "Do you provide source code after project completion?",
    answer:
      "Yes. After final payment we deliver the complete source code through a private Git repository or an agreed archive, plus credentials for deployment and any admin panels. You receive what you need to run, maintain or extend the product with your own team or another vendor. Documentation for setup and handoff is included with the delivery.",
  },
  {
    question: "What happens after the 30-day support period?",
    answer:
      "Every project includes 30 days of free post-launch support for bug fixes and small adjustments covered by the agreed scope. After that window, you can continue on a monthly care plan, request paid changes as one-off work, or maintain the product yourself with the source code and access we handed over. Nothing is forced; you choose what fits your operations.",
  },
  {
    question: "Do you provide monthly maintenance?",
    answer:
      "Yes. Our care plans cover updates, monitoring, minor content or feature tweaks, dependency patches and priority support. Plans are optional and priced monthly based on how active the product is. If you only need occasional help, we can quote individual tasks instead of a retainer.",
  },
  {
    question: "Can you work with international clients?",
    answer:
      "Yes. We work remotely with clients across markets and time zones. Communication happens on WhatsApp, email or video calls scheduled around your working hours. Contracts, invoices and payments can be handled in USD or another agreed currency. Our studio is based in Ahmedabad, India, and delivery is fully remote-first.",
  },
  {
    question: "What are your payment milestones?",
    answer:
      "Standard terms are 40% advance to start, 40% at design or working-demo approval, and 20% on final delivery before handoff. Larger builds can use a written milestone schedule that matches delivery stages. Invoices are provided for each payment. Source code and account handoff complete after the final payment clears.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. We routinely sign mutual NDAs before detailed discussions when your idea, data or process needs protection. Share your NDA template or ask us for ours. Confidential materials shared during discovery and build stay confidential under the agreement.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A simple marketing website often takes 1-3 weeks. A business site or store usually takes 3-6 weeks. Custom software, CRM or automation is typically 6-12 weeks, depending on integrations and how quickly feedback comes back. Every quote includes a realistic timeline so you can plan launch dates.",
  },
  {
    question: "What do you need from me to start?",
    answer:
      "A clear goal for the project, a logo or brand direction (we can design one if needed), text and photos or access to gather them, business details such as services and hours, and one decision-maker who can approve scope and designs promptly. That keeps the build moving and avoids rework.",
  },
] as const;

export const serviceOptions = [
  "Business Websites & Online Stores",
  "Custom Software & CRM",
  "WhatsApp & AI Automation",
  "Digital Marketing & Google Presence",
  "UI/UX & Brand Design",
  "Mobile App Development",
  "API & System Integrations",
  "MVP & Product Builds",
  "Care Plans & Maintenance",
  "Not sure yet",
] as const;

export const budgetOptions = [
  "Under $500",
  "$500 - $1,500",
  "$1,500 - $5,000",
  "$5,000+",
  "Not sure yet",
] as const;

export type Service = (typeof services)[number];
export type Project = (typeof projects)[number];

export { blogPosts } from "@/lib/blog-posts";
export type { BlogPost } from "@/lib/blog-posts";
