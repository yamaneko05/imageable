import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold.jp",
      },
      {
        hostname: "msoyplsqlqhobfnanneo.supabase.co",
      },
    ],
  },
};

export default nextConfig;
