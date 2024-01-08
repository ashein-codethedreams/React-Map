// App.js

import React from "react";
import MapContainer from "./components/Map";
import MapComponent from "./components/EmbedMap";

function App() {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapComponent />
    </div>
  );
}

export default App;
