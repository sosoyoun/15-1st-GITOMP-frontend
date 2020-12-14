import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import AlbumList from "./Pages/AlbumList/AlbumList";
import ConcertList from "./Pages/ConcertList/ConcertList";
class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/AlbumList" component={AlbumList} />
          <Route exact path="/ConcertList" component={ConcertList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
