import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { Container } from "semantic-ui-react";
import Popup from "./popup.js";
import {
  interaction,
  layer,
  custom,
  control, //name spaces
  Interactions,
  Overlays,
  Controls, //group
  Map,
  Layers,
  Overlay,
  Util //objects
} from "react-openlayers";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class TheMap extends Component {
  static defaultProps = {
    center: {
      lat: 46.8139,
      lng: -71.208
    },
    zoom: 11
  };
  render() {
    return (
      <div>
        <h3>
          <p>
            <FormattedMessage id="map" defaultMessage="Map" />
          </p>
        </h3>

        <Container fluid>
          <Map view={{ center: [0, 0], zoom: 2 }}>
            <Layers>
              <layer.Tile />
            </Layers>
          </Map>
        </Container>
      </div>
    );
  }
}
