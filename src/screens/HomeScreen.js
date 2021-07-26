import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Header from '../components/header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icons = MaterialCommunityIcons;

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={[styles.main]}>
      <Header navigation={navigation} showBellIcon />
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.image}>
        <View style={[styles.container]}>
          <View style={{width: 200}} />
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
    // borderWidth: 2,
  },
  text: {
    fontSize: 18,
    width: 200,
    height: 50,
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
});
