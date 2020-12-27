import React, { Component } from "react";
import "./AlbumDetail.scss";
import AlbumHeadTitle from "./AlbumHeadTitle";

class AlbumDetail extends Component {
  state = {
    albumList: {},
  };
  componentDidMount() {
    fetch(`http://192.168.219.191:8000/albums/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ albumList: res }));
  }

  componentDidUpdate(prevProps, _) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetch(`http://192.168.219.191:8000/albums/${this.props.match.params.id}`)
        .then((res) => res.json())
        .then((res) => this.setState({ albumList: res }));
    }
  }

  goToMain = () => {
    this.props.history.push(`/albumList/`);
  };

  goToNext = () => {
    this.props.history.push(
      `/albumList/detail/${+this.props.match.params.id + 1}`
    );
    window.scroll(0, 0);
  };

  goToBack = () => {
    this.props.history.push(
      `/albumList/detail/${+this.props.match.params.id - 1}`
    );
    window.scroll(0, 0);
  };

  render() {
    const {
      artist,
      description,
      description_detail,
      genre,
      image_url,
      next_album,
      release_date,
      song,
      title,
      previous_album,
    } = this.state.albumList;

    return (
      <div className="AlbumDetail">
        <div className="container">
          <AlbumHeadTitle />
          <article>
            <div className="album_content">
              <img src={image_url} alt="albumImg" />
              <div className="detail_info">
                <div className="album_title">
                  <h3>{title}</h3>
                </div>
                <dl>
                  <dt>· 아티스트 </dt>
                  <dd>: {artist}</dd>
                </dl>
                <dl>
                  <dt>· 앨범명 </dt>
                  <dd>: {title}</dd>
                </dl>
                <dl>
                  <dt>· 발매일 </dt>
                  <dd>: {release_date}</dd>
                </dl>
                <dl>
                  <dt>· 형태 </dt>
                  <dd>: {genre}</dd>
                </dl>
                <div className="album_summary">{description}</div>
                <div className="album_link">
                  <h4>· 음악감상 바로가기</h4>
                  <ul>
                    <li className="melon">
                      <img src="/images/favi-melon.jpg" alt="melon" />
                    </li>
                    <li className="bugs">
                      <img src="/images/favi-bugs.jpg" alt="bugs" />
                    </li>
                    <li className="genie">
                      <img src="/images/favi-genie.jpg" alt="genie" />
                    </li>
                    <li className="flo">
                      <img src="/images/favi-flo.jpg" alt="flo" />
                    </li>
                    <li className="naverm">
                      <img src="/images/favi-naverm.jpg" alt="naverm" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="album_profile">
              <p className="album_profile_songs">{song}</p>
              <p className="album_progile_detail">{description_detail}</p>
            </div>
          </article>
          <div className="content_prevnext">
            <dl className="bbottom">
              <dt className="prev" onClick={this.goToBack}>
                이전 글 ▲
              </dt>
              <dd>{next_album && next_album.title}</dd>
            </dl>
            <dl>
              <dt className="next" onClick={this.goToNext}>
                다음 글 ▼
              </dt>
              <dd>{previous_album && previous_album.title}</dd>
            </dl>
          </div>
        </div>
        <div className="bottom_btn">
          <button onClick={this.goToMain}>목록보기</button>
        </div>
      </div>
    );
  }
}

export default AlbumDetail;
