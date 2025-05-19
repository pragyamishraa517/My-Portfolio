/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
    domains: ['github.com'],
  },
  // Disable experimental features that might cause issues
  experimental: {
    optimizeCss: false,
  },
  // Ensure proper handling of static assets
  trailingSlash: true,
  // Disable server-side features since we're doing static export
  distDir: 'dist',
}

module.exports = nextConfig 