import { useState } from 'react';
import { updateGitHubJson, getGitHubInfo } from '@/services/api';
import Input from '@/dashboard/components/input';
import SubmitButton from '@/dashboard/components/submitButton';
import Features from './features';

export default function Banner({ data }) {
  const [getTitle, setGetTitle] = useState(null);
  const [getDescription, setGetDescription] = useState(null);
  const [getKnowMore, setKnowMore] = useState(null);
  const [getKnowMoreLink, setKnowMoreLink] = useState(null);
  const dataToObj = JSON.parse(data);

  async function handleSubmit(e) {
    e.preventDefault();
    let newObj = {};
    const heroSection = {
      translation: {
        pricing_2: {
          title: getTitle ? getTitle : dataToObj?.translation?.pricing_2?.title,
          description: getDescription ? getDescription : dataToObj?.translation?.pricing_2?.description,
          know_more: getKnowMore ? getKnowMore : dataToObj?.translation?.pricing_2?.know_more,
          know_more_link: getKnowMoreLink ? getKnowMoreLink : dataToObj?.translation?.pricing_2?.know_more_link,
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
      let auth = await getGitHubInfo('auth');
      return updateGitHubJson(newObj, auth, 'header updated');
    } catch (error) {
      console.log('erro');
    }
  }

  return (
    <>
      <h1 className='mb-4'>Planos de revenda</h1>
      <form onSubmit={handleSubmit}>
        <Input
          id='title'
          labelTitle={'Título'}
          setInput={setGetTitle}
          defaultVal={dataToObj?.translation?.pricing_2?.title}
          placeHolderVal='Digite aqui o título'
          maxLengthVal='30'
        />
        <Input
          id='description'
          labelTitle={'Descrição'}
          setInput={setGetDescription}
          defaultVal={dataToObj?.translation?.pricing_2?.description}
          placeHolderVal='Digite aqui a descrição'
          maxLengthVal='400'
        />
        <Input
          id='know_more'
          labelTitle={'Texto "saiba mais"'}
          setInput={setKnowMore}
          defaultVal={dataToObj?.translation?.pricing_2?.know_more}
          placeHolderVal='Digite aqui o texto do "saiba mais"'
          maxLengthVal='400'
        />
        <Input
          id='know_more_link'
          labelTitle={'Link do texto "saiba mais"'}
          setInput={setKnowMoreLink}
          defaultVal={dataToObj?.translation?.pricing_2?.know_more_link}
          placeHolderVal='Digite aqui o link do texto do "saiba mais"'
          maxLengthVal='400'
        />
        <SubmitButton />
      </form>
      <hr className='my-8' />
      <Features data={data} />
    </>
  );
}
