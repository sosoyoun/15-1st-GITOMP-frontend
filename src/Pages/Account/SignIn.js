import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../Account/SignIn.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    nickname: "",
    checkId: false,
    checkPassword: false,
  };
  //백엔드 로그인 정보 가져오기
  fetchLogin = () => {
    fetch("http://192.168.219.191:8000/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.TOKEN) {
          localStorage.setItem("TOKEN", res.TOKEN);
          console.log(res.TOKEN);
        }
      })
      .catch((error) => {
        localStorage.setItem("TOKEN", "통신불가");
        console.log("통신불가");
      });
  };

  signIn = () => {
    const { checkId, checkPassword } = this.state;
    if (checkId && checkPassword) {
      this.fetchLogin();
    }
  };

  handleIdPasswordInput = (e) => {
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
    this.setState({
      checkId: email.includes("@"),
      checkPassword: password.length >= 8,
    });
  };

  render() {
    const { checkId, checkPassword } = this.state;
    const { closeSign } = this.props;
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
              onChange={this.handleIdPasswordInput}
              required
            />
            {checkId ? (
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
              onChange={this.handleIdPasswordInput}
              required
            />
            {checkPassword ? (
              <FontAwesomeIcon className="facheck check2" icon={faCheck} />
            ) : (
              <FontAwesomeIcon className="fatimes times2" icon={faTimes} />
            )}
          </form>

          <div className="box-area">
            <button className="send" onClick={this.signIn}>
              로그인
            </button>
            <button className="close" onClick={closeSign}>
              닫기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
