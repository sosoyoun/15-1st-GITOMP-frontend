import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import ConcertList from "./Pages/ConcertList/ConcertList";
import ConcertDetail from "./Pages/ConcertList/ConcertDetail";
import AlbumList from "./Pages/AlbumList/AlbumList";
import Commuity from "./Pages/Commuity/Commuity";
import Nav from "./Components/Header/Nav";
import HamMenu from "./Components/Header/components/HamMenu";
import Community from "./Pages/Community/Community";
import CommunityContent from "./Pages/Community/CommunityContent";
import CommunityWrite from "./Pages/Community/CommunityWrite";
import Footer from "./Components/Footer/Footer";
import AlbumDetail from "./Pages/AlbumList/AlbumDetail";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/concerts" component={ConcertList} />
          <Route exact path="/concerts/:id" component={ConcertDetail} />
          <Route
            exact
            path="/ConcertList/:currentPage"
            component={ConcertList}
          />
          <Route exact path="/HamMenu" component={HamMenu} />
          <Route exact path="/AlbumList" component={AlbumList} />
          <Route exact path="/AlbumList/detail/:id" component={AlbumDetail} />
          <Route exact path="/AlbumList/:currentPage" component={AlbumList} />
          <Route exact path="/ConcertList" component={ConcertList} />
          <Route exact path="/boards" component={Community} />
          <Route exact path="/boards/write" component={CommunityWrite} />
          <Route
            exact
            path="/Community/boards/:id"
            component={CommunityContent}
          />
          <Route exact path="/Commuity" component={Commuity} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
