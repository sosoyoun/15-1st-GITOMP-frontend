import React, { Component } from "react";
import SwiperCore, { Scrollbar, A11y, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ConcertSlideBar.scss";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Scrollbar, A11y, Navigation]);
class ConcertSlideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concertData: [],
    };
  }
  componentDidMount() {
    fetch(`http://192.168.219.191:8000/concerts/upcomming`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          concertData: res.concerts,
        });
      });
  }
  render() {
    return (
      <div className="ConcertSlideBar">
        <Swiper
          style={{ height: "65%", width: "65%" }}
          spaceBetween={300}
          speed={700}
          slidesPerView={4}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          scrollbar={{ draggable: true }}
        >
          <>
            {this.state.concertData.map((contents, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="ConcertContents">
                    <img src={contents.thumbnail_url} alt="포스터" />
                    <p>{contents.title}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </>
        </Swiper>
      </div>
    );
  }
}
export default ConcertSlideBar;
