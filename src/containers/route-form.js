/* eslint-disable import/no-duplicates */
import React, { useState } from 'react';
import { RouteForm } from '../components';

export function RouteFormContainer() {
  const [vehicle, setVehicle] = useState(['Volvo', 'Saab', 'Opel', 'Audi']);
  // const [currentVehicle, setCurrentVehicle] = useState(1);

  return (
    <>
      <RouteForm>
        <RouteForm.Title>Route report</RouteForm.Title>
        <RouteForm.Text>Vehicle number</RouteForm.Text>
        <RouteForm.Select
          // type="text"
          id="vehicle"
          // name="vehicle"
          placeHolder="Select vehicle"
          // value={vehicle[currentVehicle]}
          // onChange={(e) => setCurrentVehicle(e.target.value)}
        >
          {vehicle.map((item) => (
            <option key={item} value={item}>
              {item}
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
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        />
        <RouteForm.Date
          type="date"
          id="end"
          name="trip-end"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        />
      </RouteForm>
    </>
  );
}
