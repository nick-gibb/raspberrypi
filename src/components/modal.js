import React, { Component } from 'react'

import { Button, Modal } from 'semantic-ui-react'
import Form from './form'

export default class TheModal extends Component {
    render() {
        return (
            <Modal trigger={<Button>{this.props.text}</Button>}>
    <Modal.Header>{this.props.text}</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <Form />
      </Modal.Description>
    </Modal.Content>
  </Modal>
        )
    }
}
