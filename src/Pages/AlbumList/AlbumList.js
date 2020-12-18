import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./AlbumList.scss";

class AlbumList extends Component {
  handleInputChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };
  render() {
    return (
      <div className="AlbumList">
        <div className="container">
          <div className="headtitle">
            <h2>AlbumList</h2>
            <span>깃톰프뮤직의 음악에 매료되어보세요.</span>
          </div>
          <section className="notice-info">
            <form>
              <select name="findType" tabIndex="1">
                <option value="all">전체</option>
                <option value="name">제목</option>
                <option value="content">내용</option>
              </select>
              <input
                type="text"
                placeholder="검색어를 입력해 주세요"
                onChange={this.handleInputChange}
              />
              <button>
                <FontAwesomeIcon className="fa-search" icon={faSearch} />
              </button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default AlbumList;
