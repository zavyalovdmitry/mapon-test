import React, { useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Polyline,
  Marker,
} from '@react-google-maps/api';
import { useSelector } from 'react-redux';
// import GoogleMapReact from 'google-map-react';
// import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { RouteMap } from '../components';
// import dummap from '../dummap.png';
import { googleMapsApiKey } from '../lib/api';
import pin from '../pin.png';

export function MapContainer() {
  const path = useSelector((state) => state.routePathCoordinates);

  const centerLat =
    path.reduce((accum, next) => accum + next.lat, 0) / path.length;
  const centerLng =
    path.reduce((accum, next) => accum + next.lng, 0) / path.length;

  const containerStyle = {
    width: '600px',
    height: '200px',
  };

  const center = {
    lat: centerLat,
    lng: centerLng,
  };

  const mapOptions = {
    zoomControl: false,
    scaleControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
  };

  const polylineOptions = {
    strokeColor: '#39B0FA',
    strokeOpacity: 0.8,
    strokeWeight: 4,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    zIndex: 1,
  };

  const markerStartPosition = path[0];
  const markerEndPosition = path[path.length - 1];

  return (
    <RouteMap>
      {/* <RouteMap.Map src={dummap} /> */}
      <RouteMap.Map>
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            options={mapOptions}
          >
            <Polyline path={path} options={polylineOptions} />
            <Marker position={markerStartPosition} icon={pin} />
            <Marker position={markerEndPosition} icon={pin} />
          </GoogleMap>
        </LoadScript>
      </RouteMap.Map>
    </RouteMap>
  );
}
