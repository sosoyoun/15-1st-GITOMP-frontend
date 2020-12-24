import React, { Component } from "react";
import "./CommuityHeadTitle.scss";

class CommuityHeadTitle extends Component {
  render() {
    return (
      <div className="CommuityHeadTitle">
        <img src="/images/gitomp_bg.jpg" alt="bgimg" />
        <div className="TitleAnimation">
          <h2>
            <span>C</span>
            <span>O</span>
            <span>M</span>
            <span>M</span>
            <span>U</span>
            <span>N</span>
            <span>I</span>
            <span>T</span>
            <span>Y</span>
          </h2>
          <span className="title_sub">깃톰프뮤직의 소식을 받아보세요</span>
        </div>
      </div>
    );
  }
}

export default CommuityHeadTitle;
