import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section
      id='hero-section'
      className='lg:bg-hero-section-background bg-hero-section-mobile-background bg-no-repeat bg-center bg-cover py-20'
    >
      <div className='default-container'>
        <div className='py-6 sm:py-14 lg:pr-20 text-3xl lg:w-2/5 text-center'>
          <h1 className='2xl:text-4xl'>{t('hero-section.title')}</h1>
          <h3 className='mt-2 2xl:text-3xl'>{t('hero-section.subtitle')}</h3>
          <div className='mt-12'>
            <Link href='https://wa.me/message/3KMEBBKUNJ4PF1' target='_blank'>
              <button type='button' className='bg-defaultBlue rounded-md py-4 px-10 xl:px-10 lg:px-2.5'>
                {t('hero-section.button')}
              </button>
            </Link>
            <br />
            <small className='block mt-3 text-xs px-8'>{t('hero-section.warning')}</small>
          </div>
        </div>
      </div>
    </section>
  );
}
