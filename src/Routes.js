import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import AlbumList from "./Pages/AlbumList/AlbumList";
import ConcertList from "./Pages/ConcertList/ConcertList";
import Account from "./Pages/Account/Account";
import Notice from "./Pages/Notice/Notice";
import SignIn from "./Pages/Account/SignIn";
import Footer from "./Components/Footer/Footer";
import ConcertDetail from "./Pages/ConcertList/Components/ConcertDetail";
import List from "./Pages/ConcertList/Components/List";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/AlbumList" component={AlbumList} />
          <Route exact path="/ConcertList" component={ConcertList} />
          <Route exact path="/ConcertList/detail/:id" component={ConcertList} />
          <Route exact path="/ConcertDetail" component={ConcertDetail} />
          <Route exact path="/List" component={List} />
          <Route exact path="/Account" component={Account} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/Notice" component={Notice} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default Routes;
