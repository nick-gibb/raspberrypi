import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { Container, Label } from "semantic-ui-react";
import Popup from "./popup.js";
import * as ol from "openlayers";
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

var iconFeature = new ol.Feature(new ol.geom.Point([0, 0]));
var source = new ol.source.Vector({ features: [iconFeature] });
var marker = new custom.style.MarkerStyle(
  "https://openlayers.org/en/v4.0.1/examples/data/icon.png"
);

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
              <layer.Vector style={marker.style} source={source} />
            </Layers>
            <Controls attribution={true} zoom={true} />
          </Map>
        </Container>
      </div>
    );
  }
}
