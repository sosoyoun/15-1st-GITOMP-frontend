import React, { Component } from "react";
import "./AlbumHeadTitle.scss";

class AlbumHeadTitle extends Component {
  render() {
    return (
      <div className="AlbumHeadTitle">
        <img src="/images/gitomp_bg.jpg" alt="bgimg" />
        <div className="TitleAnimation">
          <h2>
            <span>A</span>
            <span>l</span>
            <span>b</span>
            <span>u</span>
            <span>m</span>
            <span>L</span>
            <span>i</span>
            <span>s</span>
            <span>t</span>
          </h2>
          <span className="title_sub">깃톰프뮤직의 음악에 매료되어보세요.</span>
        </div>
      </div>
    );
  }
}

export default AlbumHeadTitle;
