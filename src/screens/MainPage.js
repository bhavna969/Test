import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

import STYLES from '../utils/styles';
import Registration from './RegistrationPage';
import LogInPage from './LogInPage';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

class MainPage extends Component {
  render() {
    const {LogInUser, RegisUser} = this.props;

    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'cadetblue'},
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 20,
            },
          }}>
          <Stack.Screen name="MyApp" component={HomeScreen} />
          <Stack.Screen name="RegistrationPage" component={Registration} />
          <Stack.Screen name="LogInPage" component={LogInPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const HomeScreen = ({navigation}) => {
  return (
    <View style={[STYLES.main, styles.main]}>
      <Image
        source={require('../assets/images/wallpaper.png')}
        style={styles.image}
      />
      <View style={[styles.container]}>
        <Image
          source={require('../assets/images/welcome.png')}
          style={styles.welcomePic}
        />
        <View style={[styles.button]}>
          <Button
            title="Sign UP"
            onPress={() => navigation.navigate('RegistrationPage')}
            color="teal"
          />
          <View />
          <Button
            title="LOGIN"
            onPress={() => navigation.navigate('LogInPage')}
            color="teal"
          />
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = state => {
  return {
    LogInUser: state.LoginReducer.user,
    RegisUser: state.RegistrationReducer.user,
  };
};

export default connect(mapStateToProps)(MainPage);

const styles = StyleSheet.create({
  main: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
  },
  welcomePic: {
    height: 180,
    width: '80%',
    borderWidth: 10,
    borderRadius: 200,
  },
  container: {
    padding: 30,
    width: '100%',
    height: '100%',
    borderWidth: 2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backfaceVisibility: 'visible',
    position: 'absolute',
  },
  button: {
    padding: 20,
    width: 300,
    height: 150,
    justifyContent: 'space-evenly',
  },
});
