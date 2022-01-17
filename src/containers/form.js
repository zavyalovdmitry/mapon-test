/* eslint-disable object-shorthand */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-template */
import React, { useEffect, useState } from 'react';
import { RouteForm } from '../components';
import { DATE_LIMIT } from '../constants';

export function FormContainer({ vehicles, routeParams, setRouteParams }) {
  const [currentVehicle, setCurrentVehicle] = useState(0);
  const { tripStart, tripEnd } = routeParams;

  function formatDate(dateIso) {
    const date = new Date(dateIso);

    return `${date.getFullYear()}-${(
      '0' + (date.getMonth() + 1).toString()
    ).slice(-2)}-${('0' + date.getDate().toString()).slice(-2)}`;
  }

  useEffect(() => {
    const tripStart = formatDate(vehicles[currentVehicle].last_update);
    setRouteParams({ ...routeParams, tripStart, tripEnd: tripStart });
  }, []);

  const [fromMin, setFromMin] = useState(
    formatDate(vehicles[currentVehicle].created_at)
  );
  const [toMax, setToMax] = useState(
    formatDate(vehicles[currentVehicle].last_update)
  );

  useEffect(() => {
    setFromMin(formatDate(vehicles[currentVehicle].created_at));
    setToMax(formatDate(vehicles[currentVehicle].last_update));
  }, [currentVehicle]);

  function currentVehicleHandle(e) {
    const unitId = vehicles[e.target.value].unit_id;
    setCurrentVehicle(e.target.value);
    setRouteParams({ ...routeParams, unitId });
  }

  function tripStartHandle(e) {
    const mSecs = Date.parse(e.target.value);
    Date.parse(tripEnd) - mSecs > DATE_LIMIT
      ? setRouteParams({
          ...routeParams,
          tripEnd: formatDate(new Date(mSecs + DATE_LIMIT)),
          tripStart: e.target.value,
        })
      : setRouteParams({ ...routeParams, tripStart: e.target.value });
  }

  function tripEndHandle(e) {
    const mSecs = Date.parse(e.target.value);
    mSecs - Date.parse(tripStart) > DATE_LIMIT
      ? setRouteParams({
          ...routeParams,
          tripStart: formatDate(new Date(mSecs - DATE_LIMIT)),
          tripEnd: e.target.value,
        })
      : setRouteParams({ ...routeParams, tripEnd: e.target.value });
  }

  return (
    <>
      <RouteForm>
        <RouteForm.Title>Route report</RouteForm.Title>
        <RouteForm.Text>Vehicle number</RouteForm.Text>
        <RouteForm.Select
          id="vehicle"
          defaultValue="Select vehicle"
          onChange={(e) => currentVehicleHandle(e)}
        >
          <option value="Select vehicle" disabled hidden>
            Select vehicle
          </option>
          {vehicles.map((item, index) => (
            <option key={item.unit_id} value={index}>
              {item.number}
            </option>
          ))}
        </RouteForm.Select>
        <RouteForm.Text>Period</RouteForm.Text>
        <RouteForm.Text>From</RouteForm.Text>
        <RouteForm.Text>To</RouteForm.Text>
        <RouteForm.Date
          type="date"
          id="start"
          name="trip-start"
          value={tripStart}
          min={fromMin}
          max={tripEnd}
          onChange={(e) => tripStartHandle(e)}
        />
        <RouteForm.Date
          type="date"
          id="end"
          name="trip-end"
          value={tripEnd}
          min={tripStart}
          max={toMax}
          onChange={(e) => tripEndHandle(e)}
        />
      </RouteForm>
    </>
  );
}
