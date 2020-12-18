import React, { Component } from "react";
import rightArrow from "./Images/icons8-right-arrow-50.png";
import "./AlbumContentsTable.scss";

var data = [
  {
    artist: "문병곤",
    album: "소주한잔",
    release: "2020-12-15",
    type: "EP",
    detail:
      "술이 한 잔 생각나는 밤. ‘지나 바카우어 국제 아티스트 콩쿠르 한국인 최초 우승자’ 젊은 거장 신창용의 국내 첫 공식 앨범",
  },
];

class AlbumContentsTable extends Component {
  render() {
    return (
      <>
        <div className="AlbumContentsTable">
          <div>
            <p>아티스트</p>
            <div class="vertical-line" />
            <span>{data[0].artist}</span>
          </div>
          <div>
            <p>앨범명</p> <div class="vertical-line" />
            <span>{data[0].album}</span>
          </div>
          <div>
            <p>발매일</p> <div class="vertical-line" />
            <span>{data[0].release}</span>
          </div>
          <div>
            <p>형식</p> <div class="vertical-line" />
            <span>{data[0].type}</span>
          </div>
        </div>
        <div className="albumDetail">{data[0].detail}</div>
        <button className="viewMoreButton">
          <p>VIEW MORE</p>
          <img src={rightArrow} className="arrowImg" alt="화살표" />
        </button>
      </>
    );
  }
}

export default AlbumContentsTable;
