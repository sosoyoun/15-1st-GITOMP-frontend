import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import Nav from "./Components/Header/Nav";
import HamMenu from "./Components/Header/components/HamMenu";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Nav} />
          <Route exact path="/Nav" component={Nav} />
          <Route exact path="/HamMenu" component={HamMenu} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
