import React, { Component } from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";


export default class AMenu extends Component {
  constructor(props) {
    super(props);
    this.handleLangChange = this.handleLangChange.bind(this);
    this.state = {
      activeItem: props.activeItem,
      path: window.location.pathname
    };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };
  handleLangChange = () => {
    this.props.handleLangChange(this.props.unusedLang, this.props.lang);
  };

  handleClick = e => {
    e.preventDefault();
    console.log("The link was clicked.");
  };
  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu stackable defaultActiveIndex={"1"}>
          <Menu.Item header>
            <p>
              <FormattedMessage id="app.gsc" defaultMessage="GSC" />
            </p>
          </Menu.Item>
          <Menu.Item
            name=""
            to="/"
            index={1}
            as={Link}
            active={activeItem === "" || activeItem === "/"}
            onClick={this.handleItemClick}
          >
            <p>
              <FormattedMessage id="app.about" defaultMessage="About" />
            </p>
          </Menu.Item>

          <Menu.Item
            name="database"
            active={activeItem === "database" || activeItem === "/database"}
            onClick={this.handleItemClick}
            as={Link}
            to="database"
          >
            <p>
              <FormattedMessage id="database" defaultMessage="Database" />
            </p>
          </Menu.Item>
          <Menu.Item
            name="map"
            active={activeItem === "map" || activeItem === "/map"}
            onClick={this.handleItemClick}
            as={Link}
            to="map"
          >
            <p>
              <FormattedMessage id="map" defaultMessage="Map" />
            </p>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button onClick={this.handleClick}>Login</Button>
            </Menu.Item>

            <Menu.Item
              onClick={this.handleLangChange}
            >
              {this.props.unusedLang}
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
