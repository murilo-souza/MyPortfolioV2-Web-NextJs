/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'user-images.githubusercontent.com',
      'private-user-images.githubusercontent.com',
      'github.com',
    ],
  },
}

export default nextConfig
