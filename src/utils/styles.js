import {StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth} from './responsive';
import * as Colors from './colors';

export default StyleSheet.create({
  main: {
    flex: 1,
  },
  input: {
    height: responsiveHeight(6),
    backgroundColor: Colors.white,
    marginVertical: responsiveHeight(1),
    fontSize: responsiveHeight(2.5),
    marginLeft: responsiveWidth(5),
    borderRadius: responsiveWidth(10),
    marginRight: responsiveWidth(5),
    padding: responsiveWidth(2),
  },
});
