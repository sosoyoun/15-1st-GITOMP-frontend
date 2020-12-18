import React from "react";
import guitar from "./Images/icons8-guitar-96.png";
import saxophone from "./Images/icons8-saxophone-96.png";
import piano from "./Images/icons8-piano-96.png";
import maracas from "./Images/icons8-maracas-100.png";
import recordIcon from "./Images/icons8-cymbals-100.png";
import albumCoverImg from "./Images/album_img.jpg";
import discImg from "./Images/album_cd.png";
import AlbumContentsTable from "./AlbumContentsTable";
import endIcon from "./Images/icons8-end-96.png";
import startIcon from "./Images/icons8-skip-to-start-96.png";
import "./AlbumSection.scss";

class AlbumSection extends React.Component {
  render() {
    return (
      <>
        <div class="backgroundLine">
          <span className="grayBackground" />
          <span className="grayBackground" />
          <span className="grayBackground" />
          <span />
          <span />
        </div>
        <div className="AlbumSection">
          <div className="albumSectionOutline">
            <h2>ALBUM</h2>
            <div className="iconsOutline">
              {/*컴포넌트화하고 map과 toggle 기능 사용 예정 */}
              <div className="albumIcon">
                <img src={guitar} alt="기타" />
                <p>Classical</p>
              </div>
              <div className="albumIcon">
                <img src={saxophone} alt="색소폰" />
                <p>Jazz</p>
              </div>
              <div className="albumIcon">
                <img src={piano} alt="피아노" />
                <p>Newage</p>
              </div>
              <div className="albumIcon">
                <img src={maracas} alt="마라카스" />
                <p>World Music</p>
              </div>
              <div className="albumIcon">
                <img src={recordIcon} alt="레코드" />
                <p>POP</p>
              </div>
            </div>
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
