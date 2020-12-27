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
                key={e.id}
                concert_id={e.id}
                post_url={e.post_url}
                thumbnail_url={e.thumbnail_url}
                title={e.title}
                date_performance={e.date_performance}
                location={e.location}
                seats={e.seats && e.seats.name}
              />
            );
          })}
      </>
    );
  }
}

export default ConcertCard;
