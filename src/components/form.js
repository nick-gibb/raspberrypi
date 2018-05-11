import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class FormExampleClearOnSubmit extends Component {
    constructor(props) {
        super(props)
        this.state = { Latitude: '', Longitude: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }
    handleSubmit(event){
        alert('Latitude: ' + this.state.Latitude + '; Longitude: ' + this.state.Longitude);
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Input placeholder='Latitude' name='Latitude' value={this.state.Latitude} onChange={this.handleChange} />
                    <Form.Input placeholder='Longitude' name='Longitude' value={this.state.Longitude} onChange={this.handleChange} />
                    <Form.Button content='Submit' />
                </Form.Group>
            </Form>
        )
    }
}

export default FormExampleClearOnSubmit