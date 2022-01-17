import React from 'react';
import {
  GoogleMap,
  LoadScript,
  Polyline,
  Marker,
} from '@react-google-maps/api';
import { RouteMap } from '../components';
import { GOOGLE_API_KEY } from '../lib/api';
import pin from '../pin.png';
import { MAP_OPTIONS, POLYLINE_OPTIONS } from '../constants';

export function MapContainer({ routesData }) {
  const data = routesData.routes;
  const routes = data.filter((item) => item.type === 'route');
  const pathData = routes.map((item) => item.decoded_route.points);
  const path = pathData.reduce((accum, next) => accum.concat(next), []);

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
  const containerW = 600;
  const containerH = 200;

  const containerStyle = {
    width: `${containerW}px`,
    height: `${containerH}px`,
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

  const markerStartPosition = path[0];
  const markerEndPosition = path[path.length - 1];

  return (
    <RouteMap>
      {path.length ? (
        <RouteMap.Map>
          <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={zoom}
              options={MAP_OPTIONS}
            >
              <Polyline path={path} options={POLYLINE_OPTIONS} />
              <Marker position={markerStartPosition} icon={pin} />
              <Marker position={markerEndPosition} icon={pin} />
            </GoogleMap>
          </LoadScript>
        </RouteMap.Map>
      ) : (
        <p>No data available for this period</p>
      )}
    </RouteMap>
  );
}
