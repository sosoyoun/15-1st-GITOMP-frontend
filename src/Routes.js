import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import AlbumList from "./Pages/AlbumList/AlbumList";
import ConcertList from "./Pages/ConcertList/ConcertList";
import Account from "./Pages/Account/Account";
import Notice from "./Pages/Notice/Notice";
// import SignIn from "./Pages/Account/SignIn";
import Nav from "./Components/Header/Nav";
import HamMenu from "./Components/Header/components/HamMenu";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/AlbumList" component={AlbumList} />
          <Route exact path="/ConcertList" component={ConcertList} />
          <Route exact path="/Account" component={Account} />
          {/* <Route exact path="/SignIn" component={SignIn} /> */}
          <Route exact path="/Notice" component={Notice} />
          <Route exact path="/HamMenu" component={HamMenu} />;
        </Switch>
      </Router>
    );
  }
}

export default Routes;
