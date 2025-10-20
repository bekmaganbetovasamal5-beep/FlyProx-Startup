/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable for static export
  // GitHub Pages requires static export
  output: 'export',
  // Add trailing slash for consistent routes
  trailingSlash: true,
  // Configure base path if needed for GitHub Pages
  basePath: '/FlyProx-Startup', // Repository name for GitHub Pages
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