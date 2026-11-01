export const siteConfig = {
  name: "Pixelnest",
  tagline: "Websites, software and WhatsApp automation for growing businesses.",
  description:
    "Pixelnest builds websites, business software and WhatsApp automation for small businesses in India. Founder-led studio in Ahmedabad.",
  url: "https://pixelnest.example.com",
  /** Public contact email shown on the site */
  contactEmail: "hello@pixelnest.in",
  /** @deprecated Use contactEmail */
  email: "hello@pixelnest.in",
  phone: "+91 99974 43874",
  phoneTel: "+919997443874",
  whatsappUrl: "https://wa.me/919997443874",
  whatsappPrefill: "Hi Pixelnest, I'd like to discuss a project",
  address: {
    line1: "Ramdev Nagar",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    full: "Ramdev Nagar, Ahmedabad, Gujarat, India",
  },
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Ramdev%20Nagar%2C%20Ahmedabad%2C%20Gujarat%2C%20India&t=&z=14&ie=UTF8&iwloc=&output=embed",
  hours: "Mon–Sat, 10:00 AM – 7:00 PM IST",
  replyNote:
    "We reply within 24 hours on WhatsApp, usually within 2 hours in working hours.",
  legalBusinessName: "",
  gstNumber: "",
  udyamNumber: "",
  privacyUrl: "/privacy",
  termsUrl: "/terms",
  registrationLine: "",
  currency: "INR",
  calendarBookingUrl: "",
  /** Keep false until you have signed client reviews */
  showTestimonials: false,
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
    github: "",
  },
  whereWeWork:
    "Ahmedabad, Gandhinagar, Surat, Vadodara, and remotely across India.",
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
    alt: "Sample project preview for Pixelnest work and hero",
    width: 1600,
    height: 1000,
  },
  heroDashboard: {
    src: "/images/projectimage.png",
    alt: "Business software and dashboard preview",
    width: 1600,
    height: 1000,
  },
  logo: {
    src: "/images/logos/pixelnest-logo.svg",
    alt: "Pixelnest",
    width: 160,
    height: 40,
  },
  teamRakshit: {
    src: "/images/myprofilepic.png",
    alt: "Rakshit Agarwal, Co-founder of Pixelnest",
    width: 800,
    height: 800,
  },
  teamDivyang: {
    src: "/images/myprofilepic.png",
    alt: "Divyang Solanki, Co-founder of Pixelnest",
    width: 800,
    height: 800,
  },
  ogDefault: {
    src: "/images/og/og-default.png",
    alt: "Pixelnest — websites, software and WhatsApp automation",
    width: 1200,
    height: 630,
  },
} as const satisfies Record<string, SiteImage>;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroContent = {
  eyebrow: "Software studio · Ahmedabad",
  headline: "Websites and software that help your business grow.",
  subtext:
    "Pixelnest designs and builds websites, business software and WhatsApp automation for Indian SMBs — with fixed-price quotes and direct access to the founders.",
  primaryCta: "Chat on WhatsApp",
  secondaryCta: "View our work",
  trustRow: [
    "Founder-led delivery",
    "Fixed-price quotes",
    "30-day post-launch support",
  ],
  floatingCards: [
    { label: "New order received", kind: "order" },
    { label: "Appointment confirmed", kind: "appointment" },
    { label: "WhatsApp reminder sent", kind: "reminder" },
  ],
} as const;

/** Honest homepage stats — no inflated project counts */
export const heroStats = [
  { value: "Founder-led", label: "You talk to the builders" },
  { value: "Fixed price", label: "Quote before we start" },
  { value: "30 days", label: "Free support after launch" },
  { value: "Pan-India", label: "Ahmedabad studio + remote" },
] as const;

