import React, { Component } from "react";
import { Segment, Button, Divider } from "semantic-ui-react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Segment padded style={{ width: "400px" }}>
          <Button primary fluid>
            Login
          </Button>
          <Divider horizontal>Or</Divider>
          <Button secondary fluid>
            Sign Up
          </Button>
        </Segment>
      </div>
    );
  }
}
