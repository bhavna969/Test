import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import AddTask from './AddTask';
import ToDo from './ToDo';
import * as Colors from '../utils/colors';
import {addTask} from '../store/actions/ToDoListAction';

const Stack = createStackNavigator();
const Icon = MaterialCommunityIcons;

class ToDoList extends Component {
  render() {
    const {addTask, isUpdating, task, tasks} = this.props;
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
        <Stack.Screen
          name="New Task"
          component={AddTask}
          options={{
            header: ({navigation}) => {
              console.log(isUpdating);
              // const fun = () =>
              return (
                <Header
                  navigation={navigation}
                  updateTask={() => {
                    if (isUpdating) {
                      return addTask({
                        data: tasks,
                        date: task.date,
                        time: task.time,
                        task: task.task,
                      });
                    } else {
                      return alert('hi');
                    }
                  }}
                />
              );
            },
          }}
        />
      </Stack.Navigator>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.ToDoListReducer.tasks,
    task: state.ToDoListReducer.task,
    isUpdating: state.ToDoListReducer.isUpdating,
  };
};

export default connect(mapStateToProps, {addTask})(ToDoList);

// export default ToDoList;

const Header = ({navigation, updateTask}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
          updateTask();
        }}>
        <Icon name="arrow-left" color={Colors.white} size={30} />
      </TouchableOpacity>
      <Text style={styles.title}>New Task</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: Colors.blue_Green_medium_5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginLeft: 15,
    marginRight: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: '900',
    color: Colors.white,
  },
});
