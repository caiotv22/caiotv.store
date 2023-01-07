import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Description from '../components/Description';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Pricing2 from '../components/ResalePricing';
import Faq from '../components/Faq';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('head.title')}</title>
        <meta name='description' content={t('head.description')} />
        <link rel='icon' href='img/favicon.ico' />
      </Head>
      <Header />
      <Image
        src='/img/blue-light-background.png'
        alt={t('how-it-works.step-by-step-img-alt-1')}
        className='absolute w-[28%] h-[200vh] top-[860px] max-w-md max-h-[120rem] -z-50'
        width={200}
        height={100}
      />
      <Image
        src='/img/pink-light-background.png'
        alt={t('how-it-works.step-by-step-img-alt-1')}
        className='absolute w-[28%] h-[200vh] top-[860px] left-auto right-[0%] max-w-md max-h-[120rem] -z-50'
        width={200}
        height={100}
      />
      <HeroSection />
      <Description />
      <HowItWorks />
      <Pricing />
      <Pricing2 />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
