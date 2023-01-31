import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css";

const MySwiper = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={image1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        Slide 3
        <img src={image3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        Slide 4
        <img src={image4} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
