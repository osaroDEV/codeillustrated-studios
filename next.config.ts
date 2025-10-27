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
  // Note: `experimental.appDir` is no longer a valid property in the
  // Next types for this version. Remove it to satisfy the config types.
};

export default nextConfig;
