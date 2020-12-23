import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
// import AlbumList from "./Pages/AlbumList/AlbumList";
// import AlbumDetail from "./Pages/AlbumList/AlbumList";

import ConcertList from "./Pages/ConcertList/ConcertList";
import ConcertDetail from "./Pages/ConcertList/ConcertDetail";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />

          {/* <Route exact path="/AlbumList" component={AlbumList} />
          <Route exact path="/AlbumList/detail/:id" component={AlbumDetail} /> */}
          <Route exact path="/ConcertList" component={ConcertList} />
          <Route
            exact
            path="/ConcertList/:currentPage"
            component={ConcertList}
          />
          <Route
            exact
            path="/ConcertList/detail/:id"
            component={ConcertDetail}
          />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
