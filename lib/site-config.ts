export const siteConfig = {
  name: "Pixelnest",
  tagline: "Web & software studio · Ahmedabad",
  description:
    "Pixelnest builds websites, business software and WhatsApp automation for small businesses in India. Founder-led studio in Ahmedabad.",
  url: "https://pixelnest.example.com",
  email: "rakshit.agarwal@outlook.com",
  phone: "+91 99974 43874",
  phoneTel: "+919997443874",
  whatsappUrl: "https://wa.me/919997443874",
  whatsappPrefill:
    "Hi Pixelnest, I'd like to discuss a project",
  address: {
    line1: "Ramdev Nagar",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    full: "Ramdev Nagar, Ahmedabad, Gujarat, India",
  },
  currency: "INR",
  replyNote: "Typically replies within 24 hours",
  calendarBookingUrl: "", // e.g. https://cal.com/your-link
  showTestimonials: false,
  social: {
    linkedin: "",
    instagram: "",
    twitter: "",
  },
  analytics: {
    /** Set NEXT_PUBLIC_GA_ID or NEXT_PUBLIC_PLAUSIBLE_DOMAIN in env */
    gaIdEnv: "NEXT_PUBLIC_GA_ID",
    plausibleDomainEnv: "NEXT_PUBLIC_PLAUSIBLE_DOMAIN",
  },
} as const;

export function getWhatsAppLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappPrefill);
  return `${siteConfig.whatsappUrl}?text=${text}`;
}

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroContent = {
  eyebrow: "Web & software studio · Ahmedabad",
  headline: "Get your business online, and get more customers.",
  subtext:
    "Pixelnest builds websites, business software and WhatsApp automation for small businesses, so you spend less time on busywork and more time growing.",
  primaryCta: "Chat on WhatsApp",
  secondaryCta: "See what we build",
  trustRow: [
    "Direct access to founders",
    "Free first consultation",
    "Fixed-price quotes",
  ],
} as const;

export const valueStrip = [
  {
    title: "Built for small budgets",
    description: "Practical solutions sized for shops, clinics and growing teams.",
    icon: "Wallet",
  },
  {
    title: "Simple, no-jargon communication",
    description: "We explain options in plain language you can act on.",
    icon: "MessageCircle",
  },
  {
    title: "Fixed-price, no surprises",
    description: "You get a clear quote before we start building.",
    icon: "BadgeIndianRupee",
  },
  {
    title: "Support after launch",
    description: "We stay available so your site or software keeps working.",
    icon: "LifeBuoy",
  },
] as const;

