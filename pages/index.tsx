import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Head>
        <title>FlyProx AI - AI Voice Agents for Sales & Support</title>
        <meta name="description" content="Transform your customer interactions with intelligent AI agents that handle sales calls, support tickets, and lead qualification 24/7." />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero, Features, and Testimonials will be rendered with Header/Footer from _app.tsx */}
      <Hero />
      <Features />
      <Testimonials />
    </>
  );
}