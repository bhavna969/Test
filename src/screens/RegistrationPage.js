import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import {
  initRegistration,
  unregister,
} from '../store/actions/RegistrationAction';
import Loader from '../components/loader';

import STYLES from '../utils/styles';

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
            <View style={[styles.main, {padding: 60, alignSelf: 'baseline'}]}>
              <Text style={[styles.text]}>User Registered!!</Text>
              <Button
                title="Unregister"
                onPress={() => unregister(this.state)}
                color="darkslategrey"
              />
              <View style={{marginVertical: 15}} />
              <Button
                title="Go to login page"
                onPress={() => this.props.navigation.navigate('LogIn')}
                color="darkslategrey"
              />
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
              style={styles.input}
              onChangeText={value => this.setState({firstName: value})}
            />
            <TextInput
              value={lastName}
              placeholder="Enter Last Name"
              style={styles.input}
              onChangeText={value => this.setState({lastName: value})}
            />
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
              <Button
                title="Register"
                onPress={() => initRegistration(this.state)}
                color="darkslategrey"
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
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    // borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  main: {
    width: 400,
    justifyContent: 'center',
    padding: 30,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: 'lightgrey',
    marginVertical: 5,
    fontSize: 18,
  },
  text: {
    fontSize: 20,
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
  },
});
