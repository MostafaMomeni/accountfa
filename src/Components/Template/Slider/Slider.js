"use client"
import React from 'react';
import style from "./Slider.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';

export default function Slider() {
  return (
    <>
    <div className={style.parent}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={"/Assets/slider-image.jpg"} width={1000} height={400} alt='slider image' className={style.image}/></SwiperSlide>
        <SwiperSlide><Image src={"/Assets/slider-image.jpg"} width={1000} height={400} alt='slider image' className={style.image}/></SwiperSlide>
        <SwiperSlide><Image src={"/Assets/slider-image.jpg"} width={1000} height={400} alt='slider image' className={style.image}/></SwiperSlide>
        <SwiperSlide><Image src={"/Assets/slider-image.jpg"} width={1000} height={400} alt='slider image' className={style.image}/></SwiperSlide>
      </Swiper>
        </div>
    </>
  );
}
