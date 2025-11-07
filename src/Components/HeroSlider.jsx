import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; 
import H1 from '../assets/img1.jfif'
import H2 from '../assets/download.jfif'
import H3 from '../assets/img 3.jfif'
import H4 from '../assets/img 4.jfif'
import H5 from '../assets/img 5.jfif'
import H6 from '../assets/img 6.jfif'
const HeroSlider = () => {
    return (
        <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop={true} 
        onSlideChange={() => console.log()}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img src={H1} alt="" className='w-full h-[250px] object-cover' /></SwiperSlide>
        <SwiperSlide><img src={H2} alt="" className='w-full h-[250px] object-cover' /></SwiperSlide>
        <SwiperSlide><img src={H3} alt="" className='w-full h-[250px] object-cover' /></SwiperSlide>
        <SwiperSlide><img src={H4} alt="" className='w-full h-[250px] object-cover' /></SwiperSlide>
        <SwiperSlide><img src={H5} alt="" className='w-full h-[250px] object-cover' /></SwiperSlide>
        <SwiperSlide><img src={H6} alt="" className='w-full h-[250px] object-cover' /></SwiperSlide>
      </Swiper>
    </div>
  );
};
export default HeroSlider;