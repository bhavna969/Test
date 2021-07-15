import * as types from '../actionTypes';
import {TOAST_TYPE} from '../../utils/constants';

const INITIAL_STATE = {
  showing: false,
  message: 'hi',
  type: TOAST_TYPE.NORMAL,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TOAST_SHOW:
      return {
        ...state,
        showing: true,
        message: action.payload.message,
        type: action.payload.type || TOAST_TYPE.NORMAL,
      };
    case types.TOAST_HIDE:
      return {
        ...state,
        showing: false,
        //message : '',
      };
    default:
      return state;
  }
};
