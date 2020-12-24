import React from "react";
import "./BackgroundLine.scss";

class BackgroundLine extends React.Component {
  render() {
    return (
      <div className="BackgroundLine">
        <span className="grayBackground" />
        <span className="grayBackground" />
        <span className="grayBackground" />
        <span />
        <span />
      </div>
    );
  }
}

export default BackgroundLine;
