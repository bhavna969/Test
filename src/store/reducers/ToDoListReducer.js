import * as types from '../actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {act} from 'react-test-renderer';

const INITIAL_STATE = {
  tasks: [],
  error: null,
  task: null,
  isUpdating: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      const newTask = {
        task: action.payload.task,
        date: action.payload.date,
        time: action.payload.time,
        id: `${action.payload.task}-${action.payload.date}-${action.payload.time}`,
      };
      const updatedData = [...action.payload.data, newTask];
      if (action.payload.data !== []) AsyncStorage.removeItem('Data');
      AsyncStorage.setItem('Data', JSON.stringify(updatedData));
      return {
        ...state,
        ...INITIAL_STATE,
        tasks: updatedData,
      };
    case types.SET_TASK:
      return {
        ...state,
        error: null,
        tasks: action.payload,
      };
    case types.PUT_TASK:
      return {
        ...state,
        error: null,
        task: action.payload.task,
        tasks: action.payload.data,
        isUpdating: action.payload.isUpdating,
      };
    default:
      return state;
  }
};
