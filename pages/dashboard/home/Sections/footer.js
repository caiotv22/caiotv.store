import { useState } from 'react';
import { updateGitHubJson, getGitHubInfo } from '@/services/api/github';
import Input from '@/dashboard/components/input';
import SubmitButton from '@/dashboard/components/submitButton';
import { useGitHubInfo } from '@/global/providers';

export default function Footer({ data }) {
  const [getTitle, setGetTitle] = useState(null);
  const dataToObj = data ? JSON.parse(data) : '';
  const { gitHubUserInfo } = useGitHubInfo();

  async function handleSubmit(e) {
    e.preventDefault();
    let newObj = {};
    const heroSection = {
      translation: {
        footer: {
          copyright: {
            title: getTitle ? getTitle : dataToObj?.translation?.footer?.copyright?.title,
          },
        },
      },
    };

    Object.keys(heroSection).forEach((key) => {
      if (heroSection[key] instanceof Object) {
        newObj[key] = Object.assign({}, dataToObj[key], heroSection[key]);
      } else {
        newObj[key] = heroSection[key];
      }
    });
    try {
      let auth = await getGitHubInfo('auth', gitHubUserInfo);
      return updateGitHubJson(newObj, auth, 'header updated', gitHubUserInfo);
    } catch (error) {
      console.log('erro');
    }
  }

  return (
    <>
      <h1 className='mb-4'>Rodapé</h1>
      <form onSubmit={handleSubmit}>
        <Input
          id='title'
          labelTitle={'Nome'}
          setInput={setGetTitle}
          defaultVal={dataToObj?.translation?.footer?.copyright?.title}
          placeHolderVal='Digite aqui o nome no copyright'
          maxLengthVal='100'
        />
        <SubmitButton />
      </form>
    </>
  );
}
