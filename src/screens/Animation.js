import React, {Component} from 'react';
import {
  Animated,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import Header from '../components/header';

export class Animation extends Component {
  state = {
    animation: new Animated.Value(150),
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  render() {
    const animatedStytle = {
      //   height: this.state.animation,
      width: this.state.animation,
    };
    return (
      <>
        <Header navigation={this.props.navigation} />
        <ImageBackground
          source={require('../assets/images/background.png')}
          style={styles.image}>
          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[styles.animation, animatedStytle]}>
              <Text>animation </Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    height: 100,
    // width: 100,
    backgroundColor: 'white',
  },
});
