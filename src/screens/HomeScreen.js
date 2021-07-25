import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from 'react-native';

import {DrawerActions} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icons = MaterialCommunityIcons;

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={[styles.main]}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.image}>
        {/* <View style={styles.header}>
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Text style={[styles.drawerTab]}>click</Text>
          </Pressable>
        </View> */}
        <View style={[styles.container]}>
          <View style={{width: 200}} />
          {/* <Pressable
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Text style={[styles.drawerTab]}>click</Text>
          </Pressable> */}
          <Text style={[styles.text]}>Home Screen</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    width: '100%',
    // borderWidth: 2,
  },
  container: {
    justifyContent: 'center',
    // margin: 10,
    width: '100%',
    height: '100%',
    padding: 30,
    borderWidth: 2,
  },
  text: {
    fontSize: 18,
    width: 200,
    height: 50,
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  header: {
    backgroundColor: 'cadetblue',
    alignContent: 'flex-end',
  },
  drawerTab: {
    borderWidth: 2,
    width: 50,
    height: 40,
    fontSize: 20,
    marginTop: 30,
    alignSelf: 'flex-end',
    textAlign: 'center',
  },
});
