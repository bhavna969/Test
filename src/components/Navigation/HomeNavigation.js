import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  Linking,
} from 'react-native';
import {connect} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Settings from '../../screens/Settings';
import ListPage from '../../screens/ListPage';
import account from '../../screens/account';
import Notifications from '../../screens/Notifications';
import MyDrawer from './DrawerNavigation';

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const Icons = MaterialCommunityIcons;

class Home extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          swipeEnabled={true}
          // tabBarPosition={'bottom'}
          keyboardDismissMode={'on-drag'}
          tabBarOptions={{
            activeTintColor: '#e91e63',
            inactiveTintColor: 'red',
            showIcon: true,
            pressColor: 'navy',
            labelStyle: {fontSize: 11, color: 'white'},
            tabStyle: {height: 50},
            style: {backgroundColor: 'cadetblue', borderRadius: 10},
            pressOpacity: 10,
            indicatorStyle: {backgroundColor: 'white'},
          }}>
          <Tab.Screen
            name="Home"
            component={MyDrawer}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: () => <Icons name="home" color={'white'} size={30} />,
              tabBarBadge: 3,
            }}
          />
          <Tab.Screen
            name="Users"
            component={ListPage}
            options={{
              tabBarIcon: () => (
                <Icons name="account-search" color={'white'} size={30} />
              ),
              tabBarBadge: 3,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default Home;
