import React, { Component } from "react";
import List from "./List";

class ConcertCard extends Component {
  render() {
    const { concertList } = this.props;

    return (
      <>
        {this.props &&
          concertList.map((e) => {
            return (
              <List
                key={e.concert_id}
                concert_id={e.concert_id}
                post_url={e.post_url}
                title={e.title}
                date_performance={e.date_performance}
                location={e.location}
                date_ticketing={e.date_ticketing}
                host={e.host}
              />
            );
          })}
      </>
    );
  }
}

export default ConcertCard;
