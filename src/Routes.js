import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import AlbumList from "./Pages/AlbumList/AlbumList";
import AlbumDetail from "./Pages/AlbumList/AlbumList";
import Account from "./Pages/Account/Account";
import Commuity from "./Pages/Commuity/Commuity";
import Nav from "./Components/Header/Nav";
import HamMenu from "./Components/Header/components/HamMenu";
import SignIn from "./Pages/Account/SignIn";
import Community from "./Pages/Community/Community";
import CommunityContent from "./Pages/Community/CommunityContent";
import CommunityWrite from "./Pages/Community/CommunityWrite";
import Footer from "./Components/Footer/Footer";
import ConcertList from "./Pages/ConcertList/ConcertList";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/HamMenu" component={HamMenu} />
          <Route exact path="/AlbumList" component={AlbumList} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/AlbumList/detail/:id" component={AlbumDetail} />
          <Route exact path="/AlbumList/:currentPage" component={AlbumList} />
          <Route exact path="/ConcertList" component={ConcertList} />
          <Route exact path="/Account" component={Account} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/Commuity" component={Commuity} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
