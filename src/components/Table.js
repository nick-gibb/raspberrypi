import React, { Component } from "react";
import { Table } from "semantic-ui-react";

const arr = [];
for (let i = 1; i < 10; i += 1) {
  let obj = {
    ID: Math.round((Math.random() * 1000 + 1) * 1) / 1,
    Longitude: Math.round((Math.random() * 100 + 1) * 1000) / 1000,
    Latitude: Math.round((Math.random() * 100 + 1) * 1000) / 1000,
    pH: Math.round((Math.random() * 10 + 1) * 100) / 100
  };
  arr.push(obj);
}
export default class TheTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["ID", "Longitude", "Latitude", "pH"],
      cells: arr,
      value: ""
    };
  }

  render() {
    const { items, cells } = this.state;
    return (
      <Table selectable columns={4}>
        <Table.Header>
          <Table.Row>
            {items.map((item, index) => (
              <Table.HeaderCell key={index}>{item}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cells.map((nested, index) => (
            <Table.Row>
              {Object.values(nested).map(x => (
                <Table.Cell key={Math.random()}>{x}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell>
              <strong>Count: {cells.length}</strong>
            </Table.HeaderCell>
            <Table.HeaderCell />
            <Table.HeaderCell />
            <Table.HeaderCell />
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}
