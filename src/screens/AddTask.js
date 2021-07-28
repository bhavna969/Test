import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../utils/colors';
import {addTask} from '../store/actions/ToDoListAction';

const Icon = MaterialCommunityIcons;

let data = [];

class AddTask extends Component {
  state = {
    task: null,
    date: null,
    time: 'all day',
  };

  add = () => {
    const {task, date, time} = this.state;
    let msg = null;
    if (this.state.task && this.state.date) {
      msg = 'successfully added task';
      this.props.addTask({data, task, time, date});
    } else {
      msg = 'task cannot be empty';
    }
    alert(msg);
    this.props.navigation.goBack();
  };
  render() {
    data = this.props.tasks;
    const {navigation} = this.props;

    return (
      <View style={[styles.main]}>
        <ImageBackground
          source={require('../assets/images/background.png')}
          style={styles.image}>
          <Text style={[styles.text]}>What is to be done?</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Task"
            onChangeText={value => this.setState({task: value})}
          />
          <Text style={[styles.text]}>Due date</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Date"
            onChangeText={value => this.setState({date: value})}
          />
          <Text style={[styles.text]}>Due time</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter time (By default all day)"
            onChangeText={value => this.setState({time: value})}
          />
          <TouchableOpacity style={styles.button} onPress={() => this.add()}>
            <Icon name="check" color={Colors.grey_dark_3} size={40} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.ToDoListReducer.tasks,
  };
};

export default connect(mapStateToProps, {addTask})(AddTask);

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    paddingTop: 20,
    // alignItems: 'center',
  },
  text: {
    marginLeft: 30,
    fontSize: 20,
    color: Colors.blue_dark_5,
    marginVertical: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.blue_dark_5,
    margin: 20,
    fontSize: 20,
    margin: 20,
    marginVertical: 10,
  },
  button: {
    padding: 20,
    borderRadius: 50,
    backgroundColor: Colors.blue_medium_1,
    position: 'absolute',
    marginTop: 450,
    marginLeft: 300,
  },
});
