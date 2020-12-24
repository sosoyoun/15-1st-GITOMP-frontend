import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Category.scss";

class Category extends Component {
  render() {
    return (
      <div className="Category">
        <ul className="Nav-category-title">
          <li className="sub-plus">
            <Link to="/">GITOMPMUSIC</Link>
            <div className="nav-bg"></div>
            <div className="sub-category sub-one">
              <div className="sub-intro">
                <div className="sub-left-box">
                  <div className="sub-list-left">
                    <strong className="title">GITOMP</strong>
                    <p>기톰프 소개</p>
                  </div>
                  <img
                    src="/images/logo_bg.jpg"
                    alt="GITOMPMUSIC"
                    className="sub-nav-img"
                  />
                </div>
                <ul className="Nav-category-sub sub-line">
                  <li>
                    <span>GITOMP 소개</span>
                  </li>
                  <li>
                    <span>연혁</span>
                  </li>
                  <li>
                    <span>오시는길</span>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </li>
          <li className="sub-plus">
            <Link to="/ConcertList">CONCERT</Link>
            <div className="nav-bg"></div>
            <div className="sub-category sub-two">
              <div className="sub-intro">
                <div className="sub-left-box">
                  <div className="sub-list-left">
                    <strong className="title">CONCERT</strong>
                    <p>콘서트 소개</p>
                  </div>
                  <img
                    src="/images/consert.jpg"
                    alt="콘서트 소개"
                    className="sub-nav-img"
                  />
                </div>
                <ul className="Nav-category-sub sub-add sub-line">
                  <li>
                    <span>2021</span>
                  </li>
                  <li>
                    <span>2020</span>
                  </li>
                  <li>
                    <span>2019</span>
                  </li>
                  <li>
                    <span>2018</span>
                  </li>
                  <li>
                    <span>2017</span>
                  </li>
                  <li>
                    <span>2016</span>
                  </li>
                  <li>
                    <span>2015</span>
                  </li>
                  <li>
                    <span>2015 이전</span>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </li>
          <li className="sub-plus">
            <Link to="/">ARTIST</Link>
            <div className="nav-bg"></div>
            <div className="sub-category sub-thr">
              <div className="sub-intro">
                <div className="sub-left-box">
                  <div className="sub-list-left">
                    <strong className="title">ARTIST</strong>
                    <p>아티스트 소개</p>
                  </div>
                  <img
                    src="/images/artist.jpg"
                    alt="아티스트 소개"
                    className="sub-nav-img"
                  />
                </div>
                <ul className="Nav-category-sub">
                  <li>
                    <span>국내</span>
                  </li>
                  <li>
                    <span>해외</span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="sub-plus">
            <Link to="/AlbumList">ALBUM</Link>
            <div className="nav-bg"></div>
            <div className="sub-category sub-for">
              <div className="sub-intro">
                <div className="sub-left-box">
                  <div className="sub-list-left">
                    <strong className="title">ALBUM</strong>
                    <p>앨범 소개</p>
                  </div>
                  <img
                    src="/images/album.jpg"
                    alt="앨범 소개"
                    className="sub-nav-img"
                  />
                </div>
                <ul className="Nav-category-sub sub-add">
                  <li>
                    <span>BEST</span>
                  </li>
                  <li>
                    <span>2021</span>
                  </li>
                  <li>
                    <span>2020</span>
                  </li>
                  <li>
                    <span>2019</span>
                  </li>
                  <li>
                    <span>2018</span>
                  </li>
                  <li>
                    <span>2017</span>
                  </li>
                  <li>
                    <span>2016</span>
                  </li>
                  <li>
                    <span>2015</span>
                  </li>
                  <li>
                    <span>2015 이전</span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="sub-plus">
            <Link to="/boards">COMMUITY</Link>
            <div className="nav-bg"></div>
            <div className="sub-category sub-fiv">
              <div className="sub-intro">
                <div className="sub-left-box">
                  <div className="sub-list-left">
                    <strong className="title">COMMUITY</strong>
                    <p>커뮤니티</p>
                  </div>
                  <img
                    src="/images/commuity.jpg"
                    alt="COMMUITY"
                    className="sub-nav-img"
                  />
                </div>
                <ul className="Nav-category-sub sub-line">
                  <li>
                    <span>COMMUITY</span>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </li>
          <li className="sub-plus">
            <Link to="/">BUSINESS</Link>
            <div className="nav-bg"></div>
            <div className="sub-category sub-six">
              <div className="sub-intro">
                <div className="sub-left-box">
                  <div className="sub-list-left">
                    <strong className="title">BUSINESS</strong>
                    <p>기톰프의 사업</p>
                  </div>
                  <img
                    src="/images/logo_bg.jpg"
                    alt="스톰프뮤직의 사업"
                    className="sub-nav-img"
                  />
                </div>
                <ul className="Nav-category-sub">
                  <li>
                    <span>외부공연장</span>
                  </li>
                  <li>
                    <span>VIP행사대행</span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Category;
