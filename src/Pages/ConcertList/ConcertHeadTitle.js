import React, { Component } from "react";
import "./ConcertHeadTitle.scss";

class ConcertHeadTitle extends Component {
  render() {
    return (
      <div className="ConcertHeadTitle">
        <img src="/images/gitomp_bg.jpg" alt="bgimg" />
        <div className="TitleAnimation">
          <h2>
            <span>C</span>
            <span>O</span>
            <span>N</span>
            <span>C</span>
            <span>E</span>
            <span>R</span>
            <span>T</span>
          </h2>
          <h3>스톰프뮤직의 공연을 즐겨보세요</h3>
        </div>
      </div>
    );
  }
}

export default ConcertHeadTitle;
