import * as types from '../actionTypes';

export const initRegistration = payload => ({
  type: types.REGISTRATION_START,
  payload,
});

export const setRegistrationData = payload => ({
  type: types.SET_REGISTRATION_DATA,
  payload,
});

export const unregister = () => ({
  type: types.UNREGISTER,
});
