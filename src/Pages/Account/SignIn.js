import React, { Component } from "react";
import "../Account/SignIn.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    nickname: "",
    checkId: false,
    checkPassword: false,
  };
  //백엔드 로그인 정보 가져오기
  fetchLogin = (email, password) => {
    fetch("http://192.168.219.191:8000/data/data.json", {
      method: "POST",
      headers: {
        "Content-Type": "data/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };
  // fetchInfo = () => {
  //   const { checkId, checkPassword } = this.state;
  //   if (checkId && checkPassword) {
  //     postSignUp();
  //   }
  // };
  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => this.isVaildationIdPass()
    );
  };

  isVaildationIdPass = () => {
    const { email, password } = this.state;
    if (email.includes("@")) {
      this.setState({ checkId: true });
    }
    if (password.length >= 6) {
      this.setState({ checkPassword: true });
    }
  };

  render() {
    const isCheckId = this.state.email.includes("@");
    const isCheckPassword = this.state.password.length >= 6;

    return (
      <div className="SignIn">
        <div className="container">
          <div className="head-title">
            <span className="title">GITOMP LOGIN</span>
            <span className="subtitle">
              깃톰프뮤직에 로그인 하세요 ! <br />
            </span>
          </div>
          <form>
            <span>
              이메일 <span className="requried">*</span>
            </span>
            <input
              className="email-input"
              type="text"
              name="email"
              placeholder="이메일을 입력해 주세요."
              onChange={this.handleInput}
              required
            />
            {isCheckId ? (
              <FontAwesomeIcon className="facheck check1" icon={faCheck} />
            ) : (
              <FontAwesomeIcon className="fatimes times1" icon={faTimes} />
            )}

            <span>
              패스워드 <span className="requried">*</span>
            </span>
            <input
              className="email-password"
              type="password"
              name="password"
              placeholder="비밀번호를 입력해 주세요."
              onChange={this.handleInput}
              required
            />
            {isCheckPassword ? (
              <FontAwesomeIcon className="facheck check2" icon={faCheck} />
            ) : (
              <FontAwesomeIcon className="fatimes times2" icon={faTimes} />
            )}
          </form>

          <div className="box-area">
            <button className="send" onSubmit={this.fetchInfo}>
              로그인
            </button>
            <button className="close">닫기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
