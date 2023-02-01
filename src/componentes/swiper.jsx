import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

//imagenes
import image1 from "../imagenes/1.jpg"
import image2 from "../imagenes/2.jpg"
import image3 from "../imagenes/3.jpg"
import image4 from "../imagenes/4.jpg"

//import Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MySwiper = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={2}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide> <img src={image1} alt="" /> </SwiperSlide>
      <SwiperSlide> <img src={image2} alt="" /> </SwiperSlide>
      <SwiperSlide> <img src={image3} alt="" /> </SwiperSlide>
      <SwiperSlide> <img src={image4} alt="" /> </SwiperSlide>
      <SwiperSlide> <img src={image4} alt="" /> </SwiperSlide>
      <SwiperSlide> <img src={image4} alt="" /> </SwiperSlide>
      <SwiperSlide> <img src={image4} alt="" /> </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;