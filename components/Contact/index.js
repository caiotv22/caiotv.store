import { useTranslation } from 'react-i18next';
import { BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id='contact' className='py-10 text-base'>
      <div className='default-container'>
        <div className='text-center flex flex-col items-center py-6'>
          <h1 className='text-base'>{t('contact.title')}</h1>
          <Link href='https://wa.me/message/3KMEBBKUNJ4PF1' target='_blank'>
            <button type='button' className='bg-defaultGreen rounded-md py-3 px-12 mt-4'>
              <BsWhatsapp className='inline relative -top-0.5' /> 11 94934-2573
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
