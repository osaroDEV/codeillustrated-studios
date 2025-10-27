import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  basePath: '/labs',
  assetPrefix: '/labs',
  images: {
    path: '/labs/_next/image',
  },
  // For Next.js 16.x compatibility
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
