import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com"],
    remotePatterns: [new URL("https://images.unsplash.com/")],
  },
};

export default nextConfig;
