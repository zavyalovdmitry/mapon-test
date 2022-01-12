import React from 'react';
import { RouteMap } from '../components';
import dummap from '../dummap.png';

export function MapContainer() {
  return (
    <RouteMap>
      <RouteMap.Map src={dummap} />
    </RouteMap>
  );
}
