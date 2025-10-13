/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Your other Next.js config options here
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin, for example:
  // silent: true, // Suppresses all logs
  // For more options, see: https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);