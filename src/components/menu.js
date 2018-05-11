import React, { Component } from "react";

export default class TopMenu extends React.Component {
  render() {
    return (
      <div class="ui secondary  menu">
        <a class="item active">Home</a>
        <a class="item">Database</a>
        <a class="item ">Map</a>
        <div class="right menu">
          <a class="ui item">FR</a>
          <a class="ui item">Login</a>
        </div>
      </div>
    );
  }
}
