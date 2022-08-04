/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    customBaseUrl: `${process.env.NEXT_APP_API_END_POINT}/api/v1`,
  },
};

module.exports = nextConfig;
