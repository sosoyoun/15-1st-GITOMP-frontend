import React, { Component } from "react";
import poster from "./Images/post_3.jpg";
import "./ConcertContents.scss";

class ConcertContents extends Component {
  render() {
    return (
      <div className="ConcertContents">
        <img src={poster} alt="포스터" />
        <p>쇼팽으로 만나는 겨울나라</p>
      </div>
    );
  }
}
export default ConcertContents;
