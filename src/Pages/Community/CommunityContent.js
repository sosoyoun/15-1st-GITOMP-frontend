import React, { Component } from "react";
import "./CommunityContent.scss";

class CommunityContent extends Component {
  state = {
    data: {},
  };
  componentDidUpdate(prevProps, _) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetch(
        `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
      )
        .then((res) => res.json())
        .then((res) => this.setState({ data: res }));
    }
  }

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }));
  }
  goToMain = () => {
    this.props.history.push(`/Community`);
  };
  goToBack = () => {
    this.props.history.push(
      `/community/detail/${+this.props.match.params.id - 1}`
    );
  };
  goToNext = () => {
    this.props.history.push(
      `/community/detail/${+this.props.match.params.id + 1}`
    );
  };
  render() {
    console.log(this.state);

    return (
      <div className="CommunityContent">
        <div className="container">
          <div className="headtitle">
            <h2>COMMUNITY</h2>
            <span>깃톰프뮤직의 자유게시판 입니다.</span>
          </div>
          <section>
            <div className="content">
              <div className="content_area">
                <div className="content_title">
                  <h4>{this.state.data.phone}</h4>
                  <div className="subinfo">
                    <ul>
                      <li>
                        <dl>
                          <dt>날짜 :</dt>
                          <dd>{this.state.data.name}</dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>조회수 :</dt>
                          <dd>{this.state.data.phone}</dd>
                        </dl>
                      </li>

                      <li>
                        <dl>
                          <dt>작성자 :</dt>
                          <dd>{this.state.data.username}</dd>
                        </dl>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content_view">{this.state.data.website}</div>
                <div className="content_reply"></div>
                <div className="content_prevnext">
                  <dl className="bbottom">
                    <dt className="prev" onClick={this.goToBack}>
                      이전 글 ▲
                    </dt>
                    <dd>[티켓오픈] 아디오스 피아졸라 라이브 탱고 </dd>
                  </dl>
                  <dl>
                    <dt className="next" onClick={this.goToNext}>
                      다음 글 ▼
                    </dt>
                    <dd>다음글이 없습니다.</dd>
                  </dl>
                </div>
              </div>
              <div className="bottom_btn">
                <button onClick={this.goToMain}>목록보기</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default CommunityContent;
