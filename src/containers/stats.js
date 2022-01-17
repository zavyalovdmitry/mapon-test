/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { Stats } from '../components';

export function StatsContainer({ routesData, routeParams }) {
  const { tripStart, tripEnd } = routeParams;

  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  const data = routesData.routes;
  const routes = data.filter((item) => item.type === 'route');

  const timeFormat = (ms) => {
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

    return `${hours}h ${minutes}m`;
  };

  const getPathKm = (data) => {
    const result = Math.ceil(
      data.reduce((accum, next) => accum + next.distance, 0) / 1000
    );

    return result;
  };

  useEffect(() => {
    setStart(tripStart);
    setEnd(tripEnd);
  }, []);

  const getTimeDrove = (data) => {
    const result = data.reduce(
      (accum, next) =>
        accum + (Date.parse(next.end.time) - Date.parse(next.start.time)),
      0
    );

    return result;
  };

  const getTimeAverage = (data) => {
    const timeTotal = getTimeDrove(data);
    const timeBetween =
      (Date.parse(end) - Date.parse(start)) / 1000 / 60 / 60 / 24 + 1;
    const timeAverage = timeTotal / timeBetween;

    return timeAverage;
  };

  return routesData.loading ? null : (
    <Stats>
      <Stats.Block>
        <Stats.Title>{getPathKm(routes)}</Stats.Title>
        <Stats.Text>Km driven</Stats.Text>
      </Stats.Block>
      <Stats.Block>
        <Stats.Title>{timeFormat(getTimeDrove(routes))}</Stats.Title>
        <Stats.Text>Driving time</Stats.Text>
      </Stats.Block>
      <Stats.Block>
        <Stats.Title>{timeFormat(getTimeAverage(routes))}</Stats.Title>
        <Stats.Text>Driving time / day</Stats.Text>
      </Stats.Block>
    </Stats>
  );
}
