import * as types from '../actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import API from '../../utils/api';
import {TOAST_TYPE} from '../../utils/constants';

export default function* listsaga() {
  yield takeLatest(types.LIST_SHOW, list);
}

function* list() {
  yield put({
    type: types.LOADER_START,
  });
  try {
    const result = yield new API().call({
      apiEndPoints: 'users?page=2',
      // type: 'get',
      // params: action.payload,
    });
    console.log('results =>', result);
    yield put({
      type: types.LIST_SHOW_SUCCESS,
      // payload: result.data,
    });

    yield put({
      type: types.TOAST_SHOW,
      payload: {
        showing: true,
        message: 'Successfully Loaded User List!!',
        type: TOAST_TYPE.SUCCESS,
      },
    });

    yield put({
      type: types.LOADER_STOP,
    });
  } catch (error) {
    yield put({
      type: types.LIST_SHOW_FAIL,
      // payload: error,
    });

    yield put({
      type: types.LOADER_STOP,
    });

    yield put({
      type: types.TOAST_SHOW,
      payload: {
        showing: true,
        message: 'There is an Error while Showing List!!',
        type: TOAST_TYPE.ERROR,
      },
    });
  }
}
