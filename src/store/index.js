/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// https://mapon.com/api/v1/unit/list.json?key=ed6dc5516f66531096e66628e84d10fd2371c87a

// https://mapon.com/api/v1/route/list.json?key=ed6dc5516f66531096e66628e84d10fd2371c87a&include[]=polyline
// https://mapon.com/api/v1/route/list.json?key=ed6dc5516f66531096e66628e84d10fd2371c87a&include[]=decoded_route

// https://mapon.com/api/v1/route/list.json?key=ed6dc5516f66531096e66628e84d10fd2371c87a&unit_id[]=71507&include[]=decoded_route

// https://mapon.com/api/v1/route/list.json?key=ed6dc5516f66531096e66628e84d10fd2371c87a&unit_id[]=71507&include[]=decoded_route&from[]=2017-10-19T17%3A47%3A30Z&till[]=2022-01-12T21%3A07%3A17Z

// https://mapon.com/api/v1/route/list.json?key=ed6dc5516f66531096e66628e84d10fd2371c87a%26unit_id%5B%5D%3D71507%26include%5B%5D%3Ddecoded_route%26from%5B%5D%3D2017-10-19T17%3A47%3A30Z%26till%5B%5D%3D2022-01-12T21%3A07%3A17Z%0A

const INITIAL_STATE = {
  carData: [],
  routeData: {},
  unitId: 0,
  tripStart: 0,
  tripEnd: 0,
  routePath: 0,
  pathKm: 0,
};

// https://mapon.com/api/v1/route/list.json?key=ed6dc5516f66531096e66628e84d10fd2371c87a&unit_id[]=71507&include[]=decoded_route&from[]=2021-10-19&till[]=2022-01-12

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
