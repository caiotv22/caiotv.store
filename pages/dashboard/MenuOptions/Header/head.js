import { useState } from 'react';
import { updateGitHubJson, getGitHubInfo } from '@/services/api';
import Input from '@/dashboard/components/input';
import SubmitButton from '@/dashboard/components/submitButton';

export default function Head({ data }) {
  const dataToObj = JSON.parse(data);
  const [getInputTitle, setGetInputTitle] = useState(null);
  const [getInputDescription, setGetInputDescription] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    let newObj = {};
    const head = {
      translation: {
        head: {
          title: getInputTitle ? getInputTitle : dataToObj?.translation?.head?.title,
          description: getInputDescription ? getInputDescription : dataToObj?.translation?.head?.description,
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
      return updateGitHubJson(newObj, auth, 'head updated');
    } catch (error) {
      console.log('erro');
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className='mb-4'>Cabeçalho</h2>
        <Input
          id='title'
          labelTitle={'Título do site'}
          setInput={setGetInputTitle}
          defaultVal={dataToObj?.translation?.head?.title}
          placeHolderVal='Digite aqui o título do seu site...'
          maxLengthVal='64'
        />
        <Input
          id='description'
          labelTitle={'Descrição do site'}
          setInput={setGetInputDescription}
          defaultVal={dataToObj?.translation?.head?.description}
          placeHolderVal='Digite aqui a descrição do site...'
          maxLengthVal='155'
        />
        <SubmitButton />
      </form>
    </>
  );
}
