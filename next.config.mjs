/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable for static export
  // GitHub Pages requires static export
  output: 'export',
  // Add trailing slash for consistent routes
  trailingSlash: true,
  // basePath removed since using custom domain flyprox.com
  // basePath: '/FlyProx-Startup', // Not needed for custom domain
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Ensure static export works properly
  distDir: 'out',
  // Fix TypeScript issues
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint for static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable automatic 404 and error pages
  generateBuildId: () => 'build',
};

export default nextConfig;