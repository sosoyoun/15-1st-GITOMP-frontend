import React, { Component } from "react";
import List from "./List";

class AlbumCard extends Component {
  render() {
    const { albumList } = this.props;

    return (
      <>
        {this.props &&
          albumList.map((e) => {
            return (
              <List
                key={e.album_id}
                album_id={e.album_id}
                image_url={e.image_url}
                title={e.title}
                artist={e.artist}
                release_date={e.release_date}
                release_type={e.release_type}
              />
            );
          })}
      </>
    );
  }
}

export default AlbumCard;
