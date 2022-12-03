import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

export default function Description() {
  const { t } = useTranslation();

  function importDir(dir) {
    return dir.keys().map(dir);
  }
  const imgFolder = importDir(require.context('/public/img/carroussel', false, /\.(png|jpe?g|svg)$/));

  SwiperCore.use([Autoplay]);
  return (
    <section id='description' className='py-8 text-base'>
      <div className='default-container'>
        <div className='text-center flex flex-col items-center py-6'>
          <h1 className='text-3xl'>{t('description.title')}</h1>
          <p className='md:w-2/4 mt-3'>{t('description.description')}</p>
        </div>
      </div>
      <Swiper
        slidesPerView='auto'
        spaceBetween={1}
        slidesPerGroup={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1310: {
            slidesPerView: 7,
          },
        }}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
      >
        <div className='flex justify-center overflow-hidden relative'>
          <div className='w-full flex w-max items-center space-x-16'>
            {imgFolder.map((img, i) => {
              return (
                <SwiperSlide key={i}>
                  <div
                    style={{
                      backgroundImage: `url('/img/carroussel/card-${i + 1}.png')`,
                    }}
                    className={`bg-no-repeat bg-cover bg-bottom w-44 h-60 bg-pink-800 rounded-2xl`}
                  />
                </SwiperSlide>
              );
            })}
          </div>
        </div>
      </Swiper>
    </section>
  );
}
