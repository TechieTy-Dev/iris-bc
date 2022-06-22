/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "about.twitter.com",
      "pbs.twimg.com",
      "mitigatecyber.com",
      "images.theconversation.com",
      "gateway.pinata.cloud",
    ],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = nextConfig;
