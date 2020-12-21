import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

import "./HamMenu.scss";

class HamMenu extends Component {
  goBack = () => {
    this.props.history.push("./");
  };
  render() {
    return (
      <CSSTransition
        transitionName="toggleMenu"
        transitionAppear={true}
        transitionAppearTimeout={50000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div className="HamMenu">
          <ul className="sub-list">
            <li className="sub-list-one">
              <span>GITOMPMUSIC</span>
            </li>
            <li className="sub-list-two">
              <span>CONCERT</span>
            </li>
            <li className="sub-list-three">
              <span>ARTIST</span>
            </li>
            <li className="sub-list-for">
              <span>ALBUM</span>
            </li>
            <li className="sub-list-fiv">
              <span>COMMUITY</span>
            </li>
            <li className="sub-list-six">
              <span>BUSINESS</span>
            </li>
          </ul>
          <p>기스톰프뮤직 공식채널</p>
          <ul className="sns-icon">
            <li>
              <Link>
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
            <li>
              <Link>
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </li>
            <li>
              <Link>
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
            </li>
            <li>
              <Link>
                <FontAwesomeIcon icon={faBlog} />
              </Link>
            </li>
          </ul>

          <div className="close" onClick={this.goBack}>
            <FontAwesomeIcon icon={faTimesCircle} className="closeIcon" />
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export default HamMenu;
