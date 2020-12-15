import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/common.scss";
import "../../../styles/reset.scss";

class HamMenu extends Component {
  render() {
    return (
      <>
        <FontAwesomeIcon icon={faBars} size="2x" />
        {/* <li className="item5">
          <label for="" className="ham5">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </label>
        </li> */}
      </>
    );
  }
}

export default HamMenu;
