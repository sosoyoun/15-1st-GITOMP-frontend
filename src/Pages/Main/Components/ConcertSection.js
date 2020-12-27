import React from "react";
import BackgroundLine from "./BackgroundLine";
import ConcertSlideBar from "./ConcertSlideBar";
import rightArrow from "./Images/icons8-right-arrow-50.png";
import endIcon from "./Images/icons8-end-96.png";
import startIcon from "./Images/icons8-skip-to-start-96.png";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./ConcertSection.scss";

class ConcertSection extends React.Component {
  render() {
    return (
      <div className="ConcertSection_bg">
        <BackgroundLine>
          <div className="backgroundTxt">
            <p>GITOMPMUSIC</p>
          </div>
        </BackgroundLine>
        <div className="ConcertSection">
          <div className="concertSlideOutline">
            <div className="concertIntroduce">
              <h2>
                UPCOMING <br />
                CONCERT
              </h2>
              <p>깃톰프뮤직의 콘서트를 안내합니다</p>
              <div className="buttonContainer">
                <button className="viewMoreButton">
                  VIEW MORE
                  <img src={rightArrow} className="arrowImg" alt="화살표" />
                </button>
                <span className="swiperButton backward">
                  <img src={startIcon} alt="처음 아이콘" />
                </span>
                <span className="swiperButton forward">
                  <img src={endIcon} alt="끝 아이콘" />
                </span>
              </div>
            </div>
            <ConcertSlideBar />
          </div>
        </div>
      </div>
    );
  }
}
export default ConcertSection;
