import React from "react";
import "./custom.css";
import { Swiper } from "swiper/react";
import "swiper/css/pagination";
import {
  Pagination,
  // Scrollbar,
  // A11y,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";

export const SlickSlider = ({ children }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 2000,
      }}
      loop={true}
      pagination={{ clickable: true }}
      onSlideChange={() => "slide change"}
      onSwiper={(swiper) => swiper}
    >
      {children}
    </Swiper>
  );
};
