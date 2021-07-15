import * as types from '../actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const INITIAL_STATE = {
  loading: false,
  user: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.REGISTRATION_START:
      return {
        ...state,
        ...INITIAL_STATE,
        loading: true,
      };
    case types.REGISTRATION_START_SUCCESS:
      AsyncStorage.setItem('registrationData', JSON.stringify(action.payload));
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
      };
    case types.REGISTRATION_START_FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
        error: action.payload,
      };
    case types.SET_REGISTRATION_DATA:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
      };
    case types.UNREGISTER:
      AsyncStorage.removeItem('registrationData');
      return {
        ...state,
        ...INITIAL_STATE,
        user: null,
      };
    default:
      return state;
  }
};
