/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'raw.githubusercontent.com',
      'cdn.riderize.com'
    ],
  },
}

module.exports = nextConfig
