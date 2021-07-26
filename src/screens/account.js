import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import Header from '../components/header';
import {connect} from 'react-redux';

class account extends Component {
  render() {
    return (
      <View style={[styles.main]}>
        <Header navigation={this.props.navigation} />
        <ImageBackground
          source={require('../assets/images/background.png')}
          style={styles.image}>
          <View style={[styles.container]}>
            <Image
              source={require('../assets/images/user.png')}
              style={styles.profilePic}
            />
            <Text style={[styles.text, {fontSize: 25}]}>My Account</Text>
            <Text style={[styles.text, {backgroundColor: 'lightgrey'}]}>
              Name: Bhavna Chaudhary
            </Text>
            <Text style={[styles.text, {backgroundColor: 'lightgrey'}]}>
              Email: eve.holt@reqres.in
            </Text>
            <Text style={[styles.text, {backgroundColor: 'lightgrey'}]}>
              password: cityslicka
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default connect(null)(account);

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
  profilePic: {
    height: 150,
    width: 150,
    marginVertical: 10,
    borderRadius: 100,
    alignContent: 'center',
    alignSelf: 'center',
  },
});
