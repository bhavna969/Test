import * as types from '../actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import API from '../../utils/api';
import {TOAST_TYPE} from '../../utils/constants';

export default function* registrationsaga() {
  yield takeLatest(types.REGISTRATION_START, registration);
}

function* registration(action) {
  yield put({
    type: types.LOADER_START,
  });
  try {
    const result = yield new API().call({
      apiEndPoints: 'register',
      type: 'post',
      params: action.payload,
    });

    //console.log("register saga response: ",result);

    yield put({
      type: types.TOAST_SHOW,
      payload: {
        message: 'Successfully Registered!!',
        type: TOAST_TYPE.SUCCESS,
      },
    });

    yield put({
      type: types.REGISTRATION_START_SUCCESS,
      payload: result.data,
    });

    yield put({
      type: types.LOADER_STOP,
    });
  } catch (error) {
    //console.log("register saga error: ",error);
    yield put({
      type: types.TOAST_SHOW,
      payload: {
        message: 'There is an Error while Registering!!',
        type: TOAST_TYPE.ERROR,
      },
    });

    yield put({
      type: types.REGISTRATION_START_FAIL,
      payload: error,
    });

    yield put({
      type: types.LOADER_STOP,
    });
  }
}
