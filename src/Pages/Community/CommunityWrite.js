import React, { Component } from "react";
import "./CommunityWrite.scss";
import { COMMUNITYAPI } from "../../config";

class CommunityWrite extends Component {
  state = {
    write_title: "",
    write_content: "",
    write_category: "review",
    write_token: "",
  };

  postWriteData = () => {
    const { write_content, write_title, write_category } = this.state;
    if (write_content && write_title) {
      fetch(COMMUNITYAPI, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: localStorage.getItem("TOKEN"),
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

  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  goToMain = () => {
    this.props.history.push(`/boards`);
  };
  render() {
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
                    <select
                      name="write_category"
                      onChange={this.handleInputChange}
                    >
                      <option value="review">Review</option>
                      <option value="qna">Q & A</option>
                    </select>
                    <input
                      name="write_title"
                      placeholder="제목을 입력해 주세요."
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="subinfo">
                    <ul>
                      <li>
                        <dl>
                          <dt>작성자 :</dt>
                          <dd>{localStorage.getItem("NICKNAME")}</dd>
                        </dl>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content_view">
                  <textarea
                    name="write_content"
                    onChange={this.handleInputChange}
                  ></textarea>
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
