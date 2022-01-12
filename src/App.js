import React from 'react';
import { HeaderContainer } from './containers/header';
import { RouteFormContainer } from './containers/route-form';
import { MapContainer } from './containers/map';
import { StatsContainer } from './containers/stats';
import { ButtonContainer } from './containers/button';

export default function App() {
  return (
    <>
      <HeaderContainer />
      <RouteFormContainer />
      <MapContainer />
      <StatsContainer />
      <ButtonContainer />
    </>
  );
}
