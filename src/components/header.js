import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import * as Colors from '../utils/colors';
import {DrawerActions} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;

class Header extends Component {
  render() {
    const {title = '', navigation, backButton = false} = this.props;
    // console.log('header', task);
    return (
      <SafeAreaView style={[styles.main]}>
        <View style={styles.header}>
          {backButton ? (
            <TouchableOpacity
              style={[styles.icon]}
              onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" color={Colors.white} size={30} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.icon]}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Icon name="view-headline" color={Colors.white} size={30} />
            </TouchableOpacity>
          )}
          <Text style={styles.title}>{title}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Header;

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
  header: {
    height: 50,
    backgroundColor: Colors.blue_Green_medium_5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '900',
    color: Colors.white,
  },
});
