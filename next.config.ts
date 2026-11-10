import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  // Cache Components / PPR hang on Cloudflare Workers (workerd) with OpenNext:
  // unresolved staged-render promises → "Worker's code had hung and would never
  // generate a response". Keep off until @opennextjs/cloudflare ships the
  // workerd scheduler fix (opennextjs-cloudflare#1318).
  cacheComponents: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/services/custom-software-engineering",
        destination: "/services/custom-software-development",
        permanent: true,
      },
      {
        source: "/services/custom-software-crm",
        destination: "/services/custom-software-development",
        permanent: true,
      },
      {
        source: "/services/crm-development",
        destination: "/services/custom-software-development",
        permanent: true,
      },
      {
        source: "/services/web-development",
        destination: "/services/web-saas-development",
        permanent: true,
      },
      {
        source: "/services/saas-development",
        destination: "/services/web-saas-development",
        permanent: true,
      },
      {
        source: "/services/business-websites",
        destination: "/services/web-saas-development",
        permanent: true,
      },
      {
        source: "/services/ai-business-automation",
        destination: "/services/ai-automation",
        permanent: true,
      },
      {
        source: "/services/whatsapp-ai-automation",
        destination: "/services/ai-automation",
        permanent: true,
      },
      {
        source: "/services/ecommerce-platforms",
        destination: "/services/ecommerce-development",
        permanent: true,
      },
      {
        source: "/services/ui-ux-brand",
        destination: "/services/web-saas-development",
        permanent: true,
      },
      {
        source: "/services/digital-marketing",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
