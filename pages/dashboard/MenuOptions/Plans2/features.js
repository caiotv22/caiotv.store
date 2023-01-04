import { useState } from 'react';
import { updateGitHubJson, getGitHubInfo } from '@/services/api';
import Input from '@/dashboard/components/input';
import SubmitButton from '@/dashboard/components/submitButton';

export default function Features({ data }) {
  const [getTitle, setGetTitle] = useState(null);
  const [getFeature1, setFeature1] = useState(null);
  const [getFeature2, setFeature2] = useState(null);
  const [getFeature3, setFeature3] = useState(null);
  const [getFeature4, setFeature4] = useState(null);
  const [getFeature5, setFeature5] = useState(null);
  const [getFeature6, setFeature6] = useState(null);
  const [getButton, setButton] = useState(null);
  const [getButtonLink, setButtonLink] = useState(null);
  const dataToObj = JSON.parse(data);

  async function handleSubmit(e) {
    e.preventDefault();
    let newObj = {};
    const heroSection = {
      translation: {
        pricing_2: {
          title: dataToObj?.translation?.pricing_2?.title,
          description: dataToObj?.translation?.pricing_2?.description,
          know_more: dataToObj?.translation?.pricing_2?.know_more,
          know_more_link: dataToObj?.translation?.pricing_2?.know_more_link,
          description_2: getTitle ? getTitle : dataToObj?.translation?.pricing_2?.description_2,
          features: {
            feature_1: getFeature1 ? getFeature1 : dataToObj?.translation?.pricing_2?.features?.feature_1,
            feature_2: getFeature2 ? getFeature2 : dataToObj?.translation?.pricing_2?.features?.feature_2,
            feature_3: getFeature3 ? getFeature3 : dataToObj?.translation?.pricing_2?.features?.feature_3,
            feature_4: getFeature4 ? getFeature4 : dataToObj?.translation?.pricing_2?.features?.feature_4,
            feature_5: getFeature5 ? getFeature5 : dataToObj?.translation?.pricing_2?.features?.feature_5,
            feature_6: getFeature6 ? getFeature6 : dataToObj?.translation?.pricing_2?.features?.feature_6,
          },
          button: getButton ? getButton : dataToObj?.translation?.pricing_2?.button,
          button_link: getButtonLink ? getButtonLink : dataToObj?.translation?.pricing_2?.button_link,
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
      <h1 className='mb-4'>Características</h1>
      <form onSubmit={handleSubmit}>
        <Input
          id='description_2'
          labelTitle={'Título'}
          setInput={setGetTitle}
          defaultVal={dataToObj?.translation?.pricing_2?.description_2}
          placeHolderVal='Digite a característica'
          maxLengthVal='50'
        />
        <Input
          id='feature_1'
          labelTitle={'1º Característica'}
          setInput={setFeature1}
          defaultVal={dataToObj?.translation?.pricing_2?.features.feature_1}
          placeHolderVal='Digite a característica'
          maxLengthVal='50'
        />
        <Input
          id='feature_2'
          labelTitle={'2º Característica'}
          setInput={setFeature2}
          defaultVal={dataToObj?.translation?.pricing_2?.features.feature_2}
          placeHolderVal='Digite a característica'
          maxLengthVal='50'
        />
        <Input
          id='feature_3'
          labelTitle={'3º Característica'}
          setInput={setFeature3}
          defaultVal={dataToObj?.translation?.pricing_2?.features.feature_3}
          placeHolderVal='Digite a característica'
          maxLengthVal='50'
        />
        <Input
          id='feature_4'
          labelTitle={'4º Característica'}
          setInput={setFeature4}
          defaultVal={dataToObj?.translation?.pricing_2?.features.feature_4}
          placeHolderVal='Digite a característica'
          maxLengthVal='50'
        />
        <Input
          id='feature_5'
          labelTitle={'5º Característica'}
          setInput={setFeature5}
          defaultVal={dataToObj?.translation?.pricing_2?.features.feature_5}
          placeHolderVal='Digite a característica'
          maxLengthVal='50'
        />
        <Input
          id='feature_6'
          labelTitle={'6º Característica'}
          setInput={setFeature6}
          defaultVal={dataToObj?.translation?.pricing_2?.features.feature_6}
          placeHolderVal='Digite a característica'
          maxLengthVal='50'
        />
        <div className='bg-gray-800 p-4 rounded-2xl mb-6'>
          <Input
            id='button'
            labelTitle={'Texto do botão'}
            setInput={setButton}
            defaultVal={dataToObj?.translation?.pricing_2?.button}
            placeHolderVal='Digite o título do botão'
            maxLengthVal='50'
          />
          <Input
            id='button_link'
            labelTitle={'Link do botão'}
            setInput={setButtonLink}
            defaultVal={dataToObj?.translation?.pricing_2?.button_link}
            placeHolderVal='Digite o título do botão'
            maxLengthVal='50'
          />
        </div>
        <SubmitButton />
      </form>
    </>
  );
}
