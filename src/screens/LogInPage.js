import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TextInput, Image} from 'react-native';
import STYLES from '../utils/styles';
import {initLogin} from '../store/actions/LogInAction';
import {connect} from 'react-redux';
import Home from './HomeNavigation';

class LogIn extends Component {
  state = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
    isLoggedIn: false,
    hasError: false,
  };
  render() {
    const {email, password, isLoggedIn, hasError} = this.state;
    const {user, RegisUser} = this.props;

    if (user) {
      return <Home />;
    }

    return (
      <View style={[STYLES.main, styles.container]}>
        <Image
          source={require('../assets/images/bgImage1.png')}
          style={styles.image}
        />
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
            style={styles.input}
            onChangeText={value => this.setState({email: value})}
          />
          <TextInput
            value={password}
            placeholder="enter password"
            secureTextEntry
            style={styles.input}
            onChangeText={value => this.setState({password: value})}
          />
          <View style={[styles.button]}>
            {RegisUser ? (
              <Button
                title="LogIn"
                onPress={() => this.props.initLogin(this.state)}
                color="darkslategrey"
              />
            ) : (
              <Button
                title="LogIn"
                onPress={() => alert('user not registered')}
                color="darkslategrey"
              />
            )}
          </View>
        </View>
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
  container: {
    alignItems: 'center',
  },
  main: {
    backfaceVisibility: 'visible',
    justifyContent: 'center',
    padding: 40,
    margin: 10,
    position: 'absolute',
  },
  input: {
    backgroundColor: 'lightgrey',
    marginVertical: 5,
    fontSize: 18,
  },
  text: {
    fontSize: 30,
    width: 350,
    height: 40,
    textAlign: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginBottom: 10,
    color: 'maroon',
  },
  button: {
    marginVertical: 15,
    borderWidth: 2,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    width: '100%',
  },
  profilePic: {
    height: 150,
    width: 150,
    marginVertical: 20,
    borderRadius: 100,
    alignContent: 'center',
    alignSelf: 'center',
  },
});
