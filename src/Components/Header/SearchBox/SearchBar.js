import React, { Component } from "react";
import "../Nav.scss";
import "./SearchBar.scss";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      isSearchShown: false,
    };
  }

  showSearchBox = (e) => {
    this.setState({ isSearchShown: true });
  };

  handleDelete = (e) => {
    this.setState({ isSearchShown: false });
  };

  render() {
    const { currentSearchWord } = this.state;
    const { showSearchBox, handleDelete } = this;

    return (
      <>
        <div className="search-bar" onClick={showSearchBox}>
          <img src="/images/search-icon_b.png" alt="검색창" />
        </div>
        <div
          className={
            this.state.isSearchShown ? "SearchBar searchBarOn" : "SearchBar"
          }
        >
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
                onClick={handleDelete}
              ></button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default SearchBar;
