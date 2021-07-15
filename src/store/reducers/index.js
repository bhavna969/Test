import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import RegistrationReducer from './RegistrationReducer';
import loaderReducer from './loaderReducer';
import LogoutReducer from './LogoutReducer';
import toastReducer from './toastReducer';
import ListReducer from './ListReducer';

export default combineReducers({
  LoginReducer,
  RegistrationReducer,
  loaderReducer,
  LogoutReducer,
  toastReducer,
  ListReducer,
});
