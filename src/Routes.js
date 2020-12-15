import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import AlbumList from "./Pages/AlbumList/AlbumList";
import ConcertList from "./Pages/ConcertList/ConcertList";
import Account from "./Pages/Account/Account";
import Notice from "./Pages/Notice/Notice";
import Header from "./Components/Header/Header";
class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Nav" component={Header} />
          <Route exact path="/AlbumList" component={AlbumList} />
          <Route exact path="/ConcertList" component={ConcertList} />
          <Route exact path="/Account" component={Account} />
          <Route exact path="/Notice" component={Notice} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
