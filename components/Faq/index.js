import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';

export default function Faq() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  function Icon({ id, open }) {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className={`${id === open ? ' rotate-270' : 'rotate-30'} absolute top-[26px]  h-5 w-5 transition-transform`}
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path d='M14 0L0 0L7 11L14 0Z' fill='white' />
      </svg>
    );
  }

  return (
    <section id='faq' className='py-10 text-base'>
      <Image
        src='/img/green-light-background.png'
        alt={t('how-it-works.step-by-step-img-alt-1')}
        className='absolute w-1/5 h-[100vh] left-auto right-[0%] max-w-sm max-h-[60rem] -z-50'
        width={200}
        height={100}
      />
      <div className='default-container'>
        <div className='text-center flex flex-col items-center py-6'>
          <h1 className='text-3xl'>{t('faq.title')}</h1>
        </div>
        <div className='md:px-20 lg:px-48 mt-10'>
          <Accordion open={open === 1} animate={customAnimation} icon={''}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              {<Icon id={1} open={open} />}
              <h2 className='ml-8'>{t('faq.questions.question-1')}</h2>
            </AccordionHeader>
            <AccordionBody className='p-8 !opacity-50'>{t('faq.answers.answer-1')}</AccordionBody>
            <hr className='border-slate-400 border-solid border-1 my-5' />
          </Accordion>
          <Accordion open={open === 2} animate={customAnimation} icon={''}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              {<Icon id={2} open={open} />}
              <h2 className='ml-8'>{t('faq.questions.question-2')}</h2>
            </AccordionHeader>
            <AccordionBody className='p-8 mt-4 !opacity-50'>{t('faq.answers.answer-2')}</AccordionBody>
            <hr className='border-slate-400 border-solid border-1 my-5' />
          </Accordion>

          <Accordion open={open === 3} animate={customAnimation} icon={''}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              {<Icon id={3} open={open} />}
              <h2 className='ml-8'>{t('faq.questions.question-3')}</h2>
            </AccordionHeader>
            <AccordionBody className='p-8 mt-4 !opacity-50'>{t('faq.answers.answer-3')}</AccordionBody>
            <hr className='border-slate-400 border-solid border-1 my-5' />
          </Accordion>
          <Accordion open={open === 4} animate={customAnimation} icon={''}>
            <AccordionHeader onClick={() => handleOpen(4)}>
              {<Icon id={4} open={open} />}
              <h2 className='ml-8'>{t('faq.questions.question-4')}</h2>
            </AccordionHeader>
            <AccordionBody className='p-8 mt-4 !opacity-50'>{t('faq.answers.answer-4')}</AccordionBody>
            <hr className='border-slate-400 border-solid border-1 my-5' />
          </Accordion>
          <Accordion open={open === 5} animate={customAnimation} icon={''}>
            <AccordionHeader onClick={() => handleOpen(5)}>
              {<Icon id={5} open={open} />}
              <h2 className='ml-8'>{t('faq.questions.question-5')}</h2>
            </AccordionHeader>
            <AccordionBody className='p-8 mt-4 !opacity-50'>{t('faq.answers.answer-5')}</AccordionBody>
            <hr className='border-slate-400 border-solid border-1 my-5' />
          </Accordion>
        </div>
      </div>
    </section>
  );
}
