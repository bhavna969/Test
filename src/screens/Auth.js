import React, {Component} from 'react';
import {Linking} from 'react-native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {setUserData} from '../store/actions/LogInAction';
import {setRegistrationData} from '../store/actions/RegistrationAction';

import MainPage from './MainPage';
import ListPage from './ListPage';
import Settings from './Settings';
import account from './account';
import Notifications from './Notifications';
import Home from './HomeScreen';
import Location from './Location';
import ToDoList from './ToDoList';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../utils/colors';
import {responsiveHeight, responsiveWidth} from '../utils/responsive';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
const Icon = MaterialCommunityIcons;

class Auth extends Component {
  componentDidMount() {
    AsyncStorage.getItem('userData')
      .then(data => {
        this.setState({loading: false});
        if (data) {
          this.props.setUserData(JSON.parse(data));
        }
      })
      .catch(() => {
        this.setState({loading: false});
      });

    AsyncStorage.getItem('registrationData')
      .then(data => {
        this.setState({loading: false});
        if (data) {
          this.props.setRegistrationData(JSON.parse(data));
        }
      })
      .catch(() => {
        this.setState({loading: false});
      });
  }

  render() {
    const {LoginUser, RegistrationUser} = this.props;

    return (
      <NavigationContainer>
        {LoginUser && RegistrationUser ? (
          <Stack.Navigator>
            <Stack.Screen
              name="MyDrawer"
              component={MyDrawer}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Notifications" component={Notifications} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={MainPage}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    LoginUser: state.LoginReducer.user,
    RegistrationUser: state.RegistrationReducer.user,
    loading: state.LoginReducer.loading,
  };
};

export default connect(mapStateToProps, {
  setUserData,
  setRegistrationData,
})(Auth);

// Drawer Navigation

function MyDrawer({navigation}) {
  return (
    <Drawer.Navigator
      drawerStyle={{
        width: responsiveWidth(60),
        backgroundColor: Colors.white,
      }}
      drawerContentOptions={{
        activeTintColor: Colors.Green_medium_5,
        itemStyle: {margin: 10, padding: 5},
        labelStyle: {fontSize: 15, color: Colors.blue_Green_medium_5},
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Icon name="home" size={20} color={Colors.blue_Green_medium_5} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Account"
        component={account}
        options={{
          drawerIcon: () => (
            <Icon name="account" size={25} color={Colors.blue_Green_medium_5} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          drawerIcon: () => (
            <Icon name="bell" size={20} color={Colors.blue_Green_medium_5} />
          ),
        }}
      />
      <Drawer.Screen
        name="Location"
        component={Location}
        options={{
          drawerIcon: () => (
            <Icon
              name="map-marker-radius"
              size={22}
              color={Colors.blue_Green_medium_5}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ToDoList"
        component={ToDoList}
        options={{
          drawerIcon: () => (
            <Icon
              name="clipboard-outline"
              size={22}
              color={Colors.blue_Green_medium_5}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({}) => (
            <Icon name="cogs" size={22} color={Colors.blue_Green_medium_5} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        labelStyle={{fontSize: 15, color: Colors.blue_Green_medium_5}}
        icon={() => (
          <Icon
            name="help-circle-outline"
            color={Colors.blue_Green_medium_5}
            size={22}
          />
        )}
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
    </DrawerContentScrollView>
  );
}

//Tab Navigation

function HomeScreen({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      swipeEnabled={true}
      labeled={true}
      shifting={true}
      activeColor={Colors.white}
      barStyle={{
        backgroundColor: Colors.blue_Green_medium_5,
        height: responsiveHeight(8),
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({
          // focused = true,
          color = Colors.blue_medium_2,
          size = 25,
        }) => {
          const icons = {
            Home: 'home',
            Users: 'account-group',
          };
          return (
            <Icon
              name={icons[route.name]}
              color={color}
              size={size}
              // focused={focused}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Users" component={ListPage} />
    </Tab.Navigator>
  );
}
