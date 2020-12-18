import React, { Component } from "react";
import Board from "./Board";
import "./FreeBoard.scss";

class FreeBoard extends Component {
  render() {
    const { freeBoardDate } = this.props;
    return (
      <tbody>
        {freeBoardDate.map((e) => (
          <Board
            key={e.id}
            id={e.id}
            title={e.title}
            author={e.author}
            created_at={e.created_at}
            view={e.view}
          />
        ))}
      </tbody>
    );
  }
}

export default FreeBoard;
