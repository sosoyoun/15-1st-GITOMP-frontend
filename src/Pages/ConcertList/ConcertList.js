import React, { Component } from "react";
import "../ConcertList/ConcertList.scss";

class ConcertList extends Component {
  render() {
    return (
      <div className="ConcerList">
        <div className="title">
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
        <div className="searchBox">
          <label For="category">
            <select name="category" id="">
              <option value="2021" selected>
                2021
              </option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}

export default ConcertList;
