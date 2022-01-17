import {
  FETCH_ROUTES_REQUEST,
  FETCH_ROUTES_SUCCESS,
  FETCH_ROUTES_FAILURE,
} from './routeTypes';
import { ROUTES_API } from '../../lib/api';

export const fetchRoutesRequest = () => ({
  type: FETCH_ROUTES_REQUEST,
});

export const fetchRoutesSuccess = (routes) => ({
  type: FETCH_ROUTES_SUCCESS,
  payload: routes,
});

export const fetchRoutesFailure = (error) => ({
  type: FETCH_ROUTES_FAILURE,
  payload: error,
});

export const fetchRoutes = (unitId, from, till) => (dispatch) => {
  const API = `${ROUTES_API}&unit_id=${unitId}&include=decoded_route&from=${from}&till=${till}`;

  dispatch(fetchRoutesRequest());
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      dispatch(fetchRoutesSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchRoutesFailure(error.message));
    });
};
