import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './home_carousal.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css';

import { Autoplay,EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div className="carousal-container">
    <Swiper
        spaceBetween={700}
        effect={'fade'}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/img7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/img11.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/img6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/img4.jpg" alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="/img/img5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/img6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/img1.jpg" alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
    </>
  );
}
