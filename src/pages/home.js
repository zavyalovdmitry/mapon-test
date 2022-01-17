/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { HeaderContainer } from '../containers/header';
import { FormContainer } from '../containers/form';
import { MapContainer } from '../containers/map';
import { StatsContainer } from '../containers/stats';
import { ButtonContainer } from '../containers/button';
import { fetchVehicles, fetchRoutes } from '../redux';

function Home({ vehiclesData, fetchVehicles, routesData }) {
  const [routeParams, setRouteParams] = useState({
    unitId: '',
    tripStart: '',
    tripEnd: '',
  });

  useEffect(() => {
    fetchVehicles();
  }, []);

  console.log(routeParams);

  return vehiclesData.loading ? (
    <h2>Loading...</h2>
  ) : (
    <>
      <HeaderContainer />
      {vehiclesData.vehicles.data ? (
        <FormContainer
          vehicles={vehiclesData.vehicles.data.units}
          routeParams={routeParams}
          setRouteParams={setRouteParams}
        />
      ) : null}

      {routesData.loading ? null : (
        <>
          {routesData.routes.data ? (
            <>
              <MapContainer routesData={routesData.routes.data.units[0]} />
              <StatsContainer
                routesData={routesData.routes.data.units[0]}
                routeParams={routeParams}
              />
            </>
          ) : null}
        </>
      )}

      <ButtonContainer routesData={routesData} routeParams={routeParams} />
    </>
  );
}

const mapStateToProps = (state) => ({
  vehiclesData: state.vehicles,
  routesData: state.routes,
});

const mapDispatchToProps = (dispatch) => ({
  fetchVehicles: () => dispatch(fetchVehicles()),
  fetchRoutes: () => dispatch(fetchRoutes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
