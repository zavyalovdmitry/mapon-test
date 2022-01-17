import {
  FETCH_VEHICLES_REQUEST,
  FETCH_VEHICLES_SUCCESS,
  FETCH_VEHICLES_FAILURE,
} from './vehicleTypes';
import { VEHICLES_API } from '../../lib/api';

export const fetchVehiclesRequest = () => ({
  type: FETCH_VEHICLES_REQUEST,
});

export const fetchVehiclesSuccess = (vehicles) => ({
  type: FETCH_VEHICLES_SUCCESS,
  payload: vehicles,
});

export const fetchVehiclesFailure = (error) => ({
  type: FETCH_VEHICLES_FAILURE,
  payload: error,
});

export const fetchVehicles = () => (dispatch) => {
  dispatch(fetchVehiclesRequest());

  fetch(VEHICLES_API)
    .then((response) => response.json())
    .then((data) => {
      const vehicles = data;
      dispatch(fetchVehiclesSuccess(vehicles));
    })
    .catch((error) => {
      dispatch(fetchVehiclesFailure(error.message));
    });
};
