import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import { SliderFlipPage } from "../SliderFlipCard/page";

export const SliderFlip = () => {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        loop={true}
        pagination={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="flex jusitfy-center items-center  bg-transparent">
          <SliderFlipPage button={"Innova"} video={"https://res.cloudinary.com/djk4q3tys/video/upload/v1702873296/bwvmw8fbtv7ynnzkjmyl.mp4"} />
        </SwiperSlide>
        <SwiperSlide className="flex jusitfy-center items-center  bg-transparent">
          <SliderFlipPage button={"Innova"} video={"https://res.cloudinary.com/djk4q3tys/video/upload/v1702873275/yflfwh08xvhklzotjziz.mp4"} />
        </SwiperSlide>
        <SwiperSlide className="flex jusitfy-center items-center  bg-transparent">
          <SliderFlipPage button={"Innova"} video={"https://res.cloudinary.com/djk4q3tys/video/upload/v1702873275/jtmfth6phkaufpbflsko.mp4"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
