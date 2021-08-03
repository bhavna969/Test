import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';

import {initLogout} from '../store/actions/LogoutAction';
import {connect} from 'react-redux';

import Header from '../components/header';
import Button from '../components/button';
import {responsiveHeight, responsiveWidth} from '../utils/responsive';

class Settings extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={[styles.main]}>
        <Header navigation={navigation} backButton={true} />
        <ImageBackground
          source={require('../assets/images/background.png')}
          style={styles.image}>
          <Text style={[styles.text]}>Settings</Text>
          <View style={[styles.button]}>
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
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: responsiveWidth(6),
    height: responsiveHeight(8),
    textAlign: 'center',
    alignSelf: 'center',
  },
  button: {
    alignItems: 'center',
    height: responsiveHeight(7.5),
  },
});
