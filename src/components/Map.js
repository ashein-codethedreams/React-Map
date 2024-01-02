import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapContainer = (props) => {
  const mapStyles = {
    width: "100%",
    height: "100%",
  };

  const center = { lat: 16.84608227970477, lng: 96.1255321364523 }; // MTP condo, Hlaing Tsp, Yangon, Myanmar
  const markerPosition = { lat: 16.84608227970477, lng: 96.1255321364523 }; // location logo marker It can also be different lat and lng

  return (
    <Map
      google={props.google}
      zoom={14} // higher value will be zoom +
      style={mapStyles}
      initialCenter={center}
    >
      <Marker position={markerPosition} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAcyByuPCPF5ECFdgpvnS5LOPLhURL3YIw", // api key from google cloud service
})(MapContainer);
