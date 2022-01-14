/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../components';
import { routeDataApi } from '../lib/api';

export function ButtonContainer() {
  const { unitId } = useSelector((state) => state);
  const { tripStart } = useSelector((state) => state);
  const { tripEnd } = useSelector((state) => state);
  const dispatch = useDispatch();
  // const [routeDataLoaded, setRouteDataLoaded] = useState(false);

  const getPathKm = (data) => {
    // console.log(data[14].distance);
    const distance = Math.ceil(
      data.reduce((accum, next) => accum + next.distance, 0) / 1000
    );

    // console.log(distance);
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
    // console.log(timeDrove / 1000 / 60 / 60);
    dispatch({
      type: 'updateTimeDrove',
      timeDrove,
    });
    // console.log(Date.parse(data[0].end.time));
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
    // console.log(Date.parse(data[0].end.time));
  };

  const getRoutePathCoordinates = (path) => {
    const coords = path.map((item) => item.decoded_route.points);
    const coords2 = coords.reduce((accum, next) => accum.concat(next), []);
    // console.log(coords2);
    dispatch({
      type: 'updateRoutePathCoordinates',
      routePathCoordinates: coords2,
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

    // const api = `${routeDataApi}&unit_id=${unitId}&include=polyline&from=${from}&till=${till}`;
    const api = `${routeDataApi}&unit_id=${unitId}&include=decoded_route&from=${from}&till=${till}`;

    // setRouteDataLoaded(false);

    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const routesData = data.data.units[0].routes;

        dispatch({
          type: 'updateRouteData',
          routeData: routesData,
        });

        dispatch({
          type: 'updateRouteDataLoadedStatus',
          routeDataLoadedStatus: true,
        });

        getRoutePath(routesData);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Button>
      <Button.Link onClick={() => buttonHandler()}>Generate</Button.Link>
    </Button>
  );
}
