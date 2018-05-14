import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import GoogleMapReact from 'google-map-react';
import { Container } from 'semantic-ui-react'
import Popup from './popup.js'

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: 46.8139,
      lng: -71.2080
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
          <div style={{ height: '75vh', width: '100%' }}>
            <GoogleMapReact
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <Popup
                lat={46.8139}
                lng={-71.5080}
                content={'Can enter stuff here'}
              />
                            <Popup
                lat={46.5139}
                lng={-71.5080}
                content={'This is a test'}
              />
                            <Popup
                lat={46.7139}
                lng={-71.3080}
                content={'Here is some info'}
              />
                            <Popup
                lat={46.8139}
                lng={-71.2080}
                content={'Can enter stuff here'}
              />
            </GoogleMapReact>
          </div>
        </Container>


      </div>
    );
  }
}
