/**
 * Case studies. Covers use project31–34.
 * Homepage project cards use a different set of images (project111, project222, project333).
 * Names and figures drawn on these screens are interface content, not verified client results.
 */
const authorAvatar = {
  src: "/images/icon-192.png",
  alt: "Obekai",
  width: 192,
  height: 192,
} as const;

export const blogPosts = [
  {
    slug: "electronics-storefront-case-study",
    isSample: true,
    projectSlug: "",
    title: "An electronics storefront with search, cart and a clear offer",
    excerpt:
      "A consumer shop interface: navigation, product search, account and cart, a hero offer, and the service promises buyers look for before they check out.",
    category: "E-commerce",
    tags: ["Storefront", "Catalogue", "Checkout", "Retail"],
    author: "Obekai Team",
    authorAvatar,
    date: "2026-10-02",
    readTime: "5 min",
    cover: {
      src: "/images/project31.jpg",
      alt: "Laptop showing an electronics storefront with a product hero, search and cart",
      width: 1080,
      height: 765,
    },
    content: [
      {
        type: "p",
        text: "This case study is a product screen for an electronics shop. It is not a published client engagement, and the copy and figures on the interface are part of the screen, not verified business results.",
      },
      {
        type: "h2",
        text: "The problem",
      },
      {
        type: "p",
        text: "An electronics catalogue is hard to buy from when search, account and cart are buried, and the homepage does not say what the shop actually promises. Buyers need a first screen that shows the range, a way to search, and the policies that usually block a purchase: shipping, returns, payment and support.",
      },
      {
        type: "h2",
        text: "What the screen shows",
      },
      {
        type: "p",
        text: "The storefront puts Home, About, Shop and Contact in a simple bar, with product search, account and cart beside them. The hero leads with the offer and a featured product. Under it, four service tiles cover free shipping, a money-back window, secure payments and round-the-clock support.",
      },
      {
        type: "h2",
        text: "How a build like this is scoped",
      },
      {
        type: "p",
        text: "A real engagement starts from the catalogue and the checkout, not from a theme. We define the product fields the team will maintain, the payment provider, and which promises (shipping, returns, support) are operationally true. The storefront is then engineered so those promises are visible before someone adds an item to the cart.",
      },
      {
        type: "h2",
        text: "What we do not claim from this screen",
      },
      {
        type: "p",
        text: "No client name, order volume or revenue figure is attached to this image. If you want a store of this kind, the quote follows your catalogue, payments and fulfilment, and any result is published only after you approve it.",
      },
    ],
  },
  {
    slug: "sales-command-center-case-study",
    isSample: true,
    projectSlug: "",
    title: "A sales command center for pipeline, deals and follow-ups",
    excerpt:
      "One operating view for a sales team: momentum, revenue trajectory, live deal flow and the actions that need a person today.",
    category: "Custom software",
    tags: ["CRM", "Pipeline", "Dashboard", "Sales"],
    author: "Obekai Team",
    authorAvatar,
    date: "2026-10-08",
    readTime: "6 min",
    cover: {
      src: "/images/project32.jpg",
      alt: "Sales command center with pipeline metrics, a revenue chart and an active deal list",
      width: 1600,
      height: 1200,
    },
    content: [
      {
        type: "p",
        text: "This case study walks through a sales command-center screen. The companies, dollar figures and percentages on it are interface content. They are not Obekai client results.",
      },
      {
        type: "h2",
        text: "The problem",
      },
      {
        type: "p",
        text: "Pipeline health is hard to see when leads, deals and follow-ups live in separate sheets and chats. Managers ask for a weekly export. Reps miss the conversations that actually move a deal.",
      },
      {
        type: "h2",
        text: "What the screen shows",
      },
      {
        type: "p",
        text: "The console is organised as one working surface: growth and revenue summaries, a short activity pulse, a revenue trajectory, live deal flow by stage, and a priority-action list with owners and due times. Navigation covers leads, deals, companies, activities and tasks, so the dashboard is an entry point rather than a separate report.",
      },
      {
        type: "h2",
        text: "How a build like this is scoped",
      },
      {
        type: "p",
        text: "We start from the stages the team already uses and the few numbers they will trust. The first release is usually the pipeline, the deal record and the follow-up list. Charts are added only for measures the business can explain. The data model stays in the client's database, and the source code is handed over after final payment.",
      },
      {
        type: "h2",
        text: "What we do not claim from this screen",
      },
      {
        type: "p",
        text: "Nothing on this dashboard is a measured outcome for a named customer. A live command center is quoted from the CRM scope, the integrations and the reports you actually run.",
      },
    ],
  },
  {
    slug: "ai-workflow-command-center-case-study",
    isSample: true,
    projectSlug: "",
    title: "An AI workflow console for routing, agents and approvals",
    excerpt:
      "A control surface for automated work: where a request goes, which agent handled it, what is waiting for approval, and where cost or fallback needs a person.",
    category: "AI automation",
    tags: ["AI", "Workflows", "Approvals", "Operations"],
    author: "Obekai Team",
    authorAvatar,
    date: "2026-10-14",
    readTime: "6 min",
    cover: {
      src: "/images/project33.jpg",
      alt: "AI workflow command center with a routing map, approval queue and agent health",
      width: 1000,
      height: 750,
    },
    content: [
      {
        type: "p",
        text: "This case study describes an AI operations screen. Spend, health scores and names on the interface are screen content, not published results from an Obekai client.",
      },
      {
        type: "h2",
        text: "The problem",
      },
      {
        type: "p",
        text: "Automation fails quietly when nobody can see the path a request took. Teams add agents and then cannot tell which ones are healthy, which items are waiting for approval, or why cost moved.",
      },
      {
        type: "h2",
        text: "What the screen shows",
      },
      {
        type: "p",
        text: "The console has one overview: workflow health, an approval rate, active agents, and a routing map from intake through classify, review, fallback and delivery. Beside that is an approval queue, agent health, system alerts and a cost view. A person can still open the item that needs judgment.",
      },
      {
        type: "h2",
        text: "How a build like this is scoped",
      },
      {
        type: "p",
        text: "We begin with one workflow, not a platform for every process. The route, the human approval step and the fallback are written down before any model is connected. Integrations and model usage are what set the price. The console exists so the team can see the route, pause it, and take over.",
      },
      {
        type: "h2",
        text: "What we do not claim from this screen",
      },
      {
        type: "p",
        text: "We do not publish savings, approval rates or agent counts from this image. Those appear in a case study only when a client has agreed to the figure.",
      },
    ],
  },
  {
    slug: "crm-dashboard-case-study",
    isSample: true,
    projectSlug: "",
    title: "A CRM dashboard for leads, deals and pipeline health",
    excerpt:
      "A sales home screen: lead and deal totals, win rate, a pipeline over time, and the people carrying the quarter.",
    category: "CRM",
    tags: ["CRM", "Dashboard", "Pipeline", "Sales"],
    author: "Obekai Team",
    authorAvatar,
    date: "2026-10-20",
    readTime: "5 min",
    cover: {
      src: "/images/project34.jpg",
      alt: "CRM dashboard with lead and deal summaries, a pipeline chart and a team list",
      width: 1920,
      height: 1080,
    },
    content: [
      {
        type: "p",
        text: "This case study is a CRM dashboard screen. The lead counts, win rate, revenue and representative names on it are interface content. They are not verified Obekai results.",
      },
      {
        type: "h2",
        text: "The problem",
      },
      {
        type: "p",
        text: "A CRM that only stores contacts still leaves the Monday question unanswered: is the pipeline healthy, and who needs help? Teams export the same four numbers every week because the product never put them on one screen.",
      },
      {
        type: "h2",
        text: "What the screen shows",
      },
      {
        type: "p",
        text: "The dashboard leads with totals that a sales lead actually opens: leads, active deals, contacts and win rate, each with a short comparison. A pipeline chart sits under them, with a sales summary and a list of who is carrying closed work. The navigation keeps CRM, finance, projects and the team in the same product.",
      },
      {
        type: "h2",
        text: "How a build like this is scoped",
      },
      {
        type: "p",
        text: "We agree the definitions first. A lead, an active deal and a win are easy to argue about and expensive to rebuild. Once those are written, the dashboard is a view on the CRM, not a second database. Filters for week, month and year are included when the underlying dates are reliable.",
      },
      {
        type: "h2",
        text: "What we do not claim from this screen",
      },
      {
        type: "p",
        text: "No revenue total or win rate from this image is a client metric. The homepage project for the custom CRM uses a different screen. This study shows the shape of the dashboard, not a scoreboard.",
      },
    ],
  },
] as const;

export type BlogPost = (typeof blogPosts)[number];
