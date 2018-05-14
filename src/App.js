import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Database from "./components/database";
import Home from "./components/home";
import Menu from "./components/menu";
import Login from "./components/login";
import Map from "./components/map";
import NoMatch from "./components/NoMatch";

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Menu
            lang={this.props.lang}
            unusedLang={this.props.unusedLang}
            activeItem={window.location.pathname}
          />
          <div>
            <div style={{ flex: 1, padding: "10px" }}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/database" component={Database} />
                <Route path="/map" component={Map} />
                <Route path="/login" component={Login} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
