import * as types from '../actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import API from '../../utils/api';
import {TOAST_TYPE} from '../../utils/constants';

export default function* loginsaga() {
  yield takeLatest(types.LOGIN_START, login);
}

function* login(action) {
  yield put({
    type: types.LOADER_START,
  });
  try {
    const result = yield new API().call({
      apiEndPoints: 'login',
      type: 'post',
      params: action.payload,
    });

    yield put({
      type: types.LOGIN_START_SUCCESS,
      payload: result.data,
    });

    yield put({
      type: types.TOAST_SHOW,
      payload: {
        showing: true,
        message: 'Successfully Logged In!!',
        type: TOAST_TYPE.SUCCESS,
      },
    });

    yield put({
      type: types.LOADER_STOP,
    });
  } catch (error) {
    yield put({
      type: types.LOGIN_START_FAIL,
      payload: error,
    });

    yield put({
      type: types.LOADER_STOP,
    });

    yield put({
      type: types.TOAST_SHOW,
      payload: {
        showing: true,
        message: 'There is an Error while Loggiong in!!',
        type: TOAST_TYPE.ERROR,
      },
    });
  }
}
