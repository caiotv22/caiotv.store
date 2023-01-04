import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import Link2 from 'next/link';

export default function DesktopMenu() {
  const { t } = useTranslation();
  return (
    <div className='hidden xl:flex text-lg place-items-center'>
      <Image className='relative top-0.5' src='/img/logo.png' alt={t('head.title')} width={180} height={100} />
      <div className='flex flex-grow'>
        <nav className='flex text-white w-full mt-1 pl-4'>
          <ul className='flex px-4 flex-grow place-items-center'>
            <li className='px-2 cursor-pointer'>
              <Link to='how-it-works' smooth={true}>
                {t('header.nav.option_1')}
              </Link>
            </li>
            <li className='px-2 cursor-pointer'>
              <Link to='pricing' smooth={true}>
                {t('header.nav.option_2')}
              </Link>
            </li>
            <li className='px-2 cursor-pointer'>
              {' '}
              <Link to='faq' smooth={true}>
                {t('header.nav.option_3')}
              </Link>
            </li>
          </ul>
          <div className='flex'>
            <ul className='flex px-2 flex-grow place-items-center'>
              <li className='px-2 cursor-pointer'>
                {' '}
                <Link to='pricing-2' smooth={true}>
                  {t('header.nav.option_4')}
                </Link>
              </li>
              <li className='px-2 cursor-pointer'>
                <Link2 href={t('header.nav.button_link_option_5')}>
                  <button type='button' className='bg-defaultBlue rounded-md py-1 px-5'>
                    {t('header.nav.option_5')}
                  </button>
                </Link2>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
