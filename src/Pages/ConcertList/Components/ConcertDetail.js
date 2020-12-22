import React, { Component } from "react";
import ConcertHeadTitle from "./ConcertHeadTitle";
import "./ConcertDetail.scss";

class ConcertDetail extends Component {
  state = {
    concertList: {},
  };

  // componentDidMount() {
  //   fetch(`http://192.168.219.191:8000/albums/${this.props.match.params.id}`)
  //     .then((res) => res.json())
  //     .then((res) => this.setState({ albumList: res }));
  // }

  // componentDidUpdate(prevProps, _) {
  //   if (prevProps.match.params.id !== this.props.match.params.id) {
  //     fetch(`http://192.168.219.191:8000/albums/${this.props.match.params.id}`)
  //       .then((res) => res.json())
  //       .then((res) => this.setState({ albumList: res }));
  //   }
  // }

  goToMain = () => {
    this.props.history.push(`/concertList/`);
  };

  goToNext = () => {
    this.props.history.push(
      `/concertList/detail/${+this.props.match.params.id + 1}`
    );
    window.scroll(0, 0);
  };

  goToBack = () => {
    this.props.history.push(
      `/concertList/detail/${+this.props.match.params.id - 1}`
    );
    window.scroll(0, 0);
  };

  render() {
    const {
      image_url,
      title,
      open_day,
      phone,
      price,
      reserve,
      place,
      post,
      description_detail,
      next_concert,
      previous_concert,
    } = this.state.concertList;

    return (
      <div className="ConcertDetail">
        <div className="container">
          <ConcertHeadTitle />
          <article>
            <div className="concert_content">
              <img src={image_url} alt="concertImg" />
              <div className="detail_info">
                <div className="concert_title">
                  <h3>{title}</h3>
                </div>
                <dl>
                  <dt>· 일&emsp;&emsp;시 </dt>
                  <dd>: {open_day}</dd>
                </dl>
                <dl>
                  <dt>· 장&emsp;&emsp;소 </dt>
                  <dd>: {place}</dd>
                </dl>
                <dl>
                  <dt>· 티&emsp;&emsp;켓 </dt>
                  <dd>: {price}</dd>
                </dl>
                <dl>
                  <dt>· 예매처 </dt>
                  <dd>: {reserve}</dd>
                </dl>
                <dl>
                  <dt>· 주최 / 문의 </dt>
                  <dd>: {phone} </dd>
                </dl>
              </div>
            </div>
            <div className="concert_profile">
              <p>{post}</p>
              <p>{description_detail}</p>
            </div>
          </article>
          <div className="content_prevnext">
            <dl className="bbottom">
              <dt className="prev" onClick={this.goToBack}>
                이전 글 ▲
              </dt>
              <dd>{next_concert && next_concert.title}</dd>
            </dl>
            <dl>
              <dt className="next" onClick={this.goToNext}>
                다음 글 ▼
              </dt>
              <dd>{previous_concert && previous_concert.title}</dd>
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

export default ConcertDetail;
