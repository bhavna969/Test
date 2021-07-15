import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {TOAST_TYPE} from '../utils/constants';
import {toasterHide} from '../store/actions/toastAction';

class Toaster extends Component {
  render() {
    const {message = '', type = '', showing} = this.props;
    if (!showing) {
      return null;
    }

    setTimeout(() => {
      this.props.toasterHide();
    }, 1000);

    let bgColor = '';

    switch (type) {
      case TOAST_TYPE.SUCCESS:
        bgColor = 'green';
        break;
      case TOAST_TYPE.ERROR:
        bgColor = 'red';
        break;
      default:
        bgColor = 'black';
        break;
    }

    return (
      <View style={[styles.main]}>
        <View style={[styles.main, {backgroundColor: bgColor}]}>
          <Text style={[styles.toastText]}> {message} </Text>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    message: state.toastReducer.message,
    type: state.toastReducer.type,
    showing: state.toastReducer.showing,
  };
};
export default connect(mapStateToProps, {toasterHide})(Toaster);

const styles = StyleSheet.create({
  main: {
    width: '100%',
    padding: 20,
    position: 'absolute',
    margin: 5,
    marginLeft: 5,
  },
  toastText: {
    color: 'white',
    fontSize: 18,
  },
});
