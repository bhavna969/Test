import * as types from '../actionTypes';

const INITIAL_STATE = {
  loading: false,
  location: 'Not Set',
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_LOCATION_START:
      return {
        ...state,
        ...INITIAL_STATE,
        loading: true,
      };
    case types.GET_LOCATION_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        location: action.payload.place_name,
      };
    case types.GET_LOCATION_FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
        error: action.payload,
      };
    default:
      return state;
  }
};
