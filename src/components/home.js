import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container text>
          <Header as="h2">
            <p>
              <FormattedMessage id="app.about" defaultMessage="About" />
            </p>
          </Header>
          <p className="Intro-Blurb">
            <FormattedMessage
              id="home.intro"
              defaultMessage="Welcome! Go to the database page to start logging!"
              values={{ what: <Link to="/database">page</Link> }}
            />
          </p>
        </Container>
      </div>
    );
  }
}
