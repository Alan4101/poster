/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
  trailingSlash: true,
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig
