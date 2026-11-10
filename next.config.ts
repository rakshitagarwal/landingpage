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
        source: "/services/custom-software-crm",
        destination: "/services/custom-software-engineering",
        permanent: true,
      },
      {
        source: "/services/business-websites",
        destination: "/services/web-saas-development",
        permanent: true,
      },
      {
        source: "/services/whatsapp-ai-automation",
        destination: "/services/ai-business-automation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
