/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "bitly.com", "bit.ly"],
  },
  experimental: {
    appDir: true,
  },
};
