import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: [
      '@chakra-ui/react',
      '@/@chakra-ui',
      '@/components',
      '@/features',
      '@/styles',
    ],
  },
  basePath: '',
}

export default nextConfig
