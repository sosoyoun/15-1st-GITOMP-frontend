import React, { Component } from "react";
import "./List.scss";
import { withRouter } from "react-router-dom";

class List extends Component {
  goToDetail = () => {
    this.props.history.push(`/albumList/detail/${this.props.id}`);
  };
  render() {
    const {
      album_id,
      title,
      image_url,
      artist,
      release_date,
      release_type,
    } = this.props;
    return (
      <li className="List" key={album_id}>
        <img src={image_url} alt="albumImg" />
        <div className="album_info">
          <dd className="album_title">{title}</dd>
          <dd className="album_info">
            <div className="album_subinfo">
              <dl>
                <dd>아티스트 : {artist}</dd>
              </dl>
              <dl>
                <dd>앨범명 : {title}</dd>
              </dl>
            </div>
            <div className="album_subinfo">
              <dl>
                <dd>발매일 : {release_date}</dd>
              </dl>
              <dl>
                <dd>형 태 : {release_type}</dd>
              </dl>
            </div>
            <button onClick={this.goToDetail}>VIEW MORE </button>
          </dd>
        </div>
      </li>
    );
  }
}

export default withRouter(List);