export const services = [
  {
    slug: "business-websites",
    title: "Business Websites & Online Stores",
    outcome: "Look professional and get found on Google.",
    icon: "Globe",
    tags: ["Business website", "E-commerce", "Landing pages"],
    summary:
      "Clean, fast websites and online stores that help local customers find you and get in touch.",
    details: [
      "Business and portfolio websites",
      "Online stores with payments",
      "Landing pages for offers and ads",
      "Mobile-friendly design",
      "Basic SEO setup so Google can find you",
    ],
  },
  {
    slug: "custom-software-crm",
    title: "Custom Software & CRM",
    outcome: "Replace spreadsheets with a system that fits how you work.",
    icon: "Database",
    tags: ["CRM", "Billing/Invoicing", "Inventory"],
    summary:
      "Simple tools for leads, billing, inventory and day-to-day operations — built around your process.",
    details: [
      "Customer and lead tracking",
      "Billing and invoicing flows",
      "Inventory and stock views",
      "Staff dashboards",
      "Integrations with tools you already use",
    ],
  },
  {
    slug: "whatsapp-ai-automation",
    title: "WhatsApp & AI Automation",
    outcome: "Reply to customers instantly, even when you're busy.",
    icon: "Bot",
    tags: ["WhatsApp bots", "Auto-replies", "Lead capture"],
    summary:
      "WhatsApp bots and AI helpers that answer common questions, capture leads and save your team time.",
    details: [
      "WhatsApp Business API setups",
      "Auto-replies for FAQs and hours",
      "Lead capture and follow-ups",
      "Order-taking flows for restaurants and shops",
      "Handoff to a human when needed",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & Google Presence",
    outcome: "Show up when local customers search.",
    icon: "Megaphone",
    tags: ["Google Business Profile", "SEO", "Social media"],
    summary:
      "Help people nearby find your business on Google and social platforms with clear, consistent presence.",
    details: [
      "Google Business Profile setup",
      "Local SEO basics",
      "Social media page setup and posting plans",
      "Simple content that explains what you offer",
    ],
  },
  {
    slug: "ui-ux-brand",
    title: "UI/UX & Brand Design",
    outcome: "Clean design your customers trust.",
    icon: "Palette",
    tags: ["Logo & branding", "App design", "Dashboards"],
    summary:
      "Straightforward branding and interface design so your product and website feel clear and trustworthy.",
    details: [
      "Logo and basic brand kit",
      "Website and app screens",
      "Dashboard layouts",
      "Design systems for ongoing work",
    ],
  },
] as const;

export const whoWeHelp = [
  {
    title: "Shops & retail",
    problem: "Need a simple website or store so customers can browse and order without calling every time.",
  },
  {
    title: "Restaurants & cafes",
    problem: "Want WhatsApp or online ordering that keeps up during busy hours.",
  },
  {
    title: "Clinics & salons",
    problem: "Tired of missed calls and messy appointment notebooks.",
  },
  {
    title: "Coaching institutes",
    problem: "Need a clear site for courses, fees and enquiries in one place.",
  },
  {
    title: "Local services",
    problem: "Want to show up on Google and make it easy for people to contact you.",
  },
  {
    title: "Startups",
    problem: "Need an MVP website or first product without hiring a full tech team.",
  },
] as const;

export const whyPixelnest = [
  {
    title: "Founder-led",
    description: "You talk to the people building your product.",
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
    role: "Co-founder",
    bio: "Placeholder bio — replace with 2 lines about Rakshit's focus at Pixelnest.",
    photo: "",
  },
  {
    name: "Divyang Solanki",
    role: "Co-founder",
    bio: "Placeholder bio — replace with 2 lines about Divyang's focus at Pixelnest.",
    photo: "",
  },
] as const;

export const aboutContent = {
  story:
    "Pixelnest is a small, founder-led studio in Ahmedabad. We help shops, clinics, restaurants and other small businesses get online, get customers and save time — with websites, custom software and WhatsApp automation.",
  principles: [
    {
      title: "Keep it simple",
      description: "We build what you need now, not a pile of unused features.",
    },
    {
      title: "Be honest about cost and time",
      description: "Clear quotes and timelines before work starts.",
    },
    {
      title: "Stay after launch",
      description: "Support so your site or system keeps working for your team.",
    },
  ],
} as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    duration: "2–5 days",
    description: "We learn how your business works and what you need first.",
    outcome: "A short list of goals and must-have features.",
  },
  {
    step: "02",
    title: "Plan",
    duration: "3–7 days",
    description: "We agree scope, price and timeline in plain language.",
    outcome: "A fixed-price quote and a simple project plan.",
  },
  {
    step: "03",
    title: "Build",
    duration: "Depends on scope",
    description: "We design and build, and share progress every week on WhatsApp.",
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

export const techStack = [
  "Next.js",
  "React",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Flutter",
  "WhatsApp Business API",
  "Razorpay",
  "Vercel / AWS",
  "OpenAI / Claude APIs",
] as const;

export const conceptProjects = [
  {
    id: "clinic-booking",
    label: "Concept project, not a client",
    title: "Appointment booking for clinics",
    problem:
      "Reception spends hours on missed calls and paper diaries for appointments.",
    solution:
      "A simple booking page plus admin view for slots, patients and reminders.",
    tech: ["Next.js", "PostgreSQL", "WhatsApp reminders"],
    mockup: "booking" as const,
  },
  {
    id: "restaurant-whatsapp",
    label: "Concept project, not a client",
    title: "WhatsApp order-taking for restaurants",
    problem:
      "Busy kitchens miss messages while staff juggle phone orders.",
    solution:
      "A WhatsApp flow that takes the order, confirms items and notifies the kitchen.",
    tech: ["WhatsApp Business API", "Node.js", "Razorpay"],
    mockup: "chat" as const,
  },
  {
    id: "shop-inventory",
    label: "Concept project, not a client",
    title: "Inventory + billing for shops",
    problem:
      "Stock and bills live in different notebooks and Excel sheets.",
    solution:
      "One light tool for stock, invoices and daily sales summaries.",
    tech: ["React", "Node.js", "PostgreSQL"],
    mockup: "dashboard" as const,
  },
] as const;

export const testimonials = [] as const;

/** Fill in real starting prices when ready. Keep ₹[X] until then. */
export const pricingTiers = [
  {
    id: "starter-website",
    name: "Starter Website",
    priceFrom: "₹[X]",
    timeline: "Usually 1–3 weeks",
    description: "A clear multi-page site so customers can find you and contact you.",
    includes: [
      "Up to 5 pages",
      "Mobile-friendly design",
      "Contact / WhatsApp button",
      "Basic Google-ready setup",
    ],
  },
  {
    id: "business-store",
    name: "Business Website / Online Store",
    priceFrom: "₹[X]",
    timeline: "Usually 3–6 weeks",
    description: "A fuller site or store with catalogues, enquiries or online orders.",
    includes: [
      "Custom pages for your offer",
      "Product or service listings",
      "Enquiry or checkout flow",
      "Payment option if needed (e.g. Razorpay)",
    ],
    highlighted: true,
  },
  {
    id: "custom-software",
    name: "Custom Software / Automation",
    priceFrom: "₹[X]",
    timeline: "Usually 6–12 weeks",
    description: "CRM, billing, inventory or WhatsApp automation built for your process.",
    includes: [
      "Scoped after a free consultation",
      "Fixed-price quote before build",
      "Weekly WhatsApp updates",
      "30 days free support after launch",
    ],
  },
] as const;

export const faqs = [
  {
    question: "I'm not technical. Can you still work with me?",
    answer:
      "Yes. We explain everything in simple terms and handle the technical work. You only need to tell us how your business runs today.",
  },
  {
    question: "How much does a website or software cost?",
    answer:
      "It depends on pages and features. After a free call we give a fixed quote. Starting prices are listed in the pricing section above.",
  },
  {
    question: "How long does it take?",
    answer:
      "A simple website often takes 1–3 weeks. Custom software is usually 6–12 weeks, depending on scope. We confirm the timeline before we start.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. You get 30 days of free support after launch. After that you can choose an optional monthly plan for updates and fixes.",
  },
  {
    question: "Who owns the code and website?",
    answer:
      "You do. We hand over accounts, files and access when the project is delivered.",
  },
  {
    question: "Can you manage my social media and Google profile?",
    answer:
      "Yes. We can set up and help manage your Google Business Profile and social pages, or train your team to run them.",
  },
  {
    question: "Do you work with businesses outside Ahmedabad?",
    answer:
      "Yes. We work remotely with businesses across India. Calls and updates happen on WhatsApp or video.",
  },
  {
    question: "Do you sign an NDA?",
    answer: "Yes, on request, before we discuss sensitive details.",
  },
] as const;

export const serviceOptions = [
  "Business Websites & Online Stores",
  "Custom Software & CRM",
  "WhatsApp & AI Automation",
  "Digital Marketing & Google Presence",
  "UI/UX & Brand Design",
  "Not sure yet",
] as const;

export type Service = (typeof services)[number];
