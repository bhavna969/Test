import * as types from '../actionTypes';

const INITIAL_STATE = {
  loading: false,
  user: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGOUT_START:
      return {
        ...state,
        ...INITIAL_STATE,
        user: null,
        loading: true,
      };
    case types.LOGOUT_STOP:
      return {
        loading: false,
      };
    default:
      return state;
  }
};
