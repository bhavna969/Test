import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import * as Colors from '../utils/colors';
import {DrawerActions} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;

class Header extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={[styles.main]}>
        <TouchableOpacity
          style={[styles.icon]}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Icon name="view-headline" color={Colors.white} size={30} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
export default connect(null, null)(Header);

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    height: 50,
    width: '100%',
    backgroundColor: Colors.blue_Green_medium_5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    // borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
  },
});
