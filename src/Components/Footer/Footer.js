import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="ft">
          <h1 className="foot_logo">
            <img src="/images/logo.png" alt="logo" />
          </h1>
          <div className="f_in">
            <nav>
              <ul>
                <li>
                  <a href="/stomp/about.php">회사소개</a>
                </li>
                <li>
                  <a href="/bbs/?so_table=notice">공지사항</a>
                </li>
                <li>
                  <a href="/sub/privacy.php">개인정보처리방침</a>
                </li>
              </ul>
            </nav>
            <ul className="f_contact">
              <li>(주) 깃톰프뮤직</li>
              <li>사업자등록번호 : 000-01-12345</li>
              <li>대표 : 위코두 </li>
              <li>서울특별시 강남구 테헤란로 위워크타워 선릉 2호점 </li>
              <li>TEL : 02-0001-0002 </li>
              <li>E-MAIL : info@gitompmusic.com</li>
            </ul>
            <p className="copy">
              2015 © <span>GITOMP MUSIC.</span> All rights reserved.
            </p>
          </div>
          <ul className="f_sns sns_link">
            <li>
              <Link to="./images/awd_mark.png" target="_blank">
                <span>
                  <img
                    src="/images/sns_insta.png"
                    alt="스톰프뮤직 인스타그램"
                  />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/images/awd_mark.png" target="_blank">
                <span>
                  <img src="/images/sns_youtb.png" alt="스톰프뮤직 유투브" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="https://www.facebook.com/STOMPclassNameIC/"
                target="_blank"
              >
                <span>
                  <img
                    src="/images/sns_facebook.png"
                    alt="스톰프뮤직 페이스북"
                  />
                </span>
              </Link>
            </li>
            <li>
              <Link to="https://blog.naver.com/stomp442" target="_blank">
                <span>
                  <img src="/images/sns_blog.png" alt="스톰프뮤직 블로그" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
export default Footer;
