import React, { useEffect, useRef } from "react";
import { GoogleApiWrapper } from "google-maps-react";

const MapContainer = (props) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const loadMap = async () => {
      const map = new props.google.maps.Map(mapContainerRef.current, {
        zoom: 14,
        center: { lat: 16.84608227970477, lng: 96.1255321364523 },
      });

      new props.google.maps.Marker({
        position: { lat: 16.84608227970477, lng: 96.1255321364523 },
        map,
      });
    };

    loadMap();
  }, [props.google.maps]);

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }} />
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAcyByuPCPF5ECFdgpvnS5LOPLhURL3YIw",
})(MapContainer);
