import React from "react";
import BackgroundLine from "./BackgroundLine";
import SwiperCore, { Scrollbar, A11y, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import SERVER from "../../../config";
import rightArrow from "./Images/icons8-right-arrow-50.png";
// import endIcon from "./Images/icons8-end-96.png";
// import startIcon from "./Images/icons8-skip-to-start-96.png";
import guitar from "./Images/icons8-guitar-96.png";
import saxophone from "./Images/icons8-saxophone-96.png";
import piano from "./Images/icons8-piano-96.png";
import maracas from "./Images/icons8-maracas-100.png";
import recordIcon from "./Images/icons8-cymbals-100.png";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./AlbumSection.scss";

SwiperCore.use([Scrollbar, A11y, Navigation]);

class AlbumSection extends React.Component {
  state = {
    iconList: [
      { img: guitar, alt: "Classic", text: "Classical" },
      { img: saxophone, alt: "Jazz", text: "Jazz" },
      { img: piano, alt: "Newage", text: "Newage" },
      { img: maracas, alt: "WorldMusic", text: "World Music" },
      { img: recordIcon, alt: "POP", text: "POP" },
    ],
    albumData: [],
    resValue: "Classic",
  };

  handleRes = (e) => {
    const { alt } = e.target;
    console.log(alt);

    this.setState({
      resValue: alt,
    });
  };

  //   handleActive = (e) => {
  //  if (this.state.resValue === e.target.alt) {
  //   this.setState({ isSignUp: true });
  // };
  //  }

  //   }

  componentDidMount() {
    fetch(`http://3.36.48.224/albums/main-page`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          albumData: res[this.state.resValue],
        });
      });
  }

  render() {
    const { iconList } = this.state;
    return (
      <>
        <div className="AlbumSection">
          <BackgroundLine />
          <div className="albumSectionOutline">
            <h2>ALBUM</h2>
            <div className="IconsContainer">
              {iconList.map((data, index) => {
                return (
                  <div
                    className="albumIcon"
                    key={index}
                    value={data.alt}
                    onClick={this.handleRes}
                  >
                    <img src={data.img} alt={data.alt} />
                    <p className="albumTitle">{data.text}</p>
                  </div>
                );
              })}
            </div>

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
                {this.state.albumData.map((data) => {
                  return (
                    <SwiperSlide>
                      {/* 기존 "AlbumSlideOutline" 컴포넌트 부분 */}
                      <div className="AlbumSlideOutline">
                        <div className="cover album">
                          <img
                            src={`http://3.36.48.224${data.cd_image_url}`}
                            className="discImg"
                            alt="cd 이미지"
                          />
                          <img
                            src={data.image_url}
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
                              <span className="dataContainer">
                                {data.artist}
                              </span>
                            </div>
                            <div className="artistValue">
                              <p>앨범명</p> <div class="verticalLine" />
                              <span className="dataContainer">
                                {data.title}
                              </span>
                            </div>
                            <div className="artistValue">
                              <p>발매일</p> <div class="verticalLine" />
                              <span className="dataContainer">
                                {data.release_date}
                              </span>
                            </div>
                            <div className="artistValue">
                              <p>형식</p> <div class="verticalLine" />
                              <span className="dataContainer">
                                {data.release_type}
                              </span>
                            </div>
                          </div>
                          <div className="albumDetail">{data.description}</div>
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
