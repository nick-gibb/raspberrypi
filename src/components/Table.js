import React, { Component } from "react";
import { Table } from 'semantic-ui-react'

export default class TheTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ["ID", "Longitude", "Latitude", "pH"],
            cells: [
                { ID: 1, Longitude: 12, Latitude: 12, pH: 7 }
            ],
            value: ""
        };
    }

    render() {
        const { items, cells } = this.state;
        return (
            <Table selectable columns={this.state.items.length}>
                <Table.Header>
                    <Table.Row>
                        {items.map((item, index) =>
                            <Table.HeaderCell key={index}>{item}</Table.HeaderCell>
                        )}
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>

                        {
                            cells.map(x => {
                                for (let i in x) {

                                    <Table.Cell>
                                        {x[i]}
                                    </Table.Cell>



                                }
                            })

                        }




                    </Table.Row>
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell>3 People</Table.HeaderCell>
                        <Table.HeaderCell>{this.state.cells.length}</Table.HeaderCell>
                        <Table.HeaderCell />
                        <Table.HeaderCell />
                        <Table.HeaderCell />
                    </Table.Row>
                </Table.Footer>
            </Table>
        )
    }

}
