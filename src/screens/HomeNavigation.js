import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Settings from './Settings';
import ListPage from './ListPage';
import account from './account';

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

class Home extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: {fontSize: 16, color: 'white'},
            tabStyle: {height: 50},
            style: {backgroundColor: 'cadetblue'},
            pressOpacity: 10,
            indicatorStyle: {backgroundColor: 'navy'},
          }}>
          <Tab.Screen name="Home" component={MyDrawer} />
          <Tab.Screen name="Users" component={ListPage} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="My Account" component={account} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

function HomeScreen() {
  return (
    <View style={[styles.main]}>
      <Image
        source={require('../assets/images/background.png')}
        style={styles.image}
      />

      <View style={[styles.container]}>
        <Text style={[styles.text]}>Home Screen</Text>
      </View>
    </View>
  );
}

function Notifications() {
  return (
    <View style={[styles.main]}>
      <Image
        source={require('../assets/images/background.png')}
        style={styles.image}
      />

      <View style={[styles.container]}>
        <Text style={[styles.text]}>Notifications</Text>
      </View>
    </View>
  );
}

export default connect(null)(Home);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backfaceVisibility: 'visible',
    position: 'absolute',
    justifyContent: 'center',
    margin: 10,
    width: '95%',
    padding: 30,
  },
  text: {
    fontSize: 18,
    width: 200,
    height: 50,
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  image: {
    flex: 1,
    width: '100%',
  },
});
