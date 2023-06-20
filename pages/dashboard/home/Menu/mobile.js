import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { AiOutlineMenu } from 'react-icons/ai';

export default function MobileMenu({ open, handleOpen }) {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const menu = (
    <div className='xl:hidden text-lg place-items-center'>
      <nav className='flex text-white w-full pl-4'>
        <ul className='flex px-4 flex-grow place-items-center flex-col'>
          <div className='py-6 px-16'>
            <Image className='relative top-0.5' src='/img/logo.png' alt={t('head.title')} width={180} height={100} />
          </div>
          <button type='button' onClick={() => setOpenMenu(!openMenu)}>
            <AiOutlineMenu style={{ fontSize: '2em' }} />
          </button>
          <div
            style={{ display: !openMenu && 'none' }}
            className='flex flex-col bg-defaultBlack2 p-4 mt-2 w-full place-items-center leading-10'
          >
            <li
              onClick={() => handleOpen('header')}
              style={open === 'header' ? { color: 'rgb(112 188 255)' } : { color: 'inherit' }}
              className='px-6 cursor-pointer hover:opacity-80'
            >
              Cabeçalho
            </li>
            <li
              onClick={() => handleOpen('banner')}
              style={open === 'banner' ? { color: 'rgb(112 188 255)' } : { color: 'inherit' }}
              className='px-6 cursor-pointer hover:opacity-80'
            >
              Banner
            </li>
            <li
              onClick={() => handleOpen('plans')}
              style={open === 'plans' ? { color: 'rgb(112 188 255)' } : { color: 'inherit' }}
              className='px-6 cursor-pointer hover:opacity-80'
            >
              {' '}
              Planos
            </li>
            <li
              onClick={() => handleOpen('plansOTT')}
              style={open === 'plansOTT' ? { color: 'rgb(112 188 255)' } : { color: 'inherit' }}
              className='px-6 cursor-pointer hover:opacity-80'
            >
              {' '}
              Planos de OTT
            </li>
            <li
              onClick={() => handleOpen('plans2')}
              style={open === 'plans2' ? { color: 'rgb(112 188 255)' } : { color: 'inherit' }}
              className='px-6 cursor-pointer hover:opacity-80'
            >
              {' '}
              Planos de Revenda
            </li>
            <li
              onClick={() => handleOpen('contact')}
              style={open === 'contact' ? { color: 'rgb(112 188 255)' } : { color: 'inherit' }}
              className='px-6 cursor-pointer hover:opacity-80'
            >
              {' '}
              Contato
            </li>
            <li
              onClick={() => handleOpen('footer')}
              style={open === 'footer' ? { color: 'rgb(112 188 255)' } : { color: 'inherit' }}
              className='px-6 cursor-pointer hover:opacity-80'
            >
              {' '}
              Rodapé
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
  return menu;
}
