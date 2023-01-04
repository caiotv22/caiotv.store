import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import Link2 from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

export default function MobileMenu() {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className='xl:hidden flex text-base'>
      <div className='flex flex-grow place-items-center'>
        <span className='px-2'>
          <Image src='/img/logo.png' alt={t('head.title')} width={180} height={100} />
        </span>
      </div>
      <div className='flex'>
        <button type='button' onClick={() => setOpenMenu(!openMenu)}>
          <AiOutlineMenu style={{ fontSize: '2em' }} />
        </button>
      </div>
      <nav
        style={{ display: !openMenu && 'none' }}
        className={'flex absolute top-[77px] left-0 w-full py-12 bg-defaultBlack'}
      >
        <ul className='flex flex-col flex-grow place-items-center space-y-3'>
          <li className='px-2 cursor-pointer'>
            <Link to='how-it-works' smooth={true} onClick={() => setOpenMenu(!openMenu)}>
              {t('header.nav.option_1')}
            </Link>
          </li>
          <li className='px-2 cursor-pointer'>
            <Link to='pricing' smooth={true} onClick={() => setOpenMenu(!openMenu)}>
              {t('header.nav.option_2')}
            </Link>
          </li>
          <li className='px-2 cursor-pointer'>
            {' '}
            <Link to='faq' smooth={true} onClick={() => setOpenMenu(!openMenu)}>
              {t('header.nav.option_3')}
            </Link>
          </li>
          <li className='px-2 cursor-pointer'>
            {' '}
            <Link to='pricing-2' smooth={true} onClick={() => setOpenMenu(!openMenu)}>
              {t('header.nav.option_4')}
            </Link>
          </li>
          <li className='px-2 cursor-pointer'>
            <Link2 href={t('header.nav.button_link_option_5')}>
              <button type='button' className='bg-defaultBlue rounded-md py-1 px-5 mt-8'>
                {t('header.nav.option_5')}
              </button>
            </Link2>
          </li>
        </ul>
      </nav>
    </div>
  );
}
