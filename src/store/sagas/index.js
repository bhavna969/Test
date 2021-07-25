import {fork, all} from 'redux-saga/effects';
import listsaga from './ListSaga';
import LocationSaga from './LocationSaga';
import loginsaga from './LogInSaga';
import RegistrationSaga from './RegistrationSaga';

export default function* rootsaga() {
  yield all([fork(loginsaga)]);
  yield all([fork(RegistrationSaga)]);
  yield all([fork(listsaga)]);
  yield all([fork(LocationSaga)]);
}
