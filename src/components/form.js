import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class FormExampleClearOnSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = { ID: "", Longitude: "", Latitude: "", pH: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }
  handleSubmit(event) {
    alert(JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <Form size="small" onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            placeholder="ID"
            name="ID"
            width={8}
            value={this.state.ID}
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder="Longitude"
            name="Longitude"
            width={8}
            value={this.state.Longitude}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            placeholder="Latitude"
            width={8}
            name="Latitude"
            value={this.state.Latitude}
            onChange={this.handleChange}
          />
          <Form.Input
            width={8}
            placeholder="pH"
            name="pH"
            value={this.state.pH}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Button content="Submit" />
      </Form>
    );
  }
}

export default FormExampleClearOnSubmit;
