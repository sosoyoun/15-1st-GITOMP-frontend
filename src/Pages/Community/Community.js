import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../Community/Community.scss";
import FreeBoard from "./FreeBoard";

class Community extends Component {
  state = {
    freeBoardDate: [],
    searchInput: "",
  };
  componentDidMount() {
    fetch("http://localhost:3003/data/data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          freeBoardDate: res.data,
        });
      });
  }
  goToWrite = () => {
    this.props.history.push(`/Community/write`);
  };
  handleInputChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };
  render() {
    const { freeBoardDate, searchInput } = this.state;
    const filterBoardDate = freeBoardDate.filter((data) => {
      const regexp = RegExp(searchInput, "gi");
      return data.title.match(regexp);
    });
    return (
      <div className="Community">
        <div className="container">
          <div className="headtitle">
            <h2>COMMUNITY</h2>
            <span>깃톰프뮤직의 자유게시판 입니다.</span>
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
            <div className="list-table">
              <p className="total">
                총<span>150</span>건
              </p>
              <table>
                <thead>
                  <tr>
                    <th scope="col" className="col1">
                      No.
                    </th>
                    <th scope="col" className="col2">
                      제목
                    </th>
                    <th scope="col" className="col3">
                      작성자
                    </th>
                    <th scope="col" className="col4">
                      등록일
                    </th>
                    <th scope="col" className="col5">
                      조회수
                    </th>
                  </tr>
                </thead>

                <FreeBoard freeBoardDate={filterBoardDate} />
              </table>
              <button onClick={this.goToWrite}>글쓰기</button>
            </div>
            <div className="pages">
              <div className="pages-num">
                <Link className="on">1</Link>
                <Link to="/">2</Link>
                <Link to="/">3</Link>
                <Link to="/">4</Link>
                <Link to="/">5</Link>
                <Link to="/">6</Link>
                <Link to="/">7</Link>
                <Link to="/">8</Link>
                <Link to="/">9</Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Community;
