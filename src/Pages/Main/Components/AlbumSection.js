import React from "react";
import BackgroundLine from "./BackgroundLine";
import AlbumContentsTable from "./AlbumContentsTable";
import IconsContainer from "./IconsContainer";
import albumCoverImg from "./Images/album_img.jpg";
import discImg from "./Images/album_cd.png";
import endIcon from "./Images/icons8-end-96.png";
import startIcon from "./Images/icons8-skip-to-start-96.png";
import "./AlbumSection.scss";

class AlbumSection extends React.Component {
  render() {
    return (
      <>
        <div className="AlbumSection">
          <BackgroundLine />
          <div className="albumSectionOutline">
            <h2>ALBUM</h2>
            <IconsContainer />
            <div className="albumSlideOutline">
              <span className="swiperButton backward">
                <img src={startIcon} alt="처음 아이콘" />
              </span>
              <div className="cover album">
                <img src={discImg} className="discImg" alt="디스크" />
                <img
                  src={albumCoverImg}
                  className="albumCoverImg"
                  alt="앨범 커버"
                />
              </div>
              <div className="cover contents">
                <AlbumContentsTable />
              </div>
              <span className="swiperButton forward">
                <img src={endIcon} alt="끝 아이콘" />
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default AlbumSection;
