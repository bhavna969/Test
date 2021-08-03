import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';

import Registration from './RegistrationPage';
import LogIn from './LogInPage';
import Animations from './Slider';

import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import Button from '../components/button';

import * as Colors from '../utils/colors';
import STYLES from '../utils/styles';
import {responsiveHeight} from '../utils/responsive';

const Stack = createStackNavigator();

class MainPage extends Component {
  render() {
    const {LogInUser, RegisUser} = this.props;

    return (
      <Stack.Navigator
        screenOptions={{
          headerTintColor: Colors.white,
          headerStyle: {backgroundColor: Colors.blue_Green_medium_5},
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: responsiveHeight(3),
          },
        }}>
        <Stack.Screen name="MyApp" component={HomeScreen} />
        <Stack.Screen name="RegistrationPage" component={Registration} />
        <Stack.Screen name="LogIn" component={LogIn} />
      </Stack.Navigator>
    );
  }
}

const HomeScreen = ({navigation}) => {
  return (
    <View style={[STYLES.main]}>
      <ImageBackground
        source={require('../assets/images/wallpaper.png')}
        style={styles.image}>
        <Animations />
        <View style={[styles.button]}>
          <Button
            title="SignUp"
            onPress={() => navigation.navigate('RegistrationPage')}
          />
          <View />
          <Button title="LogIn" onPress={() => navigation.navigate('LogIn')} />
        </View>
      </ImageBackground>
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
  image: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    height: responsiveHeight(15),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: responsiveHeight(5),
  },
});
