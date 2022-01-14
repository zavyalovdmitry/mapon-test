/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-template */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteForm } from '../components';

export function RouteFormContainer() {
  const dispatch = useDispatch();
  const vehicle = useSelector((state) => state.carData);
  const [currentVehicle, setCurrentVehicle] = useState(0);
  const dateLimit = 31 * 24 * 60 * 60 * 1000;

  function formatDate(dateIso) {
    const date = new Date(dateIso);

    return `${date.getFullYear()}-${(
      '0' + (date.getMonth() + 1).toString()
    ).slice(-2)}-${('0' + date.getDate().toString()).slice(-2)}`;
  }

  const [fromMin, setFromMin] = useState(
    formatDate(vehicle[currentVehicle].created_at)
  );
  const [fromMax, setFromMax] = useState(
    formatDate(vehicle[currentVehicle].last_update)
  );
  const [toMin, setToMin] = useState(
    formatDate(vehicle[currentVehicle].created_at)
  );
  const [toMax, setToMax] = useState(
    formatDate(vehicle[currentVehicle].last_update)
  );

  const [tripStart, setTripStart] = useState(
    formatDate(vehicle[currentVehicle].last_update)
  );
  const [tripEnd, setTripEnd] = useState(tripStart);

  useEffect(() => {
    dispatch({
      type: 'updateCurrentTripStart',
      tripStart,
    });

    dispatch({
      type: 'updateCurrentTripEnd',
      tripEnd,
    });
  }, []);

  function currentVehicleHandle(e) {
    setCurrentVehicle(e.target.value);

    dispatch({
      type: 'updateCurrentUnitId',
      unitId: vehicle[e.target.value].unit_id,
    });
  }

  function tripStartHandle(e) {
    const mSecs = Date.parse(e.target.value);
    Date.parse(tripEnd) - mSecs > dateLimit
      ? setTripEnd(formatDate(new Date(mSecs + dateLimit)))
      : null;

    setTripStart(e.target.value);

    dispatch({
      type: 'updateCurrentTripStart',
      tripStart: e.target.value,
    });
  }

  function tripEndHandle(e) {
    const mSecs = Date.parse(e.target.value);
    mSecs - Date.parse(tripStart) > dateLimit
      ? setTripStart(formatDate(new Date(mSecs - dateLimit)))
      : null;

    setTripEnd(e.target.value);

    dispatch({
      type: 'updateCurrentTripEnd',
      tripEnd: e.target.value,
    });
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
