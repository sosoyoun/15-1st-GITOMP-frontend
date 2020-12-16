import React, { Component } from "react";
import GitompSection from "./Components/GitompSection";
import ConcertSection from "./Components/ConcertSection";
import AlbumSection from "./Components/AlbumSection";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "./Main.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class Main extends Component {
  render() {
    return (
      <>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          Mousewheel={true}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <GitompSection />
          </SwiperSlide>
          <SwiperSlide>
            <ConcertSection />
          </SwiperSlide>
          <SwiperSlide>
            <AlbumSection />
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}

export default Main;
