import * as types from '../actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const INITIAL_STATE = {
  tasks: [],
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      // console.log('reducer', action.payload);
      // const ID = action.payload.id + 1;
      const newTask = {
        task: action.payload.task,
        date: action.payload.date,
        time: action.payload.time,
        id: `${action.payload.task}-${action.payload.date}`,
      };
      const updatedData = [...action.payload.data, newTask];
      // console.log(updatedData);
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
        ...INITIAL_STATE,
        tasks: action.payload,
      };
    default:
      return state;
  }
};
