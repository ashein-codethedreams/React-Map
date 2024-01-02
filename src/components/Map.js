import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapContainer = (props) => {
  const mapStyles = {
    width: "100%",
    height: "100%",
  };

  const center = { lat: 16.84608227970477, lng: 96.1255321364523 };
  const markerPosition = { lat: 16.84608227970477, lng: 96.1255321364523 };

  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={center}
    >
      <Marker position={markerPosition} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAcyByuPCPF5ECFdgpvnS5LOPLhURL3YIw",
})(MapContainer);
