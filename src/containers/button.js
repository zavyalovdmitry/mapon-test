/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../components';
import { fetchRoutes } from '../redux';

export function ButtonContainer({ routesData, routeParams }) {
  const dispatch = useDispatch();
  const [firstLaunch, setFirstLaunch] = useState(true);
  const { unitId, tripStart, tripEnd } = routeParams;

  function buttonHandler() {
    const from = `${tripStart}T00:00:00Z`;
    const till = `${tripEnd}T23:59:59Z`;

    setFirstLaunch(false);
    dispatch(fetchRoutes(unitId, from, till));
  }

  return (
    <Button>
      <Button.Link
        className={unitId ? 'active' : 'inactive'}
        onClick={() => (unitId ? buttonHandler() : null)}
      >
        {firstLaunch
          ? 'Generate'
          : routesData.loading
          ? 'Loading...'
          : 'Generate'}
      </Button.Link>
    </Button>
  );
}
