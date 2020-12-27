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
          {localStorage.getItem("NICKNAME") ? (
            <span>{localStorage.getItem("NICKNAME")} 님</span>
          ) : (
            <span>로그인을 해주세요</span>
          )}
        </p>
      </div>
    );
  }
}

export default Nickname;
