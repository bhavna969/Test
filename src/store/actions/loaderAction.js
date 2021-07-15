import * as types from '../actionTypes';

export const loaderStart = () => ({
  type: types.LOADER_START,
});

export const loaderStop = () => ({
  type: types.LOADER_STOP,
});
