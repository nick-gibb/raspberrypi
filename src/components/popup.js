import React, {Component} from 'react'
import { Button, Popup } from 'semantic-ui-react'

const style = {
    borderRadius: 0,
    opacity: 0.7,
    padding: '1em',
}


export default class MyPopup extends Component {
    render() {
        return (
            <Popup
                trigger={<i class="flag large red icon"></i>}
                content={this.props.content}
                on={['hover', 'click']}
                basic
            />
        )
    }
}

