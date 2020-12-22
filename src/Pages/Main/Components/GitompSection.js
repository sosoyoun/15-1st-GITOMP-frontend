import React from "react";
import { Link } from "react-router-dom";
import TitleAnimation from "./TitleAnimation";
import github from "./Images/icons8-github-96 (1).png";
import instagram from "./Images/icons8-instagram-104.png";
import facebook from "./Images/icons8-facebook-f-96.png";
import youtube from "./Images/icons8-play-button-96 (1).png";
import "./GitompSection.scss";

class GitompSection extends React.Component {
  render() {
    const snsList = [
      { img: github, alt: "깃허브 링크", url: "github.com" },
      { img: instagram, alt: "인스타그램 링크", url: "instagram.com" },
      { img: facebook, alt: "페이스북 링크", url: "facebook.com" },
      { img: youtube, alt: "유튜브 링크", url: "youtube.com" },
    ];

    return (
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
              <button id="loginButton">LOG IN</button>
              <button className="signinButton">
                <span>REGISTER</span>
              </button>
            </div>
            <div className="snsOutline">
              {snsList.map((el) => {
                return (
                  <div className="snsLink">
                    <img src={el.img} alt={el.alt} />
                    <Link to={el.url} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default GitompSection;
