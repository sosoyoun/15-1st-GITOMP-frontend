import React from "react";
import { Link } from "react-router-dom";
import TitleAnimation from "./TitleAnimation";
import SignIn from "../../Account/SignIn";
import Account from "../../Account/Account";
import github from "./Images/icons8-github-96 (1).png";
import instagram from "./Images/icons8-instagram-104.png";
import facebook from "./Images/icons8-facebook-f-96.png";
import youtube from "./Images/icons8-play-button-96 (1).png";
import "./GitompSection.scss";
class GitompSection extends React.Component {
  state = {
    isSignIn: false,
    isSignUp: false,
  };
  openSignUp = () => {
    this.setState({ isSignUp: true });
  };

  openSignIn = () => {
    this.setState({ isSignIn: true });
  };

  closeSign = () => {
    this.setState({ isSignIn: false, isSignUp: false });
  };

  logout = () => {
    localStorage.clear();
    alert("로그아웃 완료");
    this.setState({ isSuccessLogin: false });
  };
  render() {
    const snsList = [
      { img: github, alt: "깃허브 링크", url: "github.com" },
      { img: instagram, alt: "인스타그램 링크", url: "instagram.com" },
      { img: facebook, alt: "페이스북 링크", url: "facebook.com" },
      { img: youtube, alt: "유튜브 링크", url: "youtube.com" },
    ];
    const { isSignIn, isSignUp } = this.state;
    return (
      <>
        {isSignIn && (
          <SignIn
            isSignIn={this.state.isSignIn}
            closeSign={this.closeSign}
            name="isSignIn"
          />
        )}
        {isSignUp && (
          <Account
            isSignUp={this.state.isSignUp}
            closeSign={this.closeSign}
            name="isSignUp"
          />
        )}
        <div className="GitompSection">
          <div className="backgroundOutline">
            <div className="pianoImage" />
            <div className="visualTxt">
              <TitleAnimation />
              <hr />
              <p>
                들을수록 진가가 발휘되는 음악, <br />내 삶의 배경음악이 되는
                음악을 선사하겠습니다.
              </p>
              <div className="buttonOutline">
                {!localStorage.getItem("TOKEN") && (
                  <button
                    id="loginButton"
                    onClick={this.openSignIn}
                    name="isSignIn"
                  >
                    LOG IN
                  </button>
                )}

                {!localStorage.getItem("TOKEN") ? (
                  <button
                    className="signinButton"
                    onClick={this.openSignUp}
                    name="isSignUp"
                  >
                    <span>REGISTER</span>
                  </button>
                ) : (
                  <button className="signinButton" onClick={this.logout}>
                    <span>LOGOUT</span>
                  </button>
                )}
              </div>
              <div className="snsOutline">
                {snsList.map((el, index) => {
                  return (
                    <div className="snsLink" key={index}>
                      <img src={el.img} alt={el.alt} />
                      <Link to={el.url} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default GitompSection;
