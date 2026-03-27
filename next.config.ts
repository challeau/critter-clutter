import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [new URL("https://dodo.ac/np/images/**")],
  },
};

export default nextConfig;
