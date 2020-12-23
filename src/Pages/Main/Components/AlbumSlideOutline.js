import React from "react";
import AlbumContentsTable from "./AlbumContentsTable";
import albumCoverImg from "./Images/album_img.jpg";
import discImg from "./Images/album_cd.png";
import "./AlbumSlideOutline.scss";

class AlbumSlideOutline extends React.Component {
  render() {
    return (
      <div className="AlbumSlideOutline">
        <div className="cover album">
          <img src={discImg} className="discImg" alt="디스크" />
          <img src={albumCoverImg} className="albumCoverImg" alt="앨범 커버" />
        </div>
        <div className="cover contents">
          <AlbumContentsTable />
        </div>
      </div>
    );
  }
}

export default AlbumSlideOutline;
