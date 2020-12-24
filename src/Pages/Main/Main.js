import React, { Component } from "react";
import SwiperCore, { Pagination, Scrollbar, A11y, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import NavBar from "./Components/NavBar";
import GitompSection from "./Components/GitompSection";
import ConcertSection from "./Components/ConcertSection";
import AlbumSection from "./Components/AlbumSection";
import Footer from "../../Components/Footer/Footer";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./Main.scss";

SwiperCore.use([Pagination, Scrollbar, A11y, Mousewheel]);

class Main extends Component {
  render() {
    return (
      <div className="Outline">
        <NavBar />
        <div className="swiper-container">
          <Swiper
            direction={"vertical"}
            style={{ height: "88vh", width: "100%" }}
            spaceBetween={0}
            speed={700}
            mousewheel={true}
            slidesPerView={1}
            pagination={{ clickable: true }}
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
            <SwiperSlide>
              <Footer />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  }
}

export default Main;
