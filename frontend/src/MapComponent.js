import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SoundButton from "./SoundButton";

const MapComponent = () => {
  const [map, setMap] = useState(null);

  return (
    <div style={{ position: "relative" }}>
      
      {map && <SoundButton map={map} />}

      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        style={{ height: "100vh", width: "100%" }}
        whenReady={(event) => {
          setMap(event.target);
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>

    </div>
  );
};

export default MapComponent;