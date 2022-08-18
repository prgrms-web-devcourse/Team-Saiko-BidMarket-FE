/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    customBaseUrl: `${process.env.NEXT_APP_API_END_POINT}`,
    googleLoginUrl: `${process.env.GOOGLE_LOGIN_URL}`,
    stompUrl: `${process.env.STOMP_END_POINT}`,
    bucketUrl: `${process.env.BUCKET_URL}`,
  },
  images: {
    domains: [process.env.BUCKET_URL_CONFIG],
  },
};

module.exports = nextConfig;
