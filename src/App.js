import React, { Component } from "react";
import TopMenu from "./components/menu";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import One from "./components/One";
import GridExampleEqualWidthColumn from "./components/grid";

export default class App extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <GridExampleEqualWidthColumn />
      </div>
    );
  }
}
