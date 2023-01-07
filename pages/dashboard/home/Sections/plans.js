import { useState } from 'react';
import { updateGitHubJson, getGitHubInfo } from '@/services/api/github';
import Input from '@/dashboard/components/input';
import SubmitButton from '@/dashboard/components/submitButton';
import { useGitHubInfo } from '@/global/providers';

export default function Plans({ data }) {
  const dataToObj = data ? JSON.parse(data) : '';
  const { gitHubUserInfo } = useGitHubInfo();
  const [getTitlePlan, setGetTitlePlan] = useState(null);
  const [getTitlePlan2, setGetTitlePlan2] = useState(null);
  const [getTitlePlan3, setGetTitlePlan3] = useState(null);

  const [getPrice1Plan, setGetPrice1Plan] = useState(null);
  const [getPrice2Plan, setGetPrice2Plan] = useState(null);
  const [getPrice3Plan, setGetPrice3Plan] = useState(null);

  const [getDefaultFeature1, setGetDefaultFeature1] = useState(null);
  const [getDefaultFeature2, setGetDefaultFeature2] = useState(null);
  const [getDefaultFeature3, setGetDefaultFeature3] = useState(null);
  const [getDefaultFeature4, setGetDefaultFeature4] = useState(null);
  const [getDefaultFeature5, setGetDefaultFeature5] = useState(null);
  const [getDefaultFeature6, setGetDefaultFeature6] = useState(null);
  const [getDefaultFeature7, setGetDefaultFeature7] = useState(null);

  const [getCustomFeature1, setGetCustomFeature1] = useState(null);
  const [getCustomFeature3, setGetCustomFeature3] = useState(null);

  const [getButton, setGetButton] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    let newObj = {};
    const plans = {
      translation: {
        pricing: {
          title: dataToObj?.translation?.pricing?.title,
          description: dataToObj?.translation?.pricing?.description,
          description_2: dataToObj?.translation?.pricing?.description_2,
          option_1: dataToObj?.translation?.pricing?.option_1,
          option_2: dataToObj?.translation?.pricing?.option_2,
          plans: {
            title_1: getTitlePlan ? getTitlePlan : dataToObj?.translation?.pricing?.plans?.title_1,
            title_2: getTitlePlan2 ? getTitlePlan2 : dataToObj?.translation?.pricing?.plans?.title_2,
            title_3: getTitlePlan3 ? getTitlePlan3 : dataToObj?.translation?.pricing?.plans?.title_3,
            plan_1: {
              price_1: getPrice1Plan ? getPrice1Plan : dataToObj?.translation?.pricing?.plans?.plan_1?.price_1,
              price_2: getPrice2Plan ? getPrice2Plan : dataToObj?.translation?.pricing?.plans?.plan_1?.price_2,
              price_3: getPrice3Plan ? getPrice3Plan : dataToObj?.translation?.pricing?.plans?.plan_1?.price_3,
            },
            plan_2: {
              price_1: dataToObj?.translation?.pricing?.plans?.plan_2?.price_1,
              price_2: dataToObj?.translation?.pricing?.plans?.plan_2?.price_1,
              price_3: dataToObj?.translation?.pricing?.plans?.plan_2?.price_1,
            },
            default_features: {
              feature_1: getDefaultFeature1
                ? getDefaultFeature1
                : dataToObj?.translation?.pricing?.plans?.default_features?.feature_1,
              feature_2: getDefaultFeature2
                ? getDefaultFeature2
                : dataToObj?.translation?.pricing?.plans?.default_features?.feature_2,
              feature_3: getDefaultFeature3
                ? getDefaultFeature3
                : dataToObj?.translation?.pricing?.plans?.default_features?.feature_3,
              feature_4: getDefaultFeature4
                ? getDefaultFeature4
                : dataToObj?.translation?.pricing?.plans?.default_features?.feature_4,
              feature_5: getDefaultFeature5
                ? getDefaultFeature5
                : dataToObj?.translation?.pricing?.plans?.default_features?.feature_5,
              feature_6: getDefaultFeature6
                ? getDefaultFeature6
                : dataToObj?.translation?.pricing?.plans?.default_features?.feature_6,
              feature_7: getDefaultFeature7
                ? getDefaultFeature7
                : dataToObj?.translation?.pricing?.plans?.default_features?.feature_7,
            },
            custom_features: {
              pricing_1: {
                feature_1: getCustomFeature1
                  ? getCustomFeature1
                  : dataToObj?.translation?.pricing?.plans?.custom_features?.pricing_1.feature_1,
              },
              pricing_3: {
                feature_1: getCustomFeature3
                  ? getCustomFeature3
                  : dataToObj?.translation?.pricing?.plans?.custom_features?.pricing_3.feature_1,
              },
            },
            button: getButton ? getButton : dataToObj?.translation?.pricing?.plans?.button,
            recommended: dataToObj?.translation?.pricing?.plans?.recommended,
          },
        },
      },
    };

    Object.keys(plans).forEach((key) => {
      if (plans[key] instanceof Object) {
        newObj[key] = Object.assign({}, dataToObj[key], plans[key]);
      } else {
        newObj[key] = plans[key];
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
      <h1 className='mb-4'>Planos de IPTV</h1>
      <form onSubmit={handleSubmit}>
        <Input
          id='title_1'
          labelTitle={'Nome do plano 1'}
          setInput={setGetTitlePlan}
          defaultVal={dataToObj?.translation?.pricing?.plans?.title_1}
          placeHolderVal='Digite aqui o nome do plano'
          maxLengthVal='30'
        />
        <Input
          id='title_2'
          labelTitle={'Nome do plano 2'}
          setInput={setGetTitlePlan2}
          defaultVal={dataToObj?.translation?.pricing?.plans?.title_2}
          placeHolderVal='Digite aqui o nome do plano'
          maxLengthVal='30'
        />
        <Input
          id='title_3'
          labelTitle={'Nome do plano 3'}
          setInput={setGetTitlePlan3}
          defaultVal={dataToObj?.translation?.pricing?.plans?.title_3}
          placeHolderVal='Digite aqui o nome do plano'
          maxLengthVal='30'
        />
        <hr className='my-8' />
        <Input
          id='plan_1_price_1'
          labelTitle={'1º preço do plano'}
          setInput={setGetPrice1Plan}
          defaultVal={dataToObj?.translation?.pricing?.plans?.plan_1?.price_1}
          placeHolderVal='Digite aqui o 1º preço do plano'
          maxLengthVal='10'
        />
        <Input
          id='plan_1_price_2'
          labelTitle={'2º preço do plano'}
          setInput={setGetPrice2Plan}
          defaultVal={dataToObj?.translation?.pricing?.plans?.plan_1?.price_2}
          placeHolderVal='Digite aqui o 2º preço do plano'
          maxLengthVal='10'
        />
        <Input
          id='plan_1_price_3'
          labelTitle={'3º preço do plano'}
          setInput={setGetPrice3Plan}
          defaultVal={dataToObj?.translation?.pricing?.plans?.plan_1?.price_3}
          placeHolderVal='Digite aqui o 3º preço do plano'
          maxLengthVal='10'
        />
        <hr className='my-8' />
        <Input
          id='feature_1'
          labelTitle={'1º característica padrão dos planos'}
          setInput={setGetDefaultFeature1}
          defaultVal={dataToObj?.translation?.pricing?.plans?.default_features?.feature_1}
          placeHolderVal='Digite aqui a 1º característica padrão dos planos'
          maxLengthVal='30'
        />
        <Input
          id='feature_2'
          labelTitle={'2º característica padrão dos planos'}
          setInput={setGetDefaultFeature2}
          defaultVal={dataToObj?.translation?.pricing?.plans?.default_features?.feature_2}
          placeHolderVal='Digite aqui a 1º característica padrão dos planos'
          maxLengthVal='30'
        />
        <Input
          id='feature_3'
          labelTitle={'3º característica padrão dos planos'}
          setInput={setGetDefaultFeature3}
          defaultVal={dataToObj?.translation?.pricing?.plans?.default_features?.feature_3}
          placeHolderVal='Digite aqui a 3º característica padrão dos planos'
          maxLengthVal='30'
        />
        <Input
          id='feature_4'
          labelTitle={'4º característica padrão dos planos'}
          setInput={setGetDefaultFeature4}
          defaultVal={dataToObj?.translation?.pricing?.plans?.default_features?.feature_4}
          placeHolderVal='Digite aqui a 4º característica padrão dos planos'
          maxLengthVal='30'
        />
        <Input
          id='feature_5'
          labelTitle={'5º característica padrão dos planos'}
          setInput={setGetDefaultFeature5}
          defaultVal={dataToObj?.translation?.pricing?.plans?.default_features?.feature_5}
          placeHolderVal='Digite aqui a 5º característica padrão dos planos'
          maxLengthVal='30'
        />
        <Input
          id='feature_6'
          labelTitle={'6º característica padrão dos planos'}
          setInput={setGetDefaultFeature6}
          defaultVal={dataToObj?.translation?.pricing?.plans?.default_features?.feature_6}
          placeHolderVal='Digite aqui a 6º característica padrão dos planos'
          maxLengthVal='30'
        />
        <Input
          id='feature_7'
          labelTitle={'7º característica padrão dos planos'}
          setInput={setGetDefaultFeature7}
          defaultVal={dataToObj?.translation?.pricing?.plans?.default_features?.feature_7}
          placeHolderVal='Digite aqui a 7º característica padrão dos planos'
          maxLengthVal='30'
        />
        <hr className='my-8' />
        <Input
          id='feature_1'
          labelTitle={'1º característica customizada do 1º plano'}
          setInput={setGetCustomFeature1}
          defaultVal={dataToObj?.translation?.pricing?.plans?.custom_features?.pricing_1.feature_1}
          placeHolderVal='Digite aqui a 1º característica customizada do 1º plano'
          maxLengthVal='30'
        />
        <Input
          id='feature_3'
          labelTitle={'1º característica customizada do 3º plano'}
          setInput={setGetCustomFeature3}
          defaultVal={dataToObj?.translation?.pricing?.plans?.custom_features?.pricing_3.feature_1}
          placeHolderVal='Digite aqui a 1º característica customizada do 3º plano'
          maxLengthVal='30'
        />
        <hr className='my-8' />
        <Input
          id='button'
          labelTitle={'Texto do botão de compra'}
          setInput={setGetButton}
          defaultVal={dataToObj?.translation?.pricing?.plans?.button}
          placeHolderVal='Digite aqui o texto do botão de compra'
          maxLengthVal='40'
        />

        <SubmitButton />
      </form>
    </>
  );
}
