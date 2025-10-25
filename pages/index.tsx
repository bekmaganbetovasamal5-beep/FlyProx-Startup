import Head from 'next/head';
import Hero from '../components/Hero';
import Problems from '../components/Problems';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Head>
        <title>FlyProx AI - Увеличьте записи на встречи на 32% | AI для outbound продаж</title>
        <meta name="description" content="FlyProx AI автоматизирует холодные звонки, квалифицирует лидов и персонализирует скрипты. Увеличьте количество записанных встреч на 32% с помощью AI-ассистента." />
        <meta name="keywords" content="AI продажи, outbound продажи, автоматизация звонков, квалификация лидов, B2B продажи, FlyProx" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero, Problems, Features, and Testimonials will be rendered with Header/Footer from _app.tsx */}
      <Hero />
      <Problems />
      <Features />
      <Testimonials />
    </>
  );
}