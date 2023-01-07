import { useState, useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Login } from '@/services/api/auth';
import { AuthContext } from '@/global/providers';
import { useTranslation } from 'react-i18next';

export default function LoginPage() {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const authContext = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();
    let bodyContent = {
      username: user,
      password: password,
    };
    try {
      let data = await Login(JSON.stringify(bodyContent));
      return authContext.setUserAuthInfo(data, '');
    } catch (error) {
      return error;
    }
  }

  return (
    <>
      <Head>
        <title>Login - Caio Services</title>
        <meta name='description' content={t('head.description')} />
        <link rel='icon' href='img/favicon.ico' />
      </Head>
      <div className='flex flex-col text-lg place-items-center place-content-center'>
        <span className='px-2 my-8 opacity-50'>Página de login - Painel de gerencimanto do revendedor</span>
        <div className='w-3/4 xl:w-2/6 mx-40 bg-defaultBlack2 p-8 br-4 rounded-2xl'>
          <div className='flex place-content-center	pb-3'>
            <Image className='relative top-0.5' src='/img/logo.png' alt={t('head.title')} width={180} height={100} />
          </div>
          <form className='flex flex-col mt-4 py-2' onSubmit={handleSubmit}>
            <input
              id='username'
              name='username'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3'
              placeholder='Digite aqui o nome de usuário...'
              onChange={(e) => setUser(e.target.value)}
              required
            />
            <input
              id='password'
              name='password'
              type='password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4'
              placeholder='Digite aqui a sua senha...'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className='bg-defaultGreen hover:bg-emerald-700 text-white py-2 px-4 rounded mt-2' type='submit'>
              Acessar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
