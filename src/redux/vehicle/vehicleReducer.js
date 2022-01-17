import {
  FETCH_VEHICLES_REQUEST,
  FETCH_VEHICLES_SUCCESS,
  FETCH_VEHICLES_FAILURE,
} from './vehicleTypes';

const initialState = {
  loading: false,
  vehicles: [],
  error: '',
};

const vehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VEHICLES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_VEHICLES_SUCCESS:
      return {
        loading: false,
        vehicles: action.payload,
        error: '',
      };
    case FETCH_VEHICLES_FAILURE:
      return {
        loading: false,
        vehicles: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default vehicleReducer;
