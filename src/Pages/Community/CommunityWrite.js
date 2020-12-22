import React, { Component } from "react";
import "./CommunityWrite.scss";
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.zs60cFZQH0YeZFIZnXTy2Gql8lpGAa3FlUauYpT0iZA";

class CommunityWrite extends Component {
  state = {
    write_title: "",
    write_content: "",
    write_category: "review",
    write_token: "",
  };

  postWriteData = () => {
    const {
      write_content,
      write_title,
      write_token,
      write_category,
    } = this.state;
    if (write_content && write_title) {
      fetch("http://192.168.219.191:8000/boards", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          title: write_title,
          content: write_content,
          category: write_category,
        }),
      })
        .then(() => {
          this.props.history.push(`/boards`);
        })
        .catch((error) => {
          alert("통신불가");
        });
    } else {
      alert("제목과 내용을 입력해 주세요.");
    }
  };

  handleTitleInput = (e) => {
    this.setState({ write_title: e.target.value });
  };

  handleTextArea = (e) => {
    this.setState({ write_content: e.target.value });
  };

  handleCategory = (e) => {
    this.setState({ write_category: e.target.value });
  };

  goToMain = () => {
    this.props.history.push(`/boards`);
  };
  render() {
    console.log(localStorage.Authorization);
    console.log(this.props);
    return (
      <div className="CommunityWrite">
        <div className="container">
          <div className="headtitle">
            <h2>COMMUNITY</h2>
            <span>깃톰프뮤직의 자유게시판 입니다.</span>
          </div>
          <section>
            <div className="content">
              <div className="content_area">
                <div className="content_title">
                  <div className="title">
                    <select onChange={this.handleCategory}>
                      <option value="review">Review</option>
                      <option value="qna">Q & A</option>
                    </select>
                    <input
                      placeholder="제목을 입력해 주세요."
                      onChange={this.handleTitleInput}
                    />
                  </div>

                  <div className="subinfo">
                    <ul>
                      <li>
                        <dl>
                          <dt>작성자 :</dt>
                          <dd>{}</dd>
                        </dl>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content_view">
                  <textarea onChange={this.handleTextArea}></textarea>
                </div>
              </div>
              <div className="bottom_btn">
                <button onClick={this.postWriteData}>게시물 등록</button>
                <button onClick={this.goToMain}>취소</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default CommunityWrite;
