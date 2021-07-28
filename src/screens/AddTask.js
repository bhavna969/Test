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

import DateTimePicker from '@react-native-community/datetimepicker';

import * as Colors from '../utils/colors';
import {addTask} from '../store/actions/ToDoListAction';

const Icon = MaterialCommunityIcons;

let data = [];

class AddTask extends Component {
  state = {
    task: null,
    date: new Date(),
    time: new Date(),
    showCalender: false,
    showWatch: false,
    dateShow: 'Date Not Set',
    timeShow: 'Time Not Set (all day)',
  };

  add = () => {
    const {task, date, time} = this.state;
    let msg = null;
    if (this.state.task) {
      msg = 'successfully added task';
      this.props.addTask({
        data,
        task,
        time: JSON.stringify(time).slice(12, 17),
        date: JSON.stringify(date).slice(1, 11),
      });
    } else {
      msg = 'task cannot be empty';
    }
    alert(msg);
    this.props.navigation.goBack();
  };

  toggleCalender = () =>
    this.setState({showCalender: !this.state.showCalender});

  toggleWatch = () => this.setState({showWatch: !this.state.showWatch});

  onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    // console.log(typeof currentDate); //Object
    this.setState({
      showCalender: !this.state.showCalender,
      date: currentDate,
      dateShow: JSON.stringify(currentDate).slice(1, 11),
    });
  };

  onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || this.state.time;
    // console.log(currentTime); //Object
    this.setState({
      showWatch: !this.state.showWatch,
      time: currentTime,
      timeShow: JSON.stringify(currentTime).slice(12, 17),
    });
  };

  render() {
    data = this.props.tasks;
    const {date, dateShow, showCalender, timeShow, showWatch, time} =
      this.state;
    // console.log(date);
    return (
      <View style={[styles.main]}>
        <ImageBackground
          source={require('../assets/images/background.png')}
          style={styles.image}>
          <Text style={[styles.text]}>What is to be done?</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Task Here"
            onChangeText={value => this.setState({task: value})}
          />
          <Text style={[styles.text]}>Due date</Text>
          <TouchableOpacity
            style={styles.calender}
            onPress={() => this.toggleCalender()}>
            <Text style={[styles.date]}>{dateShow}</Text>
            <View style={{paddingRight: 20}}>
              <Icon
                name="calendar-range"
                color={Colors.blue_Green_medium_5}
                size={40}
              />
            </View>
          </TouchableOpacity>
          {showCalender ? (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              // is24Hour={true}
              timeZoneOffsetInMinutes={65}
              display="default"
              onChange={this.onChangeDate}
            />
          ) : (
            <View />
          )}
          {dateShow != 'Date Not Set' ? (
            <TouchableOpacity
              style={styles.calender}
              onPress={() => this.toggleWatch()}>
              <Text style={[styles.date]}>{timeShow}</Text>
              <View style={{paddingRight: 20}}>
                <Icon
                  name="clock-outline"
                  color={Colors.blue_Green_medium_5}
                  size={40}
                />
              </View>
            </TouchableOpacity>
          ) : (
            <View />
          )}
          {showWatch ? (
            <DateTimePicker
              testID="dateTimePicker"
              value={time}
              mode={'time'}
              // is24Hour={true}
              display="default"
              onChange={this.onChangeTime}
            />
          ) : (
            <View />
          )}
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
  },
  text: {
    marginLeft: 20,
    fontSize: 20,
    color: Colors.blue_dark_5,
    marginTop: 30,
  },
  input: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.blue_dark_5,
    fontSize: 20,
    marginLeft: 20,
  },
  date: {
    width: '80%',
    // borderWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.blue_dark_5,
    fontSize: 20,
    marginLeft: 20,
    alignSelf: 'center',
    padding: 7,
    marginTop: 5,
    color: Colors.grey_light_1,
  },
  calender: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
