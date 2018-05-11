import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'
import { Route, Link } from "react-router-dom";

export default class AMenu extends Component {
  state = {activeItem: 'home'}
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state 
    return (
      <div>
        <Menu defaultActiveIndex={"1"}>
        <Menu.Item
          name='home'
          to='/'
          index={1}
          as={ Link }
          active={this.state.activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='database'
          active={activeItem === 'database'}
          onClick={this.handleItemClick}
          as={ Link }
          to='database'
        >
          Database
        </Menu.Item>
        <Menu.Item
          name='map'
          active={activeItem === 'map'}
          onClick={this.handleItemClick}
          as={ Link }
          to='map'
        >
          Map
        </Menu.Item>
        </Menu>

      </div>
    )
  }
}
