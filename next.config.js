/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'barqon.co.nz',
        // pathname: '/**', // Uncomment if you want to restrict to all paths
      },
    ],
  },
}

module.exports = nextConfig