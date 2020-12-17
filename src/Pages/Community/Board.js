import React, { Component } from "react";
import { Link } from "react-router-dom";

class Board extends Component {
  render() {
    console.log(this.props);
    const { id, title, author, created_at, view } = this.props;
    return (
      <tr>
        <td className="table-number">{id}</td>
        <td className="table-title">
          <Link>{title}</Link>
        </td>
        <td className="table-writer">{author}</td>
        <td className="table-when">{created_at}</td>
        <td className="table-howmany">{view}</td>
      </tr>
    );
  }
}

export default Board;
