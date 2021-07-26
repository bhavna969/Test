import * as types from '../actionTypes';

const INITIAL_STATE = {
  loading: false,
  message: 'Loading...',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOADER_START:
      return {
        ...state,
        loading: true,
        message: action.payload,
      };
    case types.LOADER_STOP:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
