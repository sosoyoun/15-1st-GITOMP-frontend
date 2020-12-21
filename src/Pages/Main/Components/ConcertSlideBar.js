import React, { Component } from "react";
import SwiperCore, { Scrollbar, A11y, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ConcertContents from "./ConcertContents";
import "./ConcertSlideBar.scss";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Scrollbar, A11y, Navigation]);

class ConcertSlideBar extends Component {
  render() {
    return (
      <div className="ConcertSlideBar">
        <Swiper
          style={{ height: "60%", width: "65%" }}
          spaceBetween={300}
          speed={700}
          slidesPerView={4}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <ConcertContents />
          </SwiperSlide>
          <SwiperSlide>
            <ConcertContents />
          </SwiperSlide>
          <SwiperSlide>
            <ConcertContents />
          </SwiperSlide>
          <SwiperSlide>
            <ConcertContents />
          </SwiperSlide>
          <SwiperSlide>
            <ConcertContents />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}
export default ConcertSlideBar;
