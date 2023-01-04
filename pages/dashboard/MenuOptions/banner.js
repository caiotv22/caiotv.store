import React from 'react';
import Input from '@/dashboard/components/input';

export default function Banner({ data }) {
  const dataToObj = JSON.parse(data);
  return (
    <>
      <h1 className='mb-4'>Banner</h1>
      <Input
        id='option_1'
        labelTitle={'Texto Principal'}
        setInput={'setGetInputMenu1'}
        defaultVal={dataToObj?.translation?.hero_section?.title}
        placeHolderVal='Digite aqui o título da nova opção do menu'
        maxLengthVal='30'
      />
    </>
  );
}
