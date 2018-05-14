import React, { Component } from "react";
import { Button } from "semantic-ui-react";

export default class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: en
    };
  }
  render() {
    function handleClick(e) {
      e.preventDefault();
      console.log("The link was clicked.");
    }
    return (
      <div>
        <Button onClick={handleClicK}>{this.props.text}</Button>
      </div>
    );
  }
}
