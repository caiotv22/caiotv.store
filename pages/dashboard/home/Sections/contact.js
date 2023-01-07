import { useState } from 'react';
import { updateGitHubJson, getGitHubInfo } from '@/services/api/github';
import Input from '@/dashboard/components/input';
import SubmitButton from '@/dashboard/components/submitButton';
import { useGitHubInfo } from '@/global/providers';

export default function Contact({ data }) {
  const dataToObj = data ? JSON.parse(data) : '';
  const { gitHubUserInfo } = useGitHubInfo();
  const [getTitle, setGetTitle] = useState(null);
  const [getWhatsappNumber, setGetWhatsappNumber] = useState(null);
  const [getWhatsappLink, setGetWhatsappLink] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    let newObj = {};
    const heroSection = {
      translation: {
        contact: {
          title: getTitle ? getTitle : dataToObj?.translation?.contact?.title,
          number_whatsapp: getWhatsappNumber ? getWhatsappNumber : dataToObj?.translation?.contact?.number_whatsapp,
          number_whatsapp_link: getWhatsappLink
            ? getWhatsappLink
            : dataToObj?.translation?.contact?.number_whatsapp_link,
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
      <h1 className='mb-4'>Contato</h1>
      <form onSubmit={handleSubmit}>
        <Input
          id='title'
          labelTitle={'Título'}
          setInput={setGetTitle}
          defaultVal={dataToObj?.translation?.contact?.title}
          placeHolderVal='Digite aqui o título'
          maxLengthVal='120'
        />
        <Input
          id='number_whatsapp'
          labelTitle={'Número do whatsapp'}
          setInput={setGetWhatsappNumber}
          defaultVal={dataToObj?.translation?.contact?.number_whatsapp}
          placeHolderVal='Digite aqui o número do whatsapp'
          maxLengthVal='30'
        />
        <Input
          id='number_whatsapp_link'
          labelTitle={'Link do atendimento via whatsapp'}
          setInput={setGetWhatsappLink}
          defaultVal={dataToObj?.translation?.contact?.number_whatsapp_link}
          placeHolderVal='Digite aqui link do atendimento via whatsapp'
          maxLengthVal='500'
        />
        <SubmitButton />
      </form>
    </>
  );
}
