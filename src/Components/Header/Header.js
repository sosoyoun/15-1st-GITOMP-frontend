import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-regular-svg-icons";
// import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import HamMenu from "./components/HamMenu";
import Category from "./components/Category";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="Header bottom">
        <div className="Nav-top">
          <Link to="/">
            <img src="./images/logo.gif" alt="GITOMP" />
          </Link>
          <div className="right-icon">
            <div className="search-bar">
              <img src="./images/search-icon.png" alt="검색창" />
            </div>
            <HamMenu />
          </div>
        </div>

        <Category />
      </div>
    );
  }
}

export default Header;
