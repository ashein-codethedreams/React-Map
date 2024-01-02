// Map.js

import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "100%",
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 16.84608227970477, lng: 96.1255321364523 }} // Default center (San Francisco)
      >
        <Marker position={{ lat: 16.84608227970477, lng: 96.1255321364523 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAcyByuPCPF5ECFdgpvnS5LOPLhURL3YIw",
})(MapContainer);
