import * as types from '../actionTypes';

export const addTask = payload => ({
  type: types.ADD_TASK,
  payload,
});

export const setTask = payload => ({
  type: types.SET_TASK,
  payload,
});
