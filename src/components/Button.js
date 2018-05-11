import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'


export default class MyButton extends Component {
    render() {
        return (
            <div>
                <Button>{this.props.text}</Button>
            </div>
        )
    }
}
