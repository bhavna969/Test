import React, {Component} from 'react';
import {Linking} from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Settings from '../../screens/Settings';
import account from '../../screens/account';
import Notifications from '../../screens/Notifications';
import HomeScreen from '../../screens/HomeScreen';
import Location from '../../screens/Location';

const Drawer = createDrawerNavigator();
const Icon = MaterialCommunityIcons;

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerType={'front'}
      // backBehavior={'history'}
      drawerStyle={{
        width: 200,
      }}
      drawerContentOptions={{
        activeTintColor: 'navy',
        itemStyle: {margin: 10},
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: () => <Icon name="home" size={20} color="cadetblue" />,
        }}
      />
      <Drawer.Screen
        name="My Account"
        component={account}
        options={{
          drawerIcon: () => <Icon name="account" size={25} color="cadetblue" />,
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          drawerIcon: () => <Icon name="bell" size={20} color="cadetblue" />,
        }}
      />
      <Drawer.Screen
        name="Location"
        component={Location}
        options={{
          drawerIcon: () => (
            <Icon name="map-marker-radius" size={22} color="cadetblue" />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: () => <Icon name="cogs" size={22} color="cadetblue" />,
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
        Icon={() => <Icon name="help-circle" size={30} color="cadetblue" />}
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
    </DrawerContentScrollView>
  );
}

export default MyDrawer;
