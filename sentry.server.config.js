// This file configures the initialization of Sentry on the server side

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://your-dsn@sentry.io/project-id',
  // Adjust this value in production, or use tracesSampler for finer control
  tracesSampleRate: 1.0,
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});