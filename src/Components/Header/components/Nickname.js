import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

class Nickname extends Component {
  render() {
    return (
      <div className="Nickname">
        <FontAwesomeIcon
          icon={faUser}
          size="1x"
          className="user-nickname-icon"
        />
        <p>
          <span>{/* {user_nickname} */} 님</span>
        </p>
      </div>
    );
  }
}

export default Nickname;
