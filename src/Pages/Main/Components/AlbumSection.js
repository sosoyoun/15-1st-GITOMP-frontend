import React from "react";
import BackgroundLine from "./BackgroundLine";
import IconsContainer from "./IconsContainer";
import AlbumSlideOutline from "./AlbumSlideOutline";
import SwiperCore, { Scrollbar, A11y, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import endIcon from "./Images/icons8-end-96.png";
// import startIcon from "./Images/icons8-skip-to-start-96.png";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./AlbumSection.scss";

SwiperCore.use([Scrollbar, A11y, Navigation]);

class AlbumSection extends React.Component {
  render() {
    return (
      <>
        <div className="AlbumSection">
          <BackgroundLine />
          <div className="albumSectionOutline">
            <h2>ALBUM</h2>
            <IconsContainer />
            {/* 네비게이션 바 수정 후 대체 예정 */}
            {/* <span className="swiperButton backward">
              <img src={startIcon} alt="처음 아이콘" />
            </span>
            <span className="swiperButton forward">
              <img src={endIcon} alt="끝 아이콘" />
            </span> */}
            <Swiper
              style={{ height: "80%", width: "65%" }}
              spaceBetween={300}
              speed={700}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              <SwiperSlide>
                <AlbumSlideOutline />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </>
    );
  }
}
export default AlbumSection;
