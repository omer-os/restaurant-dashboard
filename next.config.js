/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "placehold.co",
      "firebasestorage.googleapis.com",
    ],
  },

  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
