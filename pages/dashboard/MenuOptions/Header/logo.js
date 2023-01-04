import React, { useState } from 'react';
import Image from 'next/image';
import SubmitButton from '@/dashboard/components/submitButton';
import { createGitHubFile, getGitHubInfo } from '@/services/api';

export default function Logo() {
  const [img, setImg] = useState('/img/logo.png');
  const [imgFile, setImgFile] = useState('/img/logo.png');

  function handleChange(e) {
    setImgFile(e.target.files[0]);
    setImg(URL.createObjectURL(e.target.files[0]));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (img !== '/img/logo.png') {
      try {
        let auth = await getGitHubInfo('auth');
        return createGitHubFile('public/img/logqwo.png', imgFile, auth, 'logo updated');
      } catch (error) {
        console.log('erro');
      }
    }
  }

  return (
    <div className='mb-8'>
      <form onSubmit={handleSubmit}>
        <div className='mb-6'>
          <Image className='mb-4' src={img} alt='' width={180} height={100} />
          <input type='file' onChange={handleChange} />
        </div>
        <SubmitButton />
      </form>
      <hr className='my-8' />
    </div>
  );
}
