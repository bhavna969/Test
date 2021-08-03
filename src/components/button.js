import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../utils/responsive';
import * as Colors from '../utils/colors';

class Button extends Component {
  render() {
    const {title, onPress} = this.props;
    return (
      <TouchableOpacity style={[styles.main]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }
}
export default Button;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width: responsiveWidth(70),
    height: responsiveHeight(5),
    backgroundColor: Colors.grey_dark_3,
    // borderWidth: 1,
    borderRadius: responsiveWidth(50),
    marginVertical: responsiveHeight(1),
  },
  text: {
    // borderWidth: 1,
    textAlign: 'center',
    fontSize: responsiveHeight(2.8),
    color: Colors.white,
  },
});
