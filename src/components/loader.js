import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import STYLES from '../utils/styles';
import {connect} from 'react-redux';

class Loader extends Component {
  render() {
    const {storeLoading, loading, message} = this.props;
    if (!storeLoading && !loading) return null;
    return (
      <View style={[STYLES.main, styles.main]}>
        <Text style={{textAlign: 'center', marginVertical: 20}}>{message}</Text>
        <ActivityIndicator color="white" size="large" />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    storeLoading: state.loaderReducer.loading,
    message: state.loaderReducer.message,
    loading: state.LoginReducer.loading,
  };
};
export default connect(mapStateToProps, null)(Loader);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'lightgray',
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
