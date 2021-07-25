import * as types from '../actionTypes';

export const showList = payload => ({
  type: types.GET_LIST_DATA_START,
  payload,
});
