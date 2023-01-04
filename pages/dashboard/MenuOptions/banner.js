import { useState } from 'react';
import { updateGitHubJson, getGitHubInfo } from '@/services/api';
import Input from '@/dashboard/components/input';
import SubmitButton from '@/dashboard/components/submitButton';

export default function Banner({ data }) {
  const [getInput1, setGetInput1] = useState(null);
  const [getInput2, setGetInput2] = useState(null);
  const [getInput3, setGetInput3] = useState(null);
  const [getInput4, setGetInput4] = useState(null);
  const [getInput5, setGetInput5] = useState(null);
  const dataToObj = JSON.parse(data);

  async function handleSubmit(e) {
    e.preventDefault();
    let newObj = {};
    const heroSection = {
      translation: {
        hero_section: {
          title: getInput1 ? getInput1 : dataToObj?.translation?.hero_section?.title,
          subtitle: getInput2 ? getInput2 : dataToObj?.translation?.hero_section?.subtitle,
          button: getInput3 ? getInput3 : dataToObj?.translation?.hero_section?.button,
          button_link: getInput4 ? getInput4 : dataToObj?.translation?.hero_section?.button_link,
          warning: getInput5 ? getInput5 : dataToObj?.translation?.hero_section?.warning,
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
      <h1 className='mb-4'>Banner</h1>
      <form onSubmit={handleSubmit}>
        <Input
          id='title'
          labelTitle={'Título do texto principal'}
          setInput={setGetInput1}
          defaultVal={dataToObj?.translation?.hero_section?.title}
          placeHolderVal='Digite aqui o título do texto principal'
          maxLengthVal='30'
        />
        <Input
          id='subtitle'
          labelTitle={'Texto principal'}
          setInput={setGetInput2}
          defaultVal={dataToObj?.translation?.hero_section?.subtitle}
          placeHolderVal='Digite aqui o texto principal'
          maxLengthVal='100'
        />
        <Input
          id='button'
          labelTitle={'Texto do botão'}
          setInput={setGetInput3}
          defaultVal={dataToObj?.translation?.hero_section?.button}
          placeHolderVal='Digite aqui o texto do botão'
          maxLengthVal='50'
        />
        <Input
          id='button'
          labelTitle={'Link do botão'}
          setInput={setGetInput4}
          defaultVal={dataToObj?.translation?.hero_section?.button_link}
          placeHolderVal='Digite aqui o link do botão'
          maxLengthVal='50'
        />
        <Input
          id='warning'
          labelTitle={'Observações'}
          setInput={setGetInput5}
          defaultVal={dataToObj?.translation?.hero_section?.warning}
          placeHolderVal='Digite aqui as observações'
          maxLengthVal='250'
        />
        <SubmitButton />
      </form>
    </>
  );
}
