import { combineReducers } from 'redux';
import vehicleReducer from './vehicle/vehicleReducer';
import routeReducer from './route/routeReducer';

const rootReducer = combineReducers({
  vehicles: vehicleReducer,
  routes: routeReducer,
});

export default rootReducer;
