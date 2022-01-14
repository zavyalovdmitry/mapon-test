/* eslint-disable no-shadow */
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const INITIAL_STATE = {
  carData: [],
  routeData: {},
  unitId: null,
  tripStart: 0,
  tripEnd: 0,
  routePath: 0,
  pathKm: 0,
  routeDataLoadedStatus: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'getCarData':
      return {
        ...state,
        carData: action.carData,
      };
    case 'updateRouteData':
      return {
        ...state,
        routeData: action.routeData,
      };
    case 'updateCurrentUnitId':
      return {
        ...state,
        unitId: action.unitId,
      };
    case 'updateCurrentTripStart':
      return {
        ...state,
        tripStart: action.tripStart,
      };
    case 'updateCurrentTripEnd':
      return {
        ...state,
        tripEnd: action.tripEnd,
      };
    case 'updateRoutePath':
      return {
        ...state,
        routePath: action.routePath,
      };
    case 'updatePathKm':
      return {
        ...state,
        pathKm: action.pathKm,
      };
    case 'updateTimeDrove':
      return {
        ...state,
        timeDrove: action.timeDrove,
      };
    case 'updateTimeMean':
      return {
        ...state,
        timeMean: action.timeMean,
      };
    case 'updateRoutePathCoordinates':
      return {
        ...state,
        routePathCoordinates: action.routePathCoordinates,
      };
    case 'updateRouteDataLoadedStatus':
      return {
        ...state,
        routeDataLoadedStatus: action.routeDataLoadedStatus,
      };

    default:
      return state;
  }
};

const carDataMiddleware = (store) => (next) => (action) => {
  // console.log('action', action);
  next(action);
};

const middleware = applyMiddleware(carDataMiddleware);

const composedEnhancer = compose(middleware, composeWithDevTools());

export const store = createStore(reducer, INITIAL_STATE, composedEnhancer);
