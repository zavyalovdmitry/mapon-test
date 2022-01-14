import React, { useState } from 'react';
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';
// import GoogleMapReact from 'google-map-react';
// import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { RouteMap } from '../components';
// import dummap from '../dummap.png';
import { googleMapsApiKey } from '../lib/api';

export function MapContainer() {
  const [path, setPath] = useState([
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ]);

  const containerStyle = {
    width: '600px',
    height: '200px',
  };

  const center = {
    lat: 0,
    lng: -180,
  };

  const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    zIndex: 1,
  };

  return (
    <RouteMap>
      {/* <RouteMap.Map src={dummap} /> */}
      <RouteMap.Map>
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={1}
            // zoomControl={false}
            // scaleControl={false}
          >
            <Polyline path={path} options={options} />
          </GoogleMap>
        </LoadScript>
      </RouteMap.Map>
    </RouteMap>
  );
}
