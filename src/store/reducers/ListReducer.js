import * as types from '../actionTypes';

const INITIAL_STATE = {
  loading: false,
  listData: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LIST_SHOW:
      return {
        ...state,
        ...INITIAL_STATE,
        loading: true,
      };
    case types.LIST_SHOW_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        listData: action.payload,
      };
    case types.LIST_SHOW_ERROR:
      return {
        ...state,
        ...INITIAL_STATE,
        error: action.payload,
      };
    default:
      return state;
  }
};
