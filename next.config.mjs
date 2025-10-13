/** @type {import('next').NextConfig} */
import { withSentryConfig } from '@sentry/nextjs';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Your other Next.js config options here
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin, for example:
  silent: true, // Suppresses all logs
  // For more options, see: https://github.com/getsentry/sentry-webpack-plugin#options.
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);