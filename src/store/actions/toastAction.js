import * as types from '../actionTypes';

export const toasterShow = paylaod => ({
  type: types.TOAST_SHOW,
  paylaod,
});

export const toasterHide = () => ({
  type: types.TOAST_HIDE,
});
