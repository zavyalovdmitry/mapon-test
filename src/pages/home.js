import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderContainer } from '../containers/header';
import { RouteFormContainer } from '../containers/route-form';
import { MapContainer } from '../containers/map';
import { StatsContainer } from '../containers/stats';
import { ButtonContainer } from '../containers/button';
import { carDataApi } from '../lib/api';

export function Home() {
  const [carDataLoaded, setCarDataLoaded] = useState(false);
  const { routeDataLoadedStatus } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(carDataApi)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'getCarData',
          carData: data.data.units,
        });
        setCarDataLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return carDataLoaded ? (
    <>
      <HeaderContainer />
      <RouteFormContainer />
      {routeDataLoadedStatus ? (
        <>
          <MapContainer />
          <StatsContainer />
        </>
      ) : null}
      <ButtonContainer />
    </>
  ) : (
    <p>Loading...</p>
  );
}
