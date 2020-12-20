import React, { Component } from "react";
import SwiperCore, { Pagination, Scrollbar, A11y, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import poster from "./Images/post_3.jpg";
import "./ConcertSlideBar.scss";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Pagination, Scrollbar, A11y, Mousewheel]);

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
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div>
              <img src={poster} alt="포스터" />
              <p>쇼팽으로 만나는 겨울나라</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={poster} alt="포스터" />
              <p>쇼팽으로 만나는 겨울나라</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={poster} alt="포스터" />
              <p>쇼팽으로 만나는 겨울나라</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={poster} alt="포스터" />
              <p>쇼팽으로 만나는 겨울나라</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={poster} alt="포스터" />
              <p>쇼팽으로 만나는 겨울나라</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={poster} alt="포스터" />
              <p>쇼팽으로 만나는 겨울나라</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}
export default ConcertSlideBar;
