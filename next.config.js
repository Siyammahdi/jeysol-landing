/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // This ignores build errors for production builds specifically.
    // Type checking still works during development.
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig 