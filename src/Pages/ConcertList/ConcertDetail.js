import React, { Component } from "react";
import ConcertHeadTitle from "./ConcertHeadTitle";
import "./ConcertDetail.scss";
import { CONCERTAPI } from "../../config";
class ConcertDetail extends Component {
  state = {
    concertList: {},
  };
  componentDidMount() {
    fetch(`${CONCERTAPI}/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ concertList: res }));
  }
  componentDidUpdate(prevProps, _) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetch(`${CONCERTAPI}/${this.props.match.params.id}`)
        .then((res) => res.json())
        .then((res) => this.setState({ concertList: res }));
    }
  }
  goToMain = () => {
    this.props.history.push(`/concertList/`);
    window.scroll(0, 0);
  };
  goToNext = () => {
    this.props.history.push(`/concerts/${+this.props.match.params.id + 1}`);
    window.scroll(0, 0);
  };
  goToBack = () => {
    this.props.history.push(`/concerts/${+this.props.match.params.id - 1}`);
    window.scroll(0, 0);
  };
  render() {
    const {
      thumbnail_url,
      title,
      date_performance,
      location,
      info_detail,
      next_concert,
      previous_concert,
      post_url,
    } = this.state.concertList;
    const { goToBack, goToNext, goToMain } = this;
    return (
      <div className="ConcertDetail">
        <div className="container">
          <ConcertHeadTitle />
          <article>
            <div className="concert_content">
              <img src={thumbnail_url} alt="concertImg" />
              <div className="detail_info">
                <div className="concert_title">
                  <h3>{title}</h3>
                  <div className="border_line"></div>
                </div>
                <dl>
                  <dt>· 일&emsp;&emsp;&emsp;시 </dt>
                  <dd>
                    <span>|</span>
                    {date_performance}
                  </dd>
                </dl>
                <dl>
                  <dt>· 장&emsp;&emsp;&emsp;소 </dt>
                  <dd>
                    <span>|</span>
                    {location}
                  </dd>
                </dl>
                <dl>
                  <dt>· 티&emsp;&emsp;&emsp;켓 </dt>
                  <dd>
                    <span>|</span>
                    센터 문의
                  </dd>
                </dl>
                <dl>
                  <dt>· 예&emsp;매&emsp;처 </dt>
                  <dd>
                    <span>|</span>
                    {location}
                  </dd>
                </dl>
                <dl>
                  <dt>· 주최&nbsp;&nbsp;/&nbsp;&nbsp;문의 </dt>
                  <dd>
                    <span>|</span>
                    위코두
                  </dd>
                </dl>
              </div>
            </div>
            <div className="concert_profile">
              <p className="concert_profile-post">
                상세보기
                <img src={thumbnail_url} alt="img" />
              </p>
              <p className="concert_profile_detail">{info_detail}</p>
            </div>
          </article>
          <div className="content_prevnext">
            <dl className="bottom">
              <dt className="prev" onClick={goToBack}>
                이전글&emsp;&emsp;▲
              </dt>
              <dd>{next_concert && next_concert.title}</dd>
            </dl>
            <span></span>
            <dl>
              <dt className="next" onClick={goToNext}>
                다음글&emsp;&emsp;▼
              </dt>
              <dd>{previous_concert && previous_concert.title}</dd>
            </dl>
          </div>
        </div>
        <div className="bottom_btn">
          <button onClick={goToMain}>목록보기</button>
        </div>
      </div>
    );
  }
}
export default ConcertDetail;
