import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AddTask from './AddTask';
import ToDo from './ToDo';

const Stack = createStackNavigator();

class ToDoList extends Component {
  render() {
    data = this.props.tasks;
    return (
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'cadetblue'},
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 20,
          },
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={ToDo}
          options={{headerShown: false}}
        />
        <Stack.Screen name="New Task" component={AddTask} />
      </Stack.Navigator>
    );
  }
}

export default ToDoList;
