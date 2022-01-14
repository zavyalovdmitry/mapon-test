import React from 'react';
import {
  GoogleMap,
  LoadScript,
  Polyline,
  Marker,
} from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { RouteMap } from '../components';
import { googleMapsApiKey } from '../lib/api';
import pin from '../pin.png';

export function MapContainer() {
  const path = useSelector((state) => state.routePathCoordinates);

  const latMin = Math.min.apply(
    null,
    path.map((item) => item.lat)
  );
  const latMax = Math.max.apply(
    null,
    path.map((item) => item.lat)
  );
  const lngMin = Math.min.apply(
    null,
    path.map((item) => item.lng)
  );
  const lngMax = Math.max.apply(
    null,
    path.map((item) => item.lng)
  );

  const centerLat = latMax - (latMax - latMin) / 2;
  const centerLng = lngMax - (lngMax - lngMin) / 2;

  // const centerLat =
  //   path.reduce((accum, next) => accum + next.lat, 0) / path.length;
  // const centerLng =
  //   path.reduce((accum, next) => accum + next.lng, 0) / path.length;

  const containerW = 600;
  const containerH = 200;

  const containerStyle = {
    width: `${containerW}px`, // lat
    height: `${containerH}px`, // lng
  };

  const zoomX = Math.floor(
    Math.log(containerW / (latMax - latMin)) / Math.log(2)
  );
  const zoomY = Math.floor(
    Math.log(containerH / (lngMax - lngMin)) / Math.log(2)
  );

  const zoom = Math.min(zoomX, zoomY);

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
      <RouteMap.Map>
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
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
