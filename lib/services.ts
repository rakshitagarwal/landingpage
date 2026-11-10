/**
 * Service catalogue for cards and dedicated SEO landing pages.
 * Exactly four services — homepage cards and service pages stay in sync.
 */

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  pageHeading: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  outcome: string;
  icon: string;
  featured: boolean;
  tags: string[];
  summary: string;
  problems: string[];
  softwareTypes: string[];
  includes: string[];
  technologies: string[];
  whoFor: string;
  timeline: string;
  priceFrom: string;
  commercial: string;
  relatedProjectSlugs: string[];
  whyChoose: string[];
  processFocus: string;
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Engineering",
    pageHeading: "Custom Software Development Company",
    metaTitle: "Custom Software Development Company | Obekai",
    metaDescription:
      "Obekai builds custom software for startups and growing businesses: CRMs, internal tools, dashboards and business platforms. Fixed proposals, source-code ownership, Ahmedabad and remote.",
    intro:
      "When spreadsheets, chat threads and off-the-shelf tools stop matching how the business runs, custom software becomes the clearer path. Obekai designs and engineers systems around your real workflows — not a generic template you have to force-fit later.",
    outcome:
      "Replace disconnected tools with software that matches how the business actually operates.",
    icon: "Code2",
    featured: true,
    tags: ["Platforms", "CRM", "Internal tools"],
    summary:
      "Business platforms, CRM systems, dashboards, internal tools and custom applications.",
    problems: [
      "Customer, sales or operations data lives in too many places to trust.",
      "Staff re-enter the same information across sheets, chats and SaaS tools.",
      "An existing product no longer fits the process, but a rewrite feels risky.",
      "You need a first internal system without hiring a full in-house engineering team.",
    ],
    softwareTypes: [
      "Business and operations platforms",
      "Custom CRM and pipeline systems",
      "Internal tools and admin consoles",
      "Role-based dashboards and reporting",
      "Workflow and approval software",
    ],
    includes: [
      "Business and CRM platforms",
      "Operational dashboards",
      "Internal tools for your team",
      "Role-based access",
      "Source-code handover",
    ],
    technologies: ["Next.js", "Node.js", "NestJS", "PostgreSQL"],
    whoFor:
      "Startups and established companies that have outgrown spreadsheets, off-the-shelf tools or software that no longer fits.",
    timeline: "Usually 6-12 weeks after scope is agreed",
    priceFrom: "$2,000",
    commercial:
      "Discovery, then a fixed proposal. Custom systems usually start from $2,000 once the scope is written.",
    relatedProjectSlugs: ["custom-crm-platform", "business-automation"],
    whyChoose: [
      "You talk to the engineers building the system, not a separate sales layer.",
      "Scope, price and timeline are written before engineering starts.",
      "You own the source code after final payment.",
      "Architecture is chosen so your team or another vendor can maintain it.",
    ],
    processFocus:
      "Custom builds start with how the business works today: who enters data, where decisions get stuck, and what the first release must prove. We freeze that scope in a fixed proposal before writing production code.",
    faqs: [
      {
        question: "Can you match how we already work?",
        answer:
          "Yes. We start from the current process and build the parts the business actually needs.",
      },
      {
        question: "Will my team need training?",
        answer:
          "We include a walkthrough and handover notes so your team can use the system.",
      },
      {
        question: "Who owns the software?",
        answer:
          "You do. After final payment we hand over the source code and related accounts.",
      },
      {
        question: "Can you build a custom CRM as part of this?",
        answer:
          "Yes. CRM and pipeline systems are a common form of custom software when off-the-shelf tools do not fit how you sell.",
      },
    ],
  },
  {
    slug: "web-saas-development",
    title: "Web & SaaS Development",
    pageHeading: "Web and SaaS Development Company",
    metaTitle: "Web and SaaS Development Company | Obekai",
    metaDescription:
      "Obekai builds modern websites, web applications, SaaS platforms and MVPs. SEO-ready sites from $299; product and SaaS releases quoted from a written scope.",
    intro:
      "Some businesses need a clear marketing site. Others need accounts, permissions and a first product release. Obekai covers both: websites that explain the offer cleanly, and web applications or SaaS products your team can operate and extend.",
    outcome:
      "Ship a website, web application or first product release that is ready to operate.",
    icon: "AppWindow",
    featured: true,
    tags: ["Web apps", "SaaS", "MVP"],
    summary:
      "Modern websites, web applications, SaaS platforms and MVP development.",
    problems: [
      "The current site looks outdated, breaks on mobile, or fails to explain the offer.",
      "You have a validated idea but no engineering team to ship v1.",
      "A prototype cannot handle real users, roles or data safely.",
      "You need a credible site now, with a path into a product later.",
    ],
    softwareTypes: [
      "Marketing and company websites",
      "Authenticated web applications",
      "SaaS platforms and MVP releases",
      "Admin and operator tools",
      "SEO-ready page structure and metadata",
    ],
    includes: [
      "Marketing and product websites",
      "Authenticated web applications",
      "SaaS and MVP releases",
      "Admin tools for your team",
      "SEO-ready technical foundations",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    whoFor:
      "Founders and growing businesses launching a product, replacing a fragile site, or turning a validated idea into a first release.",
    timeline:
      "Websites are often 1-6 weeks. Application and SaaS timelines follow the agreed first release.",
    priceFrom: "$299",
    commercial:
      "Website projects start from $299 using defined packages. Web applications and SaaS products are quoted from a written scope.",
    relatedProjectSlugs: ["ecommerce-platform", "custom-crm-platform"],
    whyChoose: [
      "We say clearly whether you need a marketing site or a product before quoting.",
      "Pages and apps are built to be crawlable and maintainable.",
      "Fixed commercial terms before build starts.",
      "The same team can extend a site into a web application when you are ready.",
    ],
    processFocus:
      "Website work starts with information architecture. SaaS and web-app work starts with the first user journey, roles and data model. In both cases the proposal states what ships in the first release.",
    faqs: [
      {
        question: "Do website packages include a web application?",
        answer:
          "No. A marketing site and a product with accounts, billing or custom workflows are scoped separately. We say which one you need before quoting.",
      },
      {
        question: "Can customers use it on a phone?",
        answer: "Yes. Interfaces are designed for phones and desktops.",
      },
      {
        question: "Who owns the code?",
        answer: "You do, after the final invoice is paid.",
      },
      {
        question: "Can this become a multi-tenant SaaS later?",
        answer:
          "Often yes, if we design for it early. Tell us during discovery if tenancy or team workspaces matter.",
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Business Automation",
    pageHeading: "AI Automation Services",
    metaTitle: "AI Automation Services | Obekai",
    metaDescription:
      "Obekai builds AI and business automation: WhatsApp flows, enquiry handling, booking reminders and integrations that keep a human handoff when needed.",
    intro:
      "Automation should remove repetitive work without trapping customers in a dead end. Obekai builds AI-assisted and rule-based flows for enquiries, bookings, reminders and handoffs — with a clear path to a person when the conversation needs one.",
    outcome:
      "Take repetitive communication and operations off your team without losing a human handoff.",
    icon: "Workflow",
    featured: true,
    tags: ["AI", "Workflows", "WhatsApp"],
    summary:
      "AI integrations, intelligent workflows, WhatsApp automation and business process automation.",
    problems: [
      "The team spends hours answering the same questions every day.",
      "Bookings, reminders or follow-ups depend on someone remembering to send them.",
      "Leads arrive in WhatsApp or forms and get lost between tools.",
      "You want AI in the workflow, not a disconnected chatbot demo.",
    ],
    softwareTypes: [
      "WhatsApp and messaging automation",
      "Enquiry and booking flows",
      "Reminder and follow-up systems",
      "AI features inside an existing product",
      "Integrations between the tools you already use",
    ],
    includes: [
      "AI features inside your product or workflow",
      "WhatsApp automation and API integrations",
      "Enquiry, booking and reminder flows",
      "Handoff to a person when needed",
      "Connections to the tools you already use",
    ],
    technologies: ["LLM APIs", "WhatsApp API", "Node.js", "Python"],
    whoFor:
      "Teams spending too much time on repetitive messages, bookings, data entry or handoffs between tools.",
    timeline:
      "Often 2-6 weeks for a defined flow. Broader AI work depends on the integrations.",
    priceFrom: "$499",
    commercial:
      "WhatsApp and workflow automation starts from $499. Wider AI integrations are quoted from the systems and complexity involved.",
    relatedProjectSlugs: ["business-automation"],
    whyChoose: [
      "We design for handoff to a person, not automation for its own sake.",
      "Scope stays tied to one operational outcome you can measure.",
      "Integrations are chosen from the tools you already run.",
      "Commercial terms are fixed before build starts.",
    ],
    processFocus:
      "Automation projects begin with the conversation or task you want to remove from the team. We document triggers, messages, data destinations and escalation rules before connecting APIs.",
    faqs: [
      {
        question: "Do I need the WhatsApp Business API?",
        answer:
          "Simple replies can use WhatsApp Business. Larger automated flows usually need the API. We help you choose before building.",
      },
      {
        question: "Can a person take over a conversation?",
        answer:
          "Yes. Automation covers the repeatable steps. Your team can step in when a conversation needs a person.",
      },
      {
        question: "Where does the information go?",
        answer:
          "Into the system we agree on: your product, a spreadsheet, email or an existing tool.",
      },
      {
        question: "Is this generative AI everywhere?",
        answer:
          "Only where it helps. Many reliable flows are rules plus light AI. We recommend the simplest approach that meets the goal.",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce & Digital Platforms",
    pageHeading: "E-commerce Development Company",
    metaTitle: "E-commerce Development Company | Obekai",
    metaDescription:
      "Obekai builds custom online stores and customer platforms: catalogue, checkout, payments, inventory and admin tools your team can run.",
    intro:
      "Selling online needs more than a theme. Catalogue rules, checkout, payments and order operations have to fit how you actually fulfil. Obekai builds commerce experiences you control — from product browsing to the admin your team uses every day.",
    outcome:
      "Sell through a store you control, with catalogue, checkout and operations in one place.",
    icon: "Store",
    featured: true,
    tags: ["Stores", "Payments", "Platforms"],
    summary:
      "Custom online stores, payment integrations, inventory systems and customer-facing platforms.",
    problems: [
      "Template shops cannot support your catalogue, pricing or fulfilment rules.",
      "Checkout or payments feel fragile for the markets you sell in.",
      "Orders and inventory live outside the storefront.",
      "You need a customer platform, not only a brochure site with a cart plugin.",
    ],
    softwareTypes: [
      "Custom online stores",
      "Product catalogue and merchandising systems",
      "Checkout and payment integrations",
      "Order and inventory flows",
      "Customer accounts and order history",
    ],
    includes: [
      "Product catalogue and merchandising",
      "Cart, checkout and payments",
      "Order and inventory flows",
      "Customer accounts where needed",
      "An admin your team can use",
    ],
    technologies: ["React", "Node.js", "Stripe", "PostgreSQL"],
    whoFor:
      "Brands and operators that need more than a template shop, including custom checkout, inventory or a customer platform.",
    timeline: "Usually 3-8 weeks depending on catalogue, payments and operations.",
    priceFrom: "$1,299",
    commercial:
      "Custom online stores start from $1,299. The final figure follows catalogue size, payments and operational scope.",
    relatedProjectSlugs: ["ecommerce-platform"],
    whyChoose: [
      "Built for your catalogue and operations, not dropped in from a generic theme.",
      "Payment providers chosen for the markets you sell in.",
      "Admin handover so your team can manage products and orders.",
      "Source code ownership after final payment.",
    ],
    processFocus:
      "Commerce projects map the buying path and the back-office path together: products, stock, checkout, payments and fulfilment. The proposal states which of those ship in the first release.",
    faqs: [
      {
        question: "Which payment providers can you integrate?",
        answer:
          "Stripe, PayPal, Razorpay and similar providers, chosen for the markets you sell in.",
      },
      {
        question: "Can we manage products ourselves?",
        answer:
          "Yes. The handover includes an admin for catalogue and orders, plus the source code after final payment.",
      },
      {
        question: "Is this a template theme?",
        answer:
          "No. The store is built for your catalogue and operations, not dropped in from a generic theme.",
      },
      {
        question: "Can this connect to inventory we already use?",
        answer:
          "Often yes. Tell us which tools you run during discovery so we can plan the integration.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
