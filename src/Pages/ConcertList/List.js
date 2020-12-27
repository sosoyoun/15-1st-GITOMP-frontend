import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./List.scss";
class List extends Component {
  goToDetail = () => {
    this.props.history.push(`/concerts/${this.props.match.params.id}`);
  };
  render() {
    const {
      concert_id,
      title,
      date_performance,
      post_url,
      thumbnail_url,
    } = this.props;
    return (
      <li className="List" key={concert_id}>
        <img src={thumbnail_url} alt="concertImg" />
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
                  · 장소 : <span>선릉</span>
                </dd>
              </dl>
              <dl>
                <dd>
                  · 티켓 : <span>센터 문의</span>
                </dd>
              </dl>
            </div>
            <Link
              to={{
                pathname: `/concerts/${concert_id}`,
              }}
            >
              <button onClick={this.goToDetail}>
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
