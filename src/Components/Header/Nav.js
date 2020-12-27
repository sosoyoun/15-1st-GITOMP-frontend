import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Category from "./components/Category";
import SearchBar from "./SearchBox/SearchBar";
import Nickname from "./components/Nickname";
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
            <Nickname />
            <SearchBar />
            <div
              className="toggle-menu"
              onClick={() => {
                this.props.history.push("HamMenu");
              }}
            >
              <label className="menu-toggle" htmlFor="menu-toggle">
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                <span className="line line-3"></span>
                <span className="line line-4"></span>
              </label>
              <label className="overlay" htmlFor="menu-toggle"></label>
            </div>
          </div>
        </div>
        <Category onSearchBox={handleSearchBox} />
      </div>
    );
  }
}

export default withRouter(Nav);
