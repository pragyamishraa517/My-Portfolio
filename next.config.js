/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com'], // Add any other domains you need for images
  },
  // Enable static optimization for better performance
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig 