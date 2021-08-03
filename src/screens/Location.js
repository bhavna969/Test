import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ImageBackground} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {connect} from 'react-redux';
import {fetchLocation} from '../store/actions/LocationAction';
import {ACCESS_TOKEN} from '../store/sagas/LocationSaga';
import Header from '../components/header';

MapboxGL.setAccessToken(ACCESS_TOKEN);

class Location extends Component {
  state = {
    // longitude: -122.084,
    // latitude: 37.4219983,
    longitude: 0,
    latitude: 0,
  };
  getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        // console.log(position.coords);
        this.setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
        console.log(this.state);
        this.props.fetchLocation(this.state);
      },
      error => {
        // See error code charts below.
        console.log('error', error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  render() {
    const {location, navigation} = this.props;
    // console.log(location);
    return (
      <View style={[styles.main]}>
        <Header navigation={navigation} backButton={true} />
        <ImageBackground
          source={require('../assets/images/background.png')}
          style={styles.image}>
          <View style={[styles.container]}>
            <Button
              title="get location"
              onPress={() => this.getLocation()}
              color="teal"
            />
            <Text style={[styles.text]}>{location}</Text>

            <MapboxGL.MapView
              style={styles.map}
              logoEnabled={true}
              onUpdate={this.onUserLocationUpdate}>
              <MapboxGL.UserLocation
                animated={true}
                visible={true}
                showsUserHeadingIndicator={true}
              />
              <MapboxGL.Camera
                zoomLevel={19}
                followUserMode={'normal'}
                followUserLocation
                heading={20}
              />
            </MapboxGL.MapView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    location: state.LocationReducer.location,
  };
};
export default connect(mapStateToProps, {fetchLocation})(Location);

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
    alignItems: 'center',
    margin: 10,
    // borderWidth: 1,
    width: '95%',
    // padding: 10,
  },
  text: {
    fontSize: 18,
    color: 'navy',
    // borderWidth: 2,
    // borderRadius: 50,
    width: '90%',
    padding: 8,
    textAlign: 'center',
    alignSelf: 'center',
  },
  map: {
    borderWidth: 1,
    width: '90%',
    height: '70%',
    marginVertical: 20,
  },
});
