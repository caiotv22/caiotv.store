/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import Header from './Sections/Header';
import Banner from './Sections/banner';
import Plans from './Sections/plans';
import Plans2 from './Sections/Plans2';
import Plans2p from './Sections/plansP2p';
import Contact from './Sections/contact';
import Footer from './Sections/footer';
import { AuthContext, useGitHubInfo } from '@/global/providers';
import { getGitHubInfo } from '@/services/api/github';
import { getGitHubUserInfo } from '@/services/api/auth';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import DesktopMenu from './Menu/desktop';
import MobileMenu from './Menu/mobile';

export default function DashBoard() {
  const { t } = useTranslation();
  const [open, setOpen] = useState('header');
  const [runGitHubData, setRunGitHubData] = useState(false);
  const { gitHubInfo, setGitHubInfo } = useGitHubInfo();
  const { gitHubUserInfo, setGitHubUserInfo } = useGitHubInfo();
  const authContext = useContext(AuthContext);
  const handleOpen = (value) => setOpen(value);

  async function getGitHubUser() {
    let response = await getGitHubUserInfo(authContext.userToken);
    setRunGitHubData(true);
    return response?.map((e) =>
      setGitHubUserInfo({
        github_token: e.github_token,
        repository_route: e.repository_route,
      })
    );
  }

  async function getGitHubData() {
    let response = await getGitHubInfo('', gitHubUserInfo);
    return setGitHubInfo(response);
  }

  useEffect(() => {
    getGitHubUser();
  }, [setGitHubUserInfo]);

  useEffect(() => {
    if (runGitHubData) {
      getGitHubData();
    }
  }, [runGitHubData, setRunGitHubData]);

  const notifyInfo = (msg) => {
    toast.warning(msg, {
      toastId: 'custom_id-yes',
      position: 'bottom-right',
      theme: 'colored',
    });
  };

  function logout() {
    notifyInfo('Deslogado com sucesso!');
    localStorage.removeItem('token');
    window.location.reload();
  }

  const showOption = {
    header: <Header data={gitHubInfo} />,
    banner: <Banner data={gitHubInfo} />,
    plans: <Plans data={gitHubInfo} />,
    plansOTT: <Plans2p data={gitHubInfo} />,
    plans2: <Plans2 data={gitHubInfo} />,
    contact: <Contact data={gitHubInfo} />,
    footer: <Footer data={gitHubInfo} />,
  };

  return (
    <>
      <Head>
        <title>{t('dashboard.head.title')}</title>
        <meta name='description' content={t('head.description')} />
        <link rel='icon' href='img/favicon.ico' />
      </Head>
      <div className='flex place-items-center mx-6 sm:mx-16 lg:mx-40 flex-col'>
        <div className='pt-4 place-self-end'>
          <span>
            Painel de gerencimanto do site: <span style={{ color: 'rgb(112 188 255)' }}>{authContext?.userName}</span>
          </span>
        </div>
        <div className='pt-4 place-self-end'>
          <span onClick={logout} className='cursor-pointer hover:opacity-80 text-red-400'>
            Deslogar
          </span>
        </div>
        <DesktopMenu open={open} handleOpen={handleOpen} />
        <MobileMenu open={open} handleOpen={handleOpen} />
        <div className='mt-12 w-full my-12 bg-defaultBlack2 p-8 br-4 rounded-2xl'>{showOption[open]}</div>
      </div>
    </>
  );
}
