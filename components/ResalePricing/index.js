import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export default function ResalePricing() {
  const { t } = useTranslation();
  const defaultCheckedIcon = { color: '#0C7CE3', marginRight: '5px', fontSize: '1.2em' };
  return (
    <section id='pricing_2' className='py-10 text-base bg-defaultBlack2'>
      <div className='default-container'>
        <div className='text-center flex flex-col items-center py-6'>
          <h1 className='text-3xl'>{t('pricing_2.title')}</h1>
          <p className='mt-3'>
            {t('pricing_2.description')}{' '}
            <span className='text-defaultCyan'>
              {' '}
              <Link href={t('pricing_2.know_more_link')}>{t('pricing_2.know_more')}</Link>
            </span>
          </p>
        </div>
        <div className='min-w-full mt-8'>
          <div className='flex text-base md:flex-row flex-col flex-col-reverse'>
            <div className='flex flex-grow flex-col md:place-items-start place-items-center'>
              <h2>{t('pricing_2.description_2')}</h2>
              <ul className='md:space-y-2 mt-6'>
                <li className='flex align-items: center;'>
                  <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
                  <span className='relative -top-0.5 text-base ml-1'>{t('pricing_2.features.feature_1')}</span>
                </li>
                <li className='flex align-items: center;'>
                  <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
                  <span className='relative -top-0.5 text-base ml-1'>{t('pricing_2.features.feature_2')}</span>
                </li>
                <li className='flex align-items: center;'>
                  <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
                  <span className='relative -top-0.5 text-base ml-1'>{t('pricing_2.features.feature_3')}</span>
                </li>
                <li className='flex'>
                  <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
                  <span className='relative -top-0.5 text-base ml-1'>{t('pricing_2.features.feature_4')}</span>
                </li>
                <li className='flex'>
                  <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
                  <span className='relative -top-0.5 text-base ml-1'>{t('pricing_2.features.feature_5')}</span>
                </li>
                <li className='flex'>
                  <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
                  <span className='relative -top-0.5 text-base ml-1'>{t('pricing_2.features.feature_6')}</span>
                </li>
              </ul>
              <Link href={t('pricing_2.button_link')}>
                <button type='button' className='bg-defaultBlue w-64 mt-6 rounded-md py-3 px-5 mb-6'>
                  {t('pricing_2.button')}
                </button>
              </Link>
            </div>
            <div className='mb-8 md:mb-0 place-self-center	'>
              <Image src='/img/management-panel.png' alt='iptv management panel' width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
