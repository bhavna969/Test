import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import ListPage from '../../screens/ListPage';
import MyDrawer from './DrawerNavigation';
import * as Colors from '../../utils/colors';

const Tab = createMaterialBottomTabNavigator();
const Icons = MaterialCommunityIcons;

class Home extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          swipeEnabled={true}
          labeled={true}
          shifting={true}
          activeColor={Colors.white}
          // inactiveColor={Colors.grey_dark_2}
          barStyle={{
            backgroundColor: Colors.blue_Green_medium_5,
            height: 50,
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
                <Icons
                  name={icons[route.name]}
                  color={color}
                  size={size}
                  // focused={focused}
                />
              );
            },
          })}>
          <Tab.Screen name="Home" component={MyDrawer} />
          <Tab.Screen name="Users" component={ListPage} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default Home;
