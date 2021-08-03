import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import {
  initRegistration,
  unregister,
} from '../store/actions/RegistrationAction';

import Loader from '../components/loader';
import Button from '../components/button';

import STYLES from '../utils/styles';
import * as Colors from '../utils/colors';
import {responsiveHeight, responsiveWidth} from '../utils/responsive';

class Registration extends Component {
  state = {
    email: 'eve.holt@reqres.in',
    password: 'pistol',
    firstName: '',
    lastName: '',
    isRegistered: false,
    hasError: false,
  };
  render() {
    const {email, password, firstName, lastName} = this.state;
    const {initRegistration, unregister, user, loading} = this.props;

    // if (loading) return <Loader />;
    if (user) {
      return (
        <View style={[STYLES.main, styles.container]}>
          <ImageBackground
            source={require('../assets/images/bg.png')}
            style={styles.image}>
            <View style={[styles.main]}>
              <Text style={[styles.text]}>User Registered!!</Text>
              <View style={[styles.button]}>
                <Button
                  title="Unregister"
                  onPress={() => unregister(this.state)}
                />
                <Button
                  title="Go to login page"
                  onPress={() => this.props.navigation.navigate('LogIn')}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      );
    }

    return (
      <View style={[STYLES.main, styles.container]}>
        <ImageBackground
          source={require('../assets/images/bgImage.png')}
          style={styles.image}>
          <View style={[styles.main]}>
            <Text style={[styles.text]}>
              Fill the following details to register
            </Text>
            <TextInput
              value={firstName}
              placeholder="Enter First Name"
              style={STYLES.input}
              onChangeText={value => this.setState({firstName: value})}
            />
            <TextInput
              value={lastName}
              placeholder="Enter Last Name"
              style={STYLES.input}
              onChangeText={value => this.setState({lastName: value})}
            />
            <TextInput
              value={email}
              placeholder="enter Email"
              style={STYLES.input}
              onChangeText={value => this.setState({email: value})}
            />
            <TextInput
              value={password}
              placeholder="enter password"
              secureTextEntry
              style={STYLES.input}
              onChangeText={value => this.setState({password: value})}
            />
            <View style={[styles.button, {height: responsiveHeight(8)}]}>
              <Button
                title="Register"
                onPress={() => initRegistration(this.state)}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.RegistrationReducer.user,
    loading: state.RegistrationReducer.loading,
  };
};
export default connect(mapStateToProps, {
  initRegistration,
  unregister,
})(Registration);

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  main: {
    // borderWidth: 1,
    width: responsiveWidth(100),
    padding: responsiveWidth(8),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: responsiveHeight(3),
    height: responsiveHeight(8),
    textAlign: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    color: Colors.Brown_dark_5,
  },
  button: {
    height: responsiveHeight(15),
    alignItems: 'center',
  },
});