export const capabilities = [
  {
    title: "Websites that bring customers in",
    description:
      "Clear, mobile-first sites and stores so people nearby can find you, trust you, and call or order.",
    icon: "Globe",
  },
  {
    title: "Software that replaces Excel chaos",
    description:
      "Billing, stock, bookings and CRMs shaped around how your team already works — not a bloated package.",
    icon: "Database",
  },
  {
    title: "WhatsApp that keeps up at rush hour",
    description:
      "Order flows, reminders and FAQ replies so fewer messages get lost when you are busy.",
    icon: "Bot",
  },
  {
    title: "Senior attention, small-team speed",
    description:
      "You work with the founders. Weekly updates, plain language, and a fixed scope you can plan around.",
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
      "Look professional, get found on Google, and take orders online.",
    icon: "Globe",
    featured: true,
    tags: ["Business website", "E-commerce", "Landing pages"],
    summary:
      "Clean, fast websites and online stores that help local customers find you, trust you, and get in touch.",
    includes: [
      "Mobile-friendly design",
      "WhatsApp button",
      "Google-ready SEO setup",
      "Razorpay payments",
      "Easy content editing",
    ],
    whoFor:
      "Shops, clinics, restaurants, coaching institutes, freelancers and D2C brands that need a clear online presence.",
    timeline: "Usually 1–6 weeks depending on pages and store features",
    priceFrom: "₹9,999",
    faqs: [
      {
        question: "Do I need to write all the text myself?",
        answer:
          "You can share rough notes. We help shape clear page copy, or you can book content writing as an add-on.",
      },
      {
        question: "Can customers pay online?",
        answer:
          "Yes. We can add Razorpay or UPI checkout for stores and fee payments.",
      },
      {
        question: "Will it work on phones?",
        answer:
          "Yes. Every site is designed for mobile first, because most visitors browse on their phone.",
      },
    ],
  },
  {
    slug: "custom-software-crm",
    title: "Custom Software & CRM",
    outcome:
      "Replace notebooks and Excel sheets with a system built for how you work.",
    icon: "Database",
    featured: true,
    tags: ["CRM", "Billing", "Inventory"],
    summary:
      "Simple tools for billing, stock, customers and reports — built around your day-to-day process.",
    includes: [
      "Billing and GST invoices",
      "Inventory tracking",
      "Customer records",
      "Staff logins",
      "Reports",
    ],
    whoFor:
      "Shops, clinics, distributors and service businesses that have outgrown notebooks and shared Excel files.",
    timeline: "Usually 6–12 weeks after scope is agreed",
    priceFrom: "₹60,000",
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
    outcome: "Reply to customers instantly, even when you're busy.",
    icon: "Bot",
    featured: true,
    tags: ["WhatsApp bots", "Auto-replies", "Lead capture"],
    summary:
      "WhatsApp flows that take orders, answer FAQs, book appointments and save leads — so you miss fewer messages.",
    includes: [
      "Order-taking bots",
      "Appointment reminders",
      "FAQ auto-replies",
      "Lead capture to Google Sheets",
    ],
    whoFor:
      "Restaurants, clinics, shops and service businesses that get many WhatsApp messages every day.",
    timeline: "Often 2–6 weeks depending on the flow",
    priceFrom: "₹14,999",
    faqs: [
      {
        question: "Do I need the WhatsApp Business API?",
        answer:
          "For simple auto-replies, WhatsApp Business may be enough. For larger order flows we recommend the API. We help you choose.",
      },
      {
        question: "Can a human take over a chat?",
        answer:
          "Yes. Bots handle the common questions; your team can step in when needed.",
      },
      {
        question: "Where do leads go?",
        answer:
          "We can send them to Google Sheets, your CRM, or email — whatever is easiest for you.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & Google Presence",
    outcome: "Show up when local customers search.",
    icon: "Megaphone",
    featured: false,
    tags: ["Google Business Profile", "Local SEO", "Social media"],
    summary:
      "Help people nearby find your business on Google and social platforms with a clear, consistent presence.",
    includes: [
      "Google Business Profile setup",
      "Local SEO basics",
      "Social media posts",
    ],
    whoFor:
      "Local businesses that want more calls and visits from people searching nearby.",
    timeline: "Setup often within 1–2 weeks; ongoing plans are monthly",
    priceFrom: "₹4,999",
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
    outcome: "Clean design your customers trust.",
    icon: "Palette",
    featured: false,
    tags: ["Logo", "Brand kit", "Dashboards"],
    summary:
      "Straightforward branding and interface design so your product and website feel clear and trustworthy.",
    includes: [
      "Logo and basic brand kit",
      "App and dashboard design",
      "Website UI layouts",
    ],
    whoFor:
      "Businesses launching a new brand or refreshing a site or app that feels unclear.",
    timeline: "Usually 1–3 weeks for a logo kit; longer for full product UI",
    priceFrom: "₹4,999",
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
          "Yes, when you want. Many clients keep design and build with us so nothing gets lost in translation.",
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
    title: "Local services",
    problem:
      "Google presence and a simple site that turns nearby searches into calls.",
  },
  {
    title: "Early-stage products",
    problem:
      "An MVP website or first tool without hiring a full tech team.",
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
    role: "Co-founder, Software & Automation",
    bio: "Rakshit builds the software side of Pixelnest: websites, billing tools and WhatsApp automation. He likes turning messy spreadsheets into simple systems that shop owners can actually use.",
    image: {
      src: "/images/myprofilepic.png",
      alt: "Rakshit Agarwal, Co-founder of Pixelnest",
      width: 800,
      height: 800,
    },
    linkedin: "",
  },
  {
    name: "Divyang Solanki",
    role: "Co-founder, Design & Growth",
    bio: "Divyang leads design and growth: layouts, branding and Google presence. He makes sure every site is clear on mobile and easy for customers to act on.",
    /** Leave src empty until a unique photo is available — do not reuse another founder’s photo */
    image: {
      src: "",
      alt: "Divyang Solanki, Co-founder of Pixelnest",
      width: 800,
      height: 800,
    },
    linkedin: "",
  },
] as const;

export const aboutContent = {
  story:
    "Pixelnest is a founder-led studio in Ahmedabad. We blend practical engineering with clear design so small businesses get software that actually fits how they work — at a fair price, without jargon.",
  principles: [
    {
      title: "Build what matters now",
      description: "Ship the features you need today; leave the unused complexity out.",
    },
    {
      title: "Honest cost and time",
      description: "Fixed quotes and timelines in writing before we start.",
    },
    {
      title: "Stay after launch",
      description:
        "Thirty days of free support, then optional care plans so things keep running.",
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

export const projects = [
  {
    slug: "shree-dental-care",
    isSample: true,
    label: "Sample project",
    title: "Shree Dental Care — appointment booking",
    businessType: "Clinic",
    problem: "Missed calls and a paper diary for appointments.",
    solution:
      "Online booking page, doctor-wise slots, WhatsApp reminders and an admin dashboard.",
    delivers: [
      "Patients book without calling",
      "Doctors see their day's slots clearly",
      "WhatsApp reminders reduce no-shows",
    ],
    tech: ["Next.js", "PostgreSQL", "WhatsApp API"],
    image: {
      src: "/images/projectimage.png",
      alt: "Appointment booking interface for Shree Dental Care sample project",
      width: 1600,
      height: 1000,
    },
    mockup: "booking" as const,
    features: [
      "Public booking page",
      "Doctor and slot management",
      "WhatsApp confirmation and reminders",
      "Admin view for today's appointments",
    ],
  },
  {
    slug: "spice-route-kitchen",
    isSample: true,
    label: "Sample project",
    title: "Spice Route Kitchen — WhatsApp ordering",
    businessType: "Restaurant",
    problem: "Orders lost during rush hours on phone and chat.",
    solution:
      "WhatsApp bot takes orders, confirms items, shares a UPI payment link and notifies the kitchen.",
    delivers: [
      "Fewer missed orders at peak time",
      "Clear order summary for the kitchen",
      "Easy UPI payment link for customers",
    ],
    tech: ["WhatsApp Business API", "Node.js", "Razorpay"],
    image: {
      src: "/images/projectimage.png",
      alt: "WhatsApp ordering flow for Spice Route Kitchen sample project",
      width: 1600,
      height: 1000,
    },
    mockup: "chat" as const,
    features: [
      "Menu browsing in WhatsApp",
      "Item confirmation flow",
      "UPI / Razorpay payment link",
      "Kitchen notification",
    ],
  },
  {
    slug: "mehta-general-store",
    isSample: true,
    label: "Sample project",
    title: "Mehta General Store — inventory + billing",
    businessType: "Retail",
    problem: "Stock and bills living in notebooks.",
    solution:
      "GST invoices, low-stock alerts and a daily sales summary in one light tool.",
    delivers: [
      "Faster billing at the counter",
      "Clear view of low stock",
      "Day-end sales summary",
    ],
    tech: ["React", "Node.js", "PostgreSQL"],
    image: {
      src: "/images/projectimage.png",
      alt: "Inventory and billing dashboard for Mehta General Store sample project",
      width: 1600,
      height: 1000,
    },
    mockup: "dashboard" as const,
    features: [
      "GST invoice generation",
      "Stock tracking",
      "Low-stock alerts",
      "Daily sales report",
    ],
  },
  {
    slug: "urban-loom",
    isSample: true,
    label: "Sample project",
    title: "Urban Loom — online store",
    businessType: "D2C clothing",
    problem: "Selling only through Instagram DMs.",
    solution:
      "Catalogue, cart, UPI/Razorpay checkout and order updates on WhatsApp.",
    delivers: [
      "Customers browse without DMing",
      "Secure online checkout",
      "Order updates on WhatsApp",
    ],
    tech: ["Next.js", "Razorpay"],
    image: {
      src: "/images/projectimage.png",
      alt: "Online store preview for Urban Loom sample project",
      width: 1600,
      height: 1000,
    },
    mockup: "dashboard" as const,
    features: [
      "Product catalogue",
      "Cart and checkout",
      "Razorpay / UPI payments",
      "WhatsApp order updates",
    ],
  },
  {
    slug: "brightpath-classes",
    isSample: true,
    label: "Sample project",
    title: "BrightPath Classes — coaching website",
    businessType: "Coaching",
    problem: "No central place for courses and fees.",
    solution:
      "Course pages, batch timings, enquiry form and a fee payment link.",
    delivers: [
      "Parents see courses and batches clearly",
      "Enquiries in one inbox",
      "Optional fee payment link",
    ],
    tech: ["Next.js"],
    image: {
      src: "/images/projectimage.png",
      alt: "Coaching website preview for BrightPath Classes sample project",
      width: 1600,
      height: 1000,
    },
    mockup: "booking" as const,
    features: [
      "Course and batch pages",
      "Enquiry form",
      "Fee payment link",
      "Mobile-friendly layout",
    ],
  },
] as const;

export const testimonials = [
  {
    id: "sample-1",
    isSample: true,
    quote:
      "They explained everything in simple Hindi and Gujarati, and we always knew what was happening.",
    name: "Sample Client",
    role: "Store owner",
    company: "Retail",
    avatar: {
      src: "/images/myprofilepic.png",
      alt: "Sample retail client portrait",
      width: 160,
      height: 160,
    },
  },
  {
    id: "sample-2",
    isSample: true,
    quote:
      "The fixed quote helped us plan. No surprise bills halfway through the website.",
    name: "Sample Client",
    role: "Clinic manager",
    company: "Clinic",
    avatar: {
      src: "/images/myprofilepic.png",
      alt: "Sample clinic client portrait",
      width: 160,
      height: 160,
    },
  },
  {
    id: "sample-3",
    isSample: true,
    quote:
      "WhatsApp updates every week meant we did not have to chase anyone for status.",
    name: "Sample Client",
    role: "Restaurant partner",
    company: "Restaurant",
    avatar: {
      src: "/images/myprofilepic.png",
      alt: "Sample restaurant client portrait",
      width: 160,
      height: 160,
    },
  },
] as const;

export const pricingTiers = [
  {
    id: "starter-website",
    name: "Starter Website",
    priceFrom: "₹9,999",
    range: "₹9,999–₹17,999",
    timeline: "Usually 1–3 weeks",
    description:
      "A clear multi-page site so customers can find you and contact you.",
    includes: [
      "Up to 5 pages",
      "Mobile-friendly design",
      "Contact form + WhatsApp button",
      "Google Maps",
      "Basic SEO setup",
      "1 round of text/image changes after delivery",
    ],
    bestFor: "Local shops, freelancers, salons, tutors",
    highlighted: false,
  },
  {
    id: "business-store",
    name: "Business Website / Online Store",
    priceFrom: "₹24,999",
    range: "₹24,999–₹59,999 · Online store from ₹39,999",
    timeline: "Usually 3–6 weeks",
    description:
      "A fuller site or store with catalogues, enquiries or online orders.",
    includes: [
      "Up to 12 pages or 50 products",
      "Custom design",
      "Blog",
      "Enquiry forms",
      "Razorpay / UPI payments",
      "Admin panel to edit content",
      "Speed and SEO setup",
      "2 revision rounds",
    ],
    bestFor: "Clinics, restaurants, coaching institutes, D2C brands",
    highlighted: true,
  },
  {
    id: "custom-software",
    name: "Custom Software / Automation",
    priceFrom: "₹60,000",
    range: "₹60,000–₹2,50,000 depending on scope",
    timeline: "Usually 6–12 weeks",
    description:
      "CRM, billing, inventory, booking systems or WhatsApp automation.",
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
  { name: "WhatsApp automation / order bot", priceFrom: "₹14,999" },
  {
    name: "Google Business Profile setup + local SEO (one-time)",
    priceFrom: "₹4,999",
  },
  { name: "Logo + basic brand kit", priceFrom: "₹4,999" },
  {
    name: "Monthly care plan — Basic",
    priceFrom: "₹1,499/month",
  },
  {
    name: "Monthly care plan — Growth",
    priceFrom: "₹3,999/month",
  },
  { name: "Social media management", priceFrom: "₹7,999/month" },
] as const;

export const pricingNotes = {
  notIncluded:
    "Not included: domain (≈₹800–1,200/year), hosting (≈₹3,000–8,000/year or free tier where suitable), paid ads budget, third-party fees (payment gateway charges, WhatsApp API usage), and content writing/photography unless booked.",
  gst: "All prices exclude 18% GST.",
  paymentTerms:
    "Payment terms: 40% advance, 40% at design/demo approval, 20% on delivery. Invoices provided. Source code and accounts are handed over after final payment.",
} as const;

export const faqs = [
  {
    question: "I'm not technical. Can you still work with me?",
    answer:
      "Yes. We explain everything in simple terms. You only need to tell us how your business runs today.",
  },
  {
    question: "How much does a website or software cost?",
    answer:
      "Starter websites usually start from ₹9,999 (typical ₹9,999–₹17,999). Business sites and stores often fall between ₹24,999 and ₹59,999. Custom software and automation usually starts from ₹60,000. After a free call we give a fixed quote.",
  },
  {
    question: "How long does it take?",
    answer:
      "A simple website often takes 1–3 weeks. A business site or store usually takes 3–6 weeks. Custom software is typically 6–12 weeks, depending on scope.",
  },
  {
    question: "What do you need from me to start?",
    answer:
      "Logo (or we design one), text and photos, business details, and one person who can approve decisions quickly.",
  },
  {
    question: "Do you handle hosting and domain?",
    answer:
      "We can help you buy and connect a domain, and set up hosting. Domain and hosting fees are separate and billed by the provider.",
  },
  {
    question: "Will my website work on phones?",
    answer:
      "Yes. We design for mobile first because most customers browse on their phone.",
  },
  {
    question: "Can I change content later?",
    answer:
      "Yes. Business plans include an admin panel for common edits. You can also book a care plan for ongoing help.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. Every project includes 30 days of free support. After that you can choose a monthly care plan.",
  },
  {
    question: "Who owns the code and website?",
    answer:
      "You do. After final payment we hand over the code, design files and account access.",
  },
  {
    question: "Do you sign an NDA?",
    answer: "Yes, on request, before we discuss sensitive details.",
  },
  {
    question: "Do you work outside Ahmedabad?",
    answer:
      "Yes. We work remotely across India. Calls and updates happen on WhatsApp or video.",
  },
  {
    question: "What are your payment terms and GST?",
    answer:
      "Usually 40% advance, 40% at design/demo approval, and 20% on delivery. Prices exclude 18% GST. We provide invoices.",
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

export const budgetOptions = [
  "Under ₹15,000",
  "₹15,000 – ₹40,000",
  "₹40,000 – ₹1,00,000",
  "₹1,00,000+",
  "Not sure yet",
] as const;

export type Service = (typeof services)[number];
export type Project = (typeof projects)[number];

export { blogPosts } from "@/lib/blog-posts";
export type { BlogPost } from "@/lib/blog-posts";
