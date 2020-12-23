import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import AlbumList from "./Pages/AlbumList/AlbumList";
import ConcertList from "./Pages/ConcertList/ConcertList";
import Account from "./Pages/Account/Account";
import Notice from "./Pages/Notice/Notice";
import SignIn from "./Pages/Account/SignIn";
import Community from "./Pages/Community/Community";
import CommunityContent from "./Pages/Community/CommunityContent";
import CommunityWrite from "./Pages/Community/CommunityWrite";
import Footer from "./Components/Footer/Footer";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/AlbumList" component={AlbumList} />
          <Route exact path="/ConcertList" component={ConcertList} />
          <Route exact path="/AlbumList/detail/:id" component={AlbumDetail} />
          <Route exact path="/AlbumList/:currentPage" component={AlbumList} />
          <Route exact path="/Account" component={Account} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/Notice" component={Notice} />
          <Route exact path="/boards" component={Community} />
          <Route exact path="/boards/write" component={CommunityWrite} />
          <Route
            exact
            path="/Community/boards/:id"
            component={CommunityContent}
          />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
