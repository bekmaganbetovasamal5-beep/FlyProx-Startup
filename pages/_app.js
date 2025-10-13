import '../styles/globals.css';

// This will configure Sentry for client-side errors
if (typeof window !== 'undefined') {
  import('../sentry.client.config.js');
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;