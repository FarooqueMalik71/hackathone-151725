import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        // You can specify a pathname if needed, e.g., '/images/**'
      },
    ],
  },
};

export default nextConfig;
