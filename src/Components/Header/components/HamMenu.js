import React, { Component } from "react";
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
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="HamMenu">
        <ul className="sub-list">
          <li className="sub-list-one">
            <Link to="/HamMenu">GITOMPMUSIC</Link>
          </li>
          <li className="sub-list-two">
            <Link to="/concerts">CONCERT</Link>
          </li>
          <li className="sub-list-three">
            <Link to="/HamMenu">ARTIST</Link>
          </li>
          <li className="sub-list-for">
            <Link to="/AlbumList">ALBUM</Link>
          </li>
          <li className="sub-list-fiv">
            <Link to="/boards">COMMUITY</Link>
          </li>
          <li className="sub-list-six">
            <Link to="/HamMenu">BUSINESS</Link>
          </li>
        </ul>
        <p>기톰프뮤직 공식채널</p>
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
    );
  }
}

export default HamMenu;
