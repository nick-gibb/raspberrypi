import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

export default class Map extends Component {
  render() {
    return (
      <div>
        <h3>
          <p>
            <FormattedMessage id="map" defaultMessage="Map" />
          </p>
        </h3>
      </div>
    );
  }
}
