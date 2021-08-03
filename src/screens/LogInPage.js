import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import {initLogin} from '../store/actions/LogInAction';
import {connect} from 'react-redux';

import Button from '../components/button';

import * as Colors from '../utils/colors';
import STYLES from '../utils/styles';
import {responsiveHeight, responsiveWidth} from '../utils/responsive';

class LogIn extends Component {
  state = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
    isLoggedIn: false,
    hasError: false,
  };
  render() {
    const {email, password} = this.state;
    const {user, RegisUser} = this.props;

    return (
      <View style={[STYLES.main]}>
        <ImageBackground
          source={require('../assets/images/bgImage1.png')}
          style={styles.image}>
          <View style={[styles.main]}>
            <Text style={[styles.text]}></Text>
            {RegisUser ? (
              <Image
                source={require('../assets/images/user.png')}
                style={styles.profilePic}
              />
            ) : (
              <View>
                <Text style={[styles.text]}>Not Registered</Text>
                <Image
                  source={require('../assets/images/nullImage.png')}
                  style={styles.profilePic}
                />
              </View>
            )}
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
            <View style={[styles.button]}>
              {RegisUser ? (
                <Button
                  title="LogIn"
                  onPress={() => this.props.initLogin(this.state)}
                />
              ) : (
                <Button
                  title="LogIn"
                  onPress={() =>
                    this.props.navigation.navigate('RegistrationPage')
                  }
                />
              )}
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.LoginReducer.user,
    RegisUser: state.RegistrationReducer.user,
  };
};

export default connect(mapStateToProps, {initLogin})(LogIn);

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    justifyContent: 'center',
    paddingLeft: responsiveWidth(10),
    paddingRight: responsiveWidth(10),
    flex: 1,
  },
  text: {
    fontSize: responsiveWidth(7),
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    textAlign: 'center',
    alignSelf: 'center',
    color: Colors.Brown_dark_5,
  },
  button: {
    height: responsiveHeight(8),
    alignItems: 'center',
  },
  profilePic: {
    height: responsiveWidth(30),
    width: responsiveWidth(30),
    marginVertical: responsiveHeight(5),
    borderRadius: responsiveWidth(100),
    alignContent: 'center',
    alignSelf: 'center',
  },
});
