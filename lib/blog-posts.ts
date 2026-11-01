/**
 * Case studies written as blog-style articles, each tied to a shipped project.
 * Display order: Project 03 → Project 01 → Project 02.
 * Covers use the real project images from /public/images.
 */
export const blogPosts = [
  {
    slug: "business-automation-case-study",
    isSample: false,
    projectSlug: "business-automation",
    title: "Automating enquiries, bookings and WhatsApp follow-ups",
    excerpt:
      "An operations-heavy team cut missed messages by routing FAQs, appointments and reminders through automation—while keeping a human path for anything sensitive.",
    category: "Automation",
    tags: ["WhatsApp", "AI", "Bookings", "Operations"],
    author: "Obekai Team",
    authorAvatar: {
      src: "/images/icon-192.png",
      alt: "Obekai",
      width: 192,
      height: 192,
    },
    date: "2026-06-22",
    readTime: "6 min",
    cover: {
      src: "/images/project333.jpg",
      alt: "Business automation flows for enquiries, bookings and WhatsApp alerts",
      width: 1536,
      height: 1024,
    },
    content: [
      {
        type: "p",
        text: "High message volume sounds like demand until the same questions repeat and appointments slip. This case study shows how we automated customer enquiries, appointment bookings and WhatsApp notifications without turning the brand into a bot that never hands off to a person.",
      },
      {
        type: "h2",
        text: "The problem",
      },
      {
        type: "p",
        text: "Staff spent evenings answering routine questions, confirming slots and sending reminders by hand. Peak hours meant missed chats. No-shows hurt because reminders were inconsistent. Leadership wanted relief, not a black-box tool they could not explain to the floor team.",
      },
      {
        type: "h2",
        text: "What we built",
      },
      {
        type: "p",
        text: "We implemented automated enquiry handling, booking flows and WhatsApp notifications, with AI-assisted replies for common intents and clear escalation to a human when the conversation needed judgment. The goal was fewer dropped messages and a calmer day for the people still doing the real work.",
      },
      {
        type: "h2",
        text: "How the work unfolded",
      },
      {
        type: "p",
        text: "We listed the top enquiry types and booking rules first. Only those paths were automated. WhatsApp Business API carried transactional messages; light AI covered FAQ-style answers with guardrails; the booking calendar stayed the source of truth. Weekly reviews caught edge cases before launch.",
      },
      {
        type: "h2",
        text: "Outcomes",
      },
      {
        type: "p",
        text: "Routine questions get answered faster, appointments confirm without phone tag, and reminders go out on time. The team spends attention on exceptions instead of copy-paste replies. Because ownership and credentials were handed over after final payment, they are not locked into a vendor chat they cannot leave.",
      },
      {
        type: "p",
        text: "If your inbox is full of the same five questions, automation is usually a process project first and a tech project second. Tell us your daily message volume and we will recommend a lean first version.",
      },
    ],
  },
  {
    slug: "custom-crm-platform-case-study",
    isSample: false,
    projectSlug: "custom-crm-platform",
    title: "How a custom CRM replaced scattered sheets and missed follow-ups",
    excerpt:
      "A mid-sized sales team moved from spreadsheets and chat threads into one pipeline, analytics view and workflow layer—without a bloated off-the-shelf suite.",
    category: "Custom software",
    tags: ["CRM", "Next.js", "PostgreSQL", "Sales"],
    author: "Obekai Team",
    authorAvatar: {
      src: "/images/icon-192.png",
      alt: "Obekai",
      width: 192,
      height: 192,
    },
    date: "2026-09-18",
    readTime: "7 min",
    cover: {
      src: "/images/project111.jpg",
      alt: "Custom CRM platform dashboard with pipelines and analytics",
      width: 1600,
      height: 1200,
    },
    content: [
      {
        type: "p",
        text: "When customer records live in spreadsheets, deal notes sit in chat, and follow-ups depend on memory, growth slows. This case study walks through how we designed and shipped a custom CRM platform for a team that needed clarity more than another generic SaaS login.",
      },
      {
        type: "h2",
        text: "The problem",
      },
      {
        type: "p",
        text: "Sales and account data were split across sheets, inboxes and personal trackers. Managers could not see pipeline health in one place. Reps duplicated work, and handoffs between discovery and closing were easy to lose. Off-the-shelf CRMs felt heavy, expensive and full of fields the team would never use.",
      },
      {
        type: "h2",
        text: "What we built",
      },
      {
        type: "p",
        text: "We delivered a centralized business management platform with customer tracking, sales pipelines, analytics and automated workflows. The product was scoped around the journeys the team actually ran—lead capture, stage movement, activity logging and weekly reporting—rather than copying every feature from a market leader.",
      },
      {
        type: "h2",
        text: "How the work unfolded",
      },
      {
        type: "p",
        text: "Discovery mapped the real sales stages and the minimum data each stage needed. Design focused on a command-center dashboard: KPIs up top, pipeline and trajectory in the middle, and priority actions on the side. Engineering used Next.js on the front end with a Node.js API and PostgreSQL so ownership stayed with the client after handoff.",
      },
      {
        type: "h2",
        text: "Outcomes",
      },
      {
        type: "p",
        text: "The team now tracks customers in one system, moves deals through a visible pipeline, and runs automated reminders for follow-ups. Leadership gets analytics without exporting sheets every Friday. Because the quote was fixed and the scope was written down, launch stayed on schedule with no surprise feature creep.",
      },
      {
        type: "p",
        text: "If your sales process is stuck in spreadsheets, a focused CRM often beats forcing a giant platform onto a small team. Tell us how you sell today and we will say honestly whether a custom build is worth it.",
      },
    ],
  },
  {
    slug: "ecommerce-platform-case-study",
    isSample: false,
    projectSlug: "ecommerce-platform",
    title: "Building a custom store when Instagram DMs stop scaling",
    excerpt:
      "From catalogue chaos to checkout, payments and order tracking—how we shaped a shopping experience that staff could run without a developer on call.",
    category: "E-commerce",
    tags: ["E-commerce", "React", "Stripe", "Retail"],
    author: "Obekai Team",
    authorAvatar: {
      src: "/images/icon-192.png",
      alt: "Obekai",
      width: 192,
      height: 192,
    },
    date: "2026-08-04",
    readTime: "6 min",
    cover: {
      src: "/images/project222.jpg",
      alt: "Custom e-commerce platform with product catalogue and checkout",
      width: 1600,
      height: 1200,
    },
    content: [
      {
        type: "p",
        text: "Selling through social chats works until volume rises. Stock questions pile up, payment links get lost, and nobody has a clean order history. This case study covers a custom e-commerce platform we built so browsing, checkout and fulfilment lived in one product.",
      },
      {
        type: "h2",
        text: "The problem",
      },
      {
        type: "p",
        text: "The business needed a reliable catalogue, cart and payment flow. Orders were tracked manually. Customers asked the same availability questions every day. A template store would have forced awkward workarounds for how they priced, packaged and fulfilled items.",
      },
      {
        type: "h2",
        text: "What we built",
      },
      {
        type: "p",
        text: "We shipped a custom shopping experience with product management, checkout, Stripe payments and order tracking. Admins can update catalogue details without waiting on a developer. Buyers get a clear path from product to paid order, and the team sees status without digging through chats.",
      },
      {
        type: "h2",
        text: "How the work unfolded",
      },
      {
        type: "p",
        text: "We started with the purchase journey on mobile, because that is where most traffic came from. React powered the storefront experience; Node.js handled orders and inventory updates; Stripe covered card payments. Weekly demos kept the catalogue structure honest—only fields staff would actually maintain.",
      },
      {
        type: "h2",
        text: "Outcomes",
      },
      {
        type: "p",
        text: "Customers browse and buy without messaging for every SKU. Payments are recorded against orders, and tracking cuts “where is my order?” back-and-forth. The store is treated like a product, not a brochure: after launch, small catalogue and checkout fixes landed inside the support window, then moved to an optional care plan.",
      },
      {
        type: "p",
        text: "If DMs are your checkout, a focused store with clean payments usually pays for itself in saved hours. Share what you sell and your average order volume and we will outline a fixed-scope build.",
      },
    ],
  },
] as const;

export type BlogPost = (typeof blogPosts)[number];
