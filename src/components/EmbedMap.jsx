// src/MapComponent.js
import React from "react";

const MapComponent = () => {
  return (
    <div>
      <h2>My Embedded Map</h2>
      <iframe
        title="Embedded Map"
        width="600"
        height="450"
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15275.460585095367!2d96.12089354999999!3d16.8330448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c194ca13fff6e3%3A0x1334ced7a53c5bbc!2sHledan%20Centre!5e0!3m2!1sen!2smm!4v1704688133047!5m2!1sen!2smm"
      ></iframe>
    </div>
  );
};

export default MapComponent;
