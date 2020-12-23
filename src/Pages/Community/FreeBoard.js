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
            key={data.board_id}
            id={data.board_id}
            title={data.title}
            author={data.author}
            created_at={data.created_at}
            view={data.views}
            category={data.category}
          />
        ))}
      </tbody>
    );
  }
}

export default FreeBoard;
