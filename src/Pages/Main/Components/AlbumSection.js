import React from "react";
import BackgroundLine from "./BackgroundLine";
import IconsContainer from "./IconsContainer";
import SwiperCore, { Scrollbar, A11y, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import rightArrow from "./Images/icons8-right-arrow-50.png";
// import endIcon from "./Images/icons8-end-96.png";
// import startIcon from "./Images/icons8-skip-to-start-96.png";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./AlbumSection.scss";

SwiperCore.use([Scrollbar, A11y, Navigation]);

class AlbumSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumData: [],
    };
  }
  componentDidMount() {
    fetch("http://192.168.219.191:8000/albums/main-page")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          albumData: res.Classic,
        });
      });
  }

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
              style={{ height: "80%", width: "80%" }}
              spaceBetween={300}
              speed={700}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              <>
                {this.state.albumData.map((el) => {
                  return (
                    <SwiperSlide>
                      {/* 기존 "AlbumSlideOutline" 컴포넌트 부분 */}
                      <div className="AlbumSlideOutline">
                        <div className="cover album">
                          <img
                            src={`http://192.168.219.191:8000${el.cd_image_url}`}
                            className="discImg"
                            alt="cd 이미지"
                          />
                          <img
                            src={el.image_url}
                            className="albumCoverImg"
                            alt="앨범 커버 이미지"
                          />
                        </div>
                        <div className="cover contents">
                          {/* ----- */}

                          {/* 기존 "AlbumContentsTable" 컴포넌트 부분 */}
                          <div className="AlbumContentsTable">
                            <div className="artistValue">
                              <p>아티스트</p>
                              <div class="verticalLine" />
                              <span className="dataContainer">{el.artist}</span>
                            </div>
                            <div className="artistValue">
                              <p>앨범명</p> <div class="verticalLine" />
                              <span className="dataContainer">{el.title}</span>
                            </div>
                            <div className="artistValue">
                              <p>발매일</p> <div class="verticalLine" />
                              <span className="dataContainer">
                                {el.release_date}
                              </span>
                            </div>
                            <div className="artistValue">
                              <p>형식</p> <div class="verticalLine" />
                              <span className="dataContainer">
                                {el.release_type}
                              </span>
                            </div>
                          </div>
                          <div className="albumDetail">{el.description}</div>
                          <button className="viewMoreButton">
                            VIEW MORE
                            <img
                              src={rightArrow}
                              className="arrowImg"
                              alt="화살표"
                            />
                          </button>
                          {/* ----- */}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </>
            </Swiper>
          </div>
        </div>
      </>
    );
  }
}
export default AlbumSection;
