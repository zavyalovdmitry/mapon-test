/* eslint-disable prefer-template */
/* eslint-disable import/no-duplicates */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteForm } from '../components';

export function RouteFormContainer() {
  const dispatch = useDispatch();
  const vehicle = useSelector((state) => state.carData);
  const [currentVehicle, setCurrentVehicle] = useState(0);

  function formatDate(dateIso) {
    const date = new Date(dateIso);
    return (
      date.getFullYear() +
      '-' +
      ('0' + (date.getMonth() + 1).toString()).slice(-2) +
      '-' +
      ('0' + date.getDate().toString()).slice(-2)
    );
  }
  // +date comparing
  const [tripStart, setTripStart] = useState(
    formatDate(vehicle[currentVehicle].last_update)
  );
  const [tripEnd, setTripEnd] = useState(
    formatDate(vehicle[currentVehicle].last_update)
  );

  function currentVehicleHandle(e) {
    setCurrentVehicle(e.target.value);

    dispatch({
      type: 'updateCurrentUnitId',
      unitId: vehicle[e.target.value].unit_id,
    });
  }

  function tripStartHandle(e) {
    setTripStart(e.target.value);

    dispatch({
      type: 'updateCurrentTripStart',
      tripStart: e.target.value,
    });
  }

  function tripEndHandle(e) {
    setTripEnd(e.target.value);

    dispatch({
      type: 'updateCurrentTripEnd',
      tripEnd: e.target.value,
    });
  }

  function getRouteData() {}

  return (
    <>
      <RouteForm>
        <RouteForm.Title>Route report</RouteForm.Title>
        <RouteForm.Text>Vehicle number</RouteForm.Text>
        <RouteForm.Select
          id="vehicle"
          placeHolder="Select vehicle"
          onChange={(e) => currentVehicleHandle(e)}
        >
          {vehicle.map((item, index) => (
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
          min={formatDate(vehicle[currentVehicle].created_at)}
          max={formatDate(vehicle[currentVehicle].last_update)}
          onChange={(e) => tripStartHandle(e)}
        />
        <RouteForm.Date
          type="date"
          id="end"
          name="trip-end"
          value={tripEnd}
          min={formatDate(vehicle[currentVehicle].created_at)}
          max={formatDate(vehicle[currentVehicle].last_update)}
          onChange={(e) => tripEndHandle(e)}
        />
      </RouteForm>
    </>
  );
}
