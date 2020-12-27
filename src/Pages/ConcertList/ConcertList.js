import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ConcertCard from "./ConcertCard";
import ConcertHeadTitle from "./ConcertHeadTitle";
import "./ConcertList.scss";
import { CONCERTAPI, CONCERTAPIPAGE } from "../../config";

class ConcertList extends Component {
  state = {
    currentPage: 1,
    concertList: [],
    filterConcertList: [],
    selectYear: "2019",
    selectKey: "",
    searchInput: "",
  };

  componentDidMount() {
    fetch(CONCERTAPI)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          concertList: res.concert,
        });
      });
  }

  componentDidUpdate(prevProps, _) {
    if (prevProps.match.params !== this.props.match.params) {
      fetch(`${CONCERTAPIPAGE}=${this.state.currentPage}`)
        .then((res) => res.json())
        .then((res) =>
          this.setState({ concertList: res.concert }, window.scroll(0, 0))
        );
    }
  }

  searchInfo = (e) => {
    const { selectYear, selectKey } = this.state;
    e.preventDefault();
    fetch(`${CONCERTAPIPAGE}=1&year=${selectYear}&search_key=${selectKey}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ concertList: res.concert });
      })
      .catch((error) => {
        alert("에러발생!");
      });
  };

  moveToPages = (e) => {
    this.setState({ currentPage: e.target.name });
    this.props.history.push(`/concertList/${e.target.name}`);
    window.scroll(0, 0);
  };

  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { concertList, currentPage, searchInput } = this.state;
    const { handleInputChange, searchInfo, moveToPages } = this;
    const filterconcertList = concertList.filter((data) => {
      const regexp = RegExp(searchInput, "gi");
      return data.title.match(regexp);
    });

    return (
      <div className="ConcerList">
        <div className="container">
          <ConcertHeadTitle />
          <section className="notice_info">
            <form
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <select
                className="select_year"
                name="selectYear"
                onChange={handleInputChange}
              >
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
              </select>
              <select
                tabIndex="1"
                name="selectKey"
                onChange={handleInputChange}
              >
                <option value="0">전체</option>
                <option value="1">제목</option>
                <option value="2">내용</option>
              </select>
              <input
                type="text"
                placeholder="검색어를 입력해 주세요"
                name="searchInput"
                onChange={handleInputChange}
              />
              <button>
                <FontAwesomeIcon
                  className="fa_search"
                  icon={faSearch}
                  onClick={searchInfo}
                />
              </button>
            </form>
          </section>
          <main className="concert_List">
            <ul>
              <ConcertCard concertList={filterconcertList} />
            </ul>
          </main>
          <div className="pages_number">
            <Link
              name="1"
              className={currentPage == "1" ? "on" : ""}
              onClick={moveToPages}
            >
              1
            </Link>
            <Link
              name="2"
              className={currentPage === "2" ? "on" : ""}
              onClick={moveToPages}
            >
              2
            </Link>
            <Link
              name="3"
              className={currentPage === "3" ? "on" : ""}
              onClick={moveToPages}
            >
              3
            </Link>
            <Link
              name="4"
              className={currentPage === "4" ? "on" : ""}
              onClick={moveToPages}
            >
              4
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ConcertList);
