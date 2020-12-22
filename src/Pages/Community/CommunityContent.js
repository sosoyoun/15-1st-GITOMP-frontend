import React, { Component } from "react";
import "./CommunityContent.scss";

class CommunityContent extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    fetch(`http://192.168.219.191:8000/boards/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }));
  }

  componentDidUpdate(prevProps, _) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetch(`http://192.168.219.191:8000/boards/${this.props.match.params.id}`)
        .then((res) => res.json())
        .then((res) => this.setState({ data: res }));
    }
  }

  goToMain = () => {
    this.props.history.push(`/boards`);
  };

  goToBack = () => {
    this.props.history.push(
      `/community/boards/${+this.props.match.params.id - 1}`
    );
  };

  goToNext = () => {
    this.props.history.push(
      `/community/boards/${+this.props.match.params.id + 1}`
    );
  };

  render() {
    const {
      title,
      author,
      created_at,
      views,
      content,
      next_board,
      previous_board,
    } = this.state.data;
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
                  <h4>{title}</h4>
                  <div className="subinfo">
                    <ul>
                      <li>
                        <dl>
                          <dt>날짜 :</dt>
                          <dd>{created_at}</dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>조회수 :</dt>
                          <dd>{views}</dd>
                        </dl>
                      </li>

                      <li>
                        <dl>
                          <dt>작성자 :</dt>
                          <dd>{author}</dd>
                        </dl>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content_view">{content}</div>
                <div className="content_reply"></div>
                <div className="content_prevnext">
                  <dl className="bbottom">
                    <dt className="prev" onClick={this.goToBack}>
                      이전 글 ▲
                    </dt>
                    <dd>{previous_board?.title}</dd>
                  </dl>
                  <dl>
                    <dt className="next" onClick={this.goToNext}>
                      다음 글 ▼
                    </dt>
                    <dd>{next_board?.title}</dd>
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
