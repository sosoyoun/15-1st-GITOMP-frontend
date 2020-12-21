import React, { Component } from "react";
import Board from "./Board";
import "./FreeBoard.scss";

class FreeBoard extends Component {
  render() {
    const { freeBoardDate } = this.props;
    return (
      <tbody className="FreeBoard">
        {freeBoardDate.map((data) => (
          <Board
            key={data.id}
            id={data.id}
            title={data.title}
            author={data.author}
            created_at={data.created_at}
            view={data.view}
          />
        ))}
      </tbody>
    );
  }
}

export default FreeBoard;
