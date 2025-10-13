import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SalesAI - AI Voice Agents for Sales & Support</title>
        <meta name="description" content="Transform your customer interactions with intelligent AI voice agents. Handle sales calls, support tickets, and lead qualification 24/7." />
        <meta name="keywords" content="AI voice agents, sales automation, customer support, artificial intelligence, voice AI" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}