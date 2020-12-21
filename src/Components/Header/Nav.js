import React, { Component } from "react";
import { Link } from "react-router-dom";
import Category from "./components/Category";
import SearchBar from "./SearchBox/SearchBar";
import "./Nav.scss";

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  goToHam = () => {
    this.props.history.push("./HamMenu");
  };

  render() {
    const { userName } = this.state;
    return (
      <div className="Nav bottom">
        <div className="Nav-top">
          <Link to="/">
            <img src="/images/logo.gif" alt="GITOMP" />
          </Link>
          <div className="right-icon">
            <SearchBar />
            {/* <HamMenu />
            <Link to="/components/HamMenu">
              <img src="/images/Ham.png" alt="" className="toggle-menu" />
            </Link> */}
            <div className="toggle-menu" onClick={this.goToHam}>
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
        <Category userName={userName} onSearchBox={this.handleSearchBox} />
      </div>
    );
  }
}

export default Nav;
