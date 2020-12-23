import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Category from "./components/Category";
import SearchBar from "./SearchBox/SearchBar";
import "./Nav.scss";

class Nav extends Component {
  render() {
    const { handleSearchBox } = this;
    return (
      <div className="Nav bottom">
        <div className="Nav-top">
          <Link to="/">
            <img src="/images/logo.gif" alt="GITOMP" />
          </Link>
          <div className="right-icon">
            <div className="login_user-nickname">
              <FontAwesomeIcon
                icon={faUser}
                size="1x"
                className="user-nickname-icon"
              />
              <p>
                <span>{/* {user_nickname} */}기톰프 님</span>
              </p>
            </div>
            <SearchBar />
            <div
              className="toggle-menu"
              onClick={() => {
                this.props.history.push("HamMenu");
              }}
            >
              <label className="menu-toggle" for="menu-toggle">
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                <span className="line line-3"></span>
                <span className="line line-4"></span>
              </label>
              <label className="overlay" for="menu-toggle"></label>
            </div>
          </div>
        </div>
        <Category onSearchBox={handleSearchBox} />
      </div>
    );
  }
}

export default withRouter(Nav);
