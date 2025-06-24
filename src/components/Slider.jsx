import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useWidth } from '../hooks/useWidth';
export default function Slider({ items = [], delay = 4000,slidesPerViewDestop,slidesPerViewTablet,slidesPerViewMobile }) {
  const width = useWidth()
  let slidesPerView
  if (width >= 1024)
  {
    slidesPerView= slidesPerViewDestop
  }
  else if (width < 1024 && width >=768)
  {
    slidesPerView=slidesPerViewTablet
  }
  else 
    {
      slidesPerView= slidesPerViewMobile
    }
  return (
    <Swiper 
      modules={[Autoplay]}
      autoplay={{ delay, disableOnInteraction: false }}
      speed={2000}
      loop={items.length > slidesPerView}
      slidesPerView={slidesPerView}
      spaceBetween={30}
      
      // breakpoints={{
      //   1024: {
      //     slidesPerView: 3,
      //   },
      //   640: {
      //     slidesPerView: 2,
      //   },
       
      //   320: {
      //     slidesPerView: 1,
      //   },
       
       
      // }}
    
    >
      {items.map((item, index) => (
          <SwiperSlide key={index} >
                 {item}
          </SwiperSlide>
      ))}
    </Swiper>
  )
}
