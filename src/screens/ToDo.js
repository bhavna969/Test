import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../components/header';
import {setTask, putTask, addTask} from '../store/actions/ToDoListAction';
import * as Colors from '../utils/colors';

import {responsiveHeight, responsiveWidth} from '../utils/responsive';

const Icon = MaterialCommunityIcons;
let data = [];

class ToDo extends Component {
  state = {
    loading: true,
    added: false,
    deleted: false,
    updated: false,
  };
  componentDidMount() {
    AsyncStorage.getItem('Data')
      .then(Data => {
        this.setState({loading: false});
        if (Data) {
          this.props.setTask(JSON.parse(Data));
        }
      })
      .catch(() => {
        this.setState({loading: false});
      });
  }
  changeStateOne = () => this.setState({added: !this.state.added});
  changeStateTwo = () => this.setState({deleted: !this.state.deleted});
  changeStateThree = () => this.setState({updated: !this.state.updated});

  deleteTask = item => {
    const index = data.indexOf(item.item);
    if (index > -1) {
      data.splice(index, 1);
    }
    AsyncStorage.removeItem('Data');
    AsyncStorage.setItem('Data', JSON.stringify(data));
    AsyncStorage.getItem('Data').then(Data => {
      if (Data) {
        // console.log(item, index, Data);
        this.props.setTask(JSON.parse(Data));
      }
    });
    this.changeStateTwo();
  };

  updateTask = item => {
    this.deleteTask({item: item.item});
    this.props.putTask({task: item.item, data: data, isUpdating: true});
    this.props.navigation.navigate('New Task');
    this.changeStateThree();
  };

  componentDidUpdate() {
    data = this.props.tasks;
  }

  render() {
    const {navigation, tasks} = this.props;
    data = tasks;

    const renderItem = ({item}) => {
      return (
        <Item
          item={item}
          onPressDelete={() => this.deleteTask({item})}
          onPressUpdate={() => this.updateTask({item})}
        />
      );
    };
    return (
      <View style={[styles.main]}>
        <Header navigation={navigation} />
        <ImageBackground
          source={require('../assets/images/background.png')}
          style={styles.image}>
          <FlatList
            data={data}
            renderItem={renderItem}
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={() => this.props.setTask(data)}
              />
            }
            key={data.length}
          />
        </ImageBackground>
        <TouchableOpacity
          style={[styles.add]}
          onPress={() =>
            navigation.navigate('New Task') && this.changeStateOne()
          }>
          <Icon name="plus" color={Colors.blue_Green_medium_5} size={60} />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.ToDoListReducer.tasks,
  };
};

export default connect(mapStateToProps, {setTask, putTask, addTask})(ToDo);

const Item = ({item, onPressDelete, onPressUpdate}) => {
  const {task, time, date} = item;
  return (
    <View style={[styles.container]}>
      <TouchableOpacity style={[styles.box]} onPress={onPressUpdate}>
        <Text style={[styles.item]}>{task}</Text>
        <View style={[styles.timeBox]}>
          <Text style={[styles.item]}>{date}, </Text>
          <Text style={[styles.item]}>{time}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button]} onPress={onPressDelete}>
        <Icon name="delete-outline" color="red" size={40} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    // borderWidth: 2,
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
  },
  add: {
    position: 'absolute',
    // backfaceVisibility: 'visible',
    height: 80,
    width: 80,
    marginTop: responsiveHeight(80),
    marginLeft: responsiveWidth(70),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 50,
  },
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box: {
    borderBottomWidth: 1,
    width: '85%',
    marginVertical: 10,
    borderColor: Colors.blue_medium_2,
    // backgroundColor: 'skyblue',
    paddingLeft: 10,
    marginLeft: 10,
  },
  item: {
    fontSize: 18,
    padding: 10,
    color: Colors.blue_dark_5,
  },
  timeBox: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: Colors.blue_medium_2,
  },
  button: {},
});
