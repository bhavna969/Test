import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  Dimensions,
} from 'react-native';

const images = new Array();
images.push(
  'data:image/jpeg;base64,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',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9pes2OaVtTEgo7UJS7SLCzL2XQnRtmX6YoGWCGXrJE5RmGiV6NzxA9gFZ5EMkDwLHNqM&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWFvgCyhFaTfAvi5DFzOagjBZ3fE9a-Ls_g&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutbs0vxSpFhMDOUvskXNskRLsSRiy9WjxCg&usqp=CAU',
);

const window = Dimensions.get('window');

export default class Animations extends Component {
  scrollX = new Animated.Value(0);

  state = {
    dimensions: {
      window,
    },
  };

  // onDimensionsChange = ({window}) => {
  //   this.setState({dimensions: {window}});
  // };

  // componentDidMount() {
  //   Dimensions.addEventListener('change', this.onDimensionsChange);
  // }

  // componentWillUnmount() {
  //   Dimensions.removeEventListener('change', this.onDimensionsChange);
  // }

  render() {
    const windowWidth = this.state.dimensions.window.width;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            style={styles.scrollViewStyle}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: this.scrollX,
                    },
                  },
                },
              ],
              {useNativeDriver: false},
            )}
            scrollEventThrottle={1}>
            {images.map((image, imageIndex) => {
              return (
                <View
                  style={{
                    width: windowWidth,
                    height: 250,
                  }}
                  key={imageIndex}>
                  <ImageBackground source={{uri: image}} style={styles.card}>
                    {/* <View style={styles.textContainer}>
                      <Text style={styles.infoText}>
                        {'Image - ' + imageIndex}
                      </Text>
                    </View> */}
                  </ImageBackground>
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {images.map((image, imageIndex) => {
              const width = this.scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1),
                ],
                outputRange: [8, 16, 8],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, {width}]}
                />
              );
            })}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 300,
    // borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
