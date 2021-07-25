import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

import {initLogout} from '../store/actions/LogoutAction';
import {connect} from 'react-redux';

class Settings extends Component {
  render() {
    return (
      <View style={[styles.main]}>
        <ImageBackground
          source={require('../assets/images/background.png')}
          style={styles.image}>
          <View style={[styles.container]}>
            <Text style={[styles.text]}>Settings</Text>
            <Button
              title="LOGOUT"
              onPress={() => this.props.initLogout()}
              color="darkslategrey"
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default connect(null, {initLogout})(Settings);

const styles = StyleSheet.create({
  main: {
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
    margin: 10,
    width: '95%',
    padding: 30,
  },
  text: {
    fontSize: 18,
    height: 50,
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
});
