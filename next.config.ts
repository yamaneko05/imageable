import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold.jp",
      },
    ],
  },
};

export default nextConfig;
