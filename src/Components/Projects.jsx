import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

import Swiper1 from "../assets/swiper1.jpg";
import Swiper2 from "../assets/swiper2.jpg";
import Swiper3 from "../assets/swiper3.jpg";
import Swiper4 from "../assets/swiper4.jpg";
import Swiper5 from "../assets/swiper5.jpg";
import Swiper6 from "../assets/swiper6.jpg";
import Swiper7 from "../assets/swiper7.jpg";
import Swiper8 from "../assets/swiper8.jpg";
import Swiper9 from "../assets/swiper9.jpg";
import Swiper10 from "../assets/swiper10.jpg";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

export default function Projects() {
  return (
    <div id="projects" className="lg:pt-20">
      <h2
        className="text-2xl lg:text-4xl text-main_dark text-center font-semibold"
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        Projects
      </h2>
      <Swiper
        effect={"coverflow"}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="object-cover h-[300px] w-[200px]"
            src={Swiper1}
            alt={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-[300px] w-[200px]"
            src={Swiper2}
            alt={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-[300px] w-[200px]"
            src={Swiper3}
            alt={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-[300px] w-[200px]"
            src={Swiper4}
            alt={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-[300px] w-[200px]"
            src={Swiper5}
            alt={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-[300px] w-[200px]"
            src={Swiper6}
            alt={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-[300px] w-[200px]"
            src={Swiper7}
            alt={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-[300px] w-[200px]"
            src={Swiper8}
            alt={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-[300px] w-[200px]"
            src={Swiper9}
            alt={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-[300px] w-[200px]"
            src={Swiper10}
            alt={""}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
