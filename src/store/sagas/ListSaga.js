import * as types from '../actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import API from '../../utils/api';
import {TOAST_TYPE} from '../../utils/constants';

export default function* listsaga() {
  yield takeLatest(types.GET_LIST_DATA_START, list);
}

function* list(action) {
  yield put({
    type: types.LOADER_START,
    payload: 'fetching list..',
  });
  try {
    const result = yield new API().call({
      apiEndPoints: `users?page=${action.payload.pageNo}`,
    });
    // console.log('results =>', action.payload);
    yield put({
      type: types.GET_LIST_DATA_SUCCESS,
      payload: {
        oldData: action.payload.data,
        result: result.data,
      },
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
    console.log(error);
    yield put({
      type: types.GET_LIST_DATA_ERROR,
      payload: error,
    });

    yield put({
      type: types.LOADER_STOP,
    });

    yield put({
      type: types.TOAST_SHOW,
      payload: {
        showing: true,
        message: 'There is an Error while Loading List!!',
        type: TOAST_TYPE.ERROR,
      },
    });
  }
}
