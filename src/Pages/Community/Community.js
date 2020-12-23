import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import FreeBoard from "./FreeBoard";
import "../Community/Community.scss";
import { COMMUNITYAPI } from "../../config";
import CommuityHeadTitle from "./CommuityHeadTitle";

class Community extends Component {
  state = {
    freeBoardDate: [],
    searchInput: "",
    currentPage: "1",
    boardCount: "",
    category: "1",
    key: "1",
  };

  componentDidMount() {
    fetch(COMMUNITYAPI)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          freeBoardDate: res.boards,
          boardCount: res.board_count,
        })
      );
  }

  componentDidUpdate(prevProps, _) {
    if (prevProps.match.params !== this.props.match.params) {
      fetch(`${COMMUNITYAPI}?page=${this.state.currentPage}`)
        .then((res) => res.json())
        .then((res) =>
          this.setState({ freeBoardDate: res.boards }, window.scroll(0, 0))
        );
    }
  }

  searchInfo = (e) => {
    const { category, key, searchInput } = this.state;
    e.preventDefault();
    fetch(
      `${COMMUNITYAPI}?&category=${category}&search_key=${key}search=${searchInput}
      `
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({ freeBoardDate: res.boards });
      })
      .catch((error) => {
        console.log("에러발생!");
      });
  };

  goToWrite = () => {
    this.props.history.push(`/boards/write`);
  };

  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  moveToPages = (e) => {
    this.setState({ currentPage: e.target.name });
    this.props.history.push(`/boards?page=${e.target.name}`);
  };

  render() {
    const { freeBoardDate, searchInput, currentPage, boardCount } = this.state;
    const filterBoardDate = freeBoardDate.filter((data) => {
      const regexp = RegExp(searchInput, "gi");
      return data.title.match(regexp);
    });

    return (
      <div className="Community">
        <div className="container">
          <CommuityHeadTitle />
          <section className="notice_info">
            <form
              onChange={(e) => {
                e.preventDefault();
              }}
            >
              <select name="category" onChange={this.handleInputChange}>
                <option value="0">타입</option>
                <option value="1">Review</option>
                <option value="2">Q & A</option>
              </select>
              <select name="key" onChange={this.handleInputChange}>
                <option value="0">전체</option>
                <option value="1">제목</option>
                <option value="2">내용</option>
              </select>
              <input
                type="text"
                placeholder="검색어를 입력해 주세요"
                name="searchInput"
                onChange={this.handleInputChange}
              />
              <button>
                <FontAwesomeIcon className="fa_search" icon={faSearch} />
              </button>
            </form>
            <div className="list_table">
              <p className="total">
                총<span>{boardCount}</span>건
              </p>
              <table>
                <thead>
                  <tr>
                    <th scope="col" className="head_no">
                      No.
                    </th>
                    <th scope="col" className="head_title">
                      제목
                    </th>
                    <th scope="col" className="head_athor">
                      작성자
                    </th>
                    <th scope="col" className="head_when">
                      등록일
                    </th>
                    <th scope="col" className="head_view">
                      조회수
                    </th>
                  </tr>
                </thead>

                <FreeBoard freeBoardDate={filterBoardDate} />
              </table>
              <button onClick={this.goToWrite}>글쓰기</button>
            </div>
            <div className="pages">
              <div className="pages_num">
                <Link
                  className={currentPage == "1" ? "on" : ""}
                  name="1"
                  onClick={this.moveToPages}
                >
                  1
                </Link>
                <Link
                  className={currentPage === "2" ? "on" : ""}
                  onClick={this.moveToPages}
                  name="2"
                >
                  2
                </Link>
                <Link
                  className={currentPage === "3" ? "on" : ""}
                  name="3"
                  onClick={this.moveToPages}
                >
                  3
                </Link>
                <Link
                  className={currentPage === "4" ? "on" : ""}
                  name="4"
                  onClick={this.moveToPages}
                >
                  4
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(Community);
