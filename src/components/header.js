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
import {responsiveHeight, responsiveWidth} from '../utils/responsive';

const Icon = MaterialCommunityIcons;

class Header extends Component {
  render() {
    const {title = '', navigation, backButton = false} = this.props;
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
            <View style={[styles.box]}>
              <TouchableOpacity
                style={[styles.icon]}
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }>
                <Icon name="view-headline" color={Colors.white} size={30} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.icon, {alignItems: 'flex-end'}]}
                onPress={() => navigation.navigate('Notifications')}>
                <Icon name="bell" color={Colors.white} size={25} />
              </TouchableOpacity>
            </View>
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
    height: responsiveHeight(8),
    width: responsiveWidth(100),
    backgroundColor: Colors.blue_Green_medium_5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: responsiveWidth(50),
    paddingLeft: responsiveWidth(3),
    paddingRight: responsiveWidth(3),
  },
  header: {
    backgroundColor: Colors.blue_Green_medium_5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: responsiveWidth(6),
    fontWeight: '900',
    color: Colors.white,
    position: 'absolute',
    marginLeft: responsiveWidth(20),
  },
  box: {
    flexDirection: 'row',
  },
});
