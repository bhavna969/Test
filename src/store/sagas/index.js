import {fork, all} from 'redux-saga/effects';
import loginsaga from './LogInSaga';
import RegistrationSaga from './RegistrationSaga';

export default function* rootsaga() {
  yield all([fork(loginsaga)]);
  yield all([fork(RegistrationSaga)]);
}
