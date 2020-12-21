import React, { Component } from "react";
import "./SearchBar.scss";
import "../Nav.scss";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  showSearchBox = (e) => {
    document.getElementsByClassName("SearchBar")[0].style.display = "block";
  };

  handleDelete = () => {
    document.getElementsByClassName("SearchBar")[0].style.display = "none";
  };

  render() {
    const { currentSearchWord } = this.state;
    return (
      <>
        <div className="search-bar" onClick={this.showSearchBox}>
          <img src="/images/search-icon_b.png" alt="검색창" />
        </div>
        <div className="SearchBar">
          <form action="" className="search-from">
            <div className="sch_box">
              <input
                type="search"
                id="searchText"
                className="searchText"
                placeholder="Search"
              />
              <button
                type="submit"
                className="btn_submit"
                value={currentSearchWord}
              ></button>
              <button
                className="btn-layerClose"
                type="button"
                onClick={this.handleDelete}
              ></button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default SearchBar;
