import React, { Component } from "react";
import "../Footer/Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="ft">
          <h1 className="foot_logo">
            <a href="/">
              <img src="/images/footer_logo.png" alt="logo" />
            </a>
          </h1>
          <div className="f_in">
            <ol>
              <li>위코트 15기</li>
              <li>Frist Project</li>
              <li>GITOMPMUSIC</li>
            </ol>
            <ul className="f_contact">
              <li>
                <span>[ Front-end ]</span>
                <span className="team-name">
                  갓규빈 <b>[ PM ]</b>
                </span>
              </li>
              <li>
                <span>[ Front-end ]</span>
                <span className="team-name">문병곤</span>
              </li>
              <li>
                <span>[ Front-end ]</span>
                <span className="team-name">박소윤</span>
              </li>
              <div className="line">
                <li>
                  <span>[ Back-end ]</span>
                  <span className="team-name">김승재</span>
                </li>
                <li>
                  <span>[ Back-end ]</span>
                  <span className="team-name">최선우</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <ul className="f_sns">
          <li>
            <img src="/images/sns_insta.png" alt="스톰프뮤직 인스타그램" />
          </li>
          <li>
            <img src="/images/sns_youtb.png" alt="스톰프뮤직 유투브" />
          </li>
          <li>
            <img src="/images/sns_facebook.png" alt="스톰프뮤직 페이스북" />
          </li>
          <li>
            <img src="/images/sns_blog.png" alt="스톰프뮤직 블로그" />
          </li>
        </ul>
        <p className="copy">2020 © GITOMP MUSIC . All rights reserved.</p>
      </footer>
    );
  }
}
export default Footer;
