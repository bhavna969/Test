import * as types from '../actionTypes';

export const fetchLocation = payload => ({
  type: types.GET_LOCATION_START,
  payload,
});
