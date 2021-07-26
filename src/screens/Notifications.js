import React from 'react';
import {View, Text, StyleSheet, Button, ImageBackground} from 'react-native';
import Header from '../components/header';

function Notifications({navigation}) {
  return (
    <View style={[styles.main]}>
      <Header navigation={navigation} />
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.image}>
        <View style={[styles.container]}>
          <Text style={[styles.text]}>Notifications</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Notifications;

const styles = StyleSheet.create({
  main: {
    // borderWidth: 2,
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
    margin: 10,
    // borderWidth: 1,
    width: '95%',
    // padding: 10,
  },
  text: {
    fontSize: 18,
    // borderWidth: 2,
    borderRadius: 50,
    width: '80%',
    // height: 50,
    padding: 8,
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
});
