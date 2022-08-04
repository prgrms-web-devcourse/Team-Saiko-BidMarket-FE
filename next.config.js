/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    customBaseUrl: `${process.env.NEXT_APP_API_END_POINT}`,
  },
};

module.exports = nextConfig;
