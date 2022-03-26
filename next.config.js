/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: "http://localhost:1337/graphql",
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
