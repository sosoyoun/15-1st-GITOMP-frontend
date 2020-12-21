import React, { Component } from "react";
import "./AlbumDetail.scss";

class AlbumDetail extends Component {
  state = {
    albumList: [],
  };
  componentDidMount() {
    fetch(`http://192.168.219.191:8000/albums/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ albumList: res }));
  }
  goToMain = () => {
    this.props.history.push(`/albumList/`);
  };
  render() {
    console.log(this.props);
    console.log(this.state);
    const {
      artist,
      description,
      description_detail,
      genre,
      image_url,
      next_album,
      playlinks,
      release_date,
      release_type,
      song,
      title,
    } = this.state.albumList;
    return (
      <div className="AlbumDetail">
        <div className="container">
          <div className="headtitle">
            <img src="" alt="bgimg" />
            <h2>AlbumList</h2>
            <span>깃톰프뮤직의 음악에 매료되어보세요.</span>
          </div>
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
              <p>{song}</p>
              <p>{description_detail}</p>
            </div>
          </article>
          <div className="content_prevnext">
            <dl className="bbottom">
              <dt className="prev" onClick={this.goToBack}>
                이전 글 ▲
              </dt>
              <dd>{} </dd>
            </dl>
            <dl>
              <dt className="next" onClick={this.goToNext}>
                다음 글 ▼
              </dt>
              <dd>{}</dd>
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
