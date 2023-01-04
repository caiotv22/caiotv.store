import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import Image from 'next/image';
import Header from './MenuOptions/Header';
import Banner from './MenuOptions/banner';
import Plans from './MenuOptions/plans';
import Plans2 from './MenuOptions/plans2';
import Contact from './MenuOptions/contact';
import Footer from './MenuOptions/footer';
import { getGitHubInfo } from '@/services/api';
import { useGitHubInfo } from '@/global/providers';

export default function DashBoard() {
  const { t } = useTranslation();
  const [open, setOpen] = useState('header');
  const { gitHubInfo, setGitHubInfo } = useGitHubInfo();
  const handleOpen = (value) => setOpen(value);

  async function getData() {
    let response = await getGitHubInfo();
    return setGitHubInfo(response);
  }

  useEffect(() => {
    getData();
  });

  const showOption = {
    header: <Header data={gitHubInfo} />,
    banner: <Banner data={gitHubInfo} />,
    plans: <Plans data={gitHubInfo} />,
    plans2: <Plans2 data={gitHubInfo} />,
    contact: <Contact data={gitHubInfo} />,
    footer: <Footer data={gitHubInfo} />,
  };

  const menu = (
    <div className='hidden xl:flex text-lg place-items-center'>
      <nav className='flex text-white w-full mt-1 pl-4'>
        <ul className='flex px-4 flex-grow place-items-center'>
          <div className='py-6 px-16'>
            <Image className='relative top-0.5' src='/img/logo.png' alt={t('head.title')} width={180} height={100} />
          </div>
          <li onClick={() => handleOpen('header')} className='px-6 cursor-pointer hover:opacity-80'>
            Cabeçalho
          </li>
          <li onClick={() => handleOpen('banner')} className='px-6 cursor-pointer hover:opacity-80'>
            Banner
          </li>
          <li onClick={() => handleOpen('plans')} className='px-6 cursor-pointer hover:opacity-80'>
            {' '}
            Planos
          </li>
          <li onClick={() => handleOpen('plans2')} className='px-6 cursor-pointer hover:opacity-80'>
            {' '}
            Planos de Revenda
          </li>
          <li onClick={() => handleOpen('contact')} className='px-6 cursor-pointer hover:opacity-80'>
            {' '}
            Contato
          </li>
          <li onClick={() => handleOpen('footer')} className='px-6 cursor-pointer hover:opacity-80'>
            {' '}
            Rodapé
          </li>
        </ul>
      </nav>
    </div>
  );
  return (
    <>
      <Head>
        <title>{t('dashboard.head.title')}</title>
        <meta name='description' content={t('head.description')} />
        <link rel='icon' href='img/favicon.ico' />
      </Head>
      <div className='flex place-items-center mx-40 flex-col'>
        {menu}
        <div className='mt-12 w-full my-12 bg-defaultBlack2 p-8 br-4 rounded-2xl'>{showOption[open]}</div>
      </div>
    </>
  );
}
