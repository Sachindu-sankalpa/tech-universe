import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Allow cross-origin requests in dev
  allowedDevOrigins: ['*'],
};

export default nextConfig;
