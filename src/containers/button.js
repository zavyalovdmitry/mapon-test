/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../components';
import { routeDataApi } from '../lib/api';

export function ButtonContainer() {
  const [firstLaunch, setFirstLaunch] = useState(true);
  const { unitId, tripStart, tripEnd, routeDataLoadedStatus, routePath } =
    useSelector((state) => state);
  const dispatch = useDispatch();

  const getPathKm = (data) => {
    const distance = Math.ceil(
      data.reduce((accum, next) => accum + next.distance, 0) / 1000
    );

    dispatch({
      type: 'updatePathKm',
      pathKm: distance,
    });
  };

  const getTimeDrove = (data) => {
    const timeDrove = data.reduce(
      (accum, next) =>
        accum + (Date.parse(next.end.time) - Date.parse(next.start.time)),
      0
    );

    dispatch({
      type: 'updateTimeDrove',
      timeDrove,
    });
  };

  const getTimeMean = (data) => {
    const timeTotal = data.reduce(
      (accum, next) =>
        accum + (Date.parse(next.end.time) - Date.parse(next.start.time)),
      0
    );
    const timeBetween =
      (Date.parse(tripEnd) - Date.parse(tripStart)) / 1000 / 60 / 60 / 24 + 1;
    const timeMean = timeTotal / timeBetween;
    dispatch({
      type: 'updateTimeMean',
      timeMean,
    });
  };

  const getRoutePathCoordinates = (path) => {
    const coords = path.map((item) => item.decoded_route.points);
    const coords2 = coords.reduce((accum, next) => accum.concat(next), []);

    dispatch({
      type: 'updateRoutePathCoordinates',
      routePathCoordinates: coords2,
    });

    dispatch({
      type: 'updateRouteDataLoadedStatus',
      routeDataLoadedStatus: true,
    });
  };

  const getRoutePath = (data) => {
    const path = data.filter((item) => item.type === 'route');

    dispatch({
      type: 'updateRoutePath',
      routePath: path,
    });

    getPathKm(path);
    getTimeDrove(path);
    getTimeMean(path);
    getRoutePathCoordinates(path);
  };

  function buttonHandler() {
    const from = `${tripStart}T00:00:00Z`;
    const till = `${tripEnd}T23:59:59Z`;

    const api = `${routeDataApi}&unit_id=${unitId}&include=decoded_route&from=${from}&till=${till}`;

    setFirstLaunch(false);

    dispatch({
      type: 'updateRouteDataLoadedStatus',
      routeDataLoadedStatus: false,
    });

    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        const routesData = data.data.units[0].routes;

        dispatch({
          type: 'updateRouteData',
          routeData: routesData,
        });

        getRoutePath(routesData);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Button>
      <Button.Link
        className={unitId ? 'active' : 'inactive'}
        onClick={() => (unitId ? buttonHandler() : null)}
      >
        {firstLaunch
          ? 'Generate'
          : routeDataLoadedStatus
          ? 'Generate'
          : 'Loading...'}
      </Button.Link>
    </Button>
  );
}
