import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { useRouter } from "next/navigation";
import { SliderCard } from "../SliderCard/page";

export const SliderCards = () => {
  const router = useRouter();
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      loop={true}
      className="mySwiper my-10 md:my-0"
    >
      <SwiperSlide className="flex jusitfy-center items-center  bg-transparent">
        <SliderCard video={"https://res.cloudinary.com/djk4q3tys/video/upload/v1702873272/rl72zbk9hs54yfxtj97s.mp4"} button="Transforma" />
      </SwiperSlide>
      <SwiperSlide className="flex jusitfy-center items-center  bg-transparent">
        <SliderCard video={"https://res.cloudinary.com/djk4q3tys/video/upload/v1702873268/lha1bem7ufkjcdocat0g.mp4"} button="Hablemos" />
      </SwiperSlide>
      <SwiperSlide className="flex jusitfy-center items-center  bg-transparent">
        <SliderCard video={"https://res.cloudinary.com/djk4q3tys/video/upload/v1702873257/tpkgings07jqz7lftbgb.mp4"} button="Conéctate" />
      </SwiperSlide>
    </Swiper>
  );
};
