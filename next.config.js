/** @type {import('next').NextConfig} */

const withPreact = require("next-plugin-preact");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = withPreact(nextConfig);
