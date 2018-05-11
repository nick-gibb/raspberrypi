import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Database from './components/database'
import Home from './components/home'
import Menu from './components/menu'
import Map from './components/map'



export default class App extends Component {
  render() {
    return (
        <div>
          <div>
            <Menu />
            <div>
              <div style={{ flex: 1, padding: "10px" }}>
                <Route exact path="/" component={Home}/>                
                <Route path="/database" component={Database}/>
                <Route path="/map" component={Map}/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
