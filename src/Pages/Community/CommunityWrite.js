import React, { Component } from "react";
import "./CommunityWrite.scss";

class CommunityWrite extends Component {
  state = {
    write_title: "",
    write_content: "",
    write_nickName: "",
    write_token: "",
  };
  handleTitleInput = (e) => {
    this.setState({ write_title: e.target.value });
  };
  handleTextArea = (e) => {
    this.setState({ write_content: e.target.value });
  };
  pushDataAndOut = () => {
    this.postWriteData();
    this.props.history.push(`/Community`);
  };
  postWriteData = () => {
    fetch("http://192.168.219.191:8000/users/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        write_title: this.state.write_title,
        write_content: this.state.write_content,
        write_nickName: this.state.write_nickName,
        write_token: this.state.write_token,
      }),
    })
      .then((res) => {
        console.log(res.json());
      })
      .catch((error) => {
        console.log("통신불가");
      });
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
                  <input
                    placeholder="제목을 입력해 주세요."
                    onChange={this.handleTitleInput}
                  />
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
                <button onClick={this.pushDataAndOut}>게시물 등록</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default CommunityWrite;
