import * as types from '../actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {TOAST_TYPE} from '../../utils/constants';

export const ACCESS_TOKEN =
  'pk.eyJ1IjoiYmhhdm5hY2hhdWRoYXJ5IiwiYSI6ImNrcjk0cWJqdTQ2M3YycXFhYjdkcTBudGoifQ.8jrmGE3QzNrgnIdTE2H0kQ';

export default function* LocationSaga() {
  yield takeLatest(types.GET_LOCATION_START, location);
}

function* location(action) {
  yield put({
    type: types.LOADER_START,
  });
  try {
    const result = yield axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${action.payload.longitude},${action.payload.latitude}.json?access_token=${ACCESS_TOKEN}`,
    );
    // console.log(result);
    yield put({
      type: types.GET_LOCATION_SUCCESS,
      payload: result.data.features[1],
    });

    yield put({
      type: types.TOAST_SHOW,
      payload: {
        showing: true,
        message: 'Successfully Fetched Location',
        type: TOAST_TYPE.SUCCESS,
      },
    });

    yield put({
      type: types.LOADER_STOP,
    });
  } catch (error) {
    yield put({
      type: types.GET_LOCATION_FAIL,
      payload: error,
    });

    yield put({
      type: types.LOADER_STOP,
    });

    yield put({
      type: types.TOAST_SHOW,
      payload: {
        showing: true,
        message: 'There is an Error while Fetching Location!!',
        type: TOAST_TYPE.ERROR,
      },
    });
  }
}
