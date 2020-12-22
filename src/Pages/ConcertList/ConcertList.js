import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../ConcertList/ConcertList.scss";
import { Link, withRouter } from "react-router-dom";

class ConcertList extends Component {
  render() {
    return (
      <div className="ConcerList">
        <div className="title">
          <img src="/images/gitomp_bg.jpg" alt="bgimg" />
          <div className="concerTitle">
            <h1>
              <span>C</span>
              <span>O</span>
              <span>N</span>
              <span>C</span>
              <span>E</span>
              <span>R</span>
              <span>T</span>
            </h1>
            <h2 className="title_info">
              지금까지의 스톰프뮤직의 콘서트를 즐겨 보세요
            </h2>
          </div>
        </div>
        <div className="container">
          <section className="searchBox">
            <form For="concertYear">
              <select name="concertYear" id="">
                <option value="2021" selected>
                  2021
                </option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2015 이전">2015 이전</option>
              </select>
              <select name="category" id="selectMenu">
                <option value="전체">전체</option>
                <option value="제목">제목</option>
                <option value="내용">내용</option>
              </select>
              <input
                type="text"
                placeholder="검색어를 입력해 주세요"
                name="searchInput"
              />
              <button>
                <FontAwesomeIcon className="fa_Search" icon={faSearch} />
              </button>
            </form>
          </section>
          <main className="concert_list">
            <ul></ul>
          </main>
          <div className="pages_number">
            <Link>1</Link>
            <Link>2</Link>
            <Link>3</Link>
            <Link>4</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ConcertList);
