import { useState } from 'react';
import Head from './head';
import Logo from './logo';
import { updateGitHubJson, getGitHubInfo } from '@/services/api';
import Input from '@/dashboard/components/input';
import SubmitButton from '@/dashboard/components/submitButton';

export default function Header({ data }) {
  const [getInputMenu1, setGetInputMenu1] = useState(null);
  const [getInputMenu2, setGetInputMenu2] = useState(null);
  const [getInputMenu3, setGetInputMenu3] = useState(null);
  const [getInputMenu4, setGetInputMenu4] = useState(null);
  const [getInputMenu5, setGetInputMenu5] = useState(null);
  const [getInputLinkOption5, setGetInputLinkOption5] = useState(null);
  const dataToObj = JSON.parse(data);

  async function handleSubmit(e) {
    e.preventDefault();
    let newObj = {};
    const head = {
      translation: {
        header: {
          nav: {
            option_1: getInputMenu1 ? getInputMenu1 : dataToObj?.translation?.header?.nav?.option_1,
            option_2: getInputMenu2 ? getInputMenu2 : dataToObj?.translation?.header?.nav?.option_2,
            option_3: getInputMenu3 ? getInputMenu3 : dataToObj?.translation?.header?.nav?.option_3,
            option_4: getInputMenu4 ? getInputMenu4 : dataToObj?.translation?.header?.nav?.option_4,
            option_5: getInputMenu5 ? getInputMenu5 : dataToObj?.translation?.header?.nav?.option_5,
            button_link_option_5: getInputLinkOption5
              ? getInputLinkOption5
              : dataToObj?.translation?.header?.nav?.button_link_option_5,
          },
        },
      },
    };
    Object.keys(head).forEach((key) => {
      if (head[key] instanceof Object) {
        newObj[key] = Object.assign({}, dataToObj[key], head[key]);
      } else {
        newObj[key] = head[key];
      }
    });
    try {
      let auth = await getGitHubInfo('auth');
      return updateGitHubJson(newObj, auth, 'header updated');
    } catch (error) {
      console.log('erro');
    }
  }
  return (
    <>
      <Head data={data} />
      <hr className='my-8' />
      <Logo />
      <h2 className='mb-4'>Menu</h2>
      <form onSubmit={handleSubmit}>
        <Input
          id='option_1'
          labelTitle={'Opção 1'}
          setInput={setGetInputMenu1}
          defaultVal={dataToObj?.translation?.header?.nav?.option_1}
          placeHolderVal='Digite aqui o título da nova opção do menu'
          maxLengthVal='30'
        />
        <Input
          id='option_2'
          labelTitle={'Opção 2'}
          setInput={setGetInputMenu2}
          defaultVal={dataToObj?.translation?.header?.nav?.option_2}
          placeHolderVal='Digite aqui o título da nova opção do menu'
          maxLengthVal='30'
        />
        <Input
          id='option_3'
          labelTitle={'Opção 3'}
          setInput={setGetInputMenu3}
          defaultVal={dataToObj?.translation?.header?.nav?.option_3}
          placeHolderVal='Digite aqui o título da nova opção do menu'
          maxLengthVal='30'
        />
        <Input
          id='option_4'
          labelTitle={'Opção 4'}
          setInput={setGetInputMenu4}
          defaultVal={dataToObj?.translation?.header?.nav?.option_4}
          placeHolderVal='Digite aqui o título da nova opção do menu'
          maxLengthVal='30'
        />
        <div className='bg-gray-800 p-4 rounded-2xl mb-6'>
          <Input
            id='option_5'
            labelTitle={'Botão'}
            setInput={setGetInputMenu5}
            defaultVal={dataToObj?.translation?.header?.nav?.option_5}
            placeHolderVal='Digite aqui o título da nova opção do menu'
            maxLengthVal='30'
          />
          <Input
            id='button_link_option_5'
            labelTitle={'Link do botão'}
            setInput={setGetInputLinkOption5}
            defaultVal={dataToObj?.translation?.header?.nav?.button_link_option_5}
            placeHolderVal='Digite aqui o título da nova opção do menu'
          />
        </div>
        <SubmitButton />
      </form>
    </>
  );
}
