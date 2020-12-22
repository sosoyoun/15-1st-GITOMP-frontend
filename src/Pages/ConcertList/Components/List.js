import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./List.scss";

class List extends Component {
  goToDetail = () => {
    this.props.history.push(
      `/concertList/detail/${this.props.match.params.concert_id}`
    );
  };

  render() {
    const {
      id,
      title,
      post_url,
      date_performance,
      location,
      date_ticketing,
    } = this.props;
    console.log(this.props);
    return (
      <li className="List" key={id}>
        <img src={post_url} alt="concertImg" />
        <div className="concert_info">
          <dd className="concert_title">{title}</dd>
          <dd className="concert_info">
            <div className="concert_subinfo">
              <dl>
                <dd>
                  · 일시 : <span>{date_performance}</span>
                </dd>
              </dl>
              <dl>
                <dd>
                  · 장소 : <span>{location}</span>
                </dd>
              </dl>
              <dl>
                <dd>
                  · 티켓 : <span>{date_ticketing}</span>
                </dd>
              </dl>
            </div>
            <Link
              to={{
                pathname: `/concertList/detail/${id}`,
              }}
            >
              <button>
                <span> VIEW MORE </span>
              </button>
            </Link>
          </dd>
        </div>
      </li>
    );
  }
}

export default withRouter(List);
