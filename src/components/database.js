import React, { Component } from "react";
import Grid from "./grid";
import { FormattedMessage } from "react-intl";

export default class Database extends Component {
  render() {
    return (
      <div>
        <h3>
          <p>
            <FormattedMessage id="database" defaultMessage="Database" />
          </p>
        </h3>
        <Grid />
      </div>
    );
  }
}
