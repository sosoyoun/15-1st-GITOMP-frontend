import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./Category.scss";

class Category extends Component {
  render() {
    return (
      <div id="Category">
        <div className="nav-bg">
          <span></span>
        </div>
        <ul className="Nav-category">
          <li>
            <Link to="/Nav">GITOMPMUSIC</Link>
            <div className="Nav-sub-category">
              <ul className="sub-box"></ul>
              <li></li>
              <li>
                GITOMP 소개
                {/* <FontAwesomeIcon icon={faAngleRight} size="1x" /> */}
              </li>
              <li>
                연혁
                {/* <FontAwesomeIcon icon={faAngleRight} size="1x" /> */}
              </li>
              <li>
                오시는길
                {/* <FontAwesomeIcon icon={faAngleRight} size="1x" /> */}
              </li>
            </div>
          </li>
          <li>
            <Link to="/Nav">CONCERT</Link>
            <div className="Nav-sub-category">
              <li>{/* CategoryImg */}</li>
              <li>
                2021
                {/* <FontAwesomeIcon icon={faAngleRight} size="1x" /> */}
              </li>
              <li>
                2020
                {/* <FontAwesomeIcon icon={faAngleRight} size="1x" /> */}
              </li>
              <li>
                2019
                {/* <FontAwesomeIcon icon={faAngleRight} size="1x" /> */}
              </li>
              <li>
                2018
                {/* <FontAwesomeIcon icon={faAngleRight} size="1x" /> */}
              </li>
              <li>
                2017
                {/* <FontAwesomeIcon icon={faAngleRight} size="1x" /> */}
              </li>
              <li>
                2016
                {/* <FontAwesomeIcon icon={faAngleRight} size="1x" /> */}
              </li>
              <li>
                2015
                {/* <FontAwesomeIcon icon={faAngleRight} size="1x" /> */}
              </li>
              <li>
                2015이전
                {/* <FontAwesomeIcon icon={faAngleRight} size="1x" /> */}
              </li>
            </div>
          </li>
          <li>
            <Link to="/Nav">ARTIST</Link>
            <div className="Nav-sub-category">
              <li>{/* CategoryImg */}</li>
              <li>
                국내
                {/* <FontAwesomeIcon icon={faAngleRight} size="1x" /> */}
              </li>
              <li>
                해외
                {/* <FontAwesomeIcon icon={faAngleRight} size="1x" /> */}
              </li>
            </div>
          </li>
          <li>
            <Link to="/Nav">ALBUM</Link>
            <div className="Nav-sub-category">
              <li>{/* CategoryImg */}</li>
              <li>BEST</li>
              <li>2021</li>
              <li>2020</li>
              <li>2019</li>
              <li>2018</li>
              <li>2017</li>
              <li>2016</li>
              <li>2015</li>
              <li>2015이전</li>
            </div>
          </li>
          <li>
            <Link to="/Nav">NOTICE</Link>
            <div className="Nav-sub-category">
              <li>{/* CategoryImg */}</li>
              <li>NOTICE</li>
            </div>
          </li>
          <li>
            <Link to="/Nav">BUSINESS</Link>
            <div className="Nav-sub-category">
              <li>{/* CategoryImg */}</li>
              <li>외부공연장</li>
              <li>VIP행사대행</li>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Category;
