import React, { Component } from "react";
import rightArrow from "./Images/icons8-right-arrow-50.png";
import "./AlbumContentsTable.scss";

class AlbumContentsTable extends Component {
  render() {
    const { albumData } = this.props;
    return (
      <>
        {albumData.map((el) => {
          return (
            <>
              <div className="AlbumContentsTable">
                <div>
                  <p>아티스트</p>
                  <div class="vertical-line" />
                  <span>{el.artist}</span>
                </div>
                <div>
                  <p>앨범명</p> <div class="vertical-line" />
                  <span>{el.album}</span>
                </div>
                <div>
                  <p>발매일</p> <div class="vertical-line" />
                  <span>{el.release}</span>
                </div>
                <div>
                  <p>형식</p> <div class="vertical-line" />
                  <span>{el.type}</span>
                </div>
              </div>
              <div className="albumDetail">{el.detail}</div>
            </>
          );
        })}

        <button className="viewMoreButton">
          VIEW MORE
          <img src={rightArrow} className="arrowImg" alt="화살표" />
        </button>
      </>
    );
  }
}

export default AlbumContentsTable;
