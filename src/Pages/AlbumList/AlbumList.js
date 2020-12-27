import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, withRouter } from "react-router-dom";
import AlbumCard from "./AlbumCard";
import AlbumHeadTitle from "./AlbumHeadTitle";
import "./AlbumList.scss";

class AlbumList extends Component {
  state = {
    offset: 0,
    perPage: 10,
    currentPage: 1,
    albumList: [],
    filterAlbumList: [],
    selectYear: "2020",
    selectGenre: "",
    selectKey: "?",
    searchInput: "",
    isLoading: false,
  };

  componentDidMount() {
    fetch(`http://192.168.219.191:8000`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          albumList: res.albums,
        });
      });
  }

  componentDidUpdate(prevProps, _) {
    if (prevProps.match.params !== this.props.match.params) {
      fetch(`http://192.168.219.191:8000/albums?page=${this.state.currentPage}`)
        .then((res) => res.json())
        .then((res) =>
          this.setState({ albumList: res.albums }, window.scroll(0, 0))
        );
    }
  }

  searchInfo = (e) => {
    const { selectYear, selectGenre, selectKey, searchInput } = this.state;
    e.preventDefault();
    this.setState({ isLoading: true });

    fetch(
      `http://192.168.219.191:8000/albums?&page=1&year=${selectYear}&genre=${selectGenre}&search_key=${selectKey}&search=${searchInput}
        `
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({ albumList: res.albums });
      })
      .catch((error) => {
        console.log("에러발생!");
      });
  };

  moveToPages = (e) => {
    this.setState({ currentPage: e.target.name });
    this.props.history.push(`/albumList/${e.target.name}`);
  };

  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { albumList, currentPage } = this.state;
    return (
      <div className="AlbumList">
        <div className="container">
          <AlbumHeadTitle />
          <section className="notice_info">
            <form
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <select
                className="select_year"
                name="selectYear"
                onChange={this.handleInputChange}
              >
                <option value="">연도</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
              </select>
              <select
                className="select_menu"
                name="selectGenre"
                onChange={this.handleInputChange}
              >
                <option>장르</option>
                <option value="classic">Classical</option>
                <option value="jazz">Jazz</option>
                <option value="newage">Newage</option>
                <option value="worldmusic">WorldMusic</option>
                <option value="pop">POP</option>
              </select>
              <select
                tabIndex="1"
                name="selectKey"
                onChange={this.handleInputChange}
              >
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
                <FontAwesomeIcon
                  className="fa_search"
                  icon={faSearch}
                  onClick={this.searchInfo}
                />
              </button>
            </form>
          </section>
          <main className="album_List">
            <ul>
              <AlbumCard albumList={albumList} />
            </ul>
          </main>
          <div className="pages_number">
            <Link
              className={currentPage === "1" ? "on" : ""}
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
      </div>
    );
  }
}

export default withRouter(AlbumList);
